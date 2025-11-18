'use client'
import React from 'react'
import Image from "next/image";

const SchoolInDehradun = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="container mx-auto px-32 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left: Title and Description */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            Welcome to Our School in Dehradun
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Nestled in the serene foothills of the Himalayas, our school offers a nurturing environment
                            for academic excellence and personal growth. We are committed to fostering creativity,
                            critical thinking, and a passion for learning in every student.
                        </p>
                        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg 
              hover:bg-blue-700 transition duration-300">
                            Explore More
                        </button>
                    </div>
                    {/* Right: Image */}
                    <div className="relative h-64 md:h-96 w-full">
                        <Image
                            src="/images/school-dehradun.jpg"
                            alt="School in Dehradun"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-32">
                    <p>sdfkfjsadlkfjsdko</p>
                    <p>sdfkfjsadlkfjsdko</p>
                </div>
            </div>
        </div>
    )
}

export default SchoolInDehradun