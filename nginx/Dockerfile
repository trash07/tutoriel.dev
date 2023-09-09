FROM nginx:1.24.0-alpine-slim

COPY ./ /usr/share/nginx/html/_site/
RUN cat "server { location / { root /usr/share/nginx/html/_site/; index index.html } }" > /etc/nginx/conf.d/default.conf && rm -f /usr/share/nginx/html/_site/Dockerfile

EXPOSE 80 443