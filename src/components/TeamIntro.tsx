import React from 'react';
import { Link } from 'react-router-dom';

const TeamIntro: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-3 leading-tight">
            Meet Your Physiotherapy Team
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
            Chris, Kate and Jessamyn provide physiotherapy for a wide range of muscle and joint problems. We take time to understand what's troubling you, what you want to get back to and how we can help you make progress.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-7 py-3 bg-navy-700 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
