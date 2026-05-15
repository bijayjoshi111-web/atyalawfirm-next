import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

interface PendingPost {
  id: string;
  submittedAt: string;
  submitterName: string;
  submitterEmail: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
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

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const pendingPath = () => join(process.cwd(), "src", "data", "pending.json");
const postsPath = () => join(process.cwd(), "src", "data", "posts.json");

export async function GET() {
  try {
    const pending: PendingPost[] = JSON.parse(readFileSync(pendingPath(), "utf-8"));
    return NextResponse.json(pending);
  } catch {
    return NextResponse.json({ error: "Failed to load submissions." }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { action, id } = await req.json();

    const pending: PendingPost[] = JSON.parse(readFileSync(pendingPath(), "utf-8"));
    const submission = pending.find((p) => p.id === id);
    if (!submission) {
      return NextResponse.json({ error: "Submission not found." }, { status: 404 });
    }

    if (action === "approve") {
      const posts: Post[] = JSON.parse(readFileSync(postsPath(), "utf-8"));
      const baseSlug = slugify(submission.title);
      let slug = baseSlug;
      let counter = 2;
      while (posts.some((p) => p.slug === slug)) {
        slug = `${baseSlug}-${counter++}`;
      }

      const now = new Date(submission.submittedAt);
      const date = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
      const isoDate = now.toISOString().split("T")[0];

      const newPost: Post = {
        slug,
        date,
        isoDate,
        category: submission.category,
        title: submission.title,
        excerpt: submission.excerpt,
        content: submission.content,
      };

      writeFileSync(postsPath(), JSON.stringify([newPost, ...posts], null, 2));
    }

    const updated = pending.filter((p) => p.id !== id);
    writeFileSync(pendingPath(), JSON.stringify(updated, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to process submission." }, { status: 500 });
  }
}
