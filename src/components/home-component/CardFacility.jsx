'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { MdOutlineScience } from "react-icons/md";
import { GoBook } from "react-icons/go";
import { RiComputerLine } from "react-icons/ri";
import { TbMathFunction } from "react-icons/tb";
import Image from 'next/image';

// import faci from '/images/cafeteria.webp';

const CardFacility = () => {
  const features = [
     {
      // id: '01',
      title: 'Cafeteria',
      description: 'Spacious cafeteria serving daily nutritious meals in a hygienic, comfortable, and relaxing environment for students.',
      image: '/images/cafeteria.webp'
    },
    {
      // id: '02',
      title: 'Library',
      description: 'Our library provides a quiet environment with varied books, digital tools, and comfortable, focused study spaces.',
      image: '/images/library.webp'
    },
    {
      // id: '03',
      title: 'Science Lab',
      description: 'Our science lab provides hands-on experiments, modern tools, and a safe, engaging environment for learners.',
      image: '/images/science-lab.webp'
    },
    {
      // id: '04',
      title: 'Maths Lab',
      description: 'Our Maths Lab offers hands-on learning with models and tools to enhance conceptual understanding creatively.',
      image: '/images/math-lab.webp'
    },
    {
      // id: '05',
      title: 'Computer Lab',
      description: 'Modern computer lab with high-speed internet, updated systems, and hands-on learning for digital excellence.',
      image: '/images/computer-lab.webp'
    }
  ];

  return (
    <div className="py-16 px-4 -mt-7 md:mt-0">
      <div className="max-w-7xl mx-auto">
        <div className='feature-heading text-center mb-10'>
          <h2 className='text-3xl lg:text-5xl md:text-4xl font-bold text-gray-900 leading-tight'>School Facilities</h2>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="facility-swiper"
        >
          {features.map((feature) => (
            <SwiperSlide key={feature.id}>
              <div className="bg-white border-2 border-[#011943] rounded-2xl p-6 lg:p-4 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full">
                
                {/* Icon */}
                <div className="mb-6">
                  <div className="rounded-full flex items-center justify-center shadow-lg">
                  <Image src={feature.image} width={600} height={400} alt='cafeteria' className='rounded-2xl'/>
                    {/* <span className="text-2xl lg:text-3xl text-white">
                      {feature.icon}
                    </span> */}
                  </div>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 lg:top-6 lg:right-6">
                  <span className="text-3xl lg:text-4xl font-bold text-orange-400 opacity-80">
                    {feature.id}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3 lg:mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardFacility;
