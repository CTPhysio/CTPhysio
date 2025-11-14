import React from 'react';

const ShoulderPain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Lighter blue background */}
      <section className="bg-sky-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Shoulder Pain
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Shoulder pain can be particularly frustrating as it often interferes with everyday tasks we take for granted - reaching into cupboards, getting dressed, sleeping comfortably, or lifting objects. Whether your shoulder pain developed gradually or started after a specific activity, physiotherapy can help you regain function and confidence in your arm movement.
            </p>
            <p>
              My approach focuses on understanding what's contributing to your shoulder problem and helping you restore mobility, strength, and the ability to use your arm without pain or limitation.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-sky-700 mb-4">
            Ready to address your shoulder pain?
          </h2>
          <p className="text-lg md:text-xl text-sky-700 max-w-3xl mx-auto mb-8">
            Whether your shoulder pain is preventing you from reaching comfortably, affecting your sleep, or limiting activities you enjoy, physiotherapy can help you understand your condition and work toward regaining full, pain-free movement.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors text-lg"
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
          <div className="absolute inset-0 bg-sky-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-sky-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Physiotherapy Works for Shoulder Pain
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Research demonstrates that exercise-based treatment is highly effective for most shoulder conditions, often providing better long-term results than injections or passive treatments alone. I'll help you understand your shoulder condition, address any movement restrictions, and guide you through a progressive program to restore function.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully overcome shoulder pain that was limiting their daily activities, sleep, and hobbies - often avoiding the need for surgery and regaining full use of their arm.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Rotator cuff injuries and impingement syndrome</li>
                    <li>• Frozen shoulder (adhesive capsulitis) and stiffness</li>
                    <li>• Age-related shoulder wear and arthritis</li>
                    <li>• Pain with overhead reaching and lifting</li>
                    <li>• Night pain affecting sleep quality</li>
                    <li>• Post-surgical rehabilitation (rotator cuff repair, shoulder replacement)</li>
                    <li>• Shoulder instability and weakness</li>
                    <li>• Neck-related shoulder pain</li>
                    <li>• Sports-related shoulder injuries</li>
                    <li>• Chronic shoulder tension and muscle imbalances</li>
                    <li>• Bursitis and inflammation</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-sky-800 transition-colors text-lg"
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
                        "I can finally reach overhead without pain!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-sky-800"></div>
        </div>
      </section>
    </div>
  );
};

export default ShoulderPain;