import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-700 mb-12 text-center">
            Physiotherapy in Harborne
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With over 15 years of experience working in hospitals across the UK and Canada, rehabilitation units, private clinics, and with elite athletes including Para Snowsport GB, Chris Tiley combines clinical expertise with practical, strength-based treatment approaches.
              </p>
            </div>

            {/* Chris Image - LEFT SIDE */}
            <div className="order-1 lg:order-1">
              <img 
                src="/hero image.webp"
                alt="Chris Tiley - Physiotherapist in Harborne"
                className="w-80 h-80 object-cover rounded-lg shadow-lg mx-auto"
                onError={(e) => {
                  console.log('Chris image failed to load');
                  e.currentTarget.src = 'https://lh3.googleusercontent.com/p/AF1QipNYTOktwPtSd1OWjx3ToCRf93TNPvS8220NBIUY=s680-w680-h510-rw';
                }}
              />
            </div>
          </div>
          
          {/* Horizontal Feature List - Under both paragraph and image */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-12">
            <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg md:text-xl text-navy-700 mb-2 md:mb-3">Expert Care</h3>
              <p className="text-gray-600 text-sm md:text-base">Evidence-based treatments tailored to your needs</p>
            </div>
            
            <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg md:text-xl text-navy-700 mb-2 md:mb-3">Personalised Approach</h3>
              <p className="text-gray-600 text-sm md:text-base">Custom treatment plans for your specific goals</p>
            </div>
            
            <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg md:text-xl text-navy-700 mb-2 md:mb-3">Convenient Location</h3>
              <p className="text-gray-600 text-sm md:text-base">Comfortable Harborne clinic with easy parking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;