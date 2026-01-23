import { connectDB } from "@/lib/db";
import { Skill } from "@/lib/models/Skill";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  const skill = await Skill.findById(id);
  return NextResponse.json(skill);
}

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  const data = await req.json();
  const updated = await Skill.findByIdAndUpdate(id, data, { new: true });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  await connectDB();
  const { id } = await params;
  await Skill.findByIdAndDelete(id);
  return NextResponse.json({ message: "Deleted" });
}
