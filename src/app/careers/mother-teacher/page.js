import CareerLayout from '@/components/career-components/CareerLayout';
import ApplicationForm from '@/components/career-components/ApplicationForm';

const MotherTeacher = () => {
  const position = {
    title: "Mother Teacher",
    description: "Provide loving care and foundational education to our youngest learners in a home-like environment",
    responsibilities: [
      "Create a warm, nurturing, and home-like classroom atmosphere",
      "Provide individualized attention and care to each child",
      "Develop and implement foundational learning activities",
      "Monitor children's health, safety, and emotional well-being",
      "Maintain regular communication with parents about child's progress",
      "Organize daily routines including meals, naps, and playtime",
      "Teach basic social skills, manners, and personal hygiene"
    ],
    requirements: [
      "Bachelor's degree in Early Childhood Education or related field",
      "Mother Teacher certification or equivalent training",
      "Minimum 3 years of experience in early childhood education",
      "Natural nurturing instinct and patience with young children",
      "Excellent communication and interpersonal skills",
      "Understanding of child psychology and development stages",
      "CPR and First Aid certification preferred"
    ],
    benefits: [
      "Competitive salary with annual increments",
      "Health insurance and retirement benefits",
      "Paid maternity leave and child education support",
      "Professional development opportunities",
      "Small class sizes for personalized attention",
      "Supportive and family-like work environment"
    ]
  };

  return (
    <CareerLayout position={position}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mother Teacher
          </h1>
          <p className="text-xl text-gray-600">
            Provide loving care and create a home away from home for our youngest learners
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Job Overview */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We are seeking a compassionate and dedicated Mother Teacher to provide nurturing care 
              and early education to our youngest students. The ideal candidate will create a warm, 
              home-like environment where children feel safe, loved, and encouraged to explore and learn.
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
        <ApplicationForm positionTitle="Mother Teacher" />
      </div>
    </CareerLayout>
  );
};

export default MotherTeacher;