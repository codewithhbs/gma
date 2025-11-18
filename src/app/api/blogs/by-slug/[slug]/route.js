import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Blog from "@/lib/models/Blog";
import Category from "@/lib/models/Category";


export async function GET(req, { params }) {
  await connectToDB();

  const { slug } = params; // get slug from URL path

  try {
    const blog = await Blog.findOne({ slug }).populate("category", "name");

    if (!blog) {
      return NextResponse.json(
        { message: "Blog not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}
