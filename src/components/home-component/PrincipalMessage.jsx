'use client'

import Image from 'next/image'

const PrincipalMessage = () => {
  return (
    <>
    <section className="bg-gradient-to-t from-teal-0 to-teal-100 pt-10 md:p-12 mt-0 text-center md:text-start">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className='text-center md:text-start'>
          <h2 className="text-2xl font-light text-[#011943]">
            Principal <br/><span className="font-bold text-3xl lg:text-5xl md:text-4xl text-[#011943] md:text-start">Namrata Esther Singh</span>
          </h2>
          <h3 className="text-xl italic tracking-widest mt-4 mb-6 text-[#ccbf76]">Message</h3>
          <div className="mb-6 text-lg text-gray-600">
            <p className="font-semibold">MA, B.Ed, Diploma in Early Childhood Education</p>
            <p className="font-semibold">Diploma in Home Nursing and First Aid by Red Cross Society</p>
            <p className="mt-2">14 years of experience in education industry</p>
          </div>
          <p className="text-lg leading-8 text-gray-700 mb-8 text-justify">
            "Education is the foundation upon which we build our future" — a philosophy that guides Principal Namrata Esther Singh in her educational journey. With extensive qualifications and over 14 years of dedicated experience, she brings a wealth of knowledge in early childhood development and comprehensive educational practices. Her Red Cross certification in home nursing and first aid underscores her commitment to student safety and well-being alongside academic excellence.
          </p>
          <button className="border border-[#011943] px-10 py-3 tracking-widest font-semibold hover:bg-[#011943] hover:text-white transition-all duration-300 text-xl">
            MORE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center ">
          <Image
            src="/images/principle-msg.jpg" 
            alt="Principal Namrata Esther Singh"
            width={400}
            height={500}
            className="object-cover rounded-md border-6 border-[#011943] z-9"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default PrincipalMessage