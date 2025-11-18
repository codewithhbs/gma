'use client'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAPP = () => {
  return (
    <>
      <div className="fixed bottom-6 left-4 z-50">
        <Link
          href="https://api.whatsapp.com/send/?phone=%2B919319061527&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300"
        >
          <FaWhatsapp size={30}/>
          <span className="hidden md:inline">WhatsApp Us</span>
        </Link>
      </div>
    </>
  )
}

export default WhatsAPP