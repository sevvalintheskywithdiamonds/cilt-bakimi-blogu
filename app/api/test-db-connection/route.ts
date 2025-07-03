import { NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"

export async function GET() {
  try {
    console.log("Veritabanı bağlantısı test ediliyor...")

    
    const userCount = await prisma.user.count()
    console.log("Kullanıcı sayısı:", userCount)

    
    const adminUser = await prisma.user.findUnique({
      where: { email: "admin@skincare.com" },
    })
    console.log("Admin kullanıcısı:", adminUser ? "Bulundu" : "Bulunamadı")

    return NextResponse.json({
      success: true,
      message: "Veritabanı bağlantısı başarılı",
      data: {
        userCount,
        adminExists: !!adminUser,
        adminUser: adminUser
          ? {
              id: adminUser.id,
              email: adminUser.email,
              name: adminUser.name,
              role: adminUser.role,
            }
          : null,
      },
    })
  } catch (error) {
    console.error("Veritabanı hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Veritabanı bağlantısı başarısız",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
