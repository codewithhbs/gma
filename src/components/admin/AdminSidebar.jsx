"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Folder,
  ImageIcon,
  Settings,
  LogOut,
  ChevronDown,
  ChevronUp,
  Globe,
  Mail,
} from "lucide-react";

export default function AdminSidebar({ isOpen }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard className="w-5 h-5 mr-3" />,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: <Folder className="w-5 h-5 mr-3" />,
    },
    {
      name: "Blogs",
      path: "/admin/blogs",
      icon: <FileText className="w-5 h-5 mr-3" />,
    },
    
  ];

const handleLogout = async () => {
  await fetch("/api/auth/logout", {
    method: "POST",
  });

  window.location.href = "/admin/login";
};




  return (
    <aside
      className={`relative flex flex-col justify-between bg-white text-gray-800 w-64 h-screen shadow-lg border-r border-gray-200 transition-all duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      {/* --- Top Section --- */}
      <div className="p-6 space-y-6">
        {/* --- Logo Section --- */}
        <div className="flex items-center gap-3 border-b pb-5">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/gma-web-logo.webp"
              width={50}
              height={50}
              alt="GMA Logo"
              className="rounded-md"
            />
          </Link>
           <div>
            <h1 className="text-[15px] font-bold text-[#011F52] leading-tight">
            GMA International <span className="block">School</span>
          </h1>
            <p className="text-[11px] text-gray-600 mt-1 leading-snug">
              Nurturing Tomorrow in Caring Hands
              <br />
              <span className="text-[10px] text-gray-500">
                (Proposed to be CBSE)
              </span>
            </p>
          </div>
        </div>

        {/* --- Navigation Menu --- */}
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setActive(item.path)}
              className={`flex items-center py-2.5 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                active === item.path
                  ? "bg-[#011F52] text-white shadow-md"
                  : "hover:bg-[#011F52]/10 text-gray-700"
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}

          {/* --- Settings Dropdown --- */}
          {/* <div className="mt-3">
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="flex items-center justify-between w-full py-2.5 px-3 rounded-md text-sm font-medium hover:bg-[#011F52]/10 text-gray-700 transition-all duration-200"
            >
              <div className="flex items-center">
                <Settings className="w-5 h-5 mr-3" />
                Settings
              </div>
              {isSettingsOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isSettingsOpen && (
              <div className="ml-8 mt-1 space-y-1">
                <Link
                  href="/admin/settings/web"
                  onClick={() => setActive("/admin/settings/web")}
                  className={`flex items-center py-2 px-2 rounded-md text-sm ${
                    active === "/admin/settings/web"
                      ? "bg-[#011F52] text-white"
                      : "hover:bg-[#011F52]/10 text-gray-700"
                  }`}
                >
                  <Globe className="w-4 h-4 mr-2" /> Web
                </Link>

                <Link
                  href="/admin/settings/smtp"
                  onClick={() => setActive("/admin/settings/smtp")}
                  className={`flex items-center py-2 px-2 rounded-md text-sm ${
                    active === "/admin/settings/smtp"
                      ? "bg-[#011F52] text-white"
                      : "hover:bg-[#011F52]/10 text-gray-700"
                  }`}
                >
                  <Mail className="w-4 h-4 mr-2" /> SMTP
                </Link>
              </div>
            )}
          </div> */}
        </nav>
      </div>

      {/* --- Logout Button --- */}
      <div className="p-1  bg-gray-50">
        <button
         onClick={handleLogout}
          className="flex items-center w-full py-2.5 px-3 rounded-md text-sm font-semibold text-red-600 hover:bg-red-50 transition-all duration-200"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </button>
      </div>
    </aside>
  );
}
