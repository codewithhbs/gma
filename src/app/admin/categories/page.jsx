  "use client";

  import React, { useState, useEffect } from "react";
  import { Pen, Trash2 } from "lucide-react";
  import CategoryModal from "../../../components/admin/CategoryModal";
  import DeleteConfirm from "../../../components/admin/DeleteConfirm";
  import { authHeader } from "@/utils/authHeader";
import toast, { Toaster } from "react-hot-toast";



  const PAGE_SIZE = 8;

  export default function CategoriesPage() {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [deleteId, setDeleteId] = useState(null);




    // Fetch Categories
async function fetchCategories() {
  try {
    const res = await fetch("/api/categories", {
      method: "GET",
      cache: "no-store",
      credentials: "include",   // 🔥 IMPORTANT
    });

    if (!res.ok) throw new Error("Failed to fetch categories");

    const data = await res.json();
    setCategories(data);
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}


    useEffect(() => {
      fetchCategories();
    }, []);

    // Status Toggle
    const handleStatusToggle = async (id, newStatus) => {
      try {
     await fetch(`/api/categories/${id}/status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            ...authHeader(),
          },
          body: JSON.stringify({ status: newStatus }),
        });



        setCategories((prev) =>
          prev.map((c) => (c._id === id ? { ...c, status: newStatus } : c))
        );
      } catch (error) {
        console.error("Status update failed", error);
      }
    };

    // Delete Category
    const handleDelete = (id) => {
      setDeleteId(id);
      setShowDelete(true);
    };  


// const confirmDelete = async () => {
//   try {
//     const token = localStorage.getItem("adminToken");
//     console.log("TOKEN SENT →", token);

//     const res = await fetch(`http://localhost:3002/api/categories/${deleteId}`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         "x-admin-token": token,
//       },
//       credentials: "include", // if using cookies, optional here
//     });

//     const data = await res.json();
//     console.log("DELETE RESPONSE →", data);

//     if (!res.ok) throw new Error(data.error || "Delete failed");

//     setCategories(prev => prev.filter(c => c._id !== deleteId));
//   } catch (error) {
//     console.error("Delete failed", error);
//   }

//   setShowDelete(false);
// };



const confirmDelete = async () => {
  try {
    const token = localStorage.getItem("adminToken");
    console.log("TOKEN SENT →", token);

    const res = await fetch(`/api/categories/${deleteId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-admin-token": token,
      },
      credentials: "include", // if using cookies, optional here
    });

    const data = await res.json();
    console.log("DELETE RESPONSE →", data);

    if (!res.ok) throw new Error(data.error || "Delete failed");

    // Update state
    setCategories(prev => prev.filter(c => c._id !== deleteId));

    // Show success toast
    toast.success(data.message || "Deleted successfully!");
  } catch (error) {
    console.error("Delete failed", error);
    toast.error(error.message || "Delete failed!");
  }

  setShowDelete(false);
};


    // Open Add Modal
    const openAddModal = () => {
      setEditingCategory(null);
      setShowModal(true);
    };

    // Open Edit Modal
    const handleEdit = (cat) => {
      setEditingCategory(cat);
      setShowModal(true);
    };

    // Pagination Logic
    const totalPages = Math.ceil(categories.length / PAGE_SIZE);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedCategories = categories.slice(startIndex, startIndex + PAGE_SIZE);

    return (
      <div className="p-6 font-sans bg-gray-50">
        <h1 className="text-3xl font-bold mb-6 text-[#011F52]">Categories</h1>

        <div className="flex justify-end mb-4">
          <button
            onClick={openAddModal}
            className="bg-[#011F52] text-white px-4 py-2 rounded-lg shadow hover:bg-[#022B75] transition-all"
          >
            + Add Category
          </button>
        </div>

        {loading ? (
          // Loading Animation
          <div className="flex justify-center items-center h-64">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-[#011F52] rounded-full animate-bounce"></div>
              <div className="w-4 h-4 bg-[#011F52] rounded-full animate-bounce200"></div>
              <div className="w-4 h-4 bg-[#011F52] rounded-full animate-bounce400"></div>
            </div>
          </div>
        ) : categories.length === 0 ? (
          <p className="text-gray-500">No categories found.</p>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-[#011F52] text-white">
                  <tr>
                    <th className="py-4 px-4 text-left">S.NO</th>
                    <th className="py-4 px-4 text-left">Name</th>
                    <th className="py-4 px-4 text-left">Slug</th>
                    <th className="py-4 px-4 text-left">Status</th>
                    <th className="py-4 px-4 text-left">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {paginatedCategories.map((cat, index) => (
                    <tr
                      key={cat._id}
                      className={`transition hover:bg-gray-100 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }`}
                    >
                      <td className="py-4 px-4">{startIndex + index + 1}</td>
                      <td className="py-4 px-4">{cat.name}</td>
                      <td className="py-4 px-4">{cat.slug}</td>

                      {/* Status Switch */}
                      <td className="py-4 px-4">
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={cat.status}
                            onChange={() => handleStatusToggle(cat._id, !cat.status)}
                          />
                          <div className="
                              w-11 h-6 bg-gray-300 rounded-full peer
                              peer-focus:ring-2 peer-focus:ring-blue-500
                              peer-checked:bg-green-500 transition-all relative
                            ">
                            <div className="
                                  absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full 
                                  transition-all peer-checked:translate-x-5
                                "></div>
                          </div>
                        </label>
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-4 text-center">
                        <div className="flex justify-center gap-2">

                          {/* Edit */}
                          <button
                            onClick={() => handleEdit(cat)}
                            className="flex items-center justify-center w-8 h-8 rounded-lg
                            bg-[#011F52] text-white hover:bg-[#022B75]
                            shadow-md hover:shadow-lg transition transform hover:scale-110"
                            title="Edit"
                          >
                            <Pen size={16} />
                          </button>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(cat._id)}
                            className="flex items-center justify-center w-8 h-8 rounded-lg
                            bg-gradient-to-r from-red-500 to-red-600 text-white
                            hover:from-red-600 hover:to-red-700
                            shadow-md hover:shadow-lg transition transform hover:scale-110"
                            title="Delete"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-end mt-6">
                <div className="inline-flex gap-2">
                  <button
                    className="px-3 py-1 text-sm bg-[#011F52] text-white rounded hover:bg-[#013374] disabled:opacity-50 transition"
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, idx) => (
                    <button
                      key={idx + 1}
                      className={`px-4 py-2 rounded transition ${currentPage === idx + 1
                          ? "bg-[#011F52] text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      onClick={() => setCurrentPage(idx + 1)}
                    >
                      {idx + 1}
                    </button>
                  ))}

                  <button
                    className="px-3 py-1 text-sm bg-[#011F52] text-white rounded hover:bg-[#013374] disabled:opacity-50 transition"
                    onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ⭐ MODAL RENDERING FIX ⭐ */}
        {showModal && (
          <CategoryModal
            onClose={() => setShowModal(false)}
            category={editingCategory}
            refresh={fetchCategories}
          />
        )}

        {showDelete && (
          <DeleteConfirm
            onClose={() => setShowDelete(false)}
            onConfirm={confirmDelete}
          />
        )}

      </div>
    );
  }
