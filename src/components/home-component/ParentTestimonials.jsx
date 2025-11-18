// components/ParentTestimonials.jsx (Alternative with better vertical layout)
import { useState, useRef } from 'react';

const ParentTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = [useRef(null), useRef(null)];

  const testimonials = [
    {
      id: 1,
      quote: "This program has transformed our children's learning experience. The personalized attention is remarkable.",
      videoSrc: "video/testimonials/testimonial-one.mp4",
    },
    {
      id: 2,
      quote: "We've seen incredible growth in our kids' confidence and academic performance since joining.",
      videoSrc: "video/testimonials/testimonial-two.mp4",
    }
  ];

  const handleVideoPlay = (index) => {
    videoRefs.forEach((ref, i) => {
      if (ref.current && i !== index) {
        ref.current.pause();
      }
    });
    setActiveVideo(index);
  };

  const handleVideoEnd = (index) => {
    const nextIndex = (index + 1) % testimonials.length;
    setActiveVideo(nextIndex);
    if (videoRefs[nextIndex].current) {
      videoRefs[nextIndex].current.play();
    }
  };

  return (
    <section className="bg-gradient-to-br from-[#ffffff] to-[#0096892c] py-20 text-dark relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#000000] rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-gray-900 leading-tight">
            What Parents Say
          </h2>
          <div className="w-20 h-1 bg-[#000000] rounded-full mx-auto mb-4"></div>
          <p className="text-xl max-w-2xl mx-auto text-gray-700">
            Hear from families who have experienced the difference
          </p>
        </div>

        {/* Testimonials Grid - Vertical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`
                relative bg-white rounded-2xl overflow-hidden border-2 border-gray-100 shadow-lg
                transition-all duration-300 hover:translate-y-[-8px] hover:border-[#B3976E] hover:shadow-xl
                ${activeVideo === index ? 'border-[#B3976E] shadow-2xl' : ''}
                flex flex-col
              `}
            >
              {/* Video Container - Vertical */}
              <div className="relative flex justify-center items-center bg-black px-4 py-6">
                <div className="w-full max-w-[240px] aspect-[9/16]"> {/* Vertical aspect ratio */}
                  <video
                    ref={videoRefs[index]}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                    onPlay={() => handleVideoPlay(index)}
                    onEnded={() => handleVideoEnd(index)}
                    controls
                    playsInline
                  >
                    <source src={testimonial.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300 rounded-lg video-overlay">
                    <button 
                      className="w-20 h-20 rounded-full bg-[#B3976E] border-none text-white cursor-pointer flex items-center justify-center transition-all duration-300 hover:bg-[#009689] hover:scale-110 text-3xl shadow-lg"
                      onClick={() => videoRefs[index].current?.play()}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5V19L19 12L8 5Z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-8 flex-1 flex flex-col justify-center bg-gradient-to-b from-white to-gray-50/50">
                <div className="text-center">
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-[#B3976E] mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                  <blockquote className="text-lg sm:text-xl leading-relaxed italic text-gray-800 font-medium">
                    {testimonial.quote}
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`
                w-4 h-4 rounded-full border-2 border-[#B3976E] transition-all duration-300
                ${activeVideo === index ? 'bg-[#B3976E] scale-125' : 'bg-transparent'}
                hover:bg-[#009689] hover:border-[#009689]
              `}
              onClick={() => {
                handleVideoPlay(index);
                videoRefs[index].current?.play();
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
};

export default ParentTestimonials;