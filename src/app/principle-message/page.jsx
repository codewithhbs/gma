'use client'

import Image from 'next/image'

const PrincipalMessage = () => {
  return (
    <section className="bg-gradient-to-t from-teal-50 to-white pt-10 pb-12 px-4 sm:px-6 md:px-12 lg:px-16 text-center md:text-left  pt-60">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-light text-[#011943] mb-2">
            Principal
            <br />
            <span className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#011943]">
              Namrata Esther Singh
            </span>
          </h2>

          <h3 className="text-lg sm:text-xl italic tracking-widest mt-3 mb-5 text-[#ccbf76]">
            Message
          </h3>

          <div className="mb-6 text-base sm:text-lg text-gray-700">
            <p className="font-semibold">MA, B.Ed, Diploma in Early Childhood Education</p>
            <p className="font-semibold">Diploma in Home Nursing and First Aid by Red Cross Society</p>
            <p className="mt-2">14 years of experience in education industry</p>
          </div>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-700 mb-8 text-justify">
            "Education is the foundation upon which we build our future" — a philosophy that guides Principal Namrata Esther Singh in her educational journey. With extensive qualifications and over 14 years of dedicated experience, she brings a wealth of knowledge in early childhood development and comprehensive educational practices. Her Red Cross certification in home nursing and first aid underscores her commitment to student safety and well-being alongside academic excellence.
          </p>

          <button className="border border-[#011943] px-8 sm:px-10 py-3 tracking-widest font-semibold text-sm sm:text-base hover:bg-[#011943] hover:text-white transition-all duration-300 rounded-md">
            MORE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/principle-msg.jpg"
            alt="Principal Namrata Esther Singh"
            width={400}
            height={500}
            className="object-cover rounded-lg border-4 border-[#011943] shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}

export default PrincipalMessage
