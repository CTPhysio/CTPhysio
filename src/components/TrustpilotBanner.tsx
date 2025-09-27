import React from 'react';
import { Star } from 'lucide-react';

const GoogleReviewsBanner: React.FC = () => {
  return (
    <div className="bg-navy-700 text-white py-1">
      <div className="container mx-auto px-4 flex items-center justify-center md:justify-between text-xs md:text-sm">
        <div className="flex items-center">
          <span>Our patients say Excellent</span>
          <div className="flex mx-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
            ))}
          </div>
          <span>| Rated 5/5 based on 100+ reviews</span>
        </div>
        <div className="hidden md:block">
          <a 
            href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsBanner;