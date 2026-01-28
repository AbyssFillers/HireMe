package main

import (
	"net/http"

	"github.com/AbyssFillers/HireMe.git/internal/db"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	 db.InitDB()

	router.GET("/health", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "healthy",
		})
	})

	router.POST("/signup")
}
