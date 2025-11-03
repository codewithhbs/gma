'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'Student-Centered Curriculum',
    icon: '🎯',
    description: 'Tailored learning paths that adapt to individual student needs and learning styles.'
  },
  {
    id: 2,
    title: 'Innovative Learning Environment',
    icon: '💡',
    description: 'State-of-the-art facilities designed to foster creativity and critical thinking.'
  },
  {
    id: 3,
    title: 'Global Outlook with Indian Values',
    icon: '🌍',
    description: 'International perspective grounded in rich cultural heritage and moral values.'
  },
  {
    id: 4,
    title: 'Experiential Learning Methods',
    icon: '🔬',
    description: 'Hands-on learning experiences that make education engaging and practical.'
  },
  {
    id: 5,
    title: 'Culture of Excellence',
    icon: '⭐',
    description: 'Consistent pursuit of academic and personal excellence in all endeavors.'
  },
  {
    id: 6,
    title: 'Personalized Academic Support',
    icon: '👨‍🏫',
    description: 'Individual attention and mentorship to help every student reach their potential.'
  },
  {
    id: 7,
    title: 'Interactive & Inspiring Classrooms',
    icon: '🏫',
    description: 'Dynamic learning spaces equipped with modern educational technology.'
  },
  {
    id: 8,
    title: 'Exploration Beyond Textbooks (ATL)',
    icon: '🚀',
    description: 'Atal Tinkering Labs encouraging innovation and scientific temperament.'
  },
  {
    id: 9,
    title: 'Future-Ready K–12 Infrastructure',
    icon: '🏛️',
    description: 'Comprehensive campus designed for holistic development across all grades.'
  },
  {
    id: 10,
    title: 'Outstanding Board Results',
    icon: '🏆',
    description: 'Consistent track record of exceptional academic performance and achievements.'
  },
  {
    id: 11,
    title: 'Comprehensive CBSE Curriculum',
    icon: '📚',
    description: 'Conceptual and application-based learning following national standards.'
  },
  {
    id: 12,
    title: 'Experienced and Trained Faculty',
    icon: '👩‍🎓',
    description: 'Dedicated educators with expertise in modern pedagogical approaches.'
  },
  {
    id: 13,
    title: 'Sports Facilities',
    icon: '⚽',
    description: 'Excellent sports infrastructure promoting physical fitness and teamwork.'
  },
  {
    id: 14,
    title: 'Modern Laboratories',
    icon: '🔭',
    description: 'Well-equipped labs for sciences, robotics, and technology education.'
  },
  {
    id: 15,
    title: 'Safe Environment',
    icon: '🛡️',
    description: 'Secure campus with comprehensive safety protocols and caring supervision.'
  }
];

const ServiceCard = ({ service, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300"
    >
      <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
};

export default function WhyChooseGMA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-fixed pt-12"
        style={{ backgroundImage: "url('/images/why-choose-bg.webp')" }}>
      {/* Background decorative elements */}
      <div  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         <h1 className="text-3xl lg:text-5xl md:text-4xl font-bold text-white mb-4 lg:mb-8">
              Why Choose GMA International School?
            </h1>
          <div className="max-w-4xl mx-auto">
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed px-4">
                At GMA International School, we nurture global citizens with strong
                values, academic excellence, and a lifelong love for learning. Our
                student-centric approach blends innovation with tradition,
                ensuring each child receives personalized guidance in a safe,
                inclusive environment.
              </p>
            </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
         
        </motion.div>
      </div>
    </section>
  );
}