import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../../../lib/prisma"
import { withSecurity } from "../../../../../lib/api-wrapper"
import { sanitizeInput } from "../../../../../lib/security"

async function updatePost(request: NextRequest, { params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)
  const data = await request.json()

  
  const updateData: any = {}

  if (data.published !== undefined) {
    updateData.published = Boolean(data.published)
  }

  if (data.featured !== undefined) {
    updateData.featured = Boolean(data.featured)
  }

  if (data.title) {
    updateData.title = sanitizeInput(data.title)
  }

  if (data.content) {
    updateData.content = sanitizeInput(data.content)
  }

  const updatedPost = await prisma.post.update({
    where: { id: postId },
    data: updateData,
    include: {
      author: {
        select: { id: true, name: true },
      },
      category: {
        select: { id: true, name: true, color: true },
      },
    },
  })

  return NextResponse.json({
    success: true,
    data: updatedPost,
  })
}

async function deletePost(request: NextRequest, { params }: { params: { id: string } }) {
  const postId = Number.parseInt(params.id)

  await prisma.post.delete({
    where: { id: postId },
  })

  return NextResponse.json({
    success: true,
    message: "Makale başarıyla silindi",
  })
}

export const PATCH = withSecurity(updatePost, {
  requireAdmin: true,
  rateLimit: { limit: 50, windowMs: 15 * 60 * 1000 },
})

export const DELETE = withSecurity(deletePost, {
  requireAdmin: true,
  rateLimit: { limit: 20, windowMs: 15 * 60 * 1000 },
})
