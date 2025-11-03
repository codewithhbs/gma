'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', comment: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#011943] mb-2">Dehradun Branch</h3>
                <p className="text-gray-900 text-md leading-relaxed">Radha Krishna enclave, Nagal Hatnala Shastradhara Road<br/>Near Uttaranchal University (pharma) Dehradun<br/>Uttarakhand 248001</p>
                
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#011943] mb-2">Delhi Branch</h3>
                <p className="text-gray-900 text-md leading-relaxed">RZP-6, Block P, Sector 8 Dwarka, Dwarka, New Delhi, Delhi, 110077</p>
                
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#011943] mb-2">Phone</h3>
                <p className="text-gray-900 text-md leading-relaxed">+91 9319061527</p>
                {/* <p className="text-gray-600 text-sm leading-relaxed">+1 (800) 123 456 789</p> */}
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#011943] mb-2">E-mail Address</h3>
                <p className="text-gray-900 text-md leading-relaxed">gmainternational.dehradun@gmail.com</p>
                <p className="text-gray-900 text-md leading-relaxed">Principal.gmaddnschool@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Send Us Message</h2>
              <p className="text-gray-600 text-sm">
                Your email address will not be published. Required fields are marked{' '}
                <span className="text-red-500">*</span>
              </p>
            </div>

            <div className="space-y-6">
              {/* Top Row - Name, Email, Phone */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ccbf76] focus:border-[#ccbf76] focus:bg-white transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ccbf76] focus:border-[#ccbf76]  focus:bg-white transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ccbf76] focus:border-[#ccbf76] focus:bg-white transition-all duration-200"
                  />
                </div>
              </div>

              {/* Comment Field */}
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={5}
                  value={formData.comment}
                  onChange={handleInputChange}
                  placeholder="Enter your message here..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#ccbf76] focus:border-[#ccbf76] focus:bg-white transition-all duration-200 resize-y"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Submit Now'}</span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ContactUsPage;