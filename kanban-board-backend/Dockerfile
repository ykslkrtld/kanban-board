# Backend için Node.js resmi imajını kullanıyoruz
FROM node:18

# Çalışma dizini oluştur
WORKDIR /usr/src/app

# package.json ve package-lock.json dosyalarını kopyala
COPY ./kanban-board-backend/package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Tüm dosyaları kopyala
COPY ./kanban-board-backend ./

# Uygulamayı başlat
CMD ["npm", "run", "dev"]

# Portu aç
EXPOSE 8000
