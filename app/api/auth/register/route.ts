import { NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import { createUser } from "../../../../lib/auth"
import { sanitizeInput, isValidEmail, isStrongPassword } from "../../../../lib/security"

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json()

    // Input validation
    if (!name || !email || !password) {
      return NextResponse.json({ success: false, message: "Tüm alanlar gereklidir" }, { status: 400 })
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email.toLowerCase())

    // Validate email
    if (!isValidEmail(sanitizedEmail)) {
      return NextResponse.json({ success: false, message: "Geçersiz e-posta adresi" }, { status: 400 })
    }

    // Validate password
    const passwordCheck = isStrongPassword(password)
    if (!passwordCheck.valid) {
      return NextResponse.json({ success: false, message: passwordCheck.message }, { status: 400 })
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email: sanitizedEmail },
    })

    if (existingUser) {
      return NextResponse.json({ success: false, message: "Bu e-posta adresi zaten kullanılıyor" }, { status: 400 })
    }

    // Create user
    const user = await createUser(sanitizedEmail, sanitizedName, password)

    return NextResponse.json({
      success: true,
      message: "Hesap başarıyla oluşturuldu",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  } catch (error) {
    console.error("Register API hatası:", error)
    return NextResponse.json({ success: false, message: "Hesap oluşturulurken hata oluştu" }, { status: 500 })
  }
}
