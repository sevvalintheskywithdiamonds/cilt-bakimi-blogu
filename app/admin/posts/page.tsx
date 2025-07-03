"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface Post {
  id: number
  title: string
  excerpt?: string
  slug: string
  published: boolean
  featured: boolean
  createdAt: string
  author: {
    id: number
    name: string
  }
  category: {
    id: number
    name: string
    color: string
  }
  _count: {
    comments: number
  }
}

export default function AdminPostsPage() {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [showDeleteModal, setShowDeleteModal] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    checkAdminAccess()
    fetchPosts()
  }, [])

  const checkAdminAccess = async () => {
    try {
      const response = await fetch("/api/auth/me")
      const data = await response.json()

      if (!data.success || data.user.role !== "admin") {
        router.push("/dashboard")
        return
      }

      setCurrentUser(data.user)
    } catch (error) {
      router.push("/auth/login")
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/posts")
      const data = await response.json()

      if (data.success) {
        setPosts(data.data)
      }
    } catch (error) {
      console.error("Makaleler yüklenemedi:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleStatusChange = async (postId: number, field: string, value: boolean) => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [field]: value }),
      })

      if (response.ok) {
        fetchPosts()
      }
    } catch (error) {
      console.error("Makale güncellenemedi:", error)
    }
  }

  const handleDeletePost = async (postId: number) => {
    try {
      const response = await fetch(`/api/admin/posts/${postId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        fetchPosts()
        setShowDeleteModal(null)
      }
    } catch (error) {
      console.error("Makale silinemedi:", error)
    }
  }

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus =
      selectedStatus === "all" ||
      (selectedStatus === "published" && post.published) ||
      (selectedStatus === "draft" && !post.published) ||
      (selectedStatus === "featured" && post.featured)

    return matchesSearch && matchesStatus
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-2 rounded-xl group-hover:scale-105 transition-transform">
                <span className="text-white text-xl">✨</span>
              </div>
              <h1 className="ml-3 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                SkInfluencer - Admin
              </h1>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-pink-500 transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/users" className="text-gray-600 hover:text-pink-500 transition-colors">
                Kullanıcılar
              </Link>
              <Link href="/admin/categories" className="text-gray-600 hover:text-pink-500 transition-colors">
                Kategoriler
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">İçerik Yönetimi</h1>
            <p className="text-gray-600">Blog yazılarını görüntüle ve yönet</p>
          </div>
          <Link
            href="/admin/posts/new"
            className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            Yeni Yazı Ekle
          </Link>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Makale ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <option value="all">Tüm Durumlar</option>
              <option value="published">Yayınlanan</option>
              <option value="draft">Taslak</option>
              <option value="featured">Öne Çıkan</option>
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Toplam Makale</p>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Yayınlanan</p>
                <p className="text-2xl font-bold text-gray-900">{posts.filter((p) => p.published).length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Taslak</p>
                <p className="text-2xl font-bold text-gray-900">{posts.filter((p) => !p.published).length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Öne Çıkan</p>
                <p className="text-2xl font-bold text-gray-900">{posts.filter((p) => p.featured).length}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Makale</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Kategori</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Yazar</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Durum</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Tarih</th>
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{post.title}</p>
                        <p className="text-sm text-gray-500 mt-1">{post.excerpt}</p>
                        <p className="text-xs text-gray-400 mt-1">{post._count.comments} yorum</p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-medium text-white"
                        style={{ backgroundColor: post.category.color }}
                      >
                        {post.category.name}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{post.author.name}</td>
                    <td className="py-4 px-6">
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={post.published}
                            onChange={(e) => handleStatusChange(post.id, "published", e.target.checked)}
                            className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">Yayınla</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="checkbox"
                            checked={post.featured}
                            onChange={(e) => handleStatusChange(post.id, "featured", e.target.checked)}
                            className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                          />
                          <span className="ml-2 text-sm text-gray-600">Öne Çıkar</span>
                        </label>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-600">{new Date(post.createdAt).toLocaleDateString("tr-TR")}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                          target="_blank"
                        >
                          Görüntüle
                        </Link>
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="text-green-600 hover:text-green-800 text-sm font-medium"
                        >
                          Düzenle
                        </Link>
                        <button
                          onClick={() => setShowDeleteModal(post.id)}
                          className="text-red-600 hover:text-red-800 text-sm font-medium"
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Makaleyi Sil</h3>
            <p className="text-gray-600 mb-6">
              Bu makaleyi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                İptal
              </button>
              <button
                onClick={() => handleDeletePost(showDeleteModal)}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
