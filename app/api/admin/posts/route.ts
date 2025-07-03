import { NextResponse } from "next/server"
import { prisma } from "../../../../lib/prisma"
import { withSecurity } from "../../../../lib/api-wrapper"

async function getPosts() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      category: {
        select: {
          id: true,
          name: true,
          color: true,
        },
      },
      _count: {
        select: {
          comments: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return NextResponse.json({
    success: true,
    data: posts,
  })
}

export const GET = withSecurity(getPosts, {
  requireAdmin: true,
  rateLimit: { limit: 100, windowMs: 15 * 60 * 1000 },
})
