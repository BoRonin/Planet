package mail

type Mail struct {
	Port     string
	From     string
	To       []string
	Password string
	Host     string
}

func NewMail(po string, ef string, pw string, host string, to []string) *Mail {
	return &Mail{
		Port:     po,
		From:     ef,
		Password: pw,
		Host:     host,
		To:       to,
	}
}
