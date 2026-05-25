import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-navy-800 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
          Ready To Feel Stronger And Move More Confidently?
        </h2>
        <p className="text-base md:text-lg mb-8 text-gray-300 max-w-lg mx-auto leading-relaxed">
          Book a free discovery visit and let's talk about the best next step for you.
        </p>

        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors"
        >
          Book Your Free Discovery Visit
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;