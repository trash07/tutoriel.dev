FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./public .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]