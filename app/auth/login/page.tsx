"use client"

import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submit başladı")
    setIsLoading(true)
    setError("")

    try {
      console.log("Login API çağrılıyor...")
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      console.log("Response status:", response.status)
      const data = await response.json()
      console.log("Response data:", data)

      if (data.success) {
        console.log("Giriş başarılı! Dashboard'a yönlendiriliyor...")
        
        window.location.href = "/dashboard"
      } else {
        setError(data.message || "Giriş yapılırken bir hata oluştu")
      }
    } catch (err) {
      console.error("Login error:", err)
      setError("Giriş yapılırken bir hata oluştu")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  
  const fillDemoAccount = (type: "admin" | "user") => {
    if (type === "admin") {
      setFormData({
        email: "admin@skincare.com",
        password: "admin123",
      })
    } else {
      setFormData({
        email: "user@skincare.com",
        password: "user123",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-pink-500 transition-colors group">
            <svg
              className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>

        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl mb-6">
              <span className="text-white text-2xl">✨</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tekrar Hoş Geldin!</h1>
            <p className="text-gray-600">Cilt bakımı yolculuğuna kaldığın yerden devam et</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">{error}</div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-posta Adresi
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/50"
                placeholder="ornek@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Şifre
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all bg-white/50"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                  Giriş yapılıyor...
                </div>
              ) : (
                "Giriş Yap"
              )}
            </button>
          </form>

          {/* Hızlı Test Butonları */}
          <div className="mt-6 space-y-2">
            <p className="text-sm font-medium text-gray-700 text-center">Hızlı Test:</p>
            <div className="flex space-x-2">
              <button
                type="button"
                onClick={() => fillDemoAccount("admin")}
                className="flex-1 px-3 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                Admin Hesabı
              </button>
              <button
                type="button"
                onClick={() => fillDemoAccount("user")}
                className="flex-1 px-3 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                Kullanıcı Hesabı
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Henüz hesabın yok mu?{" "}
            <Link href="/auth/register" className="text-pink-500 hover:text-pink-600 font-semibold transition-colors">
              Hemen kayıt ol
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
