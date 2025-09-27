import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/Chris Tiley - Logo - Instagram.png" 
                alt="Chris Tiley Physiotherapy" 
                className="h-12 w-auto brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <p className="text-gray-300 mb-4">
              Professional physiotherapy clinic with over 100+ 5-star reviews.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/christileyphysiotherapy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/christileyphysiotherapy/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={20} className="mr-2 flex-shrink-0 mt-1 text-sky-400" />
                <span>0121 517 0806</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 flex-shrink-0 mt-1 text-sky-400" />
                <span>24 Earls Ct Rd, Harborne, Birmingham B17 9AH</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-2 flex-shrink-0 mt-1 text-sky-400" />
                <span>info@christileyphysiotherapy.com</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8am - 6pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday - Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/services" className="hover:text-sky-400 transition-colors">Our Services</a></li>
              <li><a href="/team" className="hover:text-sky-400 transition-colors">Meet Chris</a></li>
              <li><a href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service" className="hover:text-sky-400 transition-colors">Book Appointment</a></li>
              <li><a href="/contact" className="hover:text-sky-400 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="hover:text-sky-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="my-8 border-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Chris Tiley Physiotherapy. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="/terms" className="text-gray-400 hover:text-white mr-4">Terms of Service</a>
            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;