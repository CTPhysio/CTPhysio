import React from 'react';

const SportsInjuries: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Emerald blue-green theme */}
      <section className="bg-blue-400 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Sports Injuries
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Expert sports injury rehabilitation to get you back in the game. Our specialized 
            approach combines advanced treatment techniques with sport-specific training to 
            ensure safe return to play and peak performance.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-blue-500 max-w-3xl mx-auto mb-8">
            Our specialized sports injury treatments will help you recover faster, 
            perform better, and prevent future injuries!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-400 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors text-lg"
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
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-blue-600 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Get back to your sport stronger than before.
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Sports injuries can be devastating to athletes of all levels, from 
                    weekend warriors to elite competitors. Whether you're dealing with 
                    an acute injury or chronic pain, <span className="underline">our sport-specific rehabilitation 
                    approach gets you back to peak performance safely.</span>
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our comprehensive sports injury programs combine 
                    advanced manual therapy, biomechanical analysis, 
                    sport-specific training, and injury prevention 
                    strategies to optimize your recovery and performance.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We have successfully helped hundreds of athletes in 
                    Harborne and Birmingham recover from sports injuries, 
                    return to competition, and achieve new personal bests 
                    with reduced risk of re-injury.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    Some examples of sports injuries that we have 
                    successfully treated include:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• ACL/MCL/PCL Injuries</li>
                    <li>• Meniscus Tears</li>
                    <li>• Ankle Sprains</li>
                    <li>• Hamstring Strains</li>
                    <li>• Groin Injuries</li>
                    <li>• Rotator Cuff Injuries</li>
                    <li>• Tennis/Golfer's Elbow</li>
                    <li>• Concussion Management</li>
                    <li>• Stress Fractures</li>
                    <li>• Muscle Contusions</li>
                    <li>• Joint Dislocations</li>
                    <li>• Overuse Injuries</li>
                    <li>• Performance Enhancement</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg"
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
                        "Back to competing at my best!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-blue-600"></div>
        </div>
      </section>
    </div>
  );
};

export default SportsInjuries;