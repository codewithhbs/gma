"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";


  const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);




  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("adminToken", data.token);

        toast.success("Login successful!");

        router.push("/admin/dashboard");
      } else {
        toast.error(data.error || "Login failed");
      }
    } catch {
      toast.error("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
     <div
      className={`${poppins.className} flex items-center justify-center w-full min-h-screen bg-gray-100`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-lg border border-gray-200">
        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-4">
            <Link href="/">
              <Image
                src="/images/gma-web-logo.webp"
                width={90}
                height={100}
                alt="GMA Logo"
                className="h-[80px] w-[70px] md:w-[90px] md:h-[100px]"
              />
            </Link>
            <div className="text-center sm:text-left">
              <h1 className="whitespace-nowrap text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                GMA International School
              </h1>
              <p className="text-sm text-gray-600 font-medium">
                Nurturing Tomorrow In Caring Hands
                <br />
                (Proposed to be CBSE)
              </p>
            </div>
          </div>
          <p className="mt-3 text-gray-700 font-medium text-center sm:text-center">
            Enter your credentials to login
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-none transition"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-gray-300 p-3 w-full rounded-xl focus:ring-2 focus:ring-teal-600 focus:outline-none transition"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-teal-600 to-teal-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
