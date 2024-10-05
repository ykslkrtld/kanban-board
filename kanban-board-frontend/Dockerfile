# Frontend için Node.js resmi imajını kullanıyoruz
FROM node:18 AS builder

# Çalışma dizini oluştur
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY ./kanban-board-frontend/package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY ./kanban-board-frontend ./

# Uygulamayı derle
RUN npm run build

# Nginx kullanarak uygulamayı dağıt
FROM nginx:alpine

# Nginx yapılandırma dosyasını kopyala
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Portu aç
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
