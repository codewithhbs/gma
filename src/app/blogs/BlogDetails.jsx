"use client";

import React, { useEffect, useState } from "react";
import { User, Calendar } from 'lucide-react';
import PageTitle from "@/components/pages/PageTitle";
import { useRouter } from "next/navigation";

const BlogDetails = ({ params }) => {
  const { slug } = params;
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/blogs/by-slug/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    fetch("/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <>
      <PageTitle title={blog.title} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 items-start">

        <main className="flex-1">
          {blog.image && (
            <div className="overflow-hidden rounded-xl shadow-lg mb-6">
              <img
                src={blog.image.url}
                alt={blog.image.alt || blog.title}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#011F52] mb-2 leading-tight">
              {blog.title}
            </h1>

            <p className="text-gray-500 text-sm flex justify-between items-center">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-medium">
                  Posted by {blog.author || "GMA"}
                </span>
              </span>

              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>
                  {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  }).toUpperCase()}
                </span>
              </span>
            </p>
          </header>

          <div className="flex flex-wrap gap-2 mb-6">
            {blog.category && blog.category.name && (
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {blog.category.name}
              </span>
            )}
          </div>

          <article className="prose prose-sm md:prose-base lg:prose-lg max-w-full text-gray-800 mb-6">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        </main>

        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white p-5 rounded-xl shadow-lg mb-6 sticky top-20">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">
              Categories
            </h3>
            <ul className="flex flex-col gap-2">
              {categories.map((cat) => (
                <li key={cat._id}>
                  <button
                    onClick={() => router.push(`/latest-news/${cat.slug}`)}
                    className="text-gray-700 hover:text-purple-600 font-medium text-left w-full"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </>
  );
};

export default BlogDetails;
