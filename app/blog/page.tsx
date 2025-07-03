import Link from "next/link"


const blogPosts = [
  {
    id: 1,
    slug: "yagli-ciltler-icin-bakim-rutini",
    title: "Yağlı Ciltler İçin 5 Adımlık Bakım Rutini",
    excerpt:
      "Yağlı cilt tipine sahip olanlar için etkili 5 adımlık bakım rutini rehberi. Doğru ürünler ve uygulama teknikleri.",
    category: "Temizlik",
    categoryColor: "bg-green-500",
    author: "Dr. İpek İlay Erduğan",
    date: "15 Aralık 2024",
    readTime: "5 dk",
    image: "/uploads/oily.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "retinol-kullanimi-rehberi",
    title: "Retinol Kullanımında Dikkat Edilmesi Gerekenler",
    excerpt:
      "Retinol, cilt bakımında en etkili aktif bileşenlerden biridir. Doğru kullanım rehberi ve önemli ipuçları.",
    category: "Aktif İçerikler",
    categoryColor: "bg-red-500",
    author: "Dr. Mehmet Özdemir",
    date: "12 Aralık 2024",
    readTime: "7 dk",
    image: "/uploads/retinol.jpeg",
    featured: false,
  },
  {
    id: 3,
    slug: "kis-aylarinda-cilt-bakimi",
    title: "Kış Aylarında Cilt Bakımı Nasıl Olmalı?",
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
    excerpt: "Evde kolayca hazırlayabileceğiniz doğal yüz maskesi tarifleri ve faydaları.",
    category: "Doğal Bakım",
    categoryColor: "bg-purple-500",
    author: "Tuğçe Türkmen",
    date: "8 Aralık 2024",
    readTime: "4 dk",
    image: "/uploads/maske.jpg",
    featured: false,
  },
  {
    id: 5,
    slug: "gunes-koruma-faktoru-secimi",
    title: "Güneş Koruma Faktörü Seçimi",
    excerpt: "Cilt tipinize uygun SPF seçimi ve güneş koruma ürünlerinin doğru kullanımı.",
    category: "Güneş Koruma",
    categoryColor: "bg-yellow-500",
    author: "Dr. Alperen Erduğan",
    date: "5 Aralık 2024",
    readTime: "5 dk",
    image: "/uploads/sun.jpg",
    featured: true,
  },
  {
    id: 6,
    slug: "akne-izleri-nasil-gecer",
    title: "Akne İzleri Nasıl Geçer?",
    excerpt: "Akne izlerinden kurtulmak için etkili yöntemler ve önerilen tedavi seçenekleri.",
    category: "Tedavi",
    categoryColor: "bg-indigo-500",
    author: "Dr. Alparslan Erduğan",
    date: "3 Aralık 2024",
    readTime: "8 dk",
    image: "/uploads/akne.jpg",
    featured: false,
  },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

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

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Cilt Bakımı
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">Skinfluencer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uzmanlardan cilt bakımı tavsiyeleri, ürün incelemeleri ve kişisel deneyimler
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Öne Çıkan Yazılar</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-pink-500 to-rose-500 ml-8 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <article className="group cursor-pointer">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`${post.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
                          >
                            {post.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-500 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center space-x-4">
                            <span>{post.author}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                          </div>
                          <span className="bg-gray-100 px-2 py-1 rounded-full">{post.readTime}</span>
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

      {/* All Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tüm Yazılar</h2>
            <div className="flex items-center space-x-4">
              <select className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500">
                <option>Tüm Kategoriler</option>
                <option>Temizlik</option>
                <option>Nemlendirme</option>
                <option>Güneş Koruma</option>
                <option>Doğal Bakım</option>
                <option>Aktif İçerikler</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="group cursor-pointer">
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-3 left-3">
                        <span className={`${post.categoryColor} text-white px-2 py-1 rounded-full text-xs font-medium`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-500 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-2">
                          <span>{post.author}</span>
                          <span>•</span>
                          <span>{post.date}</span>
                        </div>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Daha Fazla Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Yeni Yazılardan Haberdar Ol</h2>
          <p className="text-pink-100 mb-8 text-lg">
            Haftalık bültenimize abone ol, en yeni cilt bakımı ipuçlarını kaçırma!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="E-posta adresin"
              className="flex-1 px-4 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-pink-500 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
              Abone Ol
            </button>
          </div>
        </div>
      </section>

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
