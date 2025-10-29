import React from "react";
import Link from "next/link";

export default function SubpageBanner({ title, backgroundImage }) {
  // Background setup
  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(/${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        backgroundImage:
          "linear-gradient(to right, #1e3c72, #2a5298)", // fallback gradient
      };

  return (
    <div
      className="relative text-white py-10 sm:py-15 lg:py-20"
      style={bgStyle}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Breadcrumb */}
        <nav className="flex justify-center mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm font-medium">
            <li>
              <Link
                href="/"
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="text-white/50">/</span>
            </li>
            <li>
              <span className="text-white">{title}</span>
            </li>
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
}
