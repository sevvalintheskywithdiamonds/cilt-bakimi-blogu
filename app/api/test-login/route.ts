import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    console.log("Test login API çağrıldı")
    const body = await request.json()
    console.log("Gelen data:", body)

    return NextResponse.json({
      success: true,
      message: "Test başarılı",
      receivedData: body,
    })
  } catch (error) {
    console.error("Test API hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Test hatası",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
