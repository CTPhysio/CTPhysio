import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

const GoogleReviews: React.FC = () => {
  return (
    <a 
      href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-lg shadow-lg p-6 block hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex justify-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={24} className="fill-yellow-500 text-yellow-500" />
        ))}
      </div>
      <p className="text-center font-bold text-lg mb-1">Excellent</p>
      <p className="text-center text-sm text-gray-600 mb-2">Based on 109 reviews</p>
      <div className="flex justify-center">
        <img 
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="Google"
          className="h-6"
        />
      </div>
    </a>
  );
};

export default GoogleReviews;