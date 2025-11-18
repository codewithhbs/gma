import CareerLayout from '@/components/career-components/CareerLayout';
import ApplicationForm from '@/components/career-components/ApplicationForm';

const PreprimaryTeachers = () => {
  const position = {
    title: "Preprimary Teachers",
    description: "Join our early childhood education team and help shape the foundation of young learners",
    responsibilities: [
      "Create and implement age-appropriate lesson plans for preprimary students",
      "Foster a safe, nurturing, and stimulating learning environment",
      "Develop children's social, emotional, cognitive, and physical skills",
      "Monitor and assess student progress and provide feedback to parents",
      "Organize and conduct creative learning activities and play-based education",
      "Maintain classroom organization and educational materials"
    ],
    requirements: [
      "Bachelor's degree in Early Childhood Education or related field",
      "Teaching certification for preprimary education",
      "Minimum 2 years of experience in preprimary teaching",
      "Patience, creativity, and passion for working with young children",
      "Excellent communication and interpersonal skills",
      "Knowledge of child development and age-appropriate teaching methods"
    ],
    benefits: [
      "Competitive salary with performance bonuses",
      "Professional development opportunities",
      "Supportive work environment",
      "Health insurance and retirement benefits",
      "Paid time off and school holidays"
    ]
  };

  return (
    <CareerLayout position={position}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Preprimary Teachers
          </h1>
          <p className="text-xl text-gray-600">
            Shape young minds and build strong educational foundations
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Job Overview */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We are seeking passionate and dedicated Preprimary Teachers to join our early childhood education team. 
              The ideal candidate will have a genuine love for working with young children and creating engaging, 
              developmentally appropriate learning experiences.
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

        {/* Application Form */}
        <ApplicationForm positionTitle="Preprimary Teacher" />
      </div>
    </CareerLayout>
  );
};

export default PreprimaryTeachers;