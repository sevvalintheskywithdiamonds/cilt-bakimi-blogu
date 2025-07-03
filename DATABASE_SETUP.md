# 🗄️ SkinCare Hub - Veritabanı Kurulum Rehberi

## 📋 Gereksinimler
- Node.js 18+
- npm veya yarn
- SQLite (otomatik kurulur)

## 🚀 Kurulum Adımları

### 1. Bağımlılıkları Yükle
\`\`\`bash
npm install
\`\`\`

### 2. Environment Dosyasını Kontrol Et
`.env.local` dosyasında DATABASE_URL'in doğru olduğundan emin ol:
\`\`\`
DATABASE_URL="file:./dev.db"
\`\`\`

### 3. Prisma Client Oluştur
\`\`\`bash
npx prisma generate
\`\`\`

### 4. Veritabanını Oluştur
\`\`\`bash
npx prisma db push
\`\`\`

### 5. Örnek Verileri Ekle
\`\`\`bash
npm run db:seed
\`\`\`

### 6. Veritabanını Görüntüle (Opsiyonel)
\`\`\`bash
npm run db:studio
\`\`\`

## 🧪 Test Et

### API Endpoint'lerini Test Et:
- http://localhost:3000/api/test-db
- http://localhost:3000/api/posts
- http://localhost:3000/api/categories

### Demo Hesapları:
- **Admin:** admin@skincare.com / admin123
- **Kullanıcı:** user@skincare.com / user123

## 📊 Veritabanı Şeması

### Tablolar:
- **users** - Kullanıcı bilgileri
- **categories** - Blog kategorileri
- **posts** - Blog makaleleri
- **comments** - Makale yorumları
- **messages** - Kullanıcı mesajları

### İlişkiler:
- User → Posts (1:N)
- User → Comments (1:N)
- Category → Posts (1:N)
- Post → Comments (1:N)
- User → Messages (N:N)

## 🔧 Sorun Giderme

### Veritabanı Sıfırlama:
\`\`\`bash
rm prisma/dev.db
npx prisma db push
npm run db:seed
\`\`\`

### Prisma Studio Açılmıyorsa:
\`\`\`bash
npx prisma studio --port 5556
\`\`\`

### Migration Sorunları:
\`\`\`bash
npx prisma db push --force-reset
\`\`\`

## 📝 Notlar
- SQLite dosyası `prisma/dev.db` konumunda oluşturulur
- Seed verileri `prisma/seed.js` dosyasında tanımlı
- Production'da PostgreSQL kullanılması önerilir
