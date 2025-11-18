'use client'

const VisionMission = () => {
  return (
    <section className="bg-gray-50 py-16 pt-60">
      <div className="max-w-7xl mx-auto px-4">
        {/* School Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl md:text-4xl font-bold text-gray-900 leading-tight text-center ">
            GMA International School
          </h2>
          <p className="text-xl text-[#ccbf76] font-light italic mb-8">
            Empowering Young Minds for a Brighter Tomorrow
          </p>
          <div className="w-24 h-1 bg-[#ccbf76] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Vision Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#011943]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#011943] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#011943]">Our Vision</h2>
            </div>
            <p className="text-lg leading-8 text-gray-700 text-justify">
              To be a premier educational institution that inspires, empowers, and nurtures global citizens with strong 
              moral character, academic excellence, and innovative thinking. We envision a learning community where 
              every student discovers their potential and becomes a catalyst for positive change in the world.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#ccbf76]">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#ccbf76] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-[#011943]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-[#011943]">Our Mission</h2>
            </div>
            <p className="text-lg leading-8 text-gray-700 text-justify">
              To provide a transformative educational experience that balances academic rigor with holistic development. 
              We are committed to creating a nurturing environment that fosters curiosity, critical thinking, and 
              character building through innovative teaching methodologies, state-of-the-art infrastructure, and 
              values-based education rooted in Indian ethos with global perspectives.
            </p>
          </div>
        </div>


        {/* Why Choose Us Section */}
        {/* <div className="mb-12">
          <h3 className="text-3xl font-bold text-[#011943] mb-8 text-center">
            Why Choose GMA International School?
          </h3>
          <p className="text-xl text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            At GMA International School, we nurture global citizens with strong values, academic excellence, 
            and a lifelong love for learning. Our student-centric approach blends innovation with tradition, 
            ensuring each child receives personalized guidance in a safe, inclusive environment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Student-Centered Curriculum", icon: "📚" },
              { title: "Innovative Learning Environment", icon: "💡" },
              { title: "Global Outlook with Indian Values", icon: "🌍" },
              { title: "Experiential Learning Methods", icon: "🔬" },
              { title: "Culture of Excellence", icon: "⭐" },
              { title: "Personalized Academic Support", icon: "👨‍🏫" },
              { title: "Interactive & Inspiring Classrooms", icon: "🏫" },
              { title: "Exploration Beyond Textbooks (ATL)", icon: "🚀" },
              { title: "Future-Ready K–12 Infrastructure", icon: "🏛️" },
              { title: "Outstanding Board Results", icon: "🎓" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-[#011943] text-sm leading-tight">{item.title}</h4>
              </div>
            ))}
          </div>
        </div> */}


      
      </div>
    </section>
  )
}

export default VisionMission