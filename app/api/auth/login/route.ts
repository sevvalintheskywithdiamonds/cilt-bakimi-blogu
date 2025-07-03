import { NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import { verifyPassword } from "../../../../lib/auth"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"

export async function POST(request: Request) {
  try {
    console.log("Login API çağrıldı")
    const { email, password } = await request.json()
    console.log("Gelen email:", email)

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "E-posta ve şifre gereklidir" }, { status: 400 })
    }

    
    const user = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    })

    console.log("Kullanıcı bulundu mu:", !!user)

    if (!user) {
      return NextResponse.json({ success: false, message: "Geçersiz e-posta veya şifre" }, { status: 401 })
    }

    
    const isValidPassword = await verifyPassword(password, user.password)
    console.log("Şifre doğru mu:", isValidPassword)

    if (!isValidPassword) {
      return NextResponse.json({ success: false, message: "Geçersiz e-posta veya şifre" }, { status: 401 })
    }

    
    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        role: user.role,
      },
      process.env.NEXTAUTH_SECRET || "fallback-secret",
      { expiresIn: "7d" },
    )

    console.log("Token oluşturuldu")

    
    const cookieStore = cookies()
    cookieStore.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, 
      path: "/", 
    })

    console.log("Cookie set edildi")

    return NextResponse.json({
      success: true,
      message: "Giriş başarılı",
      redirectUrl: "/dashboard",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Login API hatası:", error)
    return NextResponse.json({ success: false, message: "Giriş yapılırken hata oluştu" }, { status: 500 })
  }
}
