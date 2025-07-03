import type { NextRequest } from "next/server"
import jwt from "jsonwebtoken"

// Rate limiting için basit in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

export function rateLimit(ip: string, limit = 100, windowMs: number = 15 * 60 * 1000) {
  const now = Date.now()
  const key = `rate_limit_${ip}`

  const current = rateLimitStore.get(key)

  if (!current || now > current.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs })
    return { allowed: true, remaining: limit - 1 }
  }

  if (current.count >= limit) {
    return { allowed: false, remaining: 0 }
  }

  current.count++
  return { allowed: true, remaining: limit - current.count }
}

export function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for")
  const real = request.headers.get("x-real-ip")

  if (forwarded) {
    return forwarded.split(",")[0].trim()
  }

  if (real) {
    return real
  }

  return "unknown"
}

export async function verifyAuth(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value

  if (!token) {
    return { success: false, error: "Token bulunamadı" }
  }

  try {
    const decoded = jwt.verify(token, process.env.NEXTAUTH_SECRET || "fallback-secret") as any
    return { success: true, user: decoded }
  } catch (error) {
    return { success: false, error: "Geçersiz token" }
  }
}

export async function verifyAdmin(request: NextRequest) {
  const authResult = await verifyAuth(request)

  if (!authResult.success) {
    return authResult
  }

  if (authResult.user.role !== "admin") {
    return { success: false, error: "Yetkisiz erişim" }
  }

  return authResult
}

// SQL Injection koruması için basit sanitization
export function sanitizeInput(input: string): string {
  if (typeof input !== "string") return ""

  return input
    .replace(/[<>]/g, "") // XSS koruması
    .replace(/['";]/g, "") // SQL injection koruması
    .trim()
}

// Email validation
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password strength check
export function isStrongPassword(password: string): { valid: boolean; message?: string } {
  if (password.length < 6) {
    return { valid: false, message: "Şifre en az 6 karakter olmalıdır" }
  }

  if (password.length > 128) {
    return { valid: false, message: "Şifre çok uzun" }
  }

  // En az bir harf ve bir rakam içermeli
  if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(password)) {
    return { valid: false, message: "Şifre en az bir harf ve bir rakam içermelidir" }
  }

  return { valid: true }
}
