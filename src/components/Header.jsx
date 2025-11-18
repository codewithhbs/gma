"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  BookOpen,
  Award,
  Users,
} from "lucide-react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import AdmissionPopup from "./AdmissionPopup";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const [openSubDropdowns, setOpenSubDropdowns] = useState({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      href: "/",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      name: "About Us",
      href: "#",
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: "Mission Vision", href: "/our-mission-vision" },
        { name: "Director and Founder", href: "/director-message" },
        { name: "Principal", href: "/principal-message" },
      ],
    },
    {
      name: "Admissions",
      href: "#",
      icon: <Award className="w-4 h-4" />,
      hasDropdown: true,
      dropdownItems: [
        { name: "Admission Process", href: "#" },
        { name: "Application Form", href: "#" },
        { name: "Fee Structure", href: "#" },
        { name: "Scholarships", href: "#" },
      ],
    },
    {
      name: "Academics",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Curriculum", href: "#" },
        { name: "Methodology", href: "#" },
        { name: "Workshops & Seminars", href: "#" },
        { name: "Online Learning", href: "#" },
      ],
    },
    {
      name: "Achievements",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Awards & Recognition", href: "/awards-recognition" },
        { name: "Academic Excellence", href: "#" },
        { name: "Sports Achievements", href: "#" },
        { name: "Cultural Awards", href: "#" },
        { name: "Student Recognition", href: "#" },
      ],
    },
    {
      name: "News & Events",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Latest News", href: "/latest-news" },
        { name: "Upcoming Events", href: "#" },
        { name: "School Calendar", href: "#" },
        { name: "Announcements", href: "#" },
      ],
    },
    {
      name: "Gallery",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Photo Gallery", href: "#" },
        { name: "Video Gallery", href: "#" },
        {
          name: "Events Gallery",
          href: "#",
          hasSubDropdown: true,
          subDropdownItems: [
            { name: "Annual Function", href: "#" },
            { name: "Sports Day", href: "#" },
            { name: "Cultural Events", href: "#" },
            { name: "Field Trips", href: "#" },
          ],
        },
        { name: "Virtual Tour", href: "#" },
      ],
    },
    {
      name: "Careers",
      href: "/careers",
     
      // hasDropdown: true,
      // dropdownItems: [
      //   { name: "View All Positions", href: "/careers" },
      //   { name: "Preprimary Teachers", href: "/careers/preprimary-teachers" },
      //   { name: "Mother Teacher", href: "/careers/mother-teacher" },
      //   { name: "Subject Teachers", href: "/careers/subject-teachers" },
      //   { name: "Computer Faculty", href: "/careers/computer-faculty" },
      //   { name: "Nurse", href: "/careers/nurse" },
      //   { name: "Librarian", href: "/careers/librarian" },
      // ],
    },
    {
      name: "Contact us",
      href: "/contact-us",
    },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Top Header - Contact Info with Marquee */}
      <AdmissionPopup />
      <div className="bg-gradient-to-r from-[#011943] via-[#012055] to-[#011943] text-white">
        <div className=" max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-2">
            {/* Contact Information */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-6">
              <div className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300">
                <Mail className="w-4 h-4 text-[#cbc175]" />
                <span className="font-md">
                  <a href="mailto:gmainternational.dehradun@gmail.com">gmainternational.dehradun@gmail.com</a>, <a href="mailto:kanika.hrgmaschool@gmail.com">kanika.hrgmaschool@gmail.com </a>
                </span>
              </div>
              <div className="flex items-center gap-2 text-blue-100 hover:text-white transition-colors duration-300">
                <Phone className="w-4 h-4 text-[#cbc175]" />
                <span className="font-md"><a href="tel:09319061527">+91-9319061527</a></span>
              </div>
            </div>

            {/* Marquee */}
            <div className="w-full lg:w-auto lg:max-w-lg overflow-hidden">
              <div
                className="marquee-container cursor-pointer"
                onClick={() => {
                  const event = new Event('openAdmissionPopup');
                  window.dispatchEvent(event);
                }}
                title="Click to apply for admission"
              >
                <div className="marquee-content">
                  <span className="text-cyan-300 text-sm font-medium">
                    <marquee className="font-md text-white">
                      🎓 Admissions Open for Class Nursery to Grade 8 | 🚀 Enroll Now for 2026-2027 🏆
                    </marquee>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? "shadow-lg border-b border-gray-200" : ""
          }`}
      >
        <div className=" bg-[antiquewhite] w-full">
          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2">
              {/* Logo Section */}
              <Link href="/">
                <div className="flex items-center space-x-4">
                  <div className="relative group">
                    <div className="">
                      <Image
                        src="/images/gma-web-logo.webp"
                        width={80}
                        alt="logo"
                        height={90}
                        className="h-[80px] w-[70px] md:w-[90px] md:h-[100px]"
                      />
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                      GMA International School
                    </h1>
                    <p className="text-sm text-gray-600 font-medium">
                      Nurturing Tomorrow In Caring Hands
                      <br />
                      (To be Affiliated to CBSE)
                    </p>
                  </div>
                </div>
              </Link>
              {/* Right Section */}
              <div className="flex items-center space-x-4">
                {/* Social Icons - Desktop only */}
                <div className="md:flex items-center space-x-2 hidden">
                  <a
                    href="#"
                    target="_blank"
                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/gmainternational.dehradun/"
                    className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110 group"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>

                {/* Apply Now Button - Desktop */}
                <Link
                  href="/contact-us"
                  className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group text-sm sm:text-base"
                >
                  <span>APPLY NOW</span>
                  <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
                </Link>

                {/* Mobile Menu Toggle - Show on screens < 1200px */}
                <button
                  onClick={toggleMobileMenu}
                  className="custom-lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative group lg:hidden"
                  aria-label="Toggle mobile menu"
                >
                  <div className="relative w-6 h-6">
                    <Menu
                      className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${isMobileMenuOpen
                          ? "opacity-0 rotate-180"
                          : "opacity-100 rotate-0"
                        }`}
                    />
                    <X
                      className={`w-6 h-6 text-gray-700 absolute transition-all duration-300 ${isMobileMenuOpen
                          ? "opacity-100 rotate-0"
                          : "opacity-0 -rotate-180"
                        }`}
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* desktop header */}
      {/* Desktop Navigation - Show on screens >= 1200px */}
      <nav className="bg-[#011943] hidden lg:flex">
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 py-4">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center space-x-1 text-white hover:text-teal-600 font-medium transition-colors duration-200"
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

      {/* end of desktop header */}

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#000]/80 z-40 custom-lg:hidden "
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-90 md:w-110 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-all duration-300 ease-out custom-lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="">
                <Image
                  src="/images/gma-web-logo.webp"
                  width={60}
                  height={70}
                  alt="gma-logo"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold bg-gradient-to-r from-teal-600 to-teal-600 bg-clip-text text-transparent">
                  GMA International
                </h2>
                <p className="text-xs text-gray-600">Excellence in Education</p>
              </div>
            </div>
          </div>
          <div className="custom-lg:hidden flex items-center justify-center py-4">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors mt-[-70%] mr-[-80%] md:mt-[-55%] md:mr-[-65%]"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="space-y-2 mb-8">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-teal-600 font-medium transition-colors duration-200 py-4 flex-1 hover:bg-blue-50 px-3 rounded-xl"
                    onClick={!item.hasDropdown ? toggleMobileMenu : undefined}
                  >
                    {item.icon && (
                      <span className="opacity-70">{item.icon}</span>
                    )}
                    <span>{item.name}</span>
                  </a>
                  {item.hasDropdown && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="p-3 text-gray-500 hover:text-teal-600 transition-colors duration-200 hover:bg-blue-50 rounded-xl"
                      aria-label={`Toggle ${item.name} dropdown`}
                    >
                      {openDropdowns[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.hasDropdown && openDropdowns[index] && (
                  <div className="mt-2 ml-4 space-y-1 pb-4">
                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                      <div key={dropdownIndex}>
                        <div className="flex items-center justify-between">
                          <a
                            href={dropdownItem.href}
                            className="text-gray-900 hover:text-teal-600 text-sm py-3 transition-colors duration-200 flex-1 hover:bg-blue-50 px-3 rounded-xl"
                            onClick={
                              !dropdownItem.hasSubDropdown
                                ? toggleMobileMenu
                                : undefined
                            }
                          >
                            {dropdownItem.name}
                          </a>
                          {dropdownItem.hasSubDropdown && (
                            <button
                              onClick={() =>
                                toggleSubDropdown(index, dropdownIndex)
                              }
                              className="p-2 text-gray-900 hover:text-teal-600 transition-colors duration-200 hover:bg-blue-50 rounded-xl"
                              aria-label={`Toggle ${dropdownItem.name} submenu`}
                            >
                              {openSubDropdowns[`${index}-${dropdownIndex}`] ? (
                                <ChevronUp className="w-3 h-3" />
                              ) : (
                                <ChevronDown className="w-3 h-3" />
                              )}
                            </button>
                          )}
                        </div>

                        {/* Mobile Sub Dropdown */}
                        {dropdownItem.hasSubDropdown &&
                          openSubDropdowns[`${index}-${dropdownIndex}`] && (
                            <div className="mt-1 ml-4 space-y-1">
                              {dropdownItem.subDropdownItems?.map(
                                (subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block text-gray-800 hover:text-teal-600 text-sm py-2 transition-colors duration-200 hover:bg-blue-50 px-3 rounded-xl"
                                    onClick={toggleMobileMenu}
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
          <div className="mb-8">
            <button
              className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white px-6 py-4 rounded-2xl font-semibold hover:from-teal-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              onClick={toggleMobileMenu}
            >
              <span>APPLY NOW</span>
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </button>
          </div>

          {/* Mobile Contact Info */}
          <div className="pt-6 border-t border-gray-200">
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                <Mail className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">
                  gmainternationaledu@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl">
                <Phone className="w-5 h-5 text-teal-600 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-700">
                  +91-9319061527
                </span>
              </div>
            </div>

            {/* Mobile Social Icons */}
            <div>
              <p className="text-gray-700 text-sm mb-4 font-semibold">
                Follow Us:
              </p>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/gmainternational.dehradun/"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5 text-white" />
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
