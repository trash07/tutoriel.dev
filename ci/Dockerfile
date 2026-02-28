FROM node:22-alpine
COPY ./public /app
WORKDIR /app
EXPOSE 9000
RUN npm install -g gatsby-cli
ENTRYPOINT ["gatsby", "serve", "."]