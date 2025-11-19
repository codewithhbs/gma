"use client";
import { useEffect } from "react"; 
import { useRouter } from "next/navigation";
import { authHeader } from "@/utils/authHeader"; 
import {
    Users,
    BookOpen,
    Folder,
    Bell,
    Award,
    ClipboardCheck,
    MessageSquare,
    IndianRupee,
} from "lucide-react";


export default function Dashboard() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch("/api/logout", { method: "POST" });
        router.push("/admin/login");
    };

       



    return (
        <div>
            {/* Header Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-[#011F52] via-blue-700 to-[#1E90FF] text-white rounded-3xl p-8 md:p-10 shadow-xl">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-extrabold drop-shadow-lg flex items-center gap-2">
                            Good to see you, {" "}
                            <span className="text-yellow-300">GMA </span>
                        </h1>
                        <p className="text-blue-100 mt-2 text-base md:text-lg">
                            Here’s your school overview, performance insights, and daily updates.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-400 to-orange-400 shadow-md hover:scale-110 transition-transform duration-300">
                            <BookOpen className="w-6 h-6 text-white animate-pulse" />
                        </div>

                        <div className="p-3 rounded-xl bg-gradient-to-br from-green-400 to-emerald-500 shadow-md hover:scale-110 transition-transform duration-300">
                            <Users className="w-6 h-6 text-white animate-bounce" />
                        </div>

                        <div className="p-3 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 shadow-md hover:scale-110 transition-transform duration-300">
                            <Folder className="w-6 h-6 text-white animate-spin-slow" />
                        </div>

                        <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 shadow-md hover:scale-110 transition-transform duration-300">
                            <MessageSquare className="w-6 h-6 text-white animate-pulse" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Card */}
                {[
                    {
                        title: "Categories",
                        value: "05+",
                        icon: <Users className="w-10 h-10" />,
                        gradient: "from-blue-500 to-blue-600",
                    },
                    {
                        title: "Pages",
                        value: "07",
                        icon: <BookOpen className="w-10 h-10" />,
                        gradient: "from-green-500 to-emerald-600",
                    },
                    {
                        title: "Blogs",
                        value: "08",
                        icon: <Folder className="w-10 h-10" />,
                        gradient: "from-pink-500 to-rose-600",
                    },

                ].map((item, index) => (
                    <div
                        key={index}
                        className={`relative bg-gradient-to-br ${item.gradient} text-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-sm uppercase tracking-wide opacity-90">
                                    {item.title}
                                </h3>
                                <p className="text-4xl font-bold mt-2">{item.value}</p>
                            </div>
                            <div className="opacity-80">{item.icon}</div>
                        </div>
                        <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-10 rounded-2xl transition-all" />
                    </div>
                ))}
            </div>

        </div>
    );
}
