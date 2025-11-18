'use client';

import React, { useEffect, useState } from 'react';
import BlogsPage from '@/components/pages/BlogsPage';
import PageTitle from '@/components/pages/PageTitle';
import { useParams } from 'next/navigation';

const CategoryBlogsPage = () => {
  const { category } = useParams(); // gets the slug from URL
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

const categoryData = categories.find(cat => cat.slug === category);
const categoryName = categoryData?.name || category;

  // Capitalize first letter for display
  const formattedCategory =
    category?.charAt(0).toUpperCase() + category?.slice(1) || '';

  // Fetch blogs by category
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch(`/api/blogs/category/${category}`);
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs by category', error);
        setBlogs([]);
      }
    }
    fetchBlogs();
  }, [category]);

  // Fetch all categories
  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch('/api/categories');
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error('Failed to fetch categories', error);
      }
    }
    fetchCategories();
  }, []);

  return (
    <>
     <PageTitle title={categoryName}>
   
  </PageTitle>


      <BlogsPage blogs={blogs} categories={categories} categorySlug={category} />
    </>
  );
};

export default CategoryBlogsPage;
