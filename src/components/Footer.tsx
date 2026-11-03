import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Clinic details */}
            <div>
              <div className="flex items-center mb-3">
                <img src="/logo.png" alt="Chris Tiley Physiotherapy" className="h-10 md:h-12 w-auto brightness-0 invert" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </div>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">Professional physiotherapy clinic with over 100 5-star reviews.</p>
              <h3 className="text-base md:text-xl font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start"><Phone size={16} className="mr-2 flex-shrink-0 mt-0.5 text-sky-400" /><a href="tel:01215170806" className="text-sm hover:text-sky-400">0121 517 0806</a></li>
                <li className="flex items-start"><MapPin size={16} className="mr-2 flex-shrink-0 mt-0.5 text-sky-400" /><span className="text-sm">24 Earls Ct Rd, Harborne, Birmingham B17 9AH</span></li>
                <li className="flex items-start"><Mail size={16} className="mr-2 flex-shrink-0 mt-0.5 text-sky-400" /><a href="mailto:info@christileyphysiotherapy.com" className="text-sm break-all hover:text-sky-400">info@christileyphysiotherapy.com</a></li>
              </ul>
              <div className="flex space-x-3 mt-4">
                <a href="https://www.facebook.com/christileyphysiotherapy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Follow us on Facebook"><Facebook size={22} /></a>
                <a href="https://www.instagram.com/christileyphysiotherapy/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors" aria-label="Follow us on Instagram"><Instagram size={22} /></a>
              </div>
            </div>

            {/* Opening hours */}
            <div>
              <h3 className="text-base md:text-xl font-bold mb-3">Opening Hours</h3>
              <ul className="space-y-2">
                <li className="flex flex-wrap items-baseline gap-x-3 text-sm"><span>Monday - Friday</span><span className="text-gray-300">8am - 6pm</span></li>
                <li className="flex flex-wrap items-baseline gap-x-3 text-sm"><span>Saturday</span><span className="text-gray-300">8am - 1pm</span></li>
                <li className="flex flex-wrap items-baseline gap-x-3 text-sm"><span>Sunday</span><span className="text-gray-300">Closed</span></li>
              </ul>
            </div>

            {/* Service links */}
            <div>
              <h3 className="text-base md:text-xl font-bold mb-3">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/" className="text-sm hover:text-sky-400 transition-colors">Physiotherapy Services</a></li>
                <li><a href="/ski-mojo/" className="text-sm hover:text-sky-400 transition-colors">Ski Mojo Fittings</a></li>
                <li><a href="/strength-rehab-classes/" className="text-sm hover:text-sky-400 transition-colors">Strength &amp; Rehab Classes</a></li>
                <li><a href="/over-60s-strength-classes/" className="text-sm hover:text-sky-400 transition-colors">Over 60s Strength Classes</a></li>
                <li><a href="/booking/" className="text-sm hover:text-sky-400 transition-colors">Book Appointment</a></li>
              </ul>
            </div>

            {/* Further links */}
            <div>
              <h3 className="text-base md:text-xl font-bold mb-3">Explore</h3>
              <ul className="space-y-2">
                <li><a href="/about/" className="text-sm hover:text-sky-400 transition-colors">About Us</a></li>
                <li><a href="/advice/" className="text-sm hover:text-sky-400 transition-colors">Advice</a></li>
                <li><a href="/contact/" className="text-sm hover:text-sky-400 transition-colors">Contact</a></li>
                <li><a href="https://www.youtube.com/c/NeverTooOldtoLift" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sky-400 transition-colors">Never Too Old to Lift on YouTube</a></li>
                <li><a href="https://nevertoooldtolift.com/category/podcast/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-sky-400 transition-colors">Never Too Old to Lift Podcast</a></li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-sm">&copy; {new Date().getFullYear()} Chris Tiley Physiotherapy. All rights reserved.</p>
            <div>
              <a href="/terms-of-service/" className="text-sm text-gray-400 hover:text-white mr-4">Terms of Service</a>
              <a href="/privacy-policy/" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
