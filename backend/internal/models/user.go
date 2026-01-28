package models

import "time"

type User struct {
	ID             string        `json:"id" gorm:"primaryKey"`
	Name           string        `json:"name"`
	Email          string        `json:"email" gorm:"unique;not null"`
	HashedPassword string        `json:"-"`
	IsPremium      bool          `json:"isPremium" gorm:"default:false"`
	Phone          string        `json:"phone"`
	CreatedAt      time.Time     `json:"created_at"`
	UpdatedAt      time.Time     `json:"updated_at"`
	Applications   []Application `json:"applications" gorm:"foreignKey:UserID"`
}
