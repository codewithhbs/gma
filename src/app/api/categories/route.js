import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Category from "@/lib/models/Category";
import { verifyToken } from "@/lib/auth";



export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-admin-token",
        "Access-Control-Allow-Credentials": "true",
      },
    }
  );
}


export async function GET() {
  await connectToDB();
  const cats = await Category.find().sort({ createdAt: -1 });
  return NextResponse.json(cats);
}



export async function POST(req) {
  await connectToDB();
  const { name, slug, status } = await req.json();

  if (!name || !slug) {
    return NextResponse.json({ message: "Name and slug are required" }, { status: 400 });
  }

  const category = await Category.create({ name, slug, status });
return NextResponse.json({ message: "Category created", category }, { status: 201 })
}
