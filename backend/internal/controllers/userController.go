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


