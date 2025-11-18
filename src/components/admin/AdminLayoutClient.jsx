"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";
import { Toaster } from "react-hot-toast";

export default function AdminLayoutClient({ children }) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (pathname.startsWith("/admin/login")) {
    return <>{children}</>;
  }

  return (
    <div className="bg-gray-100 h-screen flex overflow-hidden font-rubik">
      <div className="overflow-y-auto">
        <AdminSidebar isOpen={isSidebarOpen} />
      </div>

      <main className="flex-1 flex flex-col overflow-y-auto">
        <AdminHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="p-6 flex-1 overflow-y-auto">
          {children}
        </div>

        <AdminFooter />
      </main>

      {/* Mount the toaster here so all admin pages can use toast */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
