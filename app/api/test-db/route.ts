import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"

export async function GET() {
  try {
    
    const userCount = await prisma.user.count()
    const postCount = await prisma.post.count()
    const categoryCount = await prisma.category.count()

    return NextResponse.json({
      success: true,
      message: "Veritabanı bağlantısı başarılı!",
      data: {
        users: userCount,
        posts: postCount,
        categories: categoryCount,
      },
    })
  } catch (error) {
    console.error("Veritabanı hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Veritabanı bağlantısı başarısız!",
        error: error instanceof Error ? error.message : "Bilinmeyen hata",
      },
      { status: 500 },
    )
  }
}
