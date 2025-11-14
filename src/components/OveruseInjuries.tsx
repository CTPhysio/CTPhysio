import React from 'react';

const OveruseInjuries: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Blue-gray theme */}
      <section className="bg-blue-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Overuse Injuries
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Specialized treatment for overuse injuries that develop gradually from repetitive 
            activities. Our comprehensive approach addresses the root causes and helps you 
            return to your activities with improved movement patterns and injury prevention strategies.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-blue-700 max-w-3xl mx-auto mb-8">
            Our specialized overuse injury treatments will help you break the cycle 
            of recurring pain and get back to your activities stronger than before!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-lg"
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
            backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw")',
            zIndex: -1
          }}
        >
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-blue-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Break the cycle of recurring overuse injuries.
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Overuse injuries develop gradually from repetitive stress on tissues 
                    without adequate recovery time. These injuries can be frustrating 
                    because they often return if not properly addressed. <span className="underline">Our approach 
                    identifies and corrects the underlying causes to prevent recurrence.</span>
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our comprehensive treatment combines manual therapy, 
                    corrective exercises, biomechanical analysis, and activity 
                    modification to address both symptoms and root causes 
                    of your overuse injury.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We have successfully helped hundreds of people in 
                    Harborne and Birmingham overcome chronic overuse injuries, 
                    return to their activities, and develop strategies to 
                    prevent future problems.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    Some examples of overuse injuries that we have 
                    successfully treated include:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Tennis Elbow (Lateral Epicondylitis)</li>
                    <li>• Golfer's Elbow (Medial Epicondylitis)</li>
                    <li>• Carpal Tunnel Syndrome</li>
                    <li>• Repetitive Strain Injuries (RSI)</li>
                    <li>• Tendonitis (Various Locations)</li>
                    <li>• Bursitis</li>
                    <li>• Stress Fractures</li>
                    <li>• Chronic Muscle Strains</li>
                    <li>• Joint Impingement Syndromes</li>
                    <li>• Chronic Neck/Shoulder Pain</li>
                    <li>• Computer-Related Injuries</li>
                    <li>• Occupational Injuries</li>
                    <li>• Activity-Related Pain Syndromes</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-800 transition-colors text-lg"
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
                        "Finally broke my cycle of recurring pain!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-blue-800"></div>
        </div>
      </section>
    </div>
  );
};

export default OveruseInjuries;