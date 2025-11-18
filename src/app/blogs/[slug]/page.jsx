'use client';
import React, { useEffect, useState } from 'react';
import { User, Calendar } from 'lucide-react'
import PageTitle from '@/components/pages/PageTitle'
import { useRouter } from 'next/navigation';



const BlogDetailsPage = ({ params }) => {
  const { slug } = params;
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  // Fetch blog by slug
  useEffect(() => {
    async function fetchBlog() {
      try {
        const res = await fetch(`/api/blogs/by-slug/${slug}`);
        if (!res.ok) throw new Error('Blog not found');
        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error('Failed to fetch blog', error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    }
    fetchBlog();
  }, [slug]);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/categories');
        if (!res.ok) throw new Error('Categories not found');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    }
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 items-start">
        {/* Main Skeleton */}
        <main className="flex-1 space-y-4 animate-pulse">
          <div className="h-64 bg-gray-200 rounded-xl mb-6"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>
        </main>

        {/* Sidebar Skeleton */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white p-5 rounded-xl shadow-lg space-y-2 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        </aside>
      </div>
    );
  }

  if (!blog) return <p className="text-center mt-16 text-red-500 font-semibold">Blog not found</p>;

  return (

    <>
      <PageTitle title={blog.title} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 items-start">

        {/* Main Content */}
        <main className="flex-1">

          {/* Blog Image */}
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

            <p className="text-gray-500 text-sm md:text-sm lg:text-base flex justify-between items-center">
              {/* Author */}
              <span className="flex items-center gap-1">
                <User className="w-4 h-4 text-gray-400" />
                <span className="font-medium">Posted by {blog.author || 'GMA'}</span>
              </span>

              {/* Date */}
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-400" />
                <span>
                  {new Date(blog.createdAt).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  }).toUpperCase()}
                </span>
              </span>
            </p>
          </header>

          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {blog.category && (
              <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                {blog.category.name}
              </span>
            )}

          </div>

          {/* Blog Content */}
          <article className="prose prose-sm md:prose-base lg:prose-lg max-w-full text-gray-800 mb-6">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>


        </main>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-white p-5 rounded-xl shadow-lg mb-6 sticky top-20">
            <h3 className="font-semibold text-lg mb-3 text-gray-800">Categories</h3>
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

export default BlogDetailsPage;
