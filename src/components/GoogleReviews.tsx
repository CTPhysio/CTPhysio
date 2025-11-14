import React from 'react';

const GoogleReviews: React.FC = () => {
  return (
    <a
      href="https://www.google.com/maps/place/Chris+Tiley+Physiotherapy/@52.4603497,-1.9725524,17z/data=!4m18!1m9!3m8!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!2sChris+Tiley+Physiotherapy!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw!3m7!1s0x4870bd415e6fc5e9:0x9cfb99fc1d9936ce!8m2!3d52.4603497!4d-1.9699775!9m1!1b1!16s%2Fg%2F11j5bx_tkw?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:opacity-80 transition-opacity duration-300"
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <img
          src="/googleicon.svg"
          alt="Google"
          className="h-10 w-10 lg:h-16 lg:w-16"
        />
        <img
          src="/RATINGGOOGLE-SVG.svg"
          alt="5 star rating"
          className="h-5 lg:h-8"
        />
      </div>
    </a>
  );
};

export default GoogleReviews;