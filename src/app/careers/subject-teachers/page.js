import CareerLayout from '@/components/career-components/CareerLayout';
import ApplicationForm from '@/components/career-components/ApplicationForm';

const SubjectTeachers = () => {
  const position = {
    title: "Subject Teachers",
    description: "Specialize in specific subjects and inspire students' academic growth across various disciplines",
    responsibilities: [
      "Develop and deliver engaging lesson plans for specific subjects",
      "Assess and evaluate student progress through various methods",
      "Create inclusive learning environments that cater to diverse learning styles",
      "Integrate technology and innovative teaching methods in the classroom",
      "Collaborate with other teachers and staff for interdisciplinary projects",
      "Provide extra help and support to students needing additional assistance",
      "Maintain accurate records of student performance and attendance"
    ],
    requirements: [
      "Master's degree in the subject area or Bachelor's with teaching certification",
      "Valid teaching license/certification for the relevant grade levels",
      "Minimum 3 years of teaching experience in the subject area",
      "Strong knowledge of curriculum standards and assessment methods",
      "Excellent classroom management and communication skills",
      "Passion for the subject and ability to inspire students",
      "Experience with educational technology and digital tools"
    ],
    benefits: [
      "Competitive salary scale based on experience and qualifications",
      "Comprehensive health, dental, and vision insurance",
      "Professional development and continuing education support",
      "Retirement plan with employer matching",
      "Paid holidays and summer breaks",
      "Modern teaching facilities and resources",
      "Collaborative and supportive academic environment"
    ]
  };

  return (
    <CareerLayout position={position}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Subject Teachers
          </h1>
          <p className="text-xl text-gray-600">
            Inspire academic excellence and passion for learning in specialized subject areas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Job Overview */}
          <div className="p-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Position Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              We are seeking passionate and knowledgeable Subject Teachers across various disciplines 
              including Mathematics, Sciences, Languages, Social Studies, and Arts. The ideal candidates 
              will have deep subject expertise and the ability to make complex concepts accessible and 
              exciting for students.
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

        {/* Subject Areas */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Subject Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Hindi','Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History', 
              'Geography', 'Computer Science', 'Art','Dance', 'Social','French', 'Spanish', 'Yoga', 'Music', 'Physical Education', 
              'Foreign Languages', 'Abacus'].map((subject) => (
              <div key={subject} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-gray-800 font-medium">{subject}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <ApplicationForm positionTitle="Subject Teacher" />
      </div>
    </CareerLayout>
  );
};

export default SubjectTeachers;