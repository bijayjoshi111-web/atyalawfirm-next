import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";

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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, category, excerpt, content, submitterName, submitterEmail } = body;

    if (!title || !category || !excerpt || !content || !submitterName) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    const filePath = join(process.cwd(), "src", "data", "pending.json");
    const existing: PendingPost[] = JSON.parse(readFileSync(filePath, "utf-8"));

    const newSubmission: PendingPost = {
      id: randomUUID(),
      submittedAt: new Date().toISOString(),
      submitterName,
      submitterEmail: submitterEmail || "",
      title,
      category,
      excerpt,
      content,
    };

    writeFileSync(filePath, JSON.stringify([newSubmission, ...existing], null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to save submission." }, { status: 500 });
  }
}
