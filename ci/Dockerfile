FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./public .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]