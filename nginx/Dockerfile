FROM nginx:1.27.2-alpine-slim

COPY ./ /usr/share/nginx/html/_site/
COPY ./default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443
