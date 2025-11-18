// metadata.js (Server file — NO "use client")

export async function generateBlogMetadata(slug) {
  const res = await fetch(`/api/blogs/by-slug/${slug}`, {
    cache: "no-store",
  });

  const blog = await res.json();

  if (!blog) {
    return {
      title: "Blog Not Found | GMA",
      description: "Requested blog was not found",
    };
  }

  return {
    title: `${blog.metaTitle || blog.title} | GMA`,
    description: blog.metaDescription || blog.excerpt || blog.title,
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.excerpt,
      images: blog.image ? [blog.image.url] : [],
      type: "article",
    },
    alternates: {
      canonical: `/blogs/${slug}`,
    },
  };
}
