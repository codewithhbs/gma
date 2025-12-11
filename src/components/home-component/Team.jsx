import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Ms. Kannu Priya Sharma",
      role: "Director and Founder",
      image: "images/director.jpg",
      bio: "Educational leader with 15+ years in academic excellence",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@greenviewschool.edu"
      }
    },
    // {
    //   name: "NAMRATA ESTHER SINGH",
    //   role: "Principal",
    //   image: "images/principle.jpg",
    //   bio: "MA,B.Ed,Diploma in Early childhood education,Diploma in home nursing and first Aid by Red Cross society. 14 years of experience in education industry",
    //   social: {
    //     linkedin: "#",
    //     twitter: "#",
    //     github: "#",
    //     email: "marcus@greenviewschool.edu"
    //   }
    // },

   
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#011943] via-[#103a83] to-[#011943] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-teal-200 to-emerald-200 bg-clip-text text-transparent">
            Meet Our Faculty
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Dedicated educators committed to nurturing young minds and inspiring 
            lifelong learning in our students.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/25 border border-white/20"
            >
              {/* Floating Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              <div className="relative z-10">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-white/30 group-hover:[#011943]/50 transition-all duration-500">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Floating Indicator */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-teal-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-teal-300 font-semibold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-300 group/social"
                    >
                      <Linkedin className="w-4 h-4 text-gray-300 group-hover/social:text-white" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-teal-500 hover:scale-110 transition-all duration-300 group/social"
                    >
                      <Twitter className="w-4 h-4 text-gray-300 group-hover/social:text-white" />
                    </a>
                    <a
                      href={member.social.github}
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 transition-all duration-300 group/social"
                    >
                      <Github className="w-4 h-4 text-gray-300 group-hover/social:text-white" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-500 hover:scale-110 transition-all duration-300 group/social"
                    >
                      <Mail className="w-4 h-4 text-gray-300 group-hover/social:text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Interested in joining our educational team?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-full hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25">
            View Teaching Positions
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Team;