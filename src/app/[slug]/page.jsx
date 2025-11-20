"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Head from "next/head";

export default function PageDetails() {
    const { slug } = useParams();
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    const API = "/api/pages/slug/";

    useEffect(() => {
        if (!slug) return;

        const fetchPage = async () => {
            try {
                const res = await fetch(API + slug);
                const data = await res.json();

                if (res.ok) setPage(data.page);
                else setPage(null);
            } catch (err) {
                console.log("Fetch error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPage();
    }, [slug]);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!page) return <p className="text-center py-10">Page not found!</p>;

    return (
        <>
            {/* META TAGS */}
            <Head>
                <title>{page.metaTitle || page.title}</title>
                <meta name="description" content={page.metaDescription} />

                {/* Keywords */}
                {page.metaKeywords?.length > 0 && (
                    <meta name="keywords" content={page.metaKeywords.join(", ")} />
                )}

                {/* Canonical */}
                {page.canonicalUrl && (
                    <link rel="canonical" href={page.canonicalUrl} />
                )}

                {/* OG Tags */}
                <meta property="og:title" content={page.ogTitle || page.metaTitle} />
                <meta property="og:description" content={page.ogDescription || page.metaDescription} />

                {/* Index / Follow */}
                <meta
                    name="robots"
                    content={`${page.index ? "index" : "noindex"}, ${page.follow ? "follow" : "nofollow"}`}
                />
            </Head>

            {/* PAGE CONTENT */}
            <div className="max-w-4xl mx-auto py-10 px-4 mt-55">

                {/* Breadcrumb */}
                <nav className="flex items-center text-sm text-gray-600 mb-6">
                    <Link href="/" className="hover:text-blue-600">Home</Link>
                    <ChevronRight size={16} className="mx-2" />
                    <span className="capitalize text-blue-600 font-medium">
                        {slug.replace("-", " ")}
                    </span>
                </nav>

                {/* Page Title */}
                <h1 className="text-4xl font-bold text-blue-700 mb-6">
                    {page.title}
                </h1>

                {/* HTML Content */}
                <div
                    className="prose prose-lg prose-blue text-justify"
                    dangerouslySetInnerHTML={{ __html: page.content }}
                ></div>
            </div>
        </>
    );
}
