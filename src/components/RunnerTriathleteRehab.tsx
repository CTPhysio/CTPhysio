import React from 'react';

const RunnerTriathleteRehab: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Cyan blue theme */}
      <section className="bg-cyan-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Runner/Triathlete Rehabilitation
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Specialized rehabilitation programs for runners and triathletes. Our expert approach 
            helps you overcome injuries, improve performance, and return to your training with 
            confidence and reduced risk of re-injury.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-cyan-700 max-w-3xl mx-auto mb-8">
            Our specialized programs will help you overcome running and triathlon injuries 
            and get back to peak performance safely!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-700 transition-colors text-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Main Content Section with Parallax Background */}
      <section className="relative min-h-screen">
        {/* Fixed Background Image */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipP4v9ya-xB_2jtMgpyz5gjO0ONL6mcdIUcvyVwC=s680-w680-h510-rw")',
            zIndex: -1
          }}
        >
          <div className="absolute inset-0 bg-cyan-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-cyan-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Get back to running and training at your best.
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Running and triathlon injuries can be devastating to your training 
                    schedule and competitive goals. Whether you're dealing with overuse 
                    injuries or acute trauma, <span className="underline">our specialized approach gets you back 
                    to your sport stronger and more resilient.</span>
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our rehabilitation programs are designed specifically for 
                    endurance athletes, focusing on biomechanical analysis, 
                    strength training, and gradual return-to-sport protocols 
                    that minimize re-injury risk.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We have successfully helped hundreds of runners and 
                    triathletes in Harborne and Birmingham overcome injuries, 
                    improve their performance, and achieve their athletic goals 
                    without compromising their long-term health.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    Some examples of running and triathlon injuries that 
                    we have successfully treated include:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Runner's Knee (Patellofemoral Pain)</li>
                    <li>• IT Band Syndrome</li>
                    <li>• Shin Splints</li>
                    <li>• Plantar Fasciitis</li>
                    <li>• Achilles Tendonitis</li>
                    <li>• Stress Fractures</li>
                    <li>• Hip Flexor Strains</li>
                    <li>• Hamstring Injuries</li>
                    <li>• Calf Strains</li>
                    <li>• Ankle Sprains</li>
                    <li>• Lower Back Pain</li>
                    <li>• Piriformis Syndrome</li>
                    <li>• Biomechanical Issues</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-cyan-800 transition-colors text-lg"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>

                {/* Right Column - Testimonial placeholder */}
                <div className="lg:sticky lg:top-8">
                  <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                    <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                      <p className="text-center text-lg">
                        "Back to marathon training pain-free!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-cyan-800"></div>
        </div>
      </section>
    </div>
  );
};

export default RunnerTriathleteRehab;