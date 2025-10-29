import CareerLayout from '@/components/career-components/CareerLayout';
import ApplicationForm from '@/components/career-components/ApplicationForm';

const Librarian = () => {
  const position = {
    title: "School Librarian",
    description: "Manage our learning resources and foster a love for reading while creating an engaging library environment",
    responsibilities: [
      "Manage and organize the school library collection and resources",
      "Assist students and staff in locating and utilizing library materials",
      "Develop and implement library programs to promote reading and literacy",
      "Teach information literacy and research skills to students",
      "Manage library budget and acquisitions of new materials",
      "Maintain digital resources and online catalog systems",
      "Organize author visits, book fairs, and reading challenges"
    ],
    requirements: [
      "Master's degree in Library Science (MLIS) or equivalent",
      "School library certification or teaching credential",
      "Minimum 2 years of experience in a school or educational library",
      "Knowledge of library management systems and digital resources",
      "Strong understanding of children's and young adult literature",
      "Excellent organizational and customer service skills",
      "Ability to collaborate with teachers on curriculum support"
    ],
    benefits: [
      "Competitive salary with annual increments",
      "Comprehensive benefits package including health insurance",
      "Professional development opportunities in library science",
      "Budget for collection development and resource acquisition",
      "Collaborative work environment with teaching staff",
      "Paid time off and school holiday schedule",
      "Opportunity to shape the reading culture of the school"
    ]
  };

  return (
    <CareerLayout position={position}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Librarian
          </h1>
          <p className="text-xl text-gray-600">
            Cultivate a love for reading and manage our vibrant learning resource center
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Job Overview */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We are seeking an enthusiastic and organized School Librarian to manage our library resources 
              and inspire a lifelong love of reading in our students. The ideal candidate will create an 
              inviting library space that serves as the heart of our school&apos;s learning community.
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

        {/* Library Resources */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Library Collection & Resources</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009689] mb-2">15,000+</div>
              <div className="text-gray-600">Books & Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009689] mb-2">2,500+</div>
              <div className="text-gray-600">Digital Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#009689] mb-2">50+</div>
              <div className="text-gray-600">Periodicals</div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Children\'s Literature', 'Young Adult Fiction', 'Reference Materials', 
              'Educational Databases', 'Audiobooks', 'Research Tools'].map((resource) => (
              <div key={resource} className="flex items-center">
                <svg className="w-5 h-5 text-[#B3976E] mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{resource}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <ApplicationForm positionTitle="School Librarian" />
      </div>
    </CareerLayout>
  );
};

export default Librarian;