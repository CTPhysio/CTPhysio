import React from 'react';
import { Phone } from 'lucide-react';
import GoogleReviews from './GoogleReviews';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] sm:h-[75vh] overflow-hidden rounded-b-[60px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-[center_30%]"
        style={{
          backgroundImage: 'url("/hero image.webp")'
        }}
      >
        <div className="absolute inset-0 bg-navy-900/50"></div>
      </div>

      {/* Google Reviews Badge - Desktop: Bottom Right */}
      <div className="hidden lg:block absolute bottom-8 right-12 z-20">
        <GoogleReviews />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center py-8 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Main Content */}
            <div className="lg:max-w-2xl">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                Helping Active Adults Stay Strong,{' '}
                <span className="text-white">Confident, and Independent</span>
              </h1>
              {/* Desktop subtitle */}
              <p className="hidden sm:block text-base sm:text-xl text-white mb-5 sm:mb-8 leading-relaxed">
                At Chris Tiley Physiotherapy, we help people in their 50s, 60s, and beyond move well, build strength, and stay active in the things that matter most to them. Trusted by over 100 local patients with five-star results.
              </p>

              {/* Mobile bullet points */}
              <div className="sm:hidden space-y-1.5 text-white text-sm mb-5">
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Helping active adults 50+ stay strong and independent</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Strength-based rehabilitation, not just pain relief</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>100+ five-star reviews in Harborne, Birmingham</span>
                </div>
                <div className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>A clear plan from your very first visit</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-8">
                {/* Primary CTA */}
                <a
                  href="/contact"
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-lg font-bold rounded-md shadow-lg text-white bg-navy-700 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-all duration-200"
                >
                  Book a Free Discovery Visit
                </a>

                {/* Phone CTA Button */}
                <a
                  href="tel:01215170806"
                  className="inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-lg font-bold rounded-md shadow-lg text-white bg-sky-500 hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-all duration-200"
                >
                  <Phone size={18} className="mr-2" />
                  0121 517 0806
                </a>

                {/* Book Online Button - Desktop only */}
                <a
                  href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-bold rounded-md shadow-lg text-white bg-navy-700 hover:bg-navy-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 transition-all duration-200"
                >
                  Book Online
                </a>
              </div>

              {/* Desktop trust signals */}
              <div className="hidden sm:block space-y-2 text-white text-sm sm:text-base">
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>HCPC Registered Physiotherapist</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>15+ Years of Clinical Experience</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>100+ Verified 5-Star Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Google Reviews Badge - Mobile: Below content */}
            <div className="flex justify-center lg:hidden">
              <GoogleReviews />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;