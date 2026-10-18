import React from 'react';
import GoogleReviews from './GoogleReviews';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[75vh] sm:h-[66vh] overflow-hidden rounded-b-[60px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-[center_30%]"
        style={{ backgroundImage: 'url("/Untitled_design_(2).png")' }}
      />

      {/* Left-to-right gradient overlay: darker navy on left, lighter on right */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to right, rgba(10,25,50,0.82) 0%, rgba(10,25,50,0.62) 50%, rgba(10,25,50,0.28) 100%)',
        }}
      />

      {/* Subtle dark panel behind text content area */}
      <div
        className="absolute inset-y-0 left-0 z-[2] w-full sm:w-[55%]"
        style={{
          background: 'linear-gradient(to right, rgba(8,20,44,0.55) 0%, rgba(8,20,44,0.0) 100%)',
        }}
      />

      {/* Google Reviews Badge - Desktop: Bottom Right */}
      <div className="hidden lg:block absolute bottom-6 right-10 z-20">
        <GoogleReviews />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center py-8 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[520px]">
            <h1
              className="text-2xl sm:text-3xl lg:text-[2.375rem] font-semibold text-white mb-4 leading-[1.32] tracking-tight"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}
            >
              Physiotherapy in Harborne, Birmingham
            </h1>

            <p
              className="text-base sm:text-lg text-white mb-6 leading-relaxed"
              style={{ textShadow: '0 2px 8px rgba(0,0,0,0.35)' }}
            >
              Whether you're dealing with pain, recovering from an injury or trying to get back to an activity you enjoy, our physiotherapy team can help you move with confidence and build lasting strength.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href="/booking"
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold rounded-md shadow-lg text-white bg-sky-500 hover:bg-sky-400 transition-colors"
              >
                Book a Physiotherapy Appointment
              </a>
              <a
                href="/booking"
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 sm:px-8 py-4 text-sm sm:text-base font-semibold rounded-md shadow-md text-navy-800 bg-white hover:bg-sky-50 transition-colors"
              >
                Book a Free Discovery Visit
              </a>
            </div>

            {/* Desktop trust signals */}
            <div className="hidden sm:flex flex-col gap-1.5 text-white/60 text-xs">
              <span>HCPC-registered physiotherapists</span>
              <span>18+ Years of Clinical Experience</span>
              <span>100+ Verified 5-Star Google Reviews</span>
            </div>
          </div>

          {/* Google Reviews Badge - Mobile */}
          <div className="flex mt-6 lg:hidden">
            <GoogleReviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
