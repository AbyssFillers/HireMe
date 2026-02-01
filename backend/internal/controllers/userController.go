package controllers

import (
	"net/http"

	"github.com/AbyssFillers/HireMe.git/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type UserController struct {
	DB *gorm.DB
}

type UserResponse struct {
	Name      string   `json:"name"`
	Email     string   `json:"email"`
	IsPremium bool     `json:"isPremium"` // frontend handles for change in color around the user profile
	Phone     string   `json:"phone"`
	Resume    string   `json:"resume"`
	Skills    []string `json:"skills"`
	Bio       string   `json:"bio"`
}

// GET => /users/me
func (uc *UserController) GetProfile(c *gin.Context) {
	userID, exists := c.Get("userID")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}
	var user models.User

	if err := uc.DB.Preload("Profile").First(&user, "id = ?", userID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	response := UserResponse{
		Name:      user.Name,
		Email:     user.Email,
		Phone:     user.Phone,
		IsPremium: user.IsPremium,
		// Access fields from the nested Profile struct
		Bio:    user.Profile.Bio,
		Skills: user.Profile.Skills,
		Resume: user.Profile.ResumeURL,
	}

	c.JSON(http.StatusOK, response)
}

// PUT => /api/user/profile
func (uc *UserController) UpdateProfile(c *gin.Context) {
	var reqBody struct {
		Name   string   `json:"name"`
		Phone  string   `json:"phone"`
		Bio    string   `json:"bio"`
		Skills []string `json:"skills"`
	}

	if err := c.ShouldBindJSON(&reqBody); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid request body"})
		return
	}

	userID, exists := c.Get("userID")

	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	// Tx Started
	tx := uc.DB.Begin()

	if err := tx.Model(&models.User{}).Where("id=?", userID).Updates(models.User{
		Name:  reqBody.Name,
		Phone: reqBody.Phone,
	}).Error; err != nil {
		tx.Rollback()
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update user info"})
		return
	}

	var profile models.UserProfile

	if err := tx.Where("user_id = ?", userID).First(&profile).Error; err != nil {
		if err != gorm.ErrRecordNotFound {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Database error"})
			return
		}

		newProfile := models.UserProfile{
			UserID: userID.(string),
			Bio:    reqBody.Bio,
			Skills: reqBody.Skills,
		}
		if err := tx.Create(&newProfile).Error; err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create profile"})
			return
		}
	} else {
		if err := tx.Model(&profile).Updates(models.UserProfile{
			Bio:    reqBody.Bio,
			Skills: reqBody.Skills,
		}).Error; err != nil {
			tx.Rollback()
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update profile"})
			return
		}
	}

	// Tx Commited
	tx.Commit()

	c.JSON(http.StatusOK, gin.H{
		"message": "Profile updated successfully",
	})
}
