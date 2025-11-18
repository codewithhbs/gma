"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, User, LogOut } from "lucide-react";

export default function AdminHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
  try {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    window.location.href = "/admin/login";
  } catch (error) {
    console.error("Logout failed", error);
  }
};


  return (
    <header className="bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-end sticky top-0 z-50 h-[64px]">
     <div className="relative flex items-center gap-3" ref={dropdownRef}>
  {/* Avatar + Welcome Text */}
  <button
    onClick={() => setDropdownOpen(!dropdownOpen)}
    className="flex items-center gap-3"
  >
    <div className="w-9 h-9 flex items-center justify-center bg-[#011F52] text-white font-semibold rounded-full text-base shadow-sm">
      G
    </div>

    <div className="text-left leading-tight pr-1">
      <p className="text-xs text-gray-500 font-medium">Welcome</p>
      <p className="text-sm font-semibold text-gray-800 whitespace-nowrap">
        GMA International School
      </p>
    </div>

    <ChevronDown
      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
        dropdownOpen ? "rotate-180" : ""
      }`}
    />
  </button>

  {/* Dropdown Menu */}
  {dropdownOpen && (
    <div className="absolute right-0 top-[110%] w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50 animate-fadeIn">
      <Link
        href="/admin/profile"
        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
      >
        <User className="w-4 h-4 mr-2 text-gray-500" />
        Profile
      </Link>
     <button
        onClick={handleLogout}
        className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
      >
        <LogOut className="w-4 h-4 mr-2 text-red-500" />
        Logout
      </button>

    </div>
  )}
</div>

    </header>
  );
}
