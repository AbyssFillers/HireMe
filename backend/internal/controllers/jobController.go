package controllers

import (
	"net/http"

	"github.com/AbyssFillers/HireMe.git/internal/models"
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type JobController struct {
	DB *gorm.DB
}

type JobBody struct {
	ID       string `json:"id"`
	Company  string `json:"company"`
	Role     string `json:"role"`
	CTC      string `json:"ctc"`
	IsActive bool   `json:"isActive"`
}

func (jc *JobController) GetJobs(c *gin.Context) {
	var jobs []models.Job

	if result := jc.DB.Find(&jobs); result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to fetch jobs",
		})
		return
	}

	var response []JobBody

	for _, job := range jobs {
		dto := JobBody{
			ID:       job.ID,
			Company:  job.CompanyName,
			Role:     job.Role,
			CTC:      job.CTC,
			IsActive: job.IsActive,
		}
		response = append(response, dto)
	}

	c.JSON(http.StatusOK, response)
}
