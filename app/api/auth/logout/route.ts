import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST() {
  try {
    const cookieStore = cookies()
    cookieStore.delete("auth-token")

    return NextResponse.json({
      success: true,
      message: "Çıkış başarılı",
    })
  } catch (error) {
    console.error("Logout API hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Çıkış yapılırken hata oluştu",
      },
      { status: 500 },
    )
  }
}
