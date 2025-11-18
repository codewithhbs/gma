import AdminLayoutClient from "@/components/admin/AdminLayoutClient";

export const metadata = {
  title: "Admin | GMA International School",
  description: "Admin panel login and management",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Rubik CDN */}
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="font-rubik">
        <AdminLayoutClient>{children}</AdminLayoutClient>
      </body>
    </html>
  );
}
  