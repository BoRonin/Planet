package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"planet-api-service/config"
	"planet-api-service/internal/service"
	"planet-api-service/internal/transport"
	"planet-api-service/pkg/mail"
)

const webPort = "3002"

func main() {

	mailFrom := os.Getenv("EMAILFROM")
	mailTo := os.Getenv("EMAILTO")
	apppass := os.Getenv("APPPASS")
	MailConf := mail.NewMail("587", mailFrom, apppass, "smtp.yandex.ru", []string{mailTo})
	pechkin := transport.NewPechkin(*MailConf)

	ms := service.NewMailer(pechkin)
	app := config.AppConfig{
		MS: ms,
	}

	srv := &http.Server{
		Addr:    fmt.Sprintf(":%s", webPort),
		Handler: app.Routes(),
	}

	if err := srv.ListenAndServe(); err != nil {
		log.Panic(err)
	}
}
