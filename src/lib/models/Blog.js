    import mongoose from "mongoose";

    const BlogSchema = new mongoose.Schema({
      title: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      content: { type: String, required: true },
      shortContent: { type: String },
      author: { type: String }, 
      image: {
        url: { type: String },
        key: { type: String },
        alt: { type: String },
      },
      category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
      tags: [{ type: String }],
      active: { type: Boolean, default: true },
      metaTitle: { type: String },
      metaDescription: { type: String },
      metaKeywords: [{ type: String }],
      canonicalUrl: { type: String },
      ogTitle: { type: String },
      ogDescription: { type: String },
      index: { type: Boolean, default: true },
      follow: { type: Boolean, default: true },
    }, { timestamps: true });

   export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema, "blogs");
