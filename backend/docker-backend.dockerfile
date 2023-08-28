FROM golang:1.19-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

CMD ["go", "run", "cmd/server/main.go"]
