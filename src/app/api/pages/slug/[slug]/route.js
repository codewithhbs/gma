import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbConnect";
import Page from "@/lib/models/Page";

export async function GET(req, ctx) {
  try {
    await connectToDB();

    const params = await ctx.params;
    const { slug } = params;

    const page = await Page.findOne({ slug });

    if (!page) {
      return NextResponse.json(
        { success: false, message: "Page not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, page });

  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
}
