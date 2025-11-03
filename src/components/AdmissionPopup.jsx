'use client';

import { useState, useEffect } from 'react';

export default function AdmissionPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    childClass: '',
  });

  useEffect(() => {
    // Check if popup was already shown
    const alreadyShown = localStorage.getItem('gmaPopupShown');

    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        localStorage.setItem('gmaPopupShown', 'true');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, []);

  // ✅ Listen for custom "openAdmissionPopup" event (triggered by marquee click)
  useEffect(() => {
    const handleOpenPopup = () => setShowPopup(true);
    window.addEventListener('openAdmissionPopup', handleOpenPopup);
    return () => window.removeEventListener('openAdmissionPopup', handleOpenPopup);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mainEmail = 'Principal.gmaddnschool@gmail.com';
    const secondEmail = 'kanika.hrgmaschool@gmail.com';
    const thirdEmail = 'hbsdevelopersteam@gmail.com';

    const subject = `New Admission Inquiry - ${formData.childClass}`;
    const body = `
New admission inquiry received:

Parent Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Class: ${formData.childClass}

Submitted on: ${new Date().toLocaleString()}
    `.trim();

    const mailtoLink = `mailto:${mainEmail}?cc=${secondEmail},${thirdEmail}&subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    alert('Thank you for your interest! Please check your email client to send the application.');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="gma-popup-overlay">
      <div className="gma-popup-container">
        <button className="gma-close-btn" onClick={() => setShowPopup(false)}>
          &times;
        </button>
        <h2 className="gma-popup-title">Admissions Open - GMA International School</h2>
        <p className="gma-popup-subtitle">Enroll your child from Nursery to Grade 8</p>

        <form className="gma-popup-form" onSubmit={handleSubmit}>
          <input
            className="gma-input"
            type="text"
            name="name"
            placeholder="Parent Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="gma-input"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="gma-input"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <select
            className="gma-input"
            name="childClass"
            value={formData.childClass}
            onChange={handleChange}
            required
          >
            <option value="">Select Class</option>
            <option value="Nursery">Nursery</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="1st">1st Grade</option>
            <option value="2nd">2nd Grade</option>
            <option value="3rd">3rd Grade</option>
            <option value="4th">4th Grade</option>
            <option value="5th">5th Grade</option>
            <option value="6th">6th Grade</option>
            <option value="7th">7th Grade</option>
            <option value="8th">8th Grade</option>
          </select>
          <button className="gma-submit-btn" type="submit">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .gma-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 20, 54, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .gma-popup-container {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          position: relative;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }
        .gma-popup-title {
          color: #001436;
          margin-bottom: 10px;
        }
        .gma-popup-subtitle {
          color: #009689;
          margin-bottom: 20px;
        }
        .gma-close-btn {
          position: absolute;
          top: 10px;
          right: 15px;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          color: #001436;
        }
        .gma-input {
          width: 100%;
          padding: 10px;
          margin: 10px 0;
          border-radius: 6px;
          border: 1px solid #009689;
        }
        .gma-submit-btn {
          background: #001436;
          color: #fff;
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          width: 100%;
          font-weight: bold;
        }
        .gma-submit-btn:hover {
          background: #009689;
        }
      `}</style>
    </div>
  );
}
