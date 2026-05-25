import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-10 md:py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-navy-700 mb-8 md:mb-12 text-center">
            A Clinic Built Around Your Recovery
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 lg:order-2">
              <p className="text-sm sm:text-lg text-gray-700 leading-relaxed mb-6">
                At Chris Tiley Physiotherapy, we help active adults in their 50s, 60s, and beyond stay strong, mobile, and confident. Founded by Chris Tiley, an HCPC registered physiotherapist with 15+ years of experience across the NHS, elite sport, and private practice, our clinic combines expert physiotherapy with strength-focused rehabilitation to deliver results that last.
              </p>
            </div>

            <div className="order-1 lg:order-1">
              <img
                src="/hero image.webp"
                alt="Chris Tiley, physiotherapist in Harborne, Birmingham"
                className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover rounded-lg shadow-lg mx-auto"
                onError={(e) => {
                  e.currentTarget.src = 'https://lh3.googleusercontent.com/p/AF1QipNYTOktwPtSd1OWjx3ToCRf93TNPvS8220NBIUY=s680-w680-h510-rw';
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-6 mt-8 md:mt-12">
            <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg md:text-xl text-navy-700 mb-2 md:mb-3">Strength-Based Rehabilitation</h3>
              <p className="text-gray-600 text-sm md:text-base">We go beyond pain relief, helping you build physical resilience that keeps you active long term.</p>
            </div>

            <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg md:text-xl text-navy-700 mb-2 md:mb-3">A Plan That Fits Your Life</h3>
              <p className="text-gray-600 text-sm md:text-base">Built around your goals, your lifestyle, and the activities that matter to you.</p>
            </div>

            <div className="text-center bg-white p-4 md:p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-lg md:text-xl text-navy-700 mb-2 md:mb-3">Long-Term Independence</h3>
              <p className="text-gray-600 text-sm md:text-base">Helping you stay active, confident, and independent, not just now, but for years to come.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
