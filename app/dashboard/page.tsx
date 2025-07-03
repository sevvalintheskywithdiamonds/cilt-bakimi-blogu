"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const router = useRouter()

  useEffect(() => {
    console.log("Dashboard useEffect çalışıyor")
    fetchUser()
  }, [])

  const fetchUser = async () => {
    try {
      console.log("Kullanıcı bilgileri alınıyor...")
      const response = await fetch("/api/auth/me")
      console.log("Me API response status:", response.status)

      const data = await response.json()
      console.log("Me API response data:", data)

      if (data.success) {
        setUser(data.user)
        console.log("Kullanıcı bilgileri set edildi:", data.user)
      } else {
        console.log("Kullanıcı bilgileri alınamadı, login'e yönlendiriliyor")
        setError("Oturum bulunamadı")
        setTimeout(() => {
          router.push("/auth/login")
        }, 2000)
      }
    } catch (error) {
      console.error("Kullanıcı bilgileri alınamadı:", error)
      setError("Bağlantı hatası")
      setTimeout(() => {
        router.push("/auth/login")
      }, 2000)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      router.push("/")
    } catch (error) {
      console.error("Çıkış hatası:", error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Dashboard yükleniyor...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-4">
            <p className="font-semibold">Hata: {error}</p>
            <p className="text-sm mt-2">Login sayfasına yönlendiriliyorsunuz...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Kullanıcı bilgileri yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
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

            <div className="flex items-center space-x-4">
              <Link href="/blog" className="text-gray-600 hover:text-pink-500 transition-colors">
                Blog
              </Link>
              <button
                onClick={handleLogout}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Hoş Geldin, {user.name}! 👋
            {user.role === "admin" && (
              <span className="ml-2 text-lg bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                Admin Panel
              </span>
            )}
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-pink-100">Hoş Geldin!</p>
                  <p className="text-2xl font-bold">Dashboard</p>
                </div>
                <svg className="w-8 h-8 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
            </div>

            <Link
              href="/messages"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl p-6 text-white hover:scale-105 transition-transform"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Mesajlar</p>
                  <p className="text-2xl font-bold">Görüntüle</p>
                </div>
                <svg className="w-8 h-8 text-purple-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
            </Link>

            {user.role === "admin" && (
              <Link
                href="/admin/users"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 text-white hover:scale-105 transition-transform"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-emerald-100">Admin Panel</p>
                    <p className="text-2xl font-bold">Yönet</p>
                  </div>
                  <svg className="w-8 h-8 text-emerald-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </Link>
            )}
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Kullanıcı Bilgilerin</h2>
            <div className="space-y-2">
              <p>
                <strong>Ad:</strong> {user.name}
              </p>
              <p>
                <strong>E-posta:</strong> {user.email}
              </p>
              <p>
                <strong>Rol:</strong> {user.role === "admin" ? "Yönetici" : "Kullanıcı"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
