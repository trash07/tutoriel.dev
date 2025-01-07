FROM nginx:1.27-alpine-slim
COPY ./ /usr/share/nginx/html
EXPOSE 80 443
