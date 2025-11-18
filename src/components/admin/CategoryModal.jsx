"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

export default function CategoryModal({ onClose, category, refresh }) {
  const [name, setName] = useState(category?.name || "");
  const [slug, setSlug] = useState(category?.slug || "");
  const [status, setStatus] = useState(category?.status ?? true);
  const [loading, setLoading] = useState(false);
  const [manualSlug, setManualSlug] = useState(false); // track manual slug edits

  const isEdit = Boolean(category);

  // Auto-generate slug from name, unless manually changed
  useEffect(() => {
    if (!manualSlug) {
      const generatedSlug = name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, ""); // remove invalid chars
      setSlug(generatedSlug);
    }
  }, [name, manualSlug]);

  const handleSlugChange = (e) => {
    setSlug(e.target.value);
    setManualSlug(true); // mark that user manually edited slug
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = { name, slug, status };
    const url = isEdit
      ? `/api/categories/${category._id}`
      : "/api/categories";
    const method = isEdit ? "PUT" : "POST";

    try {
      const token = localStorage.getItem("adminToken"); // include auth token
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

     toast.success(data.message || (isEdit ? "Category updated!" : "Category created!"));


      refresh(); // refresh the categories list
      onClose();
    } catch (error) {
      toast.error(error.message || "Action failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-md rounded-xl shadow-2xl animate-fadeIn overflow-hidden">

          {/* Header */}
          <div className="flex justify-between items-center bg-[#011F52] text-white px-5 py-3">
            <h2 className="text-xl font-semibold">
              {isEdit ? "Edit Category" : "Create Category"}
            </h2>
            <button onClick={onClose} className="text-white hover:text-red-300 transition">
              <X size={22} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="font-medium text-gray-700">Category Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-[#011F52] focus:border-[#011F52] outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  disabled={loading}
                />
              </div>

              {/* Slug */}
              <div>
                <label className="font-medium text-gray-700">Slug</label>
                <input
                  type="text"
                  className="w-full mt-1 p-3 border rounded-lg focus:ring-[#011F52] focus:border-[#011F52] outline-none"
                  value={slug}
                  onChange={handleSlugChange}
                  required
                  disabled={loading}
                />
              </div>

              {/* Status */}
              <div>
                <label className="font-medium text-gray-700 mb-2 block">Status</label>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={status}
                    onChange={() => setStatus(!status)}
                  />
                  <div className="w-12 h-6 bg-gray-300 rounded-full peer peer-focus:ring-2 peer-focus:ring-[#011F52] peer-checked:bg-green-500 transition-all relative">
                    <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-all peer-checked:translate-x-6"></div>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">
                    {status ? "Active" : "Inactive"}
                  </span>
                </label>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                  disabled={loading}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg text-white bg-[#011F52] hover:bg-[#022B75] shadow-md hover:shadow-lg transition"
                  disabled={loading}
                >
                  {loading ? (isEdit ? "Updating..." : "Creating...") : isEdit ? "Update" : "Create"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </div>
    </>
  );
}
