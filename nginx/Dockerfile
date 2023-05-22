FROM nginx:1.24.0-alpine-slim

COPY *.conf /etc/nginx/conf.d/
COPY ./public_html/ /usr/share/nginx/html/_site/

EXPOSE 80 443