import { type NextRequest, NextResponse } from "next/server"
import { rateLimit, getClientIP, verifyAuth, verifyAdmin } from "./security"

interface ApiOptions {
  requireAuth?: boolean
  requireAdmin?: boolean
  rateLimit?: {
    limit: number
    windowMs: number
  }
}

export function withSecurity(
  handler: (request: NextRequest, context?: any) => Promise<NextResponse>,
  options: ApiOptions = {},
) {
  return async (request: NextRequest, context?: any) => {
    try {
      // Rate limiting
      if (options.rateLimit) {
        const ip = getClientIP(request)
        const rateLimitResult = rateLimit(ip, options.rateLimit.limit, options.rateLimit.windowMs)

        if (!rateLimitResult.allowed) {
          return NextResponse.json(
            { success: false, message: "Çok fazla istek. Lütfen daha sonra tekrar deneyin." },
            { status: 429 },
          )
        }
      }

      // Authentication check
      if (options.requireAuth || options.requireAdmin) {
        const authResult = options.requireAdmin ? await verifyAdmin(request) : await verifyAuth(request)

        if (!authResult.success) {
          return NextResponse.json(
            { success: false, message: authResult.error },
            { status: options.requireAdmin ? 403 : 401 },
          )
        }

        // Add user to request context
        if (context) {
          context.user = authResult.user
        }
      }

      // Call the actual handler
      return await handler(request, context)
    } catch (error) {
      console.error("API Error:", error)
      return NextResponse.json({ success: false, message: "Sunucu hatası" }, { status: 500 })
    }
  }
}
