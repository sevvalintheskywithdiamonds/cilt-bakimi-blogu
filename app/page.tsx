import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-xl">
                <span className="text-white text-xl">✨</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                SkInfluencer
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/blog" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="mr-2">🌟</span>
              Cilt bakımında uzman rehberin
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Güzel Cildin
              <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
                Sırrını Keşfet
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Cilt tipinden rutinlere, ürün önerilerinden uzman tavsiyelerine kadar cilt bakımı hakkında bilmeniz
              gereken her şey burada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/blog"
                className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
              >
                Blog'u Keşfet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Neden SkInfluencer ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Cilt bakımı yolculuğunuzda size rehberlik edecek kapsamlı içerikler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Uzman İçerikleri</h3>
              <p className="text-gray-600 leading-relaxed">
                Cilt bakımı uzmanları tarafından hazırlanan detaylı rehberler ve makaleler
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Topluluk Desteği</h3>
              <p className="text-gray-600 leading-relaxed">
                Cilt bakımı tutkunu kullanıcılarla deneyim paylaşımı ve destek
              </p>
            </div>

            <div className="group text-center p-8 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Kişisel Rehberlik</h3>
              <p className="text-gray-600 leading-relaxed">Diğer kullanıcılarla mesajlaşarak özel sorularınızı sorun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Cilt Bakımı Yolculuğuna Başla</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hemen kayıt ol ve cilt bakımı topluluğumuzun bir parçası ol!
          </p>
          <Link
            href="/auth/register"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
          >
            <span className="mr-2">✨</span>
            Ücretsiz Kayıt Ol
          </Link>
        </div>
      </section>

      {/* Minimal Footer */}
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
