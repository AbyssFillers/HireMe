package models

import (
	"time"

	"github.com/lib/pq"
)

type User struct {
	ID             string    `json:"id"`
	Name           string    `json:"name"`
	Email          string    `json:"email"`
	Phone          string    `json:"phone"`
	HashedPassword string    `json:"hashed_password"`
	IsPremium      bool      `json:"isPremium"`
	CreatedAt      time.Time `json:"created_at"`
	UpdatedAt      time.Time `json:"updated_at"`

	Applications []Application `json:"applications"`
	Profile      UserProfile   `json:"profile"`
}

type UserProfile struct {
	ID        uint           `json:"id" gorm:"primaryKey"`
	UserID    string         `json:"user_id" gorm:"unique;not null"`
	Bio       string         `json:"bio"`
	ResumeURL string         `json:"resume_url"`
	Skills    pq.StringArray `json:"skills" gorm:"type:text[]"`
}
