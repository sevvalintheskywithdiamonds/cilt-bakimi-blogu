"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"


const faqData = [
  {
    id: 1,
    question: "Cilt tipimi nasıl belirleyebilirim?",
    answer:
      "Cilt tipinizi belirlemek için yüzünüzü temizledikten 2-3 saat sonra T-bölgenizi (alın, burun, çene) kontrol edin. Yağlı görünüyorsa yağlı, gergin hissediyorsa kuru, karışık durumda ise karma cilt tipindesiniz.",
  },
  {
    id: 2,
    question: "Hangi sıklıkla cilt bakımı yapmalıyım?",
    answer:
      "Temel cilt bakımı günde 2 kez (sabah-akşam) yapılmalıdır. Peeling ve maskeler haftada 1-2 kez, serum kullanımı ise günlük olarak önerilir.",
  },
  {
    id: 3,
    question: "Doğal ürünler her zaman güvenli midir?",
    answer:
      "Doğal ürünler genellikle güvenlidir ancak alerjik reaksiyonlara neden olabilir. Yeni bir ürünü kullanmadan önce küçük bir alanda test etmenizi öneririz.",
  },
  {
    id: 4,
    question: "Cilt bakım ürünlerinin etkisini ne zaman görürüm?",
    answer:
      "Çoğu cilt bakım ürününün etkisini görmek için 4-6 hafta düzenli kullanım gerekir. Sabırlı olun ve ürünleri düzenli kullanın.",
  },
  {
    id: 5,
    question: "Hamilelik döneminde hangi ürünleri kullanabilirim?",
    answer:
      "Hamilelik döneminde retinol, salisilik asit ve bazı kimyasal güneş koruyuculardan kaçının. Doğal ve nazik ürünleri tercih edin, doktorunuza danışın.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }

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
              <Link href="/about" className="text-gray-600 hover:text-pink-500 font-medium transition-colors">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-pink-500 font-medium">
                İletişim
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
            <span className="text-gray-900">İletişim</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bizimle
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent block">
              İletişime Geç
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cilt bakımı hakkında sorularınız mı var? Uzman ekibimiz size yardımcı olmaya hazır. Bize ulaşın, en kısa
            sürede geri dönüş yapalım!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
                    <p className="text-gray-600">
                      Maslak Mahallesi, Büyükdere Caddesi
                      <br />
                      No: 123, Kat: 5<br />
                      34485 Sarıyer/İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:+902121234567" className="hover:text-pink-500 transition-colors">
                        +90 (212) 123 45 67
                      </a>
                      <br />
                      <a href="tel:+905321234567" className="hover:text-pink-500 transition-colors">
                        +90 (532) 123 45 67
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@skincarehub.com" className="hover:text-pink-500 transition-colors">
                        info@skinfluencer.com
                      </a>
                      <br />
                      <a href="mailto:destek@skincarehub.com" className="hover:text-pink-500 transition-colors">
                        destek@skinfluencer.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Çalışma Saatleri</h3>
                    <p className="text-gray-600">
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 10:00 - 16:00
                      <br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-pink-100 text-pink-600 p-3 rounded-xl hover:bg-pink-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-xl hover:bg-blue-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-purple-100 text-purple-600 p-3 rounded-xl hover:bg-purple-200 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-red-100 text-red-600 p-3 rounded-xl hover:bg-red-200 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Mesaj Gönder</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-600 p-4 rounded-xl mb-4">
                      <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <h3 className="text-lg font-semibold mb-2">Mesajınız Gönderildi!</h3>
                      <p>En kısa sürede size geri dönüş yapacağız.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-pink-500 hover:text-pink-600 font-medium"
                    >
                      Yeni mesaj gönder
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Ad Soyad *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          E-posta *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                          placeholder="ornek@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Konu *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
                      >
                        <option value="">Konu seçin</option>
                        <option value="genel">Genel Bilgi</option>
                        <option value="cilt-danismani">Cilt Danışmanlığı</option>
                        <option value="urun-onerisi">Ürün Önerisi</option>
                        <option value="teknik-destek">Teknik Destek</option>
                        <option value="isbirligi">İş Birliği</option>
                        <option value="diger">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Mesaj *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all resize-none"
                        placeholder="Mesajınızı buraya yazın..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-4 px-6 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Gönderiliyor...
                        </div>
                      ) : (
                        "Mesaj Gönder"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Konum</h2>
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="bg-white p-4 rounded-xl shadow-lg mb-4 inline-block">
                <svg className="w-8 h-8 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <p className="text-gray-600 font-medium">Harita Yükleniyor...</p>
              <p className="text-sm text-gray-500 mt-2">Maslak, Sarıyer/İstanbul</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sık Sorulan Sorular</h2>
            <p className="text-gray-600 text-lg">En çok merak edilen sorular ve cevapları</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openFaq === faq.id ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === faq.id && <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.answer}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Hala Sorularınız mı Var?</h2>
          <p className="text-pink-100 mb-8 text-lg max-w-2xl mx-auto">
            Cilt bakımı uzmanlarımızla birebir görüşmek için randevu alabilir veya canlı destek hattımızdan anında
            yardım alabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/auth/register"
              className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
            >
              Ücretsiz Kayıt Ol
            </Link>
            <a
              href="tel:+902121234567"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 transition-all"
            >
              Hemen Ara
            </a>
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
              <Link href="/about" className="text-gray-600 hover:text-pink-500 transition-colors">
                Hakkımızda
              </Link>
              <Link href="/contact" className="text-pink-500 font-medium">
                İletişim
              </Link>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}
