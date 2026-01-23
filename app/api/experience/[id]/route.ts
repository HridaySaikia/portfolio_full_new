import { connectDB } from "@/lib/db";
import { Experience } from "@/lib/models/Experience";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  try {
    const exp = await Experience.findById(id);
    if (!exp) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(exp);
  } catch {
    return NextResponse.json({ error: "Failed to fetch experience" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await Experience.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to update experience" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  try {
    await Experience.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
