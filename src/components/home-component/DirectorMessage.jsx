'use client'

import Image from 'next/image'

const DirectorMessage = () => {
  return (
    <>
    <section className="bg-[#011943] text-white flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className='text-center md:text-start'>
          <h2 className="text-2xl font-light text-[#ccbf76]">
            Director and Founder  <br/><span className="font-bold text-3xl lg:text-5xl md:text-4xl text-white md:text-start">Ms. Kannu Priya Sharma</span>
          </h2>
          <h3 className="text-xl italic tracking-widest mt-4 mb-6">Message</h3>
          <p className="text-lg leading-8 text-gray-200 mb-8 text-justify">
            "Life is a reflection of our values and choices" — a belief that perfectly reflects the life of Ms. Kannu Priya Sharma, a visionary leader known for her integrity, compassion, and unwavering commitment to ethical values. Her leadership was defined by humility, courage, and a strong sense of purpose. She inspired those around her with her honest approach and dedication to doing what’s right, even in the face of challenges. Ms. Sharma believed in leading by example, empowering others, and fostering a culture of trust and respect.
          </p>
          <button className="border border-[#ccbf76] px-10 py-3 tracking-widest font-semibold hover:bg-[#ccbf76] hover:text-[#011943] transition-all duration-300 text-xl">
            MORE
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center ">
          <Image
            src="/images/director-image.webp" // Replace with your own path
            alt="Art Director"
            width={400}
            height={500}
            className="object-cover rounded-md border-6 border-white z-9"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default DirectorMessage
