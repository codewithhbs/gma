import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Blog from "@/lib/models/Blog";
import { verifyToken } from "@/lib/auth";
import { uploadToCloudinary, deleteFromCloudinary } from "@/lib/uploadImage";

// =========================================================
//  OPTIONS (CORS)
// =========================================================
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

// =========================================================
//  GET SINGLE BLOG
// =========================================================
export async function GET(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;

    const blog = await Blog.findById(id).populate("category", "name");

    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error: error.message },
      { status: 500 }
    );
  }
}

// =========================================================
//  UPDATE BLOG (PUT)
// =========================================================
export async function PUT(req, { params }) {
  try {
    await connectToDB();

   

    const { id } = params;

    // form-data for update
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

    const newImage = formData.get("image");

    // find blog
    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // ================================
    // IMAGE UPDATE
    // ================================
    if (newImage && newImage.size > 0) {
      // delete old image
      if (blog.image?.key) {
        await deleteFromCloudinary(blog.image.key);
      }

      // convert → base64
      const bytes = await newImage.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64String = `data:${newImage.type};base64,${buffer.toString(
        "base64"
      )}`;

      const uploaded = await uploadToCloudinary(base64String, "blogs");

      blog.image = {
        url: uploaded.url,
        key: uploaded.key,
        alt: altText,
      };
    } else {
      // update alt text only
      if (altText && blog.image) {
        blog.image.alt = altText;
      }
    }

    // update fields
    blog.title = title;
    blog.slug = slug;
    blog.content = content;
    blog.category = category;
    blog.tags = tags;
    blog.metaTitle = metaTitle;
    blog.metaDescription = metaDescription;
    blog.metaKeywords = metaKeywords;
    blog.canonicalUrl = canonicalUrl;
    blog.ogTitle = ogTitle;
    blog.ogDescription = ogDescription;
    blog.index = index;
    blog.follow = follow;

    await blog.save();

    return NextResponse.json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Blog Update Error:", error);
    return NextResponse.json(
      { message: "Update failed", error: error.message },
      { status: 500 }
    );
  }
}

// =========================================================
//  DELETE BLOG
// =========================================================
export async function DELETE(req, { params }) {
  try {
    await connectToDB();

    const { id } = params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    // delete cloudinary image
    if (blog.image?.key) {
      await deleteFromCloudinary(blog.image.key);
    }

    await Blog.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Delete failed", error: error.message },
      { status: 500 }
    );
  }
}
