import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Category from "@/lib/models/Category";

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

export async function GET(req, { params }) {
  await connectToDB();
  const cat = await Category.findById(params.id);

  if (!cat) return NextResponse.json({ message: "Not Found" }, { status: 404 });

  return NextResponse.json(cat);
}

export async function PUT(req, { params }) {
  await connectToDB();
  const body = await req.json();
  const updated = await Category.findByIdAndUpdate(params.id, body, { new: true });

  if (!updated) {
    return NextResponse.json({ message: "Category not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Category updated", category: updated }, { status: 200 });
}


export async function DELETE(req, { params }) {
  await connectToDB();
  await Category.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Deleted Successfully" });
}
