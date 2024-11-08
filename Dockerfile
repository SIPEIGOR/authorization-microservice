FROM node:19-alpine

WORKDIR /app

COPY . .

RUN npm install @nestjs/cli

RUN npm install

RUN npm run build

COPY .env /app/dist

WORKDIR /app/dist

EXPOSE 4000

CMD ["node", "main.js"]
