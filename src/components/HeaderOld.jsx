"use client";
import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [openSubDropdowns, setOpenSubDropdowns] = useState({});

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleSubDropdown = (parentIndex, subIndex) => {
    const key = `${parentIndex}-${subIndex}`;
    setOpenSubDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const navigationItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "About Us",
      href: "#",
    },
    {
      name: "Admissions ",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Admission Info", href: "#" },
        // { name: "Course Details", href: "#" },
        // {
        //   name: "Categories",
        //   href: "#",
        //   hasSubDropdown: true,
        //   subDropdownItems: [
        //     { name: "Web Development", href: "#" },
        //     { name: "Mobile Development", href: "#" },
        //     { name: "Data Science", href: "#" },
        //     { name: "Digital Marketing", href: "#" },
        //   ],
        // },
        // { name: "Instructors", href: "#" },
      ],
    },
    {
      name: "Academics",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Workshop's & Seminar's", href: "#" },
        { name: "Methodology", href: "#" },
         { name: "Curriculum", href: "#" },
        // {
        //   name: "Research",
        //   href: "#",
        //   hasSubDropdown: true,
        //   subDropdownItems: [
        //     { name: "Research Areas", href: "#" },
        //     { name: "Publications", href: "#" },
        //     { name: "Faculty Research", href: "#" },
        //   ],
        // },
        // { name: "Academic Calendar", href: "#" },
      ],
    },
    {
      name: "Achievement ",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Academics Achievement", href: "#" },
        { name: "Co-Curricular Achievement", href: "#" },
        { name: "Sports Achievement", href: "#" },
        
      ],
    },
    {
      name: "School News ",
      href: "#",
      // hasDropdown: true,
      // dropdownItems: [
      //   { name: "How to Apply", href: "#" },
      //   { name: "Requirements", href: "#" },
      //   {
      //     name: "Programs",
      //     href: "#",
      //     hasSubDropdown: true,
      //     subDropdownItems: [
      //       { name: "Undergraduate", href: "#" },
      //       { name: "Graduate", href: "#" },
      //       { name: "Certificate Programs", href: "#" },
      //     ],
      //   },
      //   { name: "Scholarships", href: "#" },
      // ],
    },
    {
      name: "Gallery",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "How to Apply", href: "#" },
        { name: "Requirements", href: "#" },
        {
          name: "Photos",
          href: "#",
          hasSubDropdown: true,
          subDropdownItems: [
            { name: "Performing Arts", href: "#" },
            { name: "Special Events", href: "#" },
            { name: "Sports", href: "#" },
            { name: "Activities", href: "#" },
          ],
        },
        { name: "Video Gallery", href: "#" },
      ],
    },
    {
      name: "Career",
      href: "#",
    },

    { name: "Contact us", href: "#", hasDropdown: false },
  ];

  return (
    <header className="w-full">
      {/* Top Header - Contact Info only */}
      {/* Top Header - Contact Info with Marquee on Right */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
            {/* Contact Information - Left */}
            <div className="flex flex-wrap items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>25/B Milford Road, New York</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>gmainternationaledu@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91-9319061527</span>
              </div>
            </div>

            {/* Marquee - Right */}
            <div className="w-full lg:w-1/2 overflow-hidden">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="4"
                className="text-white"
              >
                🎓 Admissions Open for 2025! Enroll Now – Limited Seats
                Available | 📚 Explore New Courses in AI, Robotics, and More!
              </marquee>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Header - Logo, Apply Now Button, and Social Icons */}
      <div className="bg-white shadow-sm py-1">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/images/gma-web-logo.webp"
                width={80}
                height={80}
                alt="Logo"
              />
            </div>

            {/* Apply Now & Social Icons */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Social Icons */}
              <div className="flex items-center space-x-2">
                <a
                  href="#"
                  className="bg-teal-700 bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                >
                  <CiFacebook className="w-5 h-5 text-gray-50" />
                </a>
                <a
                  href="#"
                  className="bg-teal-700 bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                >
                  <CiInstagram className="w-5 h-5 text-gray-50" />
                </a>
                <a
                  href="#"
                  className="bg-teal-700 bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                >
                  <CiYoutube className="w-5 h-5 text-gray-50" />
                </a>
                <a
                  href="#"
                  className="bg-teal-700 bg-opacity-80 p-2 rounded-full hover:bg-opacity-100 transition-colors"
                >
                  <FaWhatsapp className="w-5 h-5 text-gray-50" />
                </a>
              </div>

              {/* Apply Now Button */}
              <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                APPLY NOW
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Header - Navigation */}
      <nav className="bg-white border-t border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 py-4">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-900 hover:text-teal-600 font-medium transition-colors duration-200"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100">
                    <div className="py-2">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <div key={dropdownIndex} className="relative group/sub">
                          <a
                            href={dropdownItem.href}
                            className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors duration-200"
                          >
                            <span>{dropdownItem.name}</span>
                            {dropdownItem.hasSubDropdown && (
                              <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover/sub:rotate-0 transition-transform duration-200" />
                            )}
                          </a>

                          {/* Sub Dropdown Menu */}
                          {dropdownItem.hasSubDropdown && (
                            <div className="absolute top-0 left-full ml-1 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 z-50 border border-gray-100">
                              <div className="py-2">
                                {dropdownItem.subDropdownItems.map(
                                  (subItem, subIndex) => (
                                    <a
                                      key={subIndex}
                                      href={subItem.href}
                                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-teal-600 transition-colors duration-200"
                                    >
                                      {subItem.name}
                                    </a>
                                  )
                                )}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/RC-GMA-international-school-2.jpg"
                width={50}
                height={50}
                alt="Mobile Logo"
              />
            </div>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-2">
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 py-2 flex-1"
                  >
                    {item.name}
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="p-2 text-gray-500 hover:text-teal-600 transition-colors duration-200"
                    >
                      {openDropdowns[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown Menu */}
                {item.hasDropdown && openDropdowns[index] && (
                  <div className="mt-2 ml-4 space-y-1">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <div key={dropdownIndex}>
                        <div className="flex items-center justify-between">
                          <a
                            href={dropdownItem.href}
                            className="text-gray-600 hover:text-teal-600 text-sm py-2 transition-colors duration-200 flex-1"
                          >
                            {dropdownItem.name}
                          </a>
                          {dropdownItem.hasSubDropdown && (
                            <button
                              onClick={() =>
                                toggleSubDropdown(index, dropdownIndex)
                              }
                              className="p-1 text-gray-400 hover:text-teal-600 transition-colors duration-200"
                            >
                              {openSubDropdowns[`${index}-${dropdownIndex}`] ? (
                                <ChevronUp className="w-3 h-3" />
                              ) : (
                                <ChevronDown className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Mobile Sub Dropdown Menu */}
                        {dropdownItem.hasSubDropdown &&
                          openSubDropdowns[`${index}-${dropdownIndex}`] && (
                            <div className="mt-1 ml-4 space-y-1">
                              {dropdownItem.subDropdownItems.map(
                                (subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block text-gray-500 hover:text-teal-600 text-sm py-1 transition-colors duration-200"
                                  >
                                    {subItem.name}
                                  </a>
                                )
                              )}
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Apply Now Button */}
          <div className="mt-8">
            <button className="w-full bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:from-orange-500 hover:to-orange-600 transition-all duration-300 shadow-lg">
              APPLY NOW
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-teal-600" />
                <span>25/B Milford Road, New York</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-teal-600" />
                <span>info@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-teal-600" />
                <span>+2 123 654 7898</span>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div className="mt-6">
              <p className="text-gray-600 text-sm mb-3">Follow Us:</p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-400 to-teal-600 p-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-400 to-teal-600 p-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-400 to-teal-600 p-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-r from-orange-400 to-teal-600 p-3 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
