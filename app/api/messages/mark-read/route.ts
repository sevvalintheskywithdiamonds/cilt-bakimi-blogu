import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { prisma } from "../../../../lib/prisma"

export async function POST(request: Request) {
  try {
    const cookieStore = cookies()
    const token = cookieStore.get("auth-token")

    if (!token) {
      return NextResponse.json({ success: false, message: "Oturum bulunamadı" }, { status: 401 })
    }

    const decoded = jwt.verify(token.value, process.env.NEXTAUTH_SECRET || "fallback-secret") as any
    const { senderId } = await request.json()

    
    await prisma.message.updateMany({
      where: {
        senderId,
        receiverId: decoded.userId,
        read: false,
      },
      data: {
        read: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: "Mesajlar okundu olarak işaretlendi",
    })
  } catch (error) {
    console.error("Mark read API hatası:", error)
    return NextResponse.json({ success: false, message: "Mesajlar işaretlenirken hata oluştu" }, { status: 500 })
  }
}
