"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample gallery data - replace with your actual images
  const galleryData = [
    {
      id: 1,
      src: "/images/gallery/campus-1.webp",
      alt: "School Building",
      category: "Campus",
      title: "Main School Building"
    },
    {
      id: 2,
      src: "/images/gallery/sr-classroom.webp",
      alt: "Classroom",
      category: "Academics",
      title: "Modern Classrooms"
    },
    {
      id: 3,
      src: "/images/gallery/school-library.webp",
      alt: "Library",
      category: "Facilities",
      title: "School Library"
    },
    {
      id: 4,
      src: "/images/gallery/sports-complex.webp",
      alt: "Sports Field",
      category: "Sports",
      title: "Sports Complex"
    },
    {
      id: 5,
      src: "/images/gallery/science-lab-1.webp",
      alt: "Students in Lab",
      category: "Academics",
      title: "Science Laboratory"
    },
    {
      id: 6,
      src: "/images/gallery/childrens-play-ground.webp",
      alt: "Playground",
      category: "Sports",
      title: "Children's Playground"
    },
    {
      id: 7,
      src: "/images/gallery/activiti-1.webp",
      alt: "Art Room",
      category: "Activities",
      title: "Dance Performance"
    },
    {
      id: 8,
      src: "/images/gallery/cafeteria-1.ewbp.jpg",
      alt: "Cafeteria",
      category: "Facilities",
      title: "School Cafeteria"
    },
    {
      id: 9,
      src: "/images/gallery/computer-lab-1.webp",
      alt: "Computer Lab",
      category: "Academics",
      title: "Computer Laboratory"
    },
    {
      id: 10,
      src: "/images/gallery/activiti-2.webp",
      alt: "Music Room",
      category: "Activities",
      title: "Music Room"
    },
    {
      id: 11,
      src: "/images/gallery/auditorium.webp",
      alt: "Auditorium",
      category: "Facilities",
      title: "School Auditorium"
    },
    {
      id: 12,
      src: "/images/gallery/childrens-play-ground.webp",
      alt: "Garden",
      category: "Campus",
      title: "School Garden"
    },
    {
      id: 13,
      src: "/images/gallery/primary-classroom.webp",
      alt: "Classroom",
      category: "Academics",
      title: "Primary Class"
    
    },
    {
      id: 14,
      src: "/images/gallery/dawarka.jpg",
      alt: "Dawarka",
      category: "Campus",
      title: "Dawarka School "
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Campus", "Academics", "Facilities", "Sports", "Activities"];

  const filteredImages = activeCategory === "All" 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            {/* <Camera className="w-8 h-8 text-teal-600 mr-3" /> */}
            <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-slate-900">
              Our Gallery
            </h2>
          </div>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Explore our vibrant school community through these captured moments of learning, 
            growth, and achievement.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-teal-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-square relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#011943]/50 bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.category}</p>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-teal-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {image.category}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
            <p className="text-gray-500">Try selecting a different category.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-60 bg-teal-600 bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-60 bg-teal-600 bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-60 bg-teal-600 bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Modal Content */}
          <div className="relative max-w-4xl max-h-[80vh] w-full">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
            </div>
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-white text-xl font-semibold mb-1">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {selectedImage.category} • {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
            {filteredImages.map((img, index) => (
              <button
                key={img.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setSelectedImage(img);
                }}
                className={`relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 ${
                  index === currentIndex ? 'ring-2 ring-black' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;