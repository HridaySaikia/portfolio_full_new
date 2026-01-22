import { connectDB } from "@/lib/db";
import { Education } from "@/lib/models/Education";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  try {
    const edu = await Education.findById(id);
    if (!edu) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(edu);
  } catch {
    return NextResponse.json({ error: "Failed to fetch education" }, { status: 500 });
  }
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  try {
    const body = await req.json();
    const updated = await Education.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  try {
    await Education.findByIdAndDelete(id);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
