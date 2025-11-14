import React from 'react';
import { Star } from 'lucide-react';

const TrustBadge: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-64">
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={24} className="fill-green-500 text-green-500" />
        ))}
      </div>
      <p className="text-center font-bold text-lg mb-1">Excellent</p>
      <p className="text-center text-sm text-gray-600 mb-2">Based on 1,500+ reviews</p>
      <div className="flex justify-center">
        <img 
          src="https://cdn.trustpilot.net/brand-assets/4.1.0/logo-black.svg" 
          alt="Trustpilot" 
          className="h-5"
        />
      </div>
    </div>
  );
};

export default TrustBadge;