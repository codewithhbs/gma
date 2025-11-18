  "use client";

  import { useState, useEffect } from "react";
  import { X, ArrowLeft, ArrowRight, Save } from "lucide-react";
  import toast, { Toaster } from "react-hot-toast";
  import dynamic from "next/dynamic";
  // import "jodit/build/jodit.min.css";

  export default function BlogModal({ onClose, blog, categoriesList = [], refresh }) {
    const [activeTab, setActiveTab] = useState(0);
    const tabs = ["Basic", "SEO Meta", "Media"];


    const [title, setTitle] = useState(blog?.title || "");
    const [slug, setSlug] = useState(blog?.slug || "");
    const [manualSlug, setManualSlug] = useState(false);
    const [content, setContent] = useState(blog?.content || "");
    const [image, setImage] = useState(blog?.image || null);
    const [category, setCategory] = useState(blog?.category?._id || "");
   // Safe parser
function parseStoredArray(field) {
  if (!field) return "";
  try {
    // field might be a stringified array like '["India","UPI"]'
    const parsed = JSON.parse(field); 
    if (Array.isArray(parsed)) return parsed.join(", ");
    return field; // fallback if it's just a normal string
  } catch {
    return field; // fallback if parsing fails
  }
}

// Use this in your component
const [tags, setTags] = useState(parseStoredArray(blog?.tags?.[0]));
const [metaKeywords, setMetaKeywords] = useState(parseStoredArray(blog?.metaKeywords?.[0]));


    const [metaTitle, setMetaTitle] = useState(blog?.metaTitle || "");
    const [metaDescription, setMetaDescription] = useState(blog?.metaDescription || "");
    const [canonicalUrl, setCanonicalUrl] = useState(blog?.canonicalUrl || "");
    const [ogTitle, setOgTitle] = useState(blog?.ogTitle || "");
    const [ogDescription, setOgDescription] = useState(blog?.ogDescription || "");
    const [index, setIndex] = useState(blog?.index ?? true);
    const [follow, setFollow] = useState(blog?.follow ?? true);

    const [loading, setLoading] = useState(false);

    const isEdit = Boolean(blog);

  useEffect(() => {
    if (blog?.category?._id) {
      setCategory(blog.category._id.toString());
    }
  }, [blog]);



    // Auto slug
    useEffect(() => {
      if (!manualSlug) {
        const generatedSlug = title
          .toLowerCase()
          .trim()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "");
        setSlug(generatedSlug);
      }
    }, [title, manualSlug]);

    const handleSlugChange = (e) => {
      setSlug(e.target.value);
      setManualSlug(true);
    };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImage({
      file,           
      url: URL.createObjectURL(file),
      alt: file.name
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("adminToken");

    const formData = new FormData();

    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("metaTitle", metaTitle);
    formData.append("metaDescription", metaDescription);
    formData.append("canonicalUrl", canonicalUrl);
    formData.append("ogTitle", ogTitle);
    formData.append("ogDescription", ogDescription);
    formData.append("index", index);
    formData.append("follow", follow);

    // Arrays
    formData.append("tags", JSON.stringify(tags.split(",").map((t) => t.trim())));
    formData.append("metaKeywords", JSON.stringify(metaKeywords.split(",").map((k) => k.trim())));

    // Image file
    if (image && image.file) {
      formData.append("image", image.file);  // IMPORTANT
      formData.append("altText", image.alt || "");
    }

    const url = isEdit
      ? `/api/blogs/by-id/${blog._id}`
      : "/api/blogs";

    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: {
          "x-admin-token": token,
        },
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed");

      toast.success(isEdit ? " Blogs Updated!" : "Blogs Created!");
      refresh();
      onClose();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


    return (
      <>

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
         <div className="bg-white w-full max-w-[1200px] rounded-xl shadow-2xl animate-fadeIn overflow-hidden flex flex-col border border-gray-200">


            {/* Header */}
            <div className="flex justify-between items-center bg-[#011F52] text-white px-6 py-4">
              <h2 className="text-lg font-semibold">
                {isEdit ? "Edit Blog" : "Create Blog"}
              </h2>
              <button onClick={onClose} className="hover:text-red-300">
                <X size={22} />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50 px-6">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`
                    py-3 px-5 text-sm font-medium rounded-t-xl transition-all
                    ${activeTab === i
                      ? "bg-white text-[#011F52] border-b-2 border-[#011F52] shadow-sm"
                      : "text-gray-600 hover:text-[#011F52]"
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>


            {/* Body */}
          <form
              onSubmit={handleSubmit}
              className="p-6 max-h-[70vh] overflow-y-auto space-y-6"
              encType="multipart/form-data"
            >


              {/* Basic */}
              {activeTab === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Title" value={title} setValue={setTitle} required />

                  <Input label="Slug" value={slug} setValue={handleSlugChange} required />

                <Select
                    label="Category"
                    value={category}  
                    setValue={setCategory}
                    options={categoriesList}
                  />

                  <Input label="Tags (comma separated)" value={tags} setValue={setTags} />

                 <TextArea label="Content" value={content} setValue={setContent} required />

                
                </div>  
              )}

              {/* SEO Meta */}
              {activeTab === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Meta Title" value={metaTitle} setValue={setMetaTitle} />
                  <Input label="Meta Description" value={metaDescription} setValue={setMetaDescription} />
                  <Input label="Meta Keywords" value={metaKeywords} setValue={setMetaKeywords} />
                  <Input label="Canonical URL" value={canonicalUrl} setValue={setCanonicalUrl} />
                  <Input label="OG Title" value={ogTitle} setValue={setOgTitle} />
                  <Input label="OG Description" value={ogDescription} setValue={setOgDescription} />

                  <Toggle label="Index" value={index} setValue={setIndex} />
                  <Toggle label="Follow" value={follow} setValue={setFollow} />
                </div>
              )}

              {/* Media */}
              {activeTab === 2 && (
                <div className="flex flex-col gap-5">

                  {/* Label */}
                  <label className="font-medium text-gray-700 text-sm">Blog Image</label>

                  {/* File Upload Box */}
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#011F52] transition cursor-pointer">
                    <input
                      type="file"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="blogImage"
                    />

                    <label htmlFor="blogImage" className="flex flex-col items-center cursor-pointer">
                      <svg
                        className="w-10 h-10 text-gray-400 mb-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16v-8m0 0l-3 3m3-3l3 3m4 6v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1m14 0H5"
                        />
                      </svg>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium text-[#011F52]">Click to upload</span> or drag & drop
                      </p>
                      <p className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</p>
                    </label>
                  </div>

                  {/* Alt Text Input */}
                  <div>
                    <label className="text-sm text-gray-600">Image Alt Text</label>
                    <input
                      type="text"
                      className="mt-1 w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#011F52] outline-none"
                      placeholder="Enter alt text for image"
                      value={image?.alt || ""}
                      onChange={(e) =>
                        setImage((prev) => ({ ...prev, alt: e.target.value }))
                      }
                    />
                  </div>

                  {/* Preview */}
                  {image?.url && (
                    <div className="flex justify-center">
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-48 h-48 object-cover rounded-xl shadow border"
                      />
                    </div>
                  )}
                </div>
              )}


            </form>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3 px-6 py-4 bg-gray-50 border-t">

              {activeTab > 0 && (
                <button
                  onClick={() => setActiveTab(activeTab - 1)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100 flex items-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Prev
                </button>
              )}

              {activeTab < tabs.length - 1 && (
                <button
                  onClick={() => setActiveTab(activeTab + 1)}
                  className="px-4 py-2 bg-[#011F52] text-white rounded-lg hover:bg-[#022B75] flex items-center gap-2"
                >
                  Next
                  <ArrowRight size={18} />
                </button>
              )}

              {activeTab === tabs.length - 1 && (
                <button
                  onClick={handleSubmit}
                  className="px-5 py-2 bg-[#011F52] text-white rounded-lg shadow hover:bg-[#022B75] flex items-center gap-2"
                >
                  <Save size={18} />
                  {loading ? "Saving..." : isEdit ? "Update" : "Submit"}
                </button>
              )}

            </div>

          </div>
        </div>
      </>
    );
  }

  /* Utility Components */
  function Input({ label, value, setValue, required }) {
    return (
      <div>
        <label className="text-gray-700 text-sm font-medium">{label}</label>
        <input
          required={required}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full mt-1 p-3 border rounded-lg text-sm focus:ring-[#011F52] focus:border-[#011F52]"
        />
      </div>
    );
  }

function TextArea({ label, value, setValue, required }) {
  const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

  return (
    <div className="md:col-span-2">
      <label className="text-gray-700 text-sm font-medium">{label}</label>
      <JoditEditor
        value={value} // use prop value
        onChange={setValue} // use prop setter
        config={{
          readonly: false,
          height: 400,
          toolbarSticky: false,
          placeholder: "Write your blog content here..."
        }}
      />
    </div>
  );
}


  function Select({ label, value, setValue, options }) {
    return (
      <div>
        <label className="text-gray-700 text-sm font-medium">{label}</label>
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full mt-1 p-3 border rounded-lg text-sm focus:ring-[#011F52] focus:border-[#011F52]"
        >
          <option value="">Select Category</option>
          {options.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
    );
  }


  function Toggle({ label, value, setValue }) {
    return (
      <label className="flex items-center gap-3 mt-4 cursor-pointer select-none">
        <div
          className={`w-12 h-6 flex items-center rounded-full p-1 transition-all ${value ? "bg-green-500" : "bg-gray-300"
            }`}
          onClick={() => setValue(!value)}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow transform transition ${value ? "translate-x-6" : ""
              }`}
          ></div>
        </div>
        <span className="text-sm text-gray-700 font-medium">{label}</span>
      </label>
    );
  }
