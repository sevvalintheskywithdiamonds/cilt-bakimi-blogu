import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from "jsonwebtoken"
import { prisma } from "../../../../../lib/prisma"


export async function PATCH(request: Request, { params }: { params: { id: string } }) {
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

    const { role } = await request.json()
    const userId = Number.parseInt(params.id)

    
    if (userId === decoded.userId) {
      return NextResponse.json({ success: false, message: "Kendi rolünüzü değiştiremezsiniz" }, { status: 400 })
    }

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    })

    return NextResponse.json({
      success: true,
      data: updatedUser,
    })
  } catch (error) {
    console.error("User update API hatası:", error)
    return NextResponse.json({ success: false, message: "Kullanıcı güncellenirken hata oluştu" }, { status: 500 })
  }
}


export async function DELETE(request: Request, { params }: { params: { id: string } }) {
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

    const userId = Number.parseInt(params.id)

    
    if (userId === decoded.userId) {
      return NextResponse.json({ success: false, message: "Kendi hesabınızı silemezsiniz" }, { status: 400 })
    }

    await prisma.user.delete({
      where: { id: userId },
    })

    return NextResponse.json({
      success: true,
      message: "Kullanıcı başarıyla silindi",
    })
  } catch (error) {
    console.error("User delete API hatası:", error)
    return NextResponse.json({ success: false, message: "Kullanıcı silinirken hata oluştu" }, { status: 500 })
  }
}
