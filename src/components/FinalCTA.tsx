import React from 'react';
import { MapPin, Clock, Award } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <div className="bg-navy-800">
      <section className="py-10 md:py-16 bg-navy-700 text-white rounded-b-[60px]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">
            Ready to Feel Stronger and Move Freely Again?
          </h2>
          <p className="text-base md:text-xl mb-6 text-gray-200 leading-relaxed">
            Whether you're dealing with pain, recovering from injury, or simply want to stay active as you age — we're here to help you move forward with confidence.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors mb-8"
          >
            Book Your Free Discovery Visit
          </a>

          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <MapPin size={20} className="text-sky-400 mb-1.5 md:mb-2" />
              <span className="text-xs sm:text-base">Harborne, Birmingham</span>
            </div>
            <div className="flex flex-col items-center">
              <Award size={20} className="text-sky-400 mb-1.5 md:mb-2" />
              <span className="text-xs sm:text-base">15+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <Clock size={20} className="text-sky-400 mb-1.5 md:mb-2" />
              <span className="text-xs sm:text-base">100+ Five-Star Reviews</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalCTA;