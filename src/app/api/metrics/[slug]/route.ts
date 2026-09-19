import { NextResponse } from "next/server";
import { redis } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    if (!redis) {
      return NextResponse.json({ views: 0 }, { status: 200 }); // Mock during dev
    }

    const views = await redis.get<number>(`pageviews:blog:${slug}`);
    return NextResponse.json({ views: views || 0 }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch views" }, { status: 500 });
  }
}

export async function POST(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    if (!redis) {
      return NextResponse.json({ views: 1 }, { status: 200 }); // Mock during dev
    }

    const views = await redis.incr(`pageviews:blog:${slug}`);
    return NextResponse.json({ views }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to increment views" }, { status: 500 });
  }
}
