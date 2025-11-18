"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, url: "/images/hero-slider-1-1.webp", alt: "Slide 1" },
  { id: 2, url: "/images/hero-slider-1.webp", alt: "Slide 2" },
  { id: 3, url: "/images/hero-slider-2.webp", alt: "Slide 3" },
  { id: 4, url: "/images/hero-slider-5.webp", alt: "Slide 4" },
  { id: 5, url: "/images/hero-2-2.webp", alt: "Slide 5" },
  { id: 6, url: "/images/hero-3-3.webp", alt: "Slide 6" },
];

const HeroSlider = () => {
  return (
    <div className="w-full mx-auto mt-50">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        loop={true}
        className="shadow-md"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-auto md:h-[650px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
