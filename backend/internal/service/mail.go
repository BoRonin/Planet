package service

import (
	"context"
	"io"
	"planet-api-service/internal/entity"
)

type Mailer interface {
	SendMail(context.Context, entity.MessageToMail, io.Reader, string) error
}
type MailService struct {
	mailer Mailer
}

func NewMailer(m Mailer) *MailService {
	return &MailService{
		mailer: m,
	}
}

func (m *MailService) SendMail(ctx context.Context, message entity.MessageToMail, reader io.Reader, filename string) error {
	return m.mailer.SendMail(ctx, message, reader, filename)
}
