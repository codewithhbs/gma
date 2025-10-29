'use client'
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const PageTitle = ({
  title = "Senior Secondary School in Dehradun",
  breadcrumbs = [
    { label: "Home", href: "/", icon: Home },
    { label: title ? title : "Senior Secondary School in Dehradun", href: "/", active: true }
  ],
  backgroundImage = "/images/hero-slider-3.webp"
}) => {
  return (
    <div
      className="py-12 lg:py-16 bg-cover bg-center relative mt-50 md:mt-52"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-sky-900/80 bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-5 mb-3">
          {title}
        </h1>

        {/* Breadcrumb */}
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-300 mx-2" />
                )}
                <div className="flex items-center space-x-1">
                  {crumb.icon && (
                    <crumb.icon className="w-4 h-4 text-gray-300" />
                  )}
                  {crumb.active ? (
                    <span className="text-white font-medium">
                      {crumb.label}
                    </span>
                  ) : (
                    <button
                      className="text-gray-300 hover:text-white transition-colors"
                      onClick={() => {
                        if (crumb.href) {
                          console.log(`Navigate to: ${crumb.href}`);
                        }
                      }}
                    >
                      {crumb.label}
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageTitle;
