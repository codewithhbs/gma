import Link from "next/link";
import { ChevronRight } from "lucide-react";

// 🔹 Fetch Function
async function getPageData(slug) {
    const res = await fetch(`https://gmainternationalschool.com/api/pages/slug/${slug}`, {
        cache: "no-store",
    });

    const data = await res.json();
    return data.page || null;
}


/* ----------------------------------------------
   ⭐ 1. Dynamic Meta Tags (App Router Standard)
---------------------------------------------- */
export async function generateMetadata({ params }) {
    const page = await getPageData(params.slug);

    if (!page) {
        return { title: "Page Not Found" };
    }

    return {
        title: page.metaTitle || page.title,
        description: page.metaDescription,
        keywords: page.metaKeywords?.join(", ") || "",
        alternates: {
            canonical: page.canonicalUrl
                ? `${process.env.NEXT_PUBLIC_SITE_URL}/${page.canonicalUrl}`
                : null,
        },
        openGraph: {
            title: page.ogTitle || page.metaTitle,
            description: page.ogDescription || page.metaDescription,
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/${params.slug}`,
            images: page.image?.url ? [page.image.url] : [],
        },
        robots: {
            index: page.index,
            follow: page.follow,
        },
    };
}

/* ----------------------------------------------
   ⭐ 2. Page Component (Server Component)
---------------------------------------------- */
export default async function PageDetails({ params }) {
    const page = await getPageData(params.slug);

    if (!page) {
        return <p className="text-center py-10">Page not found!</p>;
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4 mt-55">

            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-gray-600 mb-6">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <ChevronRight size={16} className="mx-2" />
                <span className="capitalize text-blue-600 font-medium">
                    {params.slug.replace("-", " ")}
                </span>
            </nav>

            {/* Page Image */}
            {page.image?.url && (
                <div className="mb-6">
                    <img
                        src={page.image.url}
                        alt={page.image.alt || page.title}
                        className="w-full h-auto rounded-lg shadow-md object-cover"
                    />
                </div>
            )}

            {/* Title */}
            <h1 className="text-4xl font-bold text-blue-700 mb-6">
                {page.title}
            </h1>

            {/* Content */}
            <div
                className="prose prose-lg prose-blue text-justify"
                dangerouslySetInnerHTML={{ __html: page.content }}
            />
        </div>
    );
}
