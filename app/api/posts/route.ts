import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const featured = searchParams.get("featured")
    const category = searchParams.get("category")
    const limit = searchParams.get("limit")

    const whereClause: any = {
      published: true,
    }

    if (featured === "true") {
      whereClause.featured = true
    }

    if (category) {
      whereClause.category = {
        name: category,
      }
    }

    const posts = await prisma.post.findMany({
      where: whereClause,
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
      take: limit ? Number.parseInt(limit) : undefined,
    })

    return NextResponse.json({
      success: true,
      data: posts,
    })
  } catch (error) {
    console.error("Posts API hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Makaleler yüklenirken hata oluştu",
        error: error instanceof Error ? error.message : "Bilinmeyen hata",
      },
      { status: 500 },
    )
  }
}
