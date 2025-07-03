#!/bin/bash

echo "🚀 SkinCare Hub Veritabanı Kurulumu Başlıyor..."

# Prisma client generate et
echo "📦 Prisma Client oluşturuluyor..."
npx prisma generate

# Veritabanını oluştur ve şemayı uygula
echo "🗄️ Veritabanı oluşturuluyor..."
npx prisma db push

# Seed verilerini ekle
echo "🌱 Örnek veriler ekleniyor..."
npm run db:seed

echo "✅ Veritabanı kurulumu tamamlandı!"
echo "🎯 Prisma Studio'yu açmak için: npm run db:studio"
