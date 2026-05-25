import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const bookingUrl = 'https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service';

  const services = [
    {
      title: 'Physiotherapy',
      description: 'Expert assessment and treatment for pain, injuries, and movement issues'
    },
    {
      title: 'Strength Training',
      description: 'Personalised programs to build strength and improve performance'
    },
    {
      title: "Over 60's Strength Class",
      description: 'Group training designed for older adults to maintain independence'
    }
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Booking Section */}
      <div className="bg-navy-800 py-10 md:py-16 rounded-b-[60px]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Services Booking - Left Side */}
            <div className="bg-gray-100 rounded-lg p-5 md:p-8 max-w-full overflow-hidden">
              <div className="mb-4 md:mb-6">
                <span className="inline-block px-3 py-1.5 bg-navy-900 text-white text-xs font-bold rounded-full mb-3">
                  GET IN TOUCH
                </span>
                <h2 className="text-xl md:text-3xl font-bold text-navy-900 mb-4 md:mb-6">
                  Services Booking
                </h2>
              </div>

              <div className="space-y-4 md:space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="border-b border-gray-300 pb-4 md:pb-6 last:border-b-0 last:pb-0">
                    <h3 className="text-lg md:text-xl font-bold text-navy-900 mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-navy-700 mb-3">
                      {service.description}
                    </p>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full px-6 py-3 bg-navy-900 text-white font-bold text-center rounded-md hover:bg-navy-800 transition-colors text-sm"
                    >
                      Book Now
                    </a>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-300">
                <div className="space-y-2 text-navy-700 text-sm">
                  <div className="flex items-center">
                    <Mail size={15} className="mr-2 flex-shrink-0" />
                    <span className="break-all">info@christileyphysiotherapy.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone size={15} className="mr-2 flex-shrink-0" />
                    <span>0121 517 0806</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial - Right Side */}
            <div className="relative rounded-lg overflow-hidden min-h-[360px] md:min-h-[600px]">
              <div className="absolute inset-0">
                <img
                  src="/Headshot Square.png"
                  alt="Chris Tiley"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/95 via-navy-900/60 to-transparent"></div>
              </div>

              <div className="relative h-full flex items-end p-5 md:p-8">
                <div className="text-white">
                  <div className="text-5xl mb-3 opacity-50">"</div>
                  <p className="text-sm md:text-lg leading-relaxed mb-4">
                    I went to Chris for some back problems I'd been having for about 2 years expecting to need physio for months and months to see a difference...only had 3 sessions and it's improved so much! I have my confidence back with exercise again which means the world, and anxiety about the issue has been massively reduced. I'd recommend especially for people who have a goal of getting back into sport or exercise.
                  </p>
                  <p className="font-bold text-base md:text-xl">EMMA MORRIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Footer Content */}
      <div className="py-8 md:py-12 rounded-b-[60px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center mb-3">
                <img
                  src="/logo.png"
                  alt="Chris Tiley Physiotherapy"
                  className="h-10 md:h-12 w-auto brightness-0 invert"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <p className="text-gray-300 mb-3 text-sm leading-relaxed">
                Professional physiotherapy clinic with over 100+ 5-star reviews.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/christileyphysiotherapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="https://www.instagram.com/christileyphysiotherapy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-base md:text-xl font-bold mb-3">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Phone size={16} className="mr-2 flex-shrink-0 mt-0.5 text-sky-400" />
                  <span className="text-sm">0121 517 0806</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={16} className="mr-2 flex-shrink-0 mt-0.5 text-sky-400" />
                  <span className="text-sm">24 Earls Ct Rd, Harborne, Birmingham B17 9AH</span>
                </li>
                <li className="flex items-start">
                  <Mail size={16} className="mr-2 flex-shrink-0 mt-0.5 text-sky-400" />
                  <span className="text-sm break-all">info@christileyphysiotherapy.com</span>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="text-base md:text-xl font-bold mb-3">Opening Hours</h3>
              <ul className="space-y-1.5">
                <li className="flex items-baseline gap-2 text-sm">
                  <span className="flex-1">Monday - Friday</span>
                  <span className="text-gray-300 whitespace-nowrap">8am - 6pm</span>
                </li>
                <li className="flex items-baseline gap-2 text-sm">
                  <span className="flex-1">Saturday - Sunday</span>
                  <span className="text-gray-300 whitespace-nowrap">Closed</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base md:text-xl font-bold mb-3">Quick Links</h3>
              <ul className="space-y-1.5">
                <li><a href="/services" className="text-sm hover:text-sky-400 transition-colors">Our Services</a></li>
                <li><a href="/about" className="text-sm hover:text-sky-400 transition-colors">About Chris</a></li>
                <li><a href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service" className="text-sm hover:text-sky-400 transition-colors">Book Appointment</a></li>
                <li><a href="/contact" className="text-sm hover:text-sky-400 transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-sm hover:text-sky-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <hr className="my-6 border-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
            <p className="text-sm">&copy; {new Date().getFullYear()} Chris Tiley Physiotherapy. All rights reserved.</p>
            <div>
              <a href="/terms" className="text-sm text-gray-400 hover:text-white mr-4">Terms of Service</a>
              <a href="/privacy" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
