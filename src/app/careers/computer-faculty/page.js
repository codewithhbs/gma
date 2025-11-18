import CareerLayout from '@/components/career-components/CareerLayout';
import ApplicationForm from '@/components/career-components/ApplicationForm';

const ComputerFaculty = () => {
  const position = {
    title: "Computer Faculty",
    description: "Teach technology skills and prepare students for the digital world with cutting-edge computer education",
    responsibilities: [
      "Teach computer science concepts and programming languages to various grade levels",
      "Develop curriculum for coding, digital literacy, and computer applications",
      "Manage and maintain computer lab equipment and software",
      "Introduce students to emerging technologies and digital tools",
      "Organize coding clubs, tech workshops, and computer-related activities",
      "Prepare students for technology competitions and certifications",
      "Stay updated with latest trends in technology and computer education"
    ],
    requirements: [
      "Bachelor's or Master's degree in Computer Science, IT, or related field",
      "Teaching certification or B.Ed. with computer specialization",
      "Minimum 2 years of teaching experience in computer education",
      "Proficiency in programming languages (Python, Java, Scratch, etc.)",
      "Knowledge of computer hardware, software, and networking basics",
      "Experience with educational technology and learning management systems",
      "Strong problem-solving and technical troubleshooting skills"
    ],
    benefits: [
      "Competitive salary with technology allowance",
      "Access to state-of-the-art computer labs and equipment",
      "Professional development in emerging technologies",
      "Opportunity to attend tech conferences and workshops",
      "Flexible scheduling for project-based learning",
      "Health insurance and retirement benefits",
      "Creative freedom to develop innovative tech curriculum"
    ]
  };

  return (
    <CareerLayout position={position}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Computer Faculty
          </h1>
          <p className="text-xl text-gray-600">
            Empower students with digital literacy and programming skills for the future
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Job Overview */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We are seeking an innovative Computer Faculty member to develop and deliver comprehensive 
              technology education across all grade levels. The ideal candidate will inspire students 
              to become creators, not just consumers, of technology while building essential digital 
              literacy skills.
            </p>
          </div>

          {/* Responsibilities */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
            <ul className="space-y-3">
              {position.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[#009689] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{responsibility}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
            <ul className="space-y-3">
              {position.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[#009689] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
            <ul className="space-y-3">
              {position.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-[#B3976E] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Programming', 'Digital Literacy', 'Robotics', 'Web Development', 
              'Cybersecurity', 'AI & ML', 'Data Science', 'Game Development'].map((area) => (
              <div key={area} className="bg-blue-50 rounded-lg p-3 text-center">
                <span className="text-blue-800 font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <ApplicationForm positionTitle="Computer Faculty" />
      </div>
    </CareerLayout>
  );
};

export default ComputerFaculty;