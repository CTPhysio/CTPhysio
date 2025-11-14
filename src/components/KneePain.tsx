import React from 'react';

const KneePain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Violet blue theme */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Knee Pain
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Knee pain is one of the most common reasons people seek physiotherapy, particularly as we age. Whether you're experiencing the gradual onset of arthritis, recovering from a recent injury, or dealing with persistent discomfort that's affecting your daily life, effective treatment can help you regain confidence in your movement.
            </p>
            <p>
              My approach focuses on understanding your specific knee condition and helping you develop the strength, mobility, and knowledge needed to manage your symptoms and return to activities you value.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to address your knee pain?
          </h2>
          <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
            Whether your knee pain developed gradually over time or started after a specific incident, 
            physiotherapy can help you understand your condition and develop strategies to move forward with confidence.
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
                    Why Physiotherapy Works for Knee Pain
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Research shows that exercise-based treatment is highly effective for most knee conditions, often providing better long-term outcomes than passive treatments alone. I'll help you understand what's happening with your knee, guide you through appropriate exercises, and provide hands-on treatment to reduce pain and improve function.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully managed their knee pain, improved their walking confidence, and returned to activities like gardening, hiking, and playing with grandchildren - often avoiding the need for surgery.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Knee osteoarthritis and age-related joint changes</li>
                    <li>• Persistent knee stiffness and reduced range of motion</li>
                    <li>• Pain with walking, stairs, or getting up from chairs</li>
                    <li>• Post-surgical rehabilitation (including knee replacements)</li>
                    <li>• Meniscus tears and cartilage issues</li>
                    <li>• Kneecap pain (patellofemoral pain syndrome)</li>
                    <li>• Sports-related injuries (ACL, MCL, runner's knee)</li>
                    <li>• Chronic swelling and inflammation</li>
                    <li>• Knee instability and weakness</li>
                    <li>• IT band syndrome and bursitis</li>
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

export default KneePain;