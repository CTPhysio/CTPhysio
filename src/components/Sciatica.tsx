import React from 'react';

const Sciatica: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Violet blue theme */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Sciatica
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Sciatica can be one of the most distressing conditions, with sharp, shooting pain, numbness, or tingling radiating from your lower back down through your buttock and leg. This nerve-related pain can make simple activities like sitting, walking, or even lying down extremely uncomfortable, often leaving you wondering if you'll ever feel normal again.
            </p>
            <p>
              My approach focuses on understanding what's irritating your sciatic nerve and helping you develop effective strategies to reduce symptoms and build confidence in your movement, even during flare-ups.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to address your sciatica?
          </h2>
          <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
            Whether you're experiencing your first episode of sciatica or dealing with recurring symptoms that have been disrupting your life, physiotherapy can help you understand your condition and develop practical strategies for both immediate relief and long-term management.
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
                    Why Physiotherapy is Effective for Sciatica
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Research shows that staying active and engaging with appropriate physiotherapy leads to better outcomes for sciatica than bed rest or avoiding movement. I'll help you understand your condition, teach you positions and movements that can ease symptoms, and guide you through exercises that promote healing and prevent recurrence.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully overcome sciatica episodes that initially felt overwhelming, learning to manage symptoms effectively and returning to their normal activities with renewed confidence in their body's ability to heal.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Sharp, shooting pain from lower back into leg</li>
                    <li>• Numbness and tingling in the buttock, leg, or foot</li>
                    <li>• Burning or electric-like sensations down the leg</li>
                    <li>• Pain that worsens with sitting or certain movements</li>
                    <li>• Difficulty finding comfortable positions for sleep</li>
                    <li>• Weakness in the affected leg or foot</li>
                    <li>• Chronic or recurring sciatica episodes</li>
                    <li>• Disc-related sciatica (herniated or bulging discs)</li>
                    <li>• Piriformis syndrome and deep buttock pain</li>
                    <li>• Fear and anxiety about movement during pain episodes</li>
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
                        "Finally sleeping through the night again!"
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

export default Sciatica;