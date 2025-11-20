import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Blog from "@/lib/models/Blog";
import { uploadToCloudinary } from "@/lib/uploadImage";



export async function GET() {
  await connectToDB();
  const blogs = await Blog.find()
    .populate("category", "name")
    .sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req) {
  try {
    await connectToDB();

    // Read Multipart Form Data
    const formData = await req.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const content = formData.get("content");
    const category = formData.get("category");
    const tags = formData.get("tags");
    const altText = formData.get("altText") || "";

    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const metaKeywords = formData.get("metaKeywords");
    const canonicalUrl = formData.get("canonicalUrl");
    const ogTitle = formData.get("ogTitle");
    const ogDescription = formData.get("ogDescription");
    const index = formData.get("index");
    const follow = formData.get("follow");

    // ---- Image Upload using Base64 ----
    let imageData = {};

    const image = formData.get("image");

    if (image && image.size > 0) {
      // Convert file → buffer → base64 (Cloudinary-safe)
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64String = `data:${image.type};base64,${buffer.toString(
        "base64"
      )}`;

      const uploaded = await uploadToCloudinary(base64String, "blogs");

      imageData = {
        url: uploaded.url,
        key: uploaded.key,
        alt: altText,
      };
    }

    // ---- Create Blog ----
    const blog = await Blog.create({
      title,
      slug,
      content,
      category,
      tags,
      metaTitle,
      metaDescription,
      metaKeywords,
      canonicalUrl,
      ogTitle,
      ogDescription,
      index,
      follow,
      image: imageData,
    });

    return NextResponse.json({ success: true, blog }, { status: 201 });
  } catch (error) {
    console.error("Blog Create Error:", error);
    return NextResponse.json(
      { message: "Create failed", error: error.message },
      { status: 500 }
    );
  }
}
