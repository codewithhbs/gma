'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';


const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const blogsPerPage = 6;

  const params = useParams();
  const router = useRouter();
  const categorySlug = params?.category;

  // Fetch blogs
  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      try {
            const url = categorySlug
        ? `/api/blogs/category/${categorySlug}`
        : `/api/blogs`;

        const res = await fetch(url);

        // Debug API errors
        if (!res.ok) {
          console.error("Blog API Error:", await res.text());
          setBlogs([]);
          return;
        }

        const data = await res.json();

        // Ensure data is array
        if (!Array.isArray(data)) {
          console.error("Invalid blog JSON:", data);
          setBlogs([]);
          return;
        }

        setBlogs(data);
        setCurrentPage(1);
      } catch (error) {
        console.error('Failed to fetch blogs', error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, [categorySlug]);

  // Fetch categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        // ❗ FIX: Correct API URL usage
      const res = await fetch('/api/categories');

        if (!res.ok) {
          console.error("Category API Error:", await res.text());
          return;
        }

        const data = await res.json();

        if (!Array.isArray(data)) {
          console.error("Invalid category JSON:", data);
          return;
        }

        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    }

    fetchCategories();
  }, []);

  // SAFE Pagination (works even when blogs is empty)
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = Array.isArray(blogs)
    ? blogs.slice(indexOfFirstBlog, indexOfLastBlog)
    : [];

  const totalPages = Array.isArray(blogs)
    ? Math.ceil(blogs.length / blogsPerPage)
    : 0;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Skeleton UI
  const BlogSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-lg animate-pulse overflow-hidden flex flex-col">
      <div className="w-full h-52 bg-gray-200"></div>
      <div className="p-6 flex flex-col flex-1 gap-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-8 bg-gray-200 rounded w-1/2 mt-auto"></div>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-8 lg:py-12 flex flex-col lg:flex-row gap-8">
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-10 text-[#011F52] text-center lg:text-left">
          Our Blogs
        </h1>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: blogsPerPage }).map((_, idx) => (
              <BlogSkeleton key={idx} />
            ))}
          </div>
        ) : currentBlogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs found.</p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden flex flex-col group"
                >
                  {blog.image && (
                    <div className="overflow-hidden">
                      <img
                        src={blog.image.url || blog.image}
                        alt={blog.image.alt || blog.title}
                        className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {blog.category && (
                      <span className="text-xs font-semibold text-purple-600 uppercase mb-2">
                        {blog.category.name}
                      </span>
                    )}

                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      <a
                        href={`/blogs/${blog.slug}`}
                        className="hover:text-purple-600 transition"
                      >
                        {blog.title}
                      </a>
                    </h2>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.shortContent || 'No description available.'}
                    </p>

                    <a
                      href={`/blogs/${blog.slug}`}
                      className="inline-block text-white bg-[#011F52] font-medium text-sm py-2 px-4 rounded-lg text-center transition duration-300 hover:bg-purple-700"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {blogs.length > blogsPerPage && (
              <div className="flex justify-center items-center mt-10 gap-2">
                <button
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === 1
                      ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                      : 'text-[#011F52] border-[#011F52] hover:bg-[#011F52] hover:text-white'
                  }`}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => paginate(i + 1)}
                    className={`px-3 py-1 rounded-md border ${
                      currentPage === i + 1
                        ? 'bg-[#011F52] text-white border-[#011F52]'
                        : 'text-[#011F52] border-[#011F52] hover:bg-[#011F52] hover:text-white'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                  className={`px-3 py-1 rounded-md border ${
                    currentPage === totalPages
                      ? 'text-gray-400 border-gray-300 cursor-not-allowed'
                      : 'text-[#011F52] border-[#011F52] hover:bg-[#011F52] hover:text-white'
                  }`}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default BlogsPage;
