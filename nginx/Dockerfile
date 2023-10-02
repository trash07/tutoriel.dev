FROM nginx:1.24.0-alpine-slim

COPY ./ /usr/share/nginx/html/_site/
COPY ./default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["tail", "-f", "/dev/null"]

EXPOSE 80 443
