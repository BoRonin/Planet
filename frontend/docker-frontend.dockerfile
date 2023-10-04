FROM node:18-alpine

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install --include=dev
RUN npm i sharp
RUN npx next build

CMD ["npx", "next", "start"]



