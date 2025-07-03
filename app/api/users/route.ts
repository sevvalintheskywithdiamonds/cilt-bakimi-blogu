import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "../../../lib/prisma"
import { withSecurity } from "../../../lib/api-wrapper"
import { sanitizeInput } from "../../../lib/security"

async function getUsers(request: NextRequest, context: any) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get("search")
  const currentUserId = context.user.userId

  const whereClause: any = {
    id: { not: currentUserId },
  }

  if (search) {
    const sanitizedSearch = sanitizeInput(search)
    whereClause.OR = [
      { name: { contains: sanitizedSearch, mode: "insensitive" } },
      { email: { contains: sanitizedSearch, mode: "insensitive" } },
    ]
  }

  const users = await prisma.user.findMany({
    where: whereClause,
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      role: true,
      bio: true,
    },
    take: 20,
    orderBy: { name: "asc" },
  })

  return NextResponse.json({
    success: true,
    data: users,
  })
}

export const GET = withSecurity(getUsers, {
  requireAuth: true,
  rateLimit: { limit: 100, windowMs: 15 * 60 * 1000 },
})
