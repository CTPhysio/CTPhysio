import React from 'react';
import { Phone } from 'lucide-react';
import GoogleReviews from './GoogleReviews';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen sm:h-[75vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw" 
          alt="Senior patient exercising with physiotherapist" 
          className="w-full h-full object-cover sm:object-[center_30%]"
        />
        <div className="absolute inset-0 bg-navy-900/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center py-8 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Main Content */}
            <div className="lg:max-w-2xl backdrop-blur-sm bg-white/20 p-6 sm:p-8 rounded-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Manage Pain, <span className="text-white">Build Strength, Move Confidently</span>
              </h1>
              <p className="text-lg sm:text-xl text-white mb-6 sm:mb-8">
                Helping 800+ Birmingham residents move confidently again | 100+ 5-star reviews | Trusted physiotherapy clinic in Harborne | Thorough treatment approach with clear, individualised plans.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6 sm:mb-8">
                {/* Get In Touch Button */}
                <a 
                  href="/contact" 
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-md shadow-lg text-white bg-navy-700 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-all duration-200"
                >
                  Get In Touch
                </a>
                
                {/* Phone CTA Button */}
                <a 
                  href="tel:01215170806" 
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-md shadow-lg text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-all duration-200"
                >
                  <Phone size={18} className="mr-2" />
                  0121 517 0806
                </a>
                
                {/* Book Online Button */}
                <a 
                  href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-md shadow-lg text-white bg-navy-700 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-all duration-200"
                >
                  Book Online
                </a>
              </div>

              <div className="space-y-2 text-white text-sm sm:text-base">
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>[HCPC Registered]</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>[15+ Years of Clinical Experience]</span>
                </div>
              </div>
            </div>

            {/* Google Reviews Badge - Mobile: Below content, Desktop: Right side */}
            <div className="flex justify-center lg:justify-end">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;