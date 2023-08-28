package entity

type MessageToMail struct {
	Name       string `json:"name,omitempty"`
	Phone      string `json:"phone,omitempty"`
	Email      string `json:"email,omitempty"`
	Commentary string `json:"commentary,omitempty"`
}
