import React from 'react';
import { Phone } from 'lucide-react';
import GoogleReviews from './GoogleReviews';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] sm:h-[75vh] overflow-hidden rounded-b-[60px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-[center_30%]"
        style={{ backgroundImage: 'url("/hero image.webp")' }}
      >
        <div className="absolute inset-0 bg-navy-900/40"></div>
      </div>

      {/* Google Reviews Badge - Desktop: Bottom Right */}
      <div className="hidden lg:block absolute bottom-8 right-12 z-20">
        <GoogleReviews />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-center py-8 sm:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[660px]">
            <h1 className="text-2xl sm:text-3xl lg:text-[2.375rem] font-semibold text-white mb-4 leading-[1.32] tracking-tight">
              Helping Active Adults Stay Strong, Confident, and Independent
            </h1>

            {/* Desktop subtitle */}
            <p className="hidden sm:block text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
              At Chris Tiley Physiotherapy, we help people in their 50s, 60s, and beyond move well, build strength, and stay active in the things that matter most to them.
            </p>

            {/* Mobile bullets */}
            <div className="sm:hidden space-y-1.5 text-white/90 text-sm mb-5">
              <div className="flex items-start gap-2">
                <span className="mt-1 text-sky-300">—</span>
                <span>Helping active adults 50+ stay strong and independent</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-sky-300">—</span>
                <span>100+ five-star reviews in Harborne, Birmingham</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 text-sky-300">—</span>
                <span>A clear plan from your very first visit</span>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="mb-4">
              <a
                href="/contact"
                className="inline-flex justify-center items-center px-7 py-3.5 text-sm sm:text-base font-semibold rounded-md shadow-md text-white bg-navy-700 hover:bg-navy-800 transition-colors duration-200"
              >
                Book a Free Discovery Visit
              </a>
            </div>

            {/* Phone secondary link */}
            <a
              href="tel:01215170806"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors duration-200"
            >
              <Phone size={15} />
              <span>Call 0121 517 0806</span>
            </a>

            {/* Desktop trust signals */}
            <div className="hidden sm:flex flex-col gap-1.5 mt-6 text-white/75 text-sm">
              <span>HCPC Registered Physiotherapist</span>
              <span>15+ Years of Clinical Experience</span>
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
