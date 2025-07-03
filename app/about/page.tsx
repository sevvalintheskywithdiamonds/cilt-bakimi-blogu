import Link from "next/link"


const teamMembers = [
  {
    id: 1,
    name: "Dr. İpek İlay Erduğan",
    role: "Kurucu & Baş Dermatolog",
    bio: "15 yıllık deneyimi ile cilt bakımı alanında uzman. Hitit Üniversitesi Tıp Fakültesi mezunu.",
    image: "/uploads/kadin.jpg",
    specialties: ["Akne Tedavisi", "Anti-Aging", "Cilt Analizi"],
  },
  {
    id: 2,
    name: "Dr. Mehmet Özdemir",
    role: "Dermatolog",
    bio: "Aktif içerikler ve cilt bakımı rutinleri konusunda uzman. Dokuz Eylül Üniversitesi mezunu.",
    image: "/uploads/erkek.jpg",
    specialties: ["Retinol Kullanımı", "Kimyasal Peeling", "Hassas Cilt"],
  },
  {
    id: 3,
    name: "Uzm. Seher Sevcan Yapıcı",
    role: "Cilt Bakım Uzmanı",
    bio: "Doğal cilt bakımı ve ev yapımı ürünler konusunda 10 yıllık deneyim.",
    image: "/uploads/kadin.jpg",
    specialties: ["Doğal Bakım", "Organik Ürünler", "Cilt Tipi Analizi"],
  },
]

export default function AboutPage() {
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
              <Link href="/blog" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-pink-500 font-medium">
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
        <div className="max-w-6xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-pink-500 transition-colors">
              Ana Sayfa
            </Link>
            <span>›</span>
            <span className="text-gray-900">Hakkımızda</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Cilt Bakımında
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
              Güvenilir Rehberin
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            2020 yılından beri binlerce kişiye cilt bakımı konusunda rehberlik ediyoruz. Uzman ekibimiz ve kanıtlanmış
            yöntemlerimizle sağlıklı cilt hedeflerinize ulaşmanıza yardımcı oluyoruz.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Cilt bakımını herkes için erişilebilir kılmak ve doğru bilgilendirme ile insanların kendilerini daha iyi
                hissetmelerine yardımcı olmak.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Her cilt tipinin kendine özgü ihtiyaçları olduğuna inanıyoruz. Bu nedenle kişiselleştirilmiş öneriler ve
                bilimsel temelli içerikler sunuyoruz.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-700 leading-relaxed">
                Türkiye'nin en güvenilir cilt bakımı platformu olmak ve cilt sağlığı konusunda farkındalığı artırarak
                toplumsal bir değişim yaratmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-pink-500 mb-2">500+</div>
              <div className="text-gray-600">Uzman Makalesi</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-pink-500 mb-2">10K+</div>
              <div className="text-gray-600">Mutlu Kullanıcı</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-gray-600">Uzman Ekip</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl font-bold text-pink-500 mb-2">4.8</div>
              <div className="text-gray-600">Kullanıcı Puanı</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Uzman Ekibimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Alanında uzman dermatologlar ve cilt bakımı uzmanlarından oluşan ekibimiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group">
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-pink-500 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Çalışmalarımızı yönlendiren temel değerlerimiz</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🔬</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Bilimsel Yaklaşım</h3>
              <p className="text-gray-600 leading-relaxed">
                Tüm önerilerimiz bilimsel araştırmalara ve kanıtlara dayanır. Trend değil, gerçek sonuçlar önemlidir.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Kişiselleştirme</h3>
              <p className="text-gray-600 leading-relaxed">
                Her cildin farklı olduğunu biliyoruz. Bu nedenle kişiye özel çözümler ve öneriler sunuyoruz.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Güven & Şeffaflık</h3>
              <p className="text-gray-600 leading-relaxed">
                Açık ve dürüst iletişim kurar, kullanıcılarımızla güven temelli ilişkiler geliştiririz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Bizimle İletişime Geç</h2>
          <p className="text-pink-100 mb-8 text-lg max-w-2xl mx-auto">
            Cilt bakımı hakkında sorularınız mı var? Uzman ekibimiz size yardımcı olmaya hazır!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              İletişime Geç
            </Link>
            <Link
              href="/auth/register"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 transition-all"
            >
              Ücretsiz Kayıt Ol
            </Link>
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
              <Link href="/blog" className="text-gray-600 hover:text-pink-500 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-pink-500 font-medium">
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
