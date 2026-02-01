package controllers

import (
	"net/http"
	"time"

	"github.com/AbyssFillers/HireMe.git/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type ApplicationController struct {
	DB *gorm.DB
}

type ApplyRequest struct {
	JobID string `json:"job_id" binding:"required"`
}

type ApplicationResponse struct {
	ID          string    `json:"id"`
	Status      string    `json:"status"`
	AppliedAt   time.Time `json:"applied_at"`
	JobID       string    `json:"job_id"`
	JobRole     string    `json:"job_role"`
	CompanyName string    `json:"company_name"`
	JobDomain   string    `json:"job_domain"`
}

// POST => /api/applications
func (ac *ApplicationController) ApplyJob(c *gin.Context) {
	userID, err := c.Get("userID")

	if !err {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	var req ApplyRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var job models.Job
	if err := ac.DB.First(&job, "id = ?", req.JobID).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Job not found"})
		return
	}

	// Determine Status
	// If it's a native job, status is "applied".
	// If it's an external link, we mark it "redirected" (or "interested") so the user knows they visited it.
	initialStatus := "applied"
	if job.SourceURL != "" {
		initialStatus = "redirected"
	}

	// 5. Create Application Record
	application := models.Application{
		UserID: userID.(string), // Type assertion
		JobID:  req.JobID,
		Status: initialStatus,
	}

	if err := ac.DB.Create(&application).Error; err != nil {
		c.JSON(http.StatusConflict, gin.H{"error": "You have already applied/tracked this job"})
		return
	}

	c.JSON(http.StatusCreated, gin.H{
		"message": "Application successful",
		"status":  initialStatus,
	})
}


// GET => /api/applications
func (ac *ApplicationController) GetMyApplications(c *gin.Context) {
	userID, _ := c.Get("userID")
	var apps []models.Application

	if err := ac.DB.Preload("Job").Where("user_id = ?", userID).Find(&apps).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to fetch applications"})
		return
	}

	var response []ApplicationResponse
	for _, app := range apps {
		response = append(response, ApplicationResponse{
			ID:          app.ID,
			Status:      app.Status,
			AppliedAt:   app.AppliedAt,
			JobID:       app.Job.ID,
			JobRole:     app.Job.Role,
			CompanyName: app.Job.CompanyName,
			JobDomain:   app.Job.Domain,
		})
	}

	c.JSON(http.StatusOK, response)
}
