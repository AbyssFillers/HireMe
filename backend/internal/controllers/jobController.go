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

type ResBody struct {
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

	var response []ResBody

	for _, job := range jobs {
		dto := ResBody{
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

func (jc *JobController) GetJobById(c *gin.Context) {
	var job models.Job
	id := c.Param("id")

	if err := jc.DB.First(&job, "id=?", id); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "Failed to fetch job",
		})
		return
	}

	response := ResBody{
		ID:       job.ID,
		Company:  job.CompanyName,
		Role:     job.Role,
		CTC:      job.CTC,
		IsActive: job.IsActive,
	}

	c.JSON(http.StatusOK, response)
}

// TODO: Give recommended jobs based on the user's profile
func (jc *JobController) GetJobRecommendations(c *gin.Context) {
	c.JSON(http.StatusOK, gin.H{
		"message": "Feature coming soon...",
	})
}
