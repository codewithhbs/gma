"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

export default function AddEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageId = searchParams.get("id"); // fetch ?id=xxx for edit

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [form, setForm] = useState({
    title: "",
    slug: "",
    content: "",
    active: true,
    metaTitle: "",
    metaDescription: "",
    metaKeywords: "",
    canonicalUrl: "",
    ogTitle: "",
    ogDescription: "",
    index: true,
    follow: true,
    image: null,
    imageAlt: "",
  });

  // Fetch page data if editing
  useEffect(() => {
    if (!pageId) return;

    const fetchPage = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/pages/${pageId}`);
        if (!res.ok) throw new Error("Failed to fetch page");
        const data = await res.json();
        const page = data.page;
        setForm({
          title: page.title || "",
          slug: page.slug || "",
          content: page.content || "",
          active: page.active ?? true,
          metaTitle: page.metaTitle || "",
          metaDescription: page.metaDescription || "",
          metaKeywords: (page.metaKeywords || []).join(", "),
          canonicalUrl: page.canonicalUrl || "",
          ogTitle: page.ogTitle || "",
          ogDescription: page.ogDescription || "",
          index: page.index ?? true,
          follow: page.follow ?? true,
          image: null,
          imageAlt: page.image?.alt || "",
        });
        if (page.image?.url) setImagePreview(page.image.url);
      } catch (err) {
        toast.error(err.message || "Failed to fetch page");
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [pageId]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setForm({ ...form, [name]: checked });
    } else if (type === "file") {
      const file = files[0];
      setForm({ ...form, [name]: file });
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result);
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    } else if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-");
      setForm({ ...form, title: value, slug: generatedSlug });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  // Submit form (POST or PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      for (const key in form) {
        if (form[key] !== null && form[key] !== undefined) {
          if (["active", "index", "follow"].includes(key)) {
            formData.append(key, form[key] ? "true" : "false");
          } else {
            formData.append(key, form[key]);
          }
        }
      }

      const url = pageId ? `/api/pages/${pageId}` : "/api/pages";
      const method = pageId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to save page");

      toast.success(`Page ${pageId ? "updated" : "added"} successfully!`);
      router.push("/admin/pages");
    } catch (err) {
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <Toaster />
      <h1 className="text-2xl font-bold mb-6 text-[#011F52]">
        {pageId ? "Edit Page" : "Add New Page"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        {/* Page Info */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">Page Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="slug"
              placeholder="Slug"
              value={form.slug}
              onChange={handleChange}
              required
              className="border p-2 rounded w-full"
            />
          </div>
        </section>

        {/* Content */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">Content</h2>
          <JoditEditor
            value={form.content}
            onChange={(newContent) => setForm({ ...form, content: newContent })}
            config={{ readonly: false, height: 400, toolbarSticky: false }}
          />
        </section>

        {/* Image */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">Image</h2>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="imageAlt"
              placeholder="Image Alt Text"
              value={form.imageAlt}
              onChange={handleChange}
              className="border p-2 rounded flex-1"
            />
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Preview:</p>
              <img
                src={imagePreview}
                alt={form.imageAlt || "Image Preview"}
                className="max-w-xs max-h-60 rounded border"
              />
            </div>
          )}
        </section>

        {/* SEO */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">SEO / Meta Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="metaTitle"
              placeholder="Meta Title"
              value={form.metaTitle}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              name="canonicalUrl"
              placeholder="Canonical URL"
              value={form.canonicalUrl}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>
          <textarea
            name="metaDescription"
            placeholder="Meta Description"
            value={form.metaDescription}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="metaKeywords"
            placeholder="Meta Keywords (comma separated)"
            value={form.metaKeywords}
            onChange={(e) => setForm({ ...form, metaKeywords: e.target.value })}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="ogTitle"
            placeholder="OG Title"
            value={form.ogTitle}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          <input
            type="text"
            name="ogDescription"
            placeholder="OG Description"
            value={form.ogDescription}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </section>

        {/* Visibility & Status */}
        <section className="space-y-2">
          <h2 className="text-lg font-semibold border-b pb-2 text-gray-700">Visibility & Status</h2>
          <div className="flex gap-6">
            {["index", "follow", "active"].map((key) => (
              <label key={key} className="flex items-center gap-2 cursor-pointer">
                <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                <div className="relative w-10 h-5">
                  <input
                    type="checkbox"
                    name={key}
                    checked={form[key]}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div
                    className={`w-full h-full rounded-full transition-colors duration-300 ${form[key] ? "bg-green-500" : "bg-gray-300"
                      }`}
                  ></div>
                  <div
                    className={`absolute top-0 left-0 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-300 ${form[key] ? "translate-x-5" : ""
                      }`}
                  ></div>
                </div>
              </label>
            ))}
          </div>
        </section>

        {/* Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={() => router.push("/admin/pages")}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#011F52] text-white px-4 py-2 rounded hover:bg-[#022B75]"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}
