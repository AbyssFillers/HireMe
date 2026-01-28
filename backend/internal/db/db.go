package db

import (
	"log"
	"os"
	"github.com/AbyssFillers/HireMe.git/internal/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitDB() *gorm.DB {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	dsn := os.Getenv("DSN")

	db, err := gorm.Open(postgres.New(postgres.Config{
		DSN: dsn,
		PreferSimpleProtocol: true,
	}), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	db.AutoMigrate(&models.User{},
		&models.Job{},
		&models.Application{})

	if err != nil {
		log.Fatal("Migration failed:", err)
	}

	log.Println("Database migrated successfully!")
	return db
}
