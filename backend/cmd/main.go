package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/AbyssFillers/HireMe.git/internal/controllers"
	"github.com/AbyssFillers/HireMe.git/internal/db"
	"github.com/AbyssFillers/HireMe.git/internal/middleware"
	"github.com/AbyssFillers/HireMe.git/internal/worker"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	sqlDB := db.InitDB()
	temp, err := sqlDB.DB()
	if err != nil {
		log.Fatal("Failed to get underlying DB:", err)
	}

	authController := controllers.AuthController{DB: sqlDB}
	userController := controllers.UserController{DB: sqlDB}
	applicationController := controllers.ApplicationController{DB: sqlDB}

	defer func() {
		if err := temp.Close(); err != nil {
			log.Printf("Error closing DB: %v", err)
		} else {
			log.Println("Database connection closed")
		}
	}()

	router.GET("/health", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "healthy",
		})
	})

	authGroup := router.Group("/auth")
	{
		authGroup.POST("/signup", authController.SignUp)
		authGroup.POST("/signin", authController.SignIn)
	}

	protectedGroup := router.Group("/api")
	protectedGroup.Use(middleware.AuthMiddleware())
	{
		protectedGroup.GET("/user/me", userController.GetProfile)
		protectedGroup.PUT("/user/profile", userController.UpdateProfile)
		protectedGroup.POST("/applications", applicationController.ApplyJob)
		protectedGroup.GET("/applications", applicationController.GetMyApplications)
	}

	// --- INITIALIZE WORKER ---
	worker := worker.JobWorker{DB: sqlDB}
	worker.StartScheduler()
	// -------------------------

	// Graceful Shutdown
	srv := http.Server{
		Addr:    ":8000",
		Handler: router,
	}

	go func() {
		if err := srv.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("listening: %s\n", err)
		}
	}()

	quit := make(chan os.Signal, 1)

	signal.Notify(quit, syscall.SIGINT, syscall.SIGTERM)
	<-quit
	log.Println("Shutting down server...")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Printf("Server forced to shutdown: %v\n", err)
	}

	log.Println("Server exiting")
}
