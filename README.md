## Kanban Board Uygulaması

Bu proje, bir Kanban board uygulaması olarak tasarlanmıştır. Kullanıcılar görevleri ekleyebilir, güncelleyebilir ve silebilir. Proje, Node.js + Express ile backend ve React + Vite ile frontend olarak geliştirilmiştir.
# İçindekiler
1- Proje Yapısı
2- Kullanılan Teknolojiler
3- Özellikler
4- Kurulum Talimatları
5- Frontend UI Detayları
6- Varsayımlar ve Alınan Kararlar
7- Docker ile Çalıştırma

# 1- Proje Yapısı
* Frontend: React + TypeScript (Vite ile).
* Backend: Node.js + Express + TypeScript (MongoDB ile).

kanban-board/
│
├── kanban-board-backend/
│   ├── src/
│   │   ├── configs/
│   │   |   └── dbConnection.ts
|   ├── ├── controllers/
│   │   |   └── kanbanBoard.ts
|   |── ├── middlewares/
│   │   |   └── errorHandler.ts
│   │── ├── models/
│   │   |   └── kanbanBoard.ts
│   │── ├── routes/
│   │   |   └── kanbanBoard.ts
│   ├── server.ts
│   ├── package.json
│   └── tsconfig.json
│
├── kanban-board-frontend/
│   ├── public/
|   |   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   |   └── react.svg
│   │   ├── components/
│   │   |   ├── AddTodo.tsx
│   │   |   ├── Column.tsx
│   │   |   └── Task.tsx
│   │   ├── hooks/
│   │   |   └── useTodoCalls.tsx
│   │   ├── pages/
│   │   |   └── Home.tsx
│   │   └── App.css
│   │   └── App.tsx
│   │   └── index.css
│   │   └── main.tsx
│   ├── types/
|   |   └── index.d.ts
│   ├── index.html
│   ├── package.json
│   └── tsconfig.json
│
└── README.md


# 2- Kullanılan Teknolojiler
Frontend:
* React ile kullanıcı arayüzü oluşturuldu.
* TypeScript ile statik tip kontrolü sağlandı.
* React DnD ile sürükle-bırak özelliği eklendi.
* TailwindCSS ile kullanıcı arayüzü şekillendirildi.
* Vite ile geliştirme ve paketleme işlemleri yapıldı.

Backend:
* Node.js ile sunucu oluşturuldu.
* Express ile rotalar ve API'ler yönetildi.
* TypeScript ile sunucu tarafında tip güvenliği sağlandı.
* MongoDB ile görevler kalıcı olarak saklanmaktadır.
* Mongoose ile MongoDB veritabanı modellemesi yapılmıştır.

# 3- Özellikler
Görev Yönetimi:
* Görev Ekleme: Kullanıcılar "Yapılacaklar" sütununa yeni görevler ekleyebilir.
* Görev Düzenleme: Görevlerin başlıkları ve açıklamaları güncellenebilir.
* Görev Silme: Herhangi bir sütundaki görevler silinebilir.
* Sürükle ve Bırak: Görevler "Yapılacaklar", "Devam Ediyor" ve "Tamamlandı" sütunları arasında taşınabilir.

Duyarlı Tasarım:
* TailwindCSS ile oluşturulmuş olup, uygulama farklı ekran boyutlarında duyarlı çalışır.

# 4- Kurulum Talimatları
Gereksinimler:
Sistemde aşağıdaki programların kurulu olduğundan emin olun:
* Node.js (v18 veya üzeri)
* npm (v9 veya üzeri)
* MongoDB (MongoDB'yi yerel olarak veya bulut üzerinde çalıştırabilirsiniz)

Projeyi Klonlayın:
git clone https://github.com/kullanici-adi/kanban-board.git
cd kanban-board

# Bağımlılıkları Kurun:
* Backend:
cd kanban-board-backend
npm install

* MongoDB Bağlantısı:
Backend'in doğru çalışabilmesi için .env dosyasında MongoDB bağlantı URI'sini belirtmeniz gerekiyor. Aşağıdaki örneği kullanabilirsiniz:
MONGODB=mongodb+srv://yukselkurtuldu9:dQWrkWMQZUnElZuf@cluster0.owtbac0.mongodb.net/kanbanBoard

* Frontend:
cd kanban-board-frontend
npm install

# Uygulamayı Çalıştırma:
* Backend:
cd kanban-board-backend
npm run dev

Backend http://localhost:8000 üzerinde çalışacaktır.

* Frontend:
cd kanban-board-frontend
npm run dev

Frontend http://localhost:5173 adresinde çalışacaktır.

# 5- Frontend UI Detayları
Kanban Panosu:
* Pano, Yapılacaklar, Devam Ediyor ve Tamamlandı olmak üzere üç sütundan oluşur.
* React DnD kütüphanesi sayesinde görevler sütunlar arasında sürüklenebilir.
* Her görev bir başlık ve açıklama içerir.

Görev Ekleme/Düzenleme:
* Kullanıcılar, "Yapılacaklar" sütununa yeni görevler ekleyebilir.
* Bir göreve tıklayarak başlık ve açıklamanın düzenlenebileceği bir modal açılır.

Görev Silme:
* Görevler, her görev kartında bulunan silme düğmesi ile silinebilir.

# 6- Varsayımlar ve Alınan Kararlar
* MongoDB Kullanımı: Görevlerin kalıcı olarak saklanabilmesi için MongoDB kullanılmıştır.
* Frontend Durumu: React'ın yerleşik durum yönetimi kullanılmıştır. Durum karmaşık olmadığı için harici bir kütüphane gerekmemiştir.
* Sürükle ve Bırak: React DnD kütüphanesi, sürükle-bırak işlevselliği için kullanılmıştır.

# 7- Docker ile Çalıştırma
Bu projeyi Docker kullanarak kolayca çalıştırabilirsiniz. Aşağıda, Docker ile uygulamanızı başlatmak için gerekli adımlar verilmiştir:

Gereksinimler
Docker ve Docker Compose sisteminizde kurulu olmalıdır.

Projeyi Klonlayın
git clone https://github.com/kullanici-adi/kanban-board.git
cd kanban-board

Docker Kullanarak Uygulamayı Başlatma
1. Docker Compose ile Projeyi Çalıştırın:

Proje kök dizininde aşağıdaki komutu çalıştırarak Docker Compose ile uygulamayı başlatın:
docker-compose up --build

2. Uygulamaya Erişim:

Backend: http://localhost:8000
Frontend: http://localhost:5173