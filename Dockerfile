FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build-prod

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
# nginx сам подставит переменные окружения в шаблон при запуске
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
EXPOSE 80
