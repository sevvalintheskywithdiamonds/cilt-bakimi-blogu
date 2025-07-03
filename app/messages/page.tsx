"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface User {
  id: number
  name: string
  email: string
  avatar?: string
  role: string
  bio?: string
}

interface Message {
  id: number
  content: string
  senderId: number
  receiverId: number
  read: boolean
  createdAt: string
  sender: User
  receiver: User
}

export default function MessagesPage() {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [users, setUsers] = useState<User[]>([])
  const [conversations, setConversations] = useState<Message[]>([])
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")
  const [loading, setLoading] = useState(true)
  const [sending, setSending] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    fetchCurrentUser()
    fetchUsers()
    fetchConversations()
  }, [])

  useEffect(() => {
    if (selectedUser) {
      fetchMessages(selectedUser.id)
      markAsRead(selectedUser.id)
    }
  }, [selectedUser])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const fetchCurrentUser = async () => {
    try {
      const response = await fetch("/api/auth/me")
      const data = await response.json()
      if (data.success) {
        setCurrentUser(data.user)
      } else {
        router.push("/auth/login")
      }
    } catch (error) {
      console.error("Kullanıcı bilgileri alınamadı:", error)
      router.push("/auth/login")
    } finally {
      setLoading(false)
    }
  }

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/users?search=${searchTerm}`)
      const data = await response.json()
      if (data.success) {
        setUsers(data.data)
      }
    } catch (error) {
      console.error("Kullanıcılar yüklenemedi:", error)
    }
  }

  const fetchConversations = async () => {
    try {
      const response = await fetch("/api/messages")
      const data = await response.json()
      if (data.success) {
        setConversations(data.data)
      }
    } catch (error) {
      console.error("Konuşmalar yüklenemedi:", error)
    }
  }

  const fetchMessages = async (userId: number) => {
    try {
      const response = await fetch(`/api/messages?with=${userId}`)
      const data = await response.json()
      if (data.success) {
        setMessages(data.data)
      }
    } catch (error) {
      console.error("Mesajlar yüklenemedi:", error)
    }
  }

  const markAsRead = async (senderId: number) => {
    try {
      await fetch("/api/messages/mark-read", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ senderId }),
      })
    } catch (error) {
      console.error("Mesajlar okundu olarak işaretlenemedi:", error)
    }
  }

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMessage.trim() || !selectedUser || sending) return

    setSending(true)
    try {
      const response = await fetch("/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          receiverId: selectedUser.id,
          content: newMessage.trim(),
        }),
      })

      const data = await response.json()
      if (data.success) {
        setMessages((prev) => [...prev, data.data])
        setNewMessage("")
        fetchConversations() // Konuşma listesini güncelle
      }
    } catch (error) {
      console.error("Mesaj gönderilemedi:", error)
    } finally {
      setSending(false)
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
                SkInfluencer
              </h1>
            </Link>

            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="text-gray-600 hover:text-pink-500 transition-colors">
                Dashboard
              </Link>
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

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
          style={{ height: "calc(100vh - 200px)" }}
        >
          <div className="flex h-full">
            {/* Sidebar - Kullanıcılar ve Konuşmalar */}
            <div className="w-1/3 border-r border-gray-200 flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Mesajlar</h2>

                {/* Search */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Kullanıcı ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>

              {/* Kullanıcı Listesi */}
              <div className="flex-1 overflow-y-auto">
                {searchTerm ? (
                  // Arama sonuçları
                  <div className="p-2">
                    <h3 className="text-sm font-medium text-gray-500 px-2 py-1">Kullanıcılar</h3>
                    {users
                      .filter(
                        (user) =>
                          user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          user.email.toLowerCase().includes(searchTerm.toLowerCase()),
                      )
                      .map((user) => (
                        <button
                          key={user.id}
                          onClick={() => {
                            setSelectedUser(user)
                            setSearchTerm("")
                          }}
                          className="w-full flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {user.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="flex-1 text-left">
                            <p className="font-medium text-gray-900">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.role === "admin" ? "Yönetici" : "Kullanıcı"}</p>
                          </div>
                        </button>
                      ))}
                  </div>
                ) : (
                  // Konuşmalar
                  <div className="p-2">
                    <h3 className="text-sm font-medium text-gray-500 px-2 py-1">Konuşmalar</h3>
                    {conversations.map((conversation) => {
                      const otherUser =
                        conversation.senderId === currentUser?.id ? conversation.receiver : conversation.sender
                      const isUnread = !conversation.read && conversation.receiverId === currentUser?.id

                      return (
                        <button
                          key={`${conversation.senderId}-${conversation.receiverId}`}
                          onClick={() => setSelectedUser(otherUser)}
                          className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                            selectedUser?.id === otherUser.id
                              ? "bg-pink-50 border-l-4 border-pink-500"
                              : "hover:bg-gray-50"
                          }`}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-sm font-bold">
                              {otherUser.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </span>
                          </div>
                          <div className="flex-1 text-left">
                            <div className="flex items-center justify-between">
                              <p className={`font-medium ${isUnread ? "text-gray-900" : "text-gray-700"}`}>
                                {otherUser.name}
                              </p>
                              {isUnread && <div className="w-2 h-2 bg-pink-500 rounded-full"></div>}
                            </div>
                            <p
                              className={`text-sm truncate ${isUnread ? "text-gray-600 font-medium" : "text-gray-500"}`}
                            >
                              {conversation.content}
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {selectedUser ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b border-gray-200 bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">
                          {selectedUser.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{selectedUser.name}</h3>
                        <p className="text-sm text-gray-500">
                          {selectedUser.role === "admin" ? "Yönetici" : "Kullanıcı"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.senderId === currentUser?.id ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                            message.senderId === currentUser?.id
                              ? "bg-pink-500 text-white"
                              : "bg-gray-100 text-gray-900"
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <p
                            className={`text-xs mt-1 ${
                              message.senderId === currentUser?.id ? "text-pink-100" : "text-gray-500"
                            }`}
                          >
                            {new Date(message.createdAt).toLocaleTimeString("tr-TR", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <form onSubmit={sendMessage} className="p-4 border-t border-gray-200">
                    <div className="flex space-x-3">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Mesajınızı yazın..."
                        className="flex-1 px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
                        disabled={sending}
                      />
                      <button
                        type="submit"
                        disabled={!newMessage.trim() || sending}
                        className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {sending ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        ) : (
                          "Gönder"
                        )}
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                // No chat selected
                <div className="flex-1 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 text-gray-300 mx-auto mb-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Mesajlaşmaya Başla</h3>
                    <p className="text-gray-500">Bir kullanıcı seçin veya arama yapın</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
