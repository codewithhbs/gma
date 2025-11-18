// app/careers/page.js
import Link from 'next/link';

export default function CareersPage() {
  const positions = [
    {
      title: "Preprimary Teachers",
      slug: "preprimary-teachers",
      description: "Join our early childhood education team to nurture young minds",
      icon: "🎨"
    },
    {
      title: "Mother Teacher",
      slug: "mother-teacher", 
      description: "Provide loving care and foundational education to our youngest learners",
      icon: "👩‍🏫"
    },
    {
      title: "Subject Teachers",
      slug: "subject-teachers",
      description: "Specialize in specific subjects and inspire students' academic growth",
      icon: "📚"
    },
    {
      title: "Computer Faculty",
      slug: "computer-faculty",
      description: "Teach technology skills and prepare students for the digital world",
      icon: "💻"
    },
    {
      title: "Nurse",
      slug: "nurse",
      description: "Ensure student health and wellbeing in our school community",
      icon: "⚕️"
    },
    {
      title: "Librarian",
      slug: "librarian",
      description: "Manage our learning resources and foster a love for reading",
      icon: "📖"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header and grid content from earlier */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
             We&apos;re looking for passionate educators and staff to join our growing institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {positions.map((position) => (
            <Link 
              key={position.slug}
              href={`/careers/${position.slug}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100 group-hover:border-[#009689] group-hover:translate-y-[-4px]">
                <div className="text-4xl mb-4">{position.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#009689] transition-colors">
                  {position.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {position.description}
                </p>
                <div className="flex items-center text-[#009689] font-semibold group-hover:translate-x-2 transition-transform">
                  Apply Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}