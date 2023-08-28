package config

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"planet-api-service/internal/entity"
)

func (app *AppConfig) SendMail(w http.ResponseWriter, r *http.Request) {
	r.ParseMultipartForm(10 << 20)
	fmt.Println(r.MultipartForm)
	fmt.Println()
	fileExists := false
	fileName := ""
	for _, headers := range r.MultipartForm.File {
		for _, header := range headers {
			if header.Filename != "" {
				fileName = header.Filename
				fileExists = true
				break
			}
		}
		if fileExists {
			break
		}
	}
	mail := entity.MessageToMail{
		Name:       r.FormValue("name"),
		Phone:      r.FormValue("phone"),
		Email:      r.FormValue("email"),
		Commentary: r.FormValue("commentary"),
	}
	if fileExists {
		fmt.Println("We got the file: ", fileName)
		file, header, err := r.FormFile("file")
		if err != nil {
			fmt.Println("error getting a file")
			fmt.Println(err)
		}

		if err := app.MS.SendMail(context.Background(), mail, file, header.Filename); err != nil {
			w.Header().Set("Content-Type", "application/json")
			message, _ := json.Marshal(fmt.Errorf("can't send mail: %w", err))
			w.Write(message)
			return
		}
	} else {

		if err := app.MS.SendMail(context.Background(), mail, nil, ""); err != nil {
			w.Header().Set("Content-Type", "application/json")
			message, _ := json.Marshal(fmt.Errorf("can't send mail: %w", err))
			w.Write(message)
			return
		}
		fmt.Println("We got nothing")
	}
	fmt.Println("We got this")

	// if err != nil {
	// 	fmt.Println("error retrieving file from form")
	// 	fmt.Println(err)
	// }
	// defer file.Close()
	// fmt.Printf("Uploaded file: %+v/n", handler.Filename)
	// fmt.Printf("File size: %+v/n", handler.Size)
	// fmt.Printf("File headers: %+v/n", handler.Header)

	w.Header().Set("Content-Type", "application/json")
	message, _ := json.Marshal("All good")
	w.Write(message)
}
