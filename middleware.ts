import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth-token")?.value

  console.log("Middleware çalışıyor:", pathname)
  console.log("Token var mı:", !!token)

  // Dashboard'a erişim kontrolü
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      console.log("Token yok, login'e yönlendiriliyor")
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
    console.log("Token var, dashboard'a erişim izni veriliyor")
  }

  // Admin sayfalarına erişim kontrolü
  if (pathname.startsWith("/admin")) {
    if (!token) {
      console.log("Admin sayfası - token yok")
      return NextResponse.redirect(new URL("/auth/login", request.url))
    }
    console.log("Admin sayfası - token var")
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
}
