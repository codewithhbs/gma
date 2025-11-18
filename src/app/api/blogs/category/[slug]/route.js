import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Blog from "@/lib/models/Blog";
import Category from "@/lib/models/Category";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const { slug } = params; // Get slug from URL
    if (!slug) return NextResponse.json([], { status: 200 });

    // Find category document by slug
    const category = await Category.findOne({ slug });
    if (!category) return NextResponse.json([], { status: 200 });

    // Find blogs belonging to this category
    const blogs = await Blog.find({ category: category._id })
      .populate("category", "name slug")
      .sort({ createdAt: -1 });

    return NextResponse.json(blogs);
  } catch (err) {
    console.error("Error fetching blogs by category:", err);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
