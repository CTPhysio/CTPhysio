import React from 'react';

const BalanceFalls: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Green theme */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Balance and Falls Prevention
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Balance problems and concerns about falling can significantly impact your confidence and independence, often leading to reduced activity and social isolation. Whether you've experienced a fall, feel unsteady on your feet, or are worried about your balance deteriorating, physiotherapy can help you regain stability and confidence in your movement.
            </p>
            <p>
              My approach focuses on identifying what's contributing to your balance issues and helping you develop the strength, coordination, and strategies needed to move safely and confidently in all situations.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to improve your balance and confidence?
          </h2>
          <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
            Whether you're experiencing dizziness, feeling unsteady, or simply want to maintain your independence as you age, physiotherapy can help you develop the strength and skills needed to move safely and confidently.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors text-lg"
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
          <div className="absolute inset-0 bg-green-900 bg-opacity-60"></div>
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-blue-700 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Physiotherapy is Effective for Balance Issues
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Research consistently demonstrates that targeted balance and strength training can significantly reduce fall risk and improve confidence in movement. I'll help you understand your specific balance challenges, address any underlying causes, and guide you through exercises proven to enhance stability and prevent falls.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully improved their balance, regained confidence in walking on uneven surfaces, and returned to activities they had started avoiding due to fear of falling.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• General unsteadiness and reduced confidence walking</li>
                    <li>• Dizziness and vertigo affecting balance</li>
                    <li>• BPPV (Benign Positional Vertigo) - treated with techniques like the Epley manoeuvre</li>
                    <li>• Muscle weakness in legs affecting stability</li>
                    <li>• Poor balance on uneven surfaces or in the dark</li>
                    <li>• Fear of falling limiting daily activities</li>
                    <li>• Recovery after a fall or near-miss</li>
                    <li>• Medication-related dizziness and balance issues</li>
                    <li>• Age-related balance decline</li>
                    <li>• Coordination problems affecting walking</li>
                    <li>• Strengthening programs to prevent future falls</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-700 transition-colors text-lg"
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
                        "Walking with confidence again!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-blue-700"></div>
        </div>
      </section>
    </div>
  );
};

export default BalanceFalls;