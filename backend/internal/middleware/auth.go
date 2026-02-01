package middleware

import (
	"net/http"
	"strings"

	"github.com/AbyssFillers/HireMe.git/internal/utils"
	"github.com/gin-gonic/gin"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// 1. Get the Authorization Header
		authHeader := c.GetHeader("Authorization")
		if authHeader == "" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Authorization header is required"})
			return
		}

		// 2. Check format (Should be "Bearer <token>")
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Authorization header format must be Bearer {token}"})
			return
		}

		userID, err := utils.ValidateToken(parts[1])
		if err != nil {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{"error": "Invalid or expired token"})
			return
		}

		c.Set("userID", userID)

		c.Next()
	}
}
