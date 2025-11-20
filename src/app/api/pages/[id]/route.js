import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Page from "@/lib/models/Page";
import { uploadToCloudinary } from "@/lib/uploadImage";

// GET page by ID
export async function GET(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;
    const page = await Page.findById(id);
    if (!page) return NextResponse.json({ success: false, message: "Page not found" }, { status: 404 });
    return NextResponse.json({ success: true, page });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

// PUT (Update) page by ID
export async function PUT(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;
    const formData = await req.formData();

    const updateData = {
      title: formData.get("title"),
      slug: formData.get("slug"),
      content: formData.get("content"),
      active: formData.get("active") === "true",
      metaTitle: formData.get("metaTitle"),
      metaDescription: formData.get("metaDescription"),
      metaKeywords: formData.get("metaKeywords")?.split(",").map(k => k.trim()) || [],
      canonicalUrl: formData.get("canonicalUrl"),
      ogTitle: formData.get("ogTitle"),
      ogDescription: formData.get("ogDescription"),
      index: formData.get("index") === "true",
      follow: formData.get("follow") === "true",
    };

    // Handle image update
    const image = formData.get("image");
    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = `data:${image.type};base64,${buffer.toString("base64")}`;
      const uploaded = await uploadToCloudinary(base64, "pages");
      updateData.image = {
        url: uploaded.url,
        key: uploaded.key,
        alt: formData.get("altText") || "",
      };
    }

    const updatedPage = await Page.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedPage) return NextResponse.json({ success: false, message: "Page not found" }, { status: 404 });

    return NextResponse.json({ success: true, page: updatedPage }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

// DELETE page by ID
export async function DELETE(req, { params }) {
  try {
    await connectToDB();
    const { id } = params;
    const deletedPage = await Page.findByIdAndDelete(id);
    if (!deletedPage) return NextResponse.json({ success: false, message: "Page not found" }, { status: 404 });
    return NextResponse.json({ success: true, message: "Page deleted successfully" });
  } catch (err) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}
