import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Page from "@/lib/models/Page";
import { uploadToCloudinary } from "@/lib/uploadImage";



export async function GET() {
  await connectToDB();
  const page = await Page.find().sort({ createdAt: -1 });
  return NextResponse.json(page);
}


export async function POST(req) {
  try {
    await connectToDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const slug = formData.get("slug");
    const content = formData.get("content");
    const active = formData.get("active") === "true";

    const metaTitle = formData.get("metaTitle");
    const metaDescription = formData.get("metaDescription");
    const metaKeywordsArray = formData.get("metaKeywords")?.split(",").map(k => k.trim()) || [];
    const canonicalUrl = formData.get("canonicalUrl");
    const ogTitle = formData.get("ogTitle");
    const ogDescription = formData.get("ogDescription");
    const index = formData.get("index") === "true";
    const follow = formData.get("follow") === "true";

    // --------- Upload Image ----------
    let imageData = {};
    const image = formData.get("image");

    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const base64 = `data:${image.type};base64,${buffer.toString("base64")}`;

      const uploaded = await uploadToCloudinary(base64, "pages");

      imageData = {
        url: uploaded.url,
        key: uploaded.key,
        alt: formData.get("altText") || "",
      };
    }

    // --------- Insert Page ----------
    const page = await Page.create({
      title,
      slug,
      content,
      active,
      metaTitle,
      metaDescription,
      metaKeywords: metaKeywordsArray, // <-- use array here
      canonicalUrl,
      ogTitle,
      ogDescription,
      index,
      follow,
      image: imageData,
    });

    return NextResponse.json(
      { success: true, page },
      { status: 201 }
    );

  } catch (err) {
    console.error("Page Create Error:", err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
