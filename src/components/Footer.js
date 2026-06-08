'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1C301A] text-stone-300 pt-16 pb-8 px-4 md:px-8 lg:px-16 border-t border-[#2F4D2A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-center md:text-left">

        {/* Logo + Description */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <Link href="/">
            <Image
              src="/Farmik.svg"
              alt="Farmik Logo"
              width={180}
              height={55}
              className="brightness-0 invert opacity-90"
              priority
            />
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed max-w-xs text-stone-300/80 font-satoshi">
            Farmik brings you internationally certified superfoods, proudly made in India — where tradition meets innovation in every bite. 🌿
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase font-satoshi">Quick Links</h4>
          <ul className="space-y-2 text-sm font-medium">
            <li>
              <Link href="/about" className="hover:text-white transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/product" className="hover:text-white transition-colors duration-200">
                Our Products
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">
                Contact Us
              </Link>
            </li>
            <li>
              <a 
                href="https://www.amazon.in/stores/Farmik/page/7F8B2DF0-D4FF-4A96-B625-1867E0E60731" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200"
              >
                Shop on Amazon
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase font-satoshi">Contact</h4>
          <div className="space-y-2.5 text-sm">
            <a href="mailto:support@agasthyasuperfoods.com" className="flex items-center gap-2 hover:text-white justify-center md:justify-start transition-colors duration-200">
              <Mail size={14} className="text-[#A3D19E]" />
              <span>support@agasthyasuperfoods.com</span>
            </a>
            <a href="tel:+917075704167" className="flex items-center gap-2 hover:text-white justify-center md:justify-start transition-colors duration-200">
              <Phone size={14} className="text-[#A3D19E]" />
              <span>+91 70757 04167</span>
            </a>
            <div className="flex items-start gap-2 text-stone-300/80 justify-center md:justify-start">
              <MapPin size={14} className="text-[#A3D19E] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm">Hyderabad, Telangana, India</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h4 className="text-white font-bold text-sm tracking-wider uppercase font-satoshi">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-3">
            <a 
              href="https://www.facebook.com/profile.php?id=61576634257472" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#345A2B] hover:text-white flex items-center justify-center text-stone-300 transition-all duration-300 hover:scale-105"
            >
              <FaFacebookF size={14} />
            </a>
            <a 
              href="https://www.instagram.com/mr.flakesnutrix/" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#345A2B] hover:text-white flex items-center justify-center text-stone-300 transition-all duration-300 hover:scale-105"
            >
              <FaInstagram size={14} />
            </a>
            <a 
              href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#345A2B] hover:text-white flex items-center justify-center text-stone-300 transition-all duration-300 hover:scale-105"
            >
              <FaLinkedinIn size={14} />
            </a>
            <a 
              href="https://www.youtube.com/@agasthyasuperfoods" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#345A2B] hover:text-white flex items-center justify-center text-stone-300 transition-all duration-300 hover:scale-105"
            >
              <FaYoutube size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-stone-400 font-satoshi">
        © 2025 Farmik, a brand by Agasthya Superfoods India Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}
