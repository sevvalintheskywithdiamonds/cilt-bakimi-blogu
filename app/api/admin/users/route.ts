import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { prisma } from "../../../../lib/prisma"

export async function GET() {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return NextResponse.json({ success: false, message: "Oturum bulunamadı" }, { status: 401 })
    }

    const decoded = jwt.verify(token.value, process.env.NEXTAUTH_SECRET || "fallback-secret") as any

    
    const currentUser = await prisma.user.findUnique({
      where: { id: decoded.userId },
    })

    if (!currentUser || currentUser.role !== "admin") {
      return NextResponse.json({ success: false, message: "Yetkisiz erişim" }, { status: 403 })
    }

    
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        avatar: true,
        bio: true,
        createdAt: true,
        _count: {
          select: {
            posts: true,
            comments: true,
            sentMessages: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    return NextResponse.json({
      success: true,
      data: users,
    })
  } catch (error) {
    console.error("Admin users API hatası:", error)
    return NextResponse.json({ success: false, message: "Kullanıcılar yüklenirken hata oluştu" }, { status: 500 })
  }
}
