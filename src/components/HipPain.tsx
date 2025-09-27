import React from 'react';

const HipPain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Violet blue theme */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Hip Pain and Stiffness
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Hip pain and stiffness can profoundly impact your mobility and independence, making everyday activities like walking, getting up from chairs, climbing stairs, or even getting comfortable in bed challenging. Whether your symptoms have developed gradually over time or started more recently, physiotherapy can help you regain function and confidence in your movement.
            </p>
            <p>
              My approach focuses on understanding what's contributing to your hip problem and helping you develop the strength, mobility, and movement strategies needed to reduce pain and improve your quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to address your hip pain?
          </h2>
          <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
            Whether your hip pain is affecting your walking, limiting your activities, or impacting your sleep, physiotherapy can help you understand your condition and develop effective strategies to improve your mobility and comfort.
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
                    Why Physiotherapy is Effective for Hip Pain
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Evidence consistently shows that exercise-based treatment is highly beneficial for hip conditions, often helping people avoid or delay the need for surgery while significantly improving function and comfort. I'll help you understand your hip condition, address stiffness and weakness, and guide you through exercises that can make a real difference to your daily activities.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully managed their hip pain, improved their walking distance and confidence, and returned to activities like gardening, dancing, and longer walks - often experiencing better outcomes than they thought possible.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Hip osteoarthritis and age-related joint changes</li>
                    <li>• Stiffness and reduced range of motion affecting daily tasks</li>
                    <li>• Pain with walking, stairs, or getting up from sitting</li>
                    <li>• Hip bursitis and inflammation (trochanteric pain syndrome)</li>
                    <li>• Groin pain and hip flexor problems</li>
                    <li>• Post-surgical rehabilitation (including hip replacements)</li>
                    <li>• Referred pain from the lower back</li>
                    <li>• Hip weakness affecting balance and stability</li>
                    <li>• Chronic hip tension and muscle imbalances</li>
                    <li>• Difficulty with prolonged sitting or sleeping positions</li>
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
                        "Walking pain-free again!"
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

export default HipPain;