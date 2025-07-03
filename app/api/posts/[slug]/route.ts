import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: params.slug,
        published: true,
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            bio: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            color: true,
          },
        },
        comments: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        _count: {
          select: {
            comments: true,
          },
        },
      },
    })

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: "Makale bulunamadı",
        },
        { status: 404 },
      )
    }

    
    const relatedPosts = await prisma.post.findMany({
      where: {
        categoryId: post.categoryId,
        published: true,
        id: {
          not: post.id,
        },
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        category: {
          select: {
            id: true,
            name: true,
            color: true,
          },
        },
      },
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        post,
        relatedPosts,
      },
    })
  } catch (error) {
    console.error("Post API hatası:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Makale yüklenirken hata oluştu",
        error: error instanceof Error ? error.message : "Bilinmeyen hata",
      },
      { status: 500 },
    )
  }
}
