import Link from "next/link"
import { notFound } from "next/navigation"


const blogPosts = [
  {
    id: 1,
    slug: "yagli-ciltler-icin-bakim-rutini",
    title: "Yağlı Ciltler İçin 5 Adımlık Bakım Rutini",
    content: `
# Yağlı Ciltler İçin 5 Adımlık Bakım Rutini

Yağlı cilt tipine sahip olanlar için etkili bir bakım rutini oluşturmak oldukça önemlidir. İşte adım adım rehber:

## 1. Nazik Temizlik
Yağlı ciltler için özel olarak formüle edilmiş, yağ dengesini bozmayan temizleyiciler kullanın. Günde 2 kez, sabah ve akşam yüzünüzü temizleyin.

**Önerilen Ürünler:**
- Jel bazlı temizleyiciler
- Salisilik asit içeren temizleyiciler
- Köpük formülü temizleyiciler

## 2. Tonik Kullanımı
Gözenekleri sıkılaştıran ve fazla yağı kontrol eden bir tonik tercih edin. Alkol içermeyen formülleri seçin.

**İpuçları:**
- Pamuk ped ile nazikçe uygulayın
- Günde 1-2 kez kullanın
- BHA içeren tonikler tercih edin

## 3. Serum Uygulaması
Niacinamide içeren serumlar yağlı ciltler için idealdir. Gözenek görünümünü azaltır ve yağ üretimini dengeler.

## 4. Nemlendirici
Yağlı ciltler de nemlendirici ihtiyacı duyar. Jel formülü nemlendiriciler tercih edin.

**Önemli Notlar:**
- Su bazlı formüller seçin
- Non-komedojenik ürünler kullanın
- Hafif dokulu nemlendiriciler tercih edin

## 5. Güneş Koruma
Gündüz rutininizi mutlaka SPF ile tamamlayın. Yağlı ciltler için özel formüle edilmiş güneş koruyucular kullanın.

## Sonuç
Bu rutini düzenli olarak uygulayarak yağlı cildinizin dengesini koruyabilir ve sağlıklı bir görünüm elde edebilirsiniz.
    `,
    excerpt: "Yağlı cilt tipine sahip olanlar için etkili 5 adımlık bakım rutini rehberi.",
    category: "Temizlik",
    categoryColor: "bg-green-500",
    author: "Dr. Şevval Erduğan",
    date: "15 Aralık 2024",
    readTime: "5 dk",
    image: "/uploads/cilt.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "retinol-kullanimi-rehberi",
    title: "Retinol Kullanımında Dikkat Edilmesi Gerekenler",
    content: `
# Retinol Kullanımında Dikkat Edilmesi Gerekenler

Retinol, cilt bakımında en etkili aktif bileşenlerden biridir. Ancak doğru kullanım çok önemlidir:

## Başlangıç Dozu
Düşük konsantrasyonla başlayın ve cildinizin alışmasını bekleyin. İlk hafta haftada 2-3 kez kullanın.

## Uygulama Zamanı
Retinol'ü mutlaka gece kullanın, gündüz güneş koruma faktörü kullanmayı unutmayın.

## Yan Etkiler
İlk kullanımlarda hafif tahriş normal olabilir. Ancak şiddetli yanma varsa kullanımı bırakın.

## Kombinasyon Kuralları
- Vitamin C ile aynı anda kullanmayın
- AHA/BHA ile birlikte kullanırken dikkatli olun
- Niacinamide ile kombine edebilirsiniz

## Sonuç
Sabırlı olun ve düzenli kullanım ile cildinizde olumlu değişiklikler göreceksiniz.
    `,
    excerpt:
      "Retinol, cilt bakımında en etkili aktif bileşenlerden biridir. Doğru kullanım rehberi ve önemli ipuçları.",
    category: "Aktif İçerikler",
    categoryColor: "bg-red-500",
    author: "Dr. Mehmet Özdemir",
    date: "12 Aralık 2024",
    readTime: "7 dk",
    image: "/uploads/aa.png",
    featured: false,
  },
  {
    id: 3,
    slug: "kis-aylarinda-cilt-bakimi",
    title: "Kış Aylarında Cilt Bakımı Nasıl Olmalı?",
    content: `
# Kış Aylarında Cilt Bakımı Nasıl Olmalı?

Soğuk havalarda cildinizi korumak için özel bakım rutini gereklidir.

## Nemlendirme Önceliği
Kış aylarında cilt daha fazla kurur. Bu yüzden nemlendirme rutininizi güçlendirin.

## Sıcak Su Tuzağı
Çok sıcak suyla yıkanmak cildin doğal yağlarını alır. Ilık su tercih edin.

## İç Mekan Nemlendiricisi
Kalorifer cildi kurutur. Oda nemlendiricisi kullanın.

## Özel Ürünler
- Daha yoğun nemlendiriciler
- Yağ bazlı serumlar
- Koruyucu kremler

Kış aylarında cildinize ekstra özen gösterin!
    `,
    excerpt: "Soğuk havalarda cildinizi korumak için özel bakım rutini ve ürün önerileri.",
    category: "Nemlendirme",
    categoryColor: "bg-blue-500",
    author: "Uzm. Seher Sevcan Yapıcı",
    date: "10 Aralık 2024",
    readTime: "6 dk",
    image: "/uploads/kis.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "dogal-yuz-maskesi-tarifleri",
    title: "Doğal Yüz Maskesi Tarifleri",
    content: `
# Doğal Yüz Maskesi Tarifleri

Evde kolayca hazırlayabileceğiniz doğal yüz maskesi tarifleri ile cildinizi besleyin ve canlandırın.

## 1. Bal ve Yulaf Maskesi (Tüm Cilt Tipleri)

**Malzemeler:**
- 2 yemek kaşığı yulaf ezmesi
- 1 yemek kaşığı doğal bal
- 1 tatlı kaşığı süt

**Hazırlanışı:**
Tüm malzemeleri karıştırarak pürüzsüz bir karışım elde edin. Temiz yüze uygulayın ve 15-20 dakika bekleyin.

**Faydaları:**
- Cildi nemlendirir
- Ölü derileri temizler
- Anti-bakteriyel özellik gösterir

## 2. Avokado ve Zeytinyağı Maskesi (Kuru Cilt)

**Malzemeler:**
- 1/2 olgun avokado
- 1 tatlı kaşığı zeytinyağı
- 1 tatlı kaşığı bal

**Hazırlanışı:**
Avokadonun içini çıkarıp ezin, diğer malzemelerle karıştırın. 20 dakika yüzde bırakın.

**Faydaları:**
- Yoğun nemlendirme sağlar
- Vitamin E açısından zengin
- Cildi yumuşatır

## 3. Çilek ve Limon Maskesi (Yağlı Cilt)

**Malzemeler:**
- 3-4 tane çilek
- 1/2 limon suyu
- 1 yemek kaşığı yoğurt

**Hazırlanışı:**
Çilekleri ezin, limon suyu ve yoğurt ile karıştırın. 15 dakika uygulayın.

**Faydaları:**
- Gözenekleri temizler
- Fazla yağı kontrol eder
- Cildi aydınlatır

## 4. Salatalık ve Aloe Vera Maskesi (Hassas Cilt)

**Malzemeler:**
- 1/2 salatalık
- 2 yemek kaşığı aloe vera jeli
- 1 tatlı kaşığı gül suyu

**Hazırlanışı:**
Salatalığı rendeleyin, diğer malzemelerle karıştırın. 20 dakika bekletin.

**Faydaları:**
- Cildi sakinleştirir
- İltihabı azaltır
- Serinletici etki yapar

## 5. Kahve ve Hindistan Cevizi Yağı Peelingi

**Malzemeler:**
- 2 yemek kaşığı kahve telvesi
- 1 yemek kaşığı hindistan cevizi yağı
- 1 tatlı kaşığı bal

**Hazırlanışı:**
Malzemeleri karıştırın, dairesel hareketlerle masaj yaparak uygulayın. 10 dakika bekleyin.

**Faydaları:**
- Ölü derileri temizler
- Kan dolaşımını hızlandırır
- Cildi pürüzsüzleştirir

## Uygulama İpuçları

**Önemli Notlar:**
- Maskeleri temiz cilde uygulayın
- Göz çevresinden kaçının
- İlk kez deneyeceğiniz maskeleri küçük bir alanda test edin
- Haftada 1-2 kez uygulayın

**Temizlik:**
- Maskeyi ılık suyla nazikçe temizleyin
- Ardından nemlendirici uygulayın
- Güneş koruma faktörü kullanmayı unutmayın

## Sonuç
Doğal maskeler cildinizi besler ve canlandırır. Düzenli kullanımla sağlıklı ve parlak bir cilt elde edebilirsiniz.
  `,
    excerpt: "Evde kolayca hazırlayabileceğiniz doğal yüz maskesi tarifleri ve faydaları.",
    category: "Doğal Bakım",
    categoryColor: "bg-purple-500",
    author: "Mine Özdemir",
    date: "8 Aralık 2024",
    readTime: "4 dk",
    image: "/uploads/salata.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: "gunes-koruma-faktoru-secimi",
    title: "Güneş Koruma Faktörü Seçimi",
    content: `
# Güneş Koruma Faktörü Seçimi

Cilt tipinize uygun SPF seçimi ve güneş koruma ürünlerinin doğru kullanımı hakkında bilmeniz gerekenler.

## SPF Nedir?

Sun Protection Factor (SPF), güneş koruma faktörü anlamına gelir ve ürünün UVB ışınlarına karşı ne kadar koruma sağladığını gösterir.

**SPF Değerleri:**
- SPF 15: %93 koruma
- SPF 30: %97 koruma
- SPF 50: %98 koruma
- SPF 50+: %98+ koruma

## Cilt Tipine Göre SPF Seçimi

## Tip 1 - Çok Açık Cilt
- Özellikler: Çok açık, yanma eğilimi yüksek
- Önerilen SPF: 50+
- Ek Öneriler: Fiziksel güneş koruyucu tercih edin

## Tip 2 - Açık Cilt
- Özellikler: Açık, kolay yanar
- Önerilen SPF: 30-50
- Ek Öneriler: Geniş spektrumlu koruma

## Tip 3 - Orta Ton Cilt
- Özellikler: Orta ton, bazen yanar
- Önerilen SPF: 30
- Ek Öneriler: Su geçirmez formül

## Tip 4 - Koyu Cilt
- Özellikler: Koyu, nadiren yanar
- Önerilen SPF: 15-30
- Ek Öneriler: Beyaz iz bırakmayan formül

## Güneş Koruyucu Türleri

## Fiziksel (Mineral) Güneş Koruyucu
İçerik: Çinko oksit, titanyum dioksit
**Avantajları:**
- Hassas ciltler için ideal
- Hemen koruma sağlar
- Geniş spektrumlu koruma

**Dezavantajları:**
- Beyaz iz bırakabilir
- Kalın doku

## Kimyasal Güneş Koruyucu
İçerik: Avobenzone, octinoxate, oxybenzone
**Avantajları:**
- Hafif doku
- Kolay uygulanır
- Şeffaf finish

**Dezavantajları:**
- 20 dakika önceden uygulanmalı
- Hassas ciltlerde tahriş yapabilir

## Doğru Uygulama

## Miktar
- Yüz için: 1/4 tatlı kaşığı
- Vücut için: 30ml (shot bardağı)

## Uygulama Zamanı
- Güneşe çıkmadan 15-30 dakika önce
- Her 2 saatte bir yenileyin
- Yüzdükten sonra tekrar uygulayın

## Uygulama Tekniği
1. Temiz ve kuru cilde uygulayın
2. Eşit şekilde dağıtın
3. Kulak arkası, boyun, ayak sırtını unutmayın
4. Dudaklar için SPF'li dudak kremi kullanın

## Özel Durumlar

## Yüzme ve Spor
- Su geçirmez (water-resistant) formül seçin
- 40-80 dakika koruma sağlar
- Yine de 2 saatte bir yenileyin

## Günlük Kullanım
- Nemlendirici + SPF kombinasyonu
- En az SPF 30
- Geniş spektrumlu koruma

## Makyaj Altında
- Hafif, hızlı emen formül
- Primer özellikli güneş koruyucu
- Makyaj öncesi 15 dakika bekleyin

## Yaygın Hatalar

**❌ Yanlış:**
- Çok az ürün kullanmak
- Sadece yüze uygulamak
- Bulutlu günlerde kullanmamak
- Süresi geçmiş ürün kullanmak

**✅ Doğru:**
- Yeterli miktarda uygulama
- Tüm açık alanları koruma
- Her gün kullanma
- Yılda bir kez ürünü yenileme

## Ürün Önerileri

## Hassas Cilt İçin
- Mineral bazlı formüller
- Parfüm ve alkol içermeyen
- Hipoalerjenik

## Yağlı Cilt İçin
- Jel veya fluid formül
- Non-komedojenik
- Mat finish

## Kuru Cilt İçin
- Nemlendirici içerikli
- Krem formülü
- Hyaluronik asit içeren

## Sonuç
Doğru SPF seçimi ve düzenli kullanım, cilt sağlığınızı korumak için en önemli adımdır. Cilt tipinize uygun ürünü seçin ve her gün kullanmayı alışkanlık haline getirin.
  `,
    excerpt: "Cilt tipinize uygun SPF seçimi ve güneş koruma ürünlerinin doğru kullanımı.",
    category: "Güneş Koruma",
    categoryColor: "bg-yellow-500",
    author: "Dr. Asiye Yapıcı",
    date: "5 Aralık 2024",
    readTime: "5 dk",
    image: "/uploads/gunes.jpg",
    featured: true,
  },
  {
    id: 6,
    slug: "akne-izleri-nasil-gecer",
    title: "Akne İzleri Nasıl Geçer?",
    content: `
# Akne İzleri Nasıl Geçer?

Akne izlerinden kurtulmak için etkili yöntemler ve önerilen tedavi seçenekleri hakkında kapsamlı rehber.

# Akne İzi Türleri

## Post-İnflamatuar Hiperpigmentasyon (PIH)
**Özellikler:**
- Kahverengi veya siyah lekeler
- Düz yüzey
- Melanin birikimi

Tedavi Süresi: 3-6 ay

## Post-İnflamatuar Eritema (PIE)
**Özellikler:**
- Kırmızı veya pembe lekeler
- Düz yüzey
- Kan damarı genişlemesi

Tedavi Süresi: 6-12 ay

## Atrofik İzler (Çukur İzler)
**Özellikler:**
- Çukur şeklinde
- Doku kaybı
- Kalıcı hasar

Tedavi Süresi: 6-18 ay

## Ev Bakımı Yöntemleri

## 1. Aktif İçerikler

**Vitamin C Serumu**
- Antioksidan özellik
- Kolajen üretimini artırır
- Leke açıcı etki
- Kullanım: Sabah, güneş koruma ile

**Retinol/Retinoid**
- Hücre yenilenmesini hızlandırır
- Kolajen üretimini artırır
- İz görünümünü azaltır
- Kullanım: Gece, düşük dozla başla

**Niacinamide**
- Sebum üretimini azaltır
- Gözenek görünümünü iyileştirir
- İltihap karşıtı
- Kullanım: Sabah/akşam

**AHA/BHA Asitler**
- Glikolik asit (AHA): Yüzey peeling
- Salisilik asit (BHA): Gözenek temizliği
- Kullanım: Haftada 2-3 kez

## 2. Doğal Yöntemler

**Aloe Vera**
- İyileştirici özellik
- İltihap karşıtı
- Nemlendirici

**Yeşil Çay**
- Antioksidan
- İltihap karşıtı
- Tonik olarak kullanılabilir

**Bal**
- Antibakteriyel
- Nemlendirici
- İyileştirici

## Profesyonel Tedaviler

## 1. Kimyasal Peeling

**Yüzeysel Peeling:**
- Glikolik asit
- Laktik asit
- Hafif izler için

**Orta Derinlik Peeling:**
- TCA (Trichloroacetic acid)
- Daha derin izler için
- Uzman kontrolünde

## 2. Mikroneedling

**Nasıl Çalışır:**
- Küçük iğnelerle kontrollü hasar
- Kolajen üretimini uyarır
- İz dokusunu iyileştirir

Seans Sayısı: 4-6 seans
Aralık: 4-6 hafta

## 3. Lazer Tedavileri

**Fraksiyonel Lazer:**
- Derin izler için etkili
- Kolajen yenilenmesi
- Minimal downtime

**IPL (Intense Pulsed Light):**
- Pigmentasyon için ideal
- Kırmızılık azaltır
- Cilt tonunu eşitler

## 4. Dermal Filler

**Kullanım Alanı:**
- Derin çukur izler
- Geçici çözüm
- Hyaluronik asit bazlı

## Tedavi Planı

## 1. Hafif İzler (0-3 Ay)
- Vitamin C + Retinol
- Güneş koruma
- Nemlendirici
- Sabır

## 2. Orta Şiddette İzler (3-6 Ay)
- Kimyasal peeling
- Mikroneedling
- Aktif içerikli bakım
- Profesyonel takip

## 3. Şiddetli İzler (6-18 Ay)
- Lazer tedavisi
- Kombinasyon tedaviler
- Uzman dermatolog takibi
- Düzenli bakım

## Önemli İpuçları

## Yapılması Gerekenler ✅
- Sabırlı olun
- Güneş koruması kullanın
- Düzenli bakım yapın
- Uzman desteği alın
- Cildi tahriş etmeyin

## Yapılmaması Gerekenler ❌
- İzleri kaşımayın
- Güneşe çıkmayın
- Çok fazla ürün kullanmayın
- Sabırsız olmayın
- Kendi kendinize tedavi yapmayın

## Önleme Yöntemleri

## Akne Döneminde
- Sivilceleri sıkmayın
- Nazik temizlik yapın
- Uygun tedavi alın
- Güneşten korunun

## Genel Bakım
- Düzenli cilt bakımı
- Sağlıklı beslenme
- Stres yönetimi
- Yeterli uyku

## Gerçekçi Beklentiler

İlk Sonuçlar: 4-6 hafta
Belirgin İyileşme: 3-6 ay
Maksimum Sonuç: 6-18 ay

**Unutmayın:**
- Her cilt farklıdır
- Sabır gerektirir
- Kombinasyon tedaviler daha etkilidir
- Profesyonel destek önemlidir

## Sonuç
Akne izleri tedavi edilebilir ancak zaman ve sabır gerektirir. Doğru yöntemlerle ve uzman desteğiyle cildinizi iyileştirebilirsiniz.
  `,
    excerpt: "Akne izlerinden kurtulmak için etkili yöntemler ve önerilen tedavi seçenekleri.",
    category: "Tedavi",
    categoryColor: "bg-indigo-500",
    author: "Dr. İpek İlay Erduğan",
    date: "3 Aralık 2024",
    readTime: "8 dk",
    image: "/uploads/akne2.jpg",
    featured: false,
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-xl group-hover:scale-105 transition-transform">
                <span className="text-white text-xl">✨</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                SkInfluencer
              </h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-pink-500 font-medium">
                Blog
              </Link>
              
              <Link href="/about" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                Hakkımızda
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Link
                href="/auth/login"
                className="text-gray-600 hover:text-pink-500 font-medium transition-colors px-4 py-2"
              >
                Giriş Yap
              </Link>
              <Link
                href="/auth/register"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-500 transition-colors">
              Ana Sayfa
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-pink-500 transition-colors">
              Blog
            </Link>
            <span>›</span>
            <span className="text-gray-900">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <span className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">{post.readTime}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

            <div className="flex items-center justify-between text-gray-600 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-pink-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden mb-8">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-800 leading-relaxed space-y-6">
              {post.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("# ")) {
                  return (
                    <h1 key={index} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace("# ", "")}
                    </h1>
                  )
                } else if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-6 mb-3">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                } else if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <p key={index} className="font-semibold text-gray-900 mt-4 mb-2">
                      {paragraph.replace(/\*\*/g, "")}
                    </p>
                  )
                } else if (paragraph.startsWith("- ")) {
                  return (
                    <li key={index} className="text-gray-700 ml-4">
                      {paragraph.replace("- ", "")}
                    </li>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Bu makaleyi beğendin mi?</span>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>24</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span>Paylaş</span>
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">İlgili Yazılar</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-3 left-3">
                          <span
                            className={`${relatedPost.categoryColor} text-white px-2 py-1 rounded-full text-xs font-medium`}
                          >
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{relatedPost.excerpt}</p>

                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <div className="flex items-center space-x-2">
                            <span>{relatedPost.author}</span>
                            <span>•</span>
                            <span>{relatedPost.date}</span>
                          </div>
                          <span className="bg-gray-100 px-2 py-1 rounded-full">{relatedPost.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-xl mr-3">
                <span className="text-white text-lg">✨</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                SkInfluencer
              </span>
            </div>

            <div className="flex items-center space-x-8">
              <Link href="/blog" className="text-pink-500 font-medium">
                Blog
              </Link>
              
              <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-pink-500 transition-colors">
                İletişim
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
