import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export async function GET() {
  try {
    const filePath = join(process.cwd(), "src", "data", "posts.json");
    const posts = JSON.parse(readFileSync(filePath, "utf-8"));
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json({ error: "Failed to load posts." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, category, excerpt, content } = body;

    if (!title || !category || !excerpt || !content) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const filePath = join(process.cwd(), "src", "data", "posts.json");
    const existing: Post[] = JSON.parse(readFileSync(filePath, "utf-8"));

    const baseSlug = slugify(title);
    let slug = baseSlug;
    let counter = 2;
    while (existing.some((p) => p.slug === slug)) {
      slug = `${baseSlug}-${counter++}`;
    }

    const now = new Date();
    const date = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
    const isoDate = now.toISOString().split("T")[0];

    const newPost: Post = { slug, date, isoDate, category, title, excerpt, content };
    const updated = [newPost, ...existing];

    writeFileSync(filePath, JSON.stringify(updated, null, 2));

    return NextResponse.json({ success: true, slug });
  } catch {
    return NextResponse.json({ error: "Failed to save post." }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) return NextResponse.json({ error: "Slug required." }, { status: 400 });

    const filePath = join(process.cwd(), "src", "data", "posts.json");
    const existing: Post[] = JSON.parse(readFileSync(filePath, "utf-8"));
    const updated = existing.filter((p) => p.slug !== slug);

    if (updated.length === existing.length) {
      return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

    writeFileSync(filePath, JSON.stringify(updated, null, 2));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete post." }, { status: 500 });
  }
}

interface Post {
  slug: string;
  date: string;
  isoDate: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
}
