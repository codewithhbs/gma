"use client";
import React from "react";
import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Linkedin,
  MessageCircle,
  Youtube,
  Send,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#001436] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center">
              <h3 className="text-xl font-semibold mb-6 relative">
                About Us
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ccbf76] -mb-3"></div>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>

            <div className="space-y-4 mt-5">
              <div className="flex items-center">
                <div className="bg-[#ccbf76] p-2 rounded-lg mr-3">
                  <Phone className="w-4 h-4 text-slate-900" />
                </div>
                <span className="text-gray-300">+91-9319061527</span>
              </div>

              <div className="flex items-center">
                <div className="bg-[#ccbf76] p-2 rounded-lg mr-3">
                  <MapPin className="w-4 h-4 text-slate-900" />
                </div>
                <span className="text-gray-300">
                  Radha Krishna enclave, Nagal Hatnala Shastradhara road Near Uttaranchal University (pharma) Dehradun Uttarakhand 248001
                </span>
              </div>

              <div className="flex items-center">
                <div className="bg-[#ccbf76] p-2 rounded-lg mr-3">
                  <Mail className="w-4 h-4 text-slate-900" />
                </div>
                <span className="text-gray-300">gmainternational.dehradun@gmail.com, Principal.gmaddnschool@gmail.com</span>
              </div>
              {/* <div className="flex items-center">
                <div className="bg-[#ccbf76] p-2 rounded-lg mr-3">
                  <Mail className="w-4 h-4 text-slate-900" />
                </div>
                <span className="text-gray-300">Principal.gmaddnschool@gmail.com</span>
              </div> */}

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ccbf76] -mb-3"></div>
            </h3>

            <ul className="space-y-3 mt-7">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Terms Of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Update News
                </a>
              </li>
            </ul>
          </div>

          {/* Our Campus */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Our Campus
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ccbf76] -mb-3"></div>
            </h3>

            <ul className="space-y-3 mt-7">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Campus Safety
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Student Activities
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Academic Department
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Planning & Administration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Office Of The Chancellor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#ccbf76] transition-colors duration-200 flex items-center"
                >
                  <span className="text-[#ccbf76] mr-2">▶</span>
                  Facility Services
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-6 relative">
              Newsletter
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#ccbf76] -mb-3"></div>
            </h3>
            <div className="mt-7">
            <p className="text-gray-300 mb-6 leading-relaxed ">
              Subscribe Our Newsletter To Get Latest Update And News
            </p>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg border border-slate-700 focus:outline-none focus:border-[#ccbf76] transition-colors duration-200"
                />
              </div>

              <button className="w-full bg-[#ccbf76] hover:bg-[#ccbf76] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                SUBSCRIBE NOW
                <Send className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0">
              <p className="text-gray-400 text-sm">
                © Copyright 2025 <span className="text-[#ccbf76">GMA International School</span>{" "}
                All Rights Reserved. | Design & Development By Hover Business Services LLP
              </p>
            </div>

            <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/gmainternational.dehradun/"
                  className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                   target="_blank"
                >
                  <InstagramIcon className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300 hover:scale-110"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-5 h-5 text-white" />
                </a>
            
              </div>

            {/* <div className="flex space-x-3">
              <a
                href="#"
                className="bg-[#ccbf76] hover:bg-[#ccbf76] p-2 rounded-lg transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-slate-900" />
              </a>
              <a
                href="#"
                className="bg-[#ccbf76] hover:[#ccbf76] p-2 rounded-lg transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5 text-slate-900" />
              </a>
              <a
                href="#"
                className="bg-[#ccbf76] hover:bg-[#ccbf76] p-2 rounded-lg transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5 text-slate-900" />
              </a>
              <a
                href="#"
                className="bg-[#ccbf76] hover:[#ccbf76] p-2 rounded-lg transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 text-slate-900" />
              </a>
            </div> */}
            
          </div>
        </div>
      </div>  

    </footer>
    

  );
};

export default Footer;
