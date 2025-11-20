import mongoose from "mongoose";

const PageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: {
          url: { type: String },
          key: { type: String },
          alt: { type: String },
        },

    content: { type: String, required: true },
    content: { type: String, required: true },
    active: { type: Boolean, default: true },

    // SEO Fields
    metaTitle: { type: String },
    metaDescription: { type: String },
    metaKeywords: [{ type: String }],
    canonicalUrl: { type: String },
    ogTitle: { type: String },
    ogDescription: { type: String },
    index: { type: Boolean, default: true },
    follow: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Page =
  mongoose.models.Page || mongoose.model("Page", PageSchema);

export default Page;
