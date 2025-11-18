import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <>
      <div className="bg-gradient-to-t from-teal-0 to-teal-100 pt-10 md:p-12 mt-5 text-center md:text-start">
        <div className="max-w-7xl mx-auto">
          {/* Main Container */}
          <div className="rounded-3xl">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Left Content Section */}
              <div className="flex-1 p-4 md:p-12 lg:p-16 flex flex-col">
                {/* Title Section */}
                <div className="mb-8">
                  <div className="">
                    <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-slate-900 leading-tight">
                      GMA International School
                    </h2>
                    <h4 className="font-bold text-slate-900 mt-3">Empowering Young Minds for a Brighter Tomorrow</h4>
                  </div>
                </div>

                {/* Description Section */}
                <div className="flex-1 mb-12">
                  <div className=" rounded-2xl h-full">
                    <div className="text-slate-900 leading-relaxed space-y-4">
                      <p className="text-justify">
                        At GMA International School, we believe that education is not just about imparting knowledge—it's about shaping character, igniting curiosity, and nurturing leaders of tomorrow. As a premier Senior Secondary School, we offer a transformative educational experience that balances academic excellence with holistic development.
                      </p>
                      <p className="text-justify">
                        GMA International School is more than a place of learning—it's a vibrant community where students thrive intellectually, emotionally, and socially. Established with a vision to inspire, empower, and excel, GMA stands as a beacon of quality education, innovation, and global-mindedness.
                      </p>
                      <p className="text-justify">
                        We provide an inclusive and nurturing environment where students from diverse backgrounds feel welcomed and supported. Our curriculum is designed in alignment with national educational standards, enriched by international best practices, and delivered by a team of highly qualified and passionate educators.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="">
                  <button className="flex-1 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 mb-7 ">
                   Read More
                  </button>
                </div>
              </div>

              {/* Right Image Section */}
              <div className="lg:w-1/2 xl:w-2/5 relative md:mt-[-5%]">
                <div className="h-64 lg:h-full min-h-[400px] bg-[#fff] relative rounded-2xl shadow-xl">
                  {/* Professional Photo Area */}
                  <div className="absolute inset-6 bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 rounded-2xl shadow-2xl flex items-center justify-center overflow-clip">
                  <img src="https://feeds.abplive.com/onecms/images/uploaded-images/2023/01/27/f6d73f5606b0a142cc90622110ff3c951674814376772634_original.jpg" height={700} width={500} />
                    
                  </div>

                  {/* Decorative Elements */}
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
