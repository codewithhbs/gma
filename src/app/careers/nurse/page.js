import CareerLayout from '@/components/career-components/CareerLayout';
import ApplicationForm from '@/components/career-components/ApplicationForm';

const Nurse = () => {
  const position = {
    title: "School Nurse",
    description: "Ensure student health and wellbeing while providing medical care and health education in our school community",
    responsibilities: [
      "Provide immediate medical care for ill or injured students and staff",
      "Manage and maintain student health records and immunization data",
      "Administer medications and treatments as prescribed by physicians",
      "Conduct health screenings and assessments for students",
      "Develop and implement individual healthcare plans for students with chronic conditions",
      "Provide health education to students, staff, and parents",
      "Maintain inventory of medical supplies and equipment"
    ],
    requirements: [
      "Bachelor's degree in Nursing (BSN) or equivalent",
      "Valid RN license and current CPR/AED certification",
      "Minimum 2 years of nursing experience, preferably in pediatrics or school setting",
      "Knowledge of child and adolescent health issues",
      "Strong assessment and emergency response skills",
      "Excellent communication and interpersonal abilities",
      "Understanding of school health protocols and regulations"
    ],
    benefits: [
      "Competitive salary with shift differentials",
      "Comprehensive health and dental insurance",
      "Retirement plan with employer contribution",
      "Paid time off and school holiday schedule",
      "Professional development opportunities",
      "Supportive healthcare team environment",
      "Modern medical facilities and equipment"
    ]
  };

  return (
    <CareerLayout position={position}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            School Nurse
          </h1>
          <p className="text-xl text-gray-600">
            Provide compassionate healthcare and promote wellness in our school community
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Job Overview */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We are seeking a dedicated and compassionate School Nurse to join our health services team. 
              The ideal candidate will provide comprehensive healthcare to students, promote health education, 
              and ensure a safe and healthy learning environment for our entire school community.
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

        {/* Health Services Info */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Health Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              {['First Aid', 'Health Education', 'Medication "Counseling"'].map((service) => (
                <div key={service} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            
          </div>
        </div>

        {/* Application Form */}
        <ApplicationForm positionTitle="School Nurse" />
      </div>
    </CareerLayout>
  );
};

export default Nurse;