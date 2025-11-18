"use client";
import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import AdminFooter from "./AdminFooter";

export default function AdminLayoutClient({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Sidebar */}
      <AdminSidebar isOpen={isSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <AdminHeader toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="p-6">{children}</div>
        <AdminFooter />
      </main>
    </div>
  );
}
