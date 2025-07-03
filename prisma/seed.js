const { PrismaClient } = require("@prisma/client")
const bcrypt = require("bcryptjs")

const prisma = new PrismaClient()

async function main() {
  // Admin kullanıcısı oluştur
  const hashedPassword = await bcrypt.hash("admin123", 12)

  const admin = await prisma.user.create({
    data: {
      email: "admin@skincare.com",
      name: "Admin User",
      password: hashedPassword,
      role: "admin",
      bio: "SkinCare Hub yöneticisi",
    },
  })

  // Normal kullanıcı oluştur
  const userPassword = await bcrypt.hash("user123", 12)
  const user = await prisma.user.create({
    data: {
      email: "user@skincare.com",
      name: "Ayşe Demir",
      password: userPassword,
      role: "user",
      bio: "Cilt bakımı tutkunu",
    },
  })

  // Kategoriler oluştur
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Temizlik",
        description: "Yüz temizleme rutinleri ve ürünleri",
        color: "#10B981",
      },
    }),
    prisma.category.create({
      data: {
        name: "Nemlendirme",
        description: "Cilt tipine göre nemlendirici önerileri",
        color: "#3B82F6",
      },
    }),
    prisma.category.create({
      data: {
        name: "Güneş Koruma",
        description: "SPF ve güneş koruma yöntemleri",
        color: "#F59E0B",
      },
    }),
    prisma.category.create({
      data: {
        name: "Doğal Bakım",
        description: "Ev yapımı maskeler ve doğal çözümler",
        color: "#8B5CF6",
      },
    }),
    prisma.category.create({
      data: {
        name: "Aktif İçerikler",
        description: "Retinol, AHA, BHA kullanımı",
        color: "#EF4444",
      },
    }),
  ])

  // Örnek blog yazıları oluştur
  await prisma.post.create({
    data: {
      title: "Yağlı Ciltler İçin 5 Adımlık Bakım Rutini",
      content: `Yağlı cilt tipine sahip olanlar için etkili bir bakım rutini oluşturmak oldukça önemlidir. İşte adım adım rehber:

## 1. Nazik Temizlik
Yağlı ciltler için özel olarak formüle edilmiş, yağ dengesini bozmayan temizleyiciler kullanın.

## 2. Tonik Kullanımı
Gözenekleri sıkılaştıran ve fazla yağı kontrol eden bir tonik tercih edin.

## 3. Serum Uygulaması
Niacinamide içeren serumlar yağlı ciltler için idealdir.

## 4. Nemlendirici
Yağlı ciltler de nemlendirici ihtiyacı duyar. Jel formülü nemlendiriciler tercih edin.

## 5. Güneş Koruma
Gündüz rutininizi mutlaka SPF ile tamamlayın.`,
      excerpt: "Yağlı cilt tipine sahip olanlar için etkili 5 adımlık bakım rutini rehberi.",
      slug: "yagli-ciltler-icin-bakim-rutini",
      published: true,
      featured: true,
      authorId: admin.id,
      categoryId: categories[0].id,
    },
  })

  await prisma.post.create({
    data: {
      title: "Retinol Kullanımında Dikkat Edilmesi Gerekenler",
      content: `Retinol, cilt bakımında en etkili aktif bileşenlerden biridir. Ancak doğru kullanım çok önemlidir:

## Başlangıç Dozu
Düşük konsantrasyonla başlayın ve cildiniziş alışmasını bekleyin.

## Uygulama Zamanı
Retinol'ü mutlaka gece kullanın, gündüz güneş koruma faktörü kullanmayı unutmayın.

## Yan Etkiler
İlk kullanımlarda hafif tahriş normal olabilir. Ancak şiddetli yanma varsa kullanımı bırakın.`,
      excerpt: "Retinol kullanımında dikkat edilmesi gereken önemli noktalar.",
      slug: "retinol-kullanimi-rehberi",
      published: true,
      authorId: admin.id,
      categoryId: categories[4].id,
    },
  })

  console.log("Seed data created successfully!")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
