FROM node:20.10.0-alpine3.10

WORKDIR /app

COPY package.json /app

COPY ..

EXPOSE 3000

CMD ["npm", "start"]