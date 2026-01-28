package models

import "time"

type Application struct {
	ID        string    `json:"id" gorm:"primaryKey"`
	UserID    string    `json:"user_id" gorm:"not null;index"`
	JobID     string    `json:"job_id" gorm:"not null; index"`
	Status    string    `json:"status" gorm:"default:'applied'"`
	AppliedAt time.Time `json:"applied_at" gorm:"autoCreateTime"`

	User User `json:"user" gorm:"constraint: OnUpdate: CASCADE, OnDelete: CASCADE;"`
	Job  Job  `json:"job" gorm:"constraint: OnUpdate: CASCADE, OnDelete: CASCADE;"`
}
