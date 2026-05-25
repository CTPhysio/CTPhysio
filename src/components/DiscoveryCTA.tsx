import React from 'react';
import { MapPin, Award, Star } from 'lucide-react';

const DiscoveryCTA: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-navy-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          You Don't Have To Accept This As The New Normal
        </h2>
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-xl mx-auto leading-relaxed">
          Start with a free discovery visit. No pressure, no commitment, just honest guidance.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors mb-8"
        >
          Book Your Free Discovery Visit
        </a>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-sky-400 flex-shrink-0" />
            <span>Harborne, Birmingham</span>
          </div>
          <div className="flex items-center gap-2">
            <Award size={16} className="text-sky-400 flex-shrink-0" />
            <span>15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <Star size={16} className="text-sky-400 flex-shrink-0" />
            <span>100+ Five-Star Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryCTA;
