import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { prisma } from "../../../../lib/prisma"

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Oturum bulunamadı",
        },
        { status: 401 },
      )
    }

    
    const decoded = jwt.verify(token.value, process.env.NEXTAUTH_SECRET || "fallback-secret") as any

    
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        bio: true,
        createdAt: true,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Kullanıcı bulunamadı",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      user,
    })
  } catch (error) {
    console.error("Me API hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Kullanıcı bilgileri alınırken hata oluştu",
      },
      { status: 401 },
    )
  }
}
