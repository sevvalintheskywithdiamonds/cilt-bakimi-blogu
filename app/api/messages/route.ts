import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"
import { withSecurity } from "../../../lib/api-wrapper"
import { sanitizeInput } from "../../../lib/security"

async function getMessages(request: NextRequest, context: any) {
  const { searchParams } = new URL(request.url)
  const conversationWith = searchParams.get("with")
  const userId = context.user.userId

  let messages

  if (conversationWith) {
    const otherUserId = Number.parseInt(conversationWith)

    
    const otherUser = await prisma.user.findUnique({
      where: { id: otherUserId },
    })

    if (!otherUser) {
      return NextResponse.json({ success: false, message: "Kullanıcı bulunamadı" }, { status: 404 })
    }

    messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: userId, receiverId: otherUserId },
          { senderId: otherUserId, receiverId: userId },
        ],
      },
      include: {
        sender: {
          select: { id: true, name: true, avatar: true },
        },
        receiver: {
          select: { id: true, name: true, avatar: true },
        },
      },
      orderBy: { createdAt: "asc" },
    })
  } else {
    const conversations = await prisma.message.findMany({
      where: {
        OR: [{ senderId: userId }, { receiverId: userId }],
      },
      include: {
        sender: {
          select: { id: true, name: true, avatar: true },
        },
        receiver: {
          select: { id: true, name: true, avatar: true },
        },
      },
      orderBy: { createdAt: "desc" },
    })

    const conversationMap = new Map()
    conversations.forEach((message) => {
      const otherUserId = message.senderId === userId ? message.receiverId : message.senderId
      if (!conversationMap.has(otherUserId)) {
        conversationMap.set(otherUserId, message)
      }
    })

    messages = Array.from(conversationMap.values())
  }

  return NextResponse.json({
    success: true,
    data: messages,
  })
}

async function sendMessage(request: NextRequest, context: any) {
  const { receiverId, content } = await request.json()
  const senderId = context.user.userId

  
  if (!receiverId || !content) {
    return NextResponse.json({ success: false, message: "Alıcı ve mesaj içeriği gereklidir" }, { status: 400 })
  }

  
  const sanitizedContent = sanitizeInput(content)

  if (sanitizedContent.length === 0) {
    return NextResponse.json({ success: false, message: "Mesaj içeriği boş olamaz" }, { status: 400 })
  }

  if (sanitizedContent.length > 1000) {
    return NextResponse.json({ success: false, message: "Mesaj çok uzun (max 1000 karakter)" }, { status: 400 })
  }

  
  if (senderId === receiverId) {
    return NextResponse.json({ success: false, message: "Kendinize mesaj gönderemezsiniz" }, { status: 400 })
  }

  
  const receiver = await prisma.user.findUnique({
    where: { id: receiverId },
  })

  if (!receiver) {
    return NextResponse.json({ success: false, message: "Alıcı bulunamadı" }, { status: 404 })
  }

  const message = await prisma.message.create({
    data: {
      content: sanitizedContent,
      senderId,
      receiverId,
    },
    include: {
      sender: {
        select: { id: true, name: true, avatar: true },
      },
      receiver: {
        select: { id: true, name: true, avatar: true },
      },
    },
  })

  return NextResponse.json({
    success: true,
    data: message,
  })
}

export const GET = withSecurity(getMessages, {
  requireAuth: true,
  rateLimit: { limit: 200, windowMs: 15 * 60 * 1000 },
})

export const POST = withSecurity(sendMessage, {
  requireAuth: true,
  rateLimit: { limit: 50, windowMs: 15 * 60 * 1000 },
})
