import Link from "next/link";
import React, { useState } from "react";

export default function ContactArea() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // fixed typo (was phon)
    address: "",
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted:", formData);
  };

  return (
    <div className="relative overflow-hidden py-10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/hero-slider-3.webp')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-700/80"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content Section */}
          <div className="flex-1 text-white space-y-8 lg:pr-12">
            {/* Navigation/Logo */}
            <div className="mb-12">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-orange-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white font-medium">Get In Touch</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Holistic, Student-Centric
                <br />
                Learning Environment
              </h2>
            </div>

            {/* Description */}
            <div className="flex items-start space-x-6 mt-8">
              <div className="flex-1">
                <p className="text-lg lg:text-xl text-gray-200 leading-relaxed">
                  GMA is more than just a school—it’s a nurturing community that
                  balances academic rigor with character development. The school
                  emphasizes personalized learning within a safe, inclusive
                  atmosphere
                </p>
              </div>              
            </div>
            <div className="delhi-branch-btn">
              <Link href='https://granmothersarms.in/' target="_blank" className="bg-gradient-to-r from-orange-400 to-orange-500 py-3 px-5 rounded-full">Visit Our Delhi Branch</Link>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="w-full lg:w-96 xl:w-[555px] flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Fill Your Registration
              </h2>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-500"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all bg-gray-50 text-gray-800 placeholder-gray-500"
                  />
                </div>

                <div>
                  <textarea
                    name="comment"
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none bg-gray-50 text-gray-800 placeholder-gray-500"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-teal-600 hover:to-emerald-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Enquiry Now →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
