package transport

import (
	"context"
	"fmt"
	"io"
	"log"
	"net/smtp"
	"net/textproto"
	"os"
	"planet-api-service/internal/entity"
	"planet-api-service/pkg/mail"

	"github.com/jordan-wright/email"
)

type pechkin struct {
	Mail mail.Mail
}

func NewPechkin(m mail.Mail) *pechkin {
	return &pechkin{
		Mail: m,
	}
}

func (p *pechkin) SendMail(ctx context.Context, mail entity.MessageToMail, reader io.Reader, fn string) error {
	from := os.Getenv("EMAILFROM")
	e := email.Email{
		From:    fmt.Sprintf("Планета приключений <%s>", from),
		Subject: "Заявка на сайте: " + mail.Name,
		To:      p.Mail.To,
		HTML: []byte(fmt.Sprintf(`
		<div> 
		<h3>Новое сообщение: </h3>
		<ul>
			<li>Имя: %s</li>
			<li>Почта: %s</li>
			<li>Телефон: %s</li>
			<li>Комментарий: %s</li>
		</ul>
		</div>
		`, mail.Name, mail.Email, mail.Phone, mail.Commentary)),
		Headers: textproto.MIMEHeader{},
	}
	if reader != nil {
		_, err := e.Attach(reader, fn, "")
		if err != nil {
			fmt.Println(err.Error())
		}
	}
	if err := e.Send(fmt.Sprintf("%s:%s", p.Mail.Host, p.Mail.Port), smtp.PlainAuth("", p.Mail.From, p.Mail.Password, p.Mail.Host)); err != nil {
		log.Println(err)
		return err
	}
	return nil
}
