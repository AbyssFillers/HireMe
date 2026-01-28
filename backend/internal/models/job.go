package models

import "time"

type Job struct{
	ID string `json:"id" gorm:"primaryKey"`
	CompanyName string `json:"company_name"`
	Role string `json:"role"`
	CTC string `json:"ctc"`
	Stipend string `json:"stipend"`
	Domain string `json:"domain"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}