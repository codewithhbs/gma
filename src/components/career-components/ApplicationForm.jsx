"use client";
import { useState } from 'react';

const ApplicationForm = ({ positionTitle }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    message: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mainEmail = "Principal.gmaddnschool@gmail.com";
    const secondEmail = "kanika.hrgmaschool@gmail.com";
    const thirdmail = "hbsdevelopersteam@gmail.com";

    const mailtoLink = `mailto:${mainEmail}?cc=${secondEmail}?cc=${thirdmail}&subject=Application for ${positionTitle}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AExperience: ${formData.experience}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Apply for this Position</h2>
      <p className="text-gray-600 mb-8">
        Ready to join our team? Send us your application and we'll get back to you soon.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009689] focus:border-transparent"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009689] focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009689] focus:border-transparent"
              placeholder="+91 88123-74567"
            />
          </div>

          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
              Years of Experience *
            </label>
            <input
              type="text"
              id="experience"
              name="experience"
              required
              value={formData.experience}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009689] focus:border-transparent"
              placeholder="e.g., 5 years"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Cover Letter / Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#009689] focus:border-transparent"
            placeholder="Tell us why you're interested in this position and what makes you a great candidate..."
          />
        </div>

        <div>
          <p className="text-sm text-gray-600 mb-4">
            * After submitting this form, you'll be prompted to attach your resume, cover letter, and any other supporting documents via email before sending your application.
          </p>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-[#009689] text-white font-semibold rounded-lg hover:bg-[#007a6e] transition-colors flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Submit Application via Email
          </button>
        </div>
      </form>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-blue-800 text-sm">
          <strong>Note:</strong> After clicking the submit button, your email client will open with a pre-filled message.
          Please attach your resume and any other required documents before sending the email.
        </p>
      </div>
    </div>
  );
};

export default ApplicationForm;