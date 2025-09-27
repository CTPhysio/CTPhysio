import React from 'react';

const NeckPain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Violet blue theme */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Neck Pain and Stiffness
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Neck pain and stiffness can significantly impact your daily comfort and quality of life, often affecting everything from sleep and driving to simple tasks like looking over your shoulder. Whether your symptoms developed gradually over time or started after a specific incident, effective physiotherapy treatment can help you regain mobility and reduce discomfort.
            </p>
            <p>
              My approach focuses on identifying the factors contributing to your neck pain and helping you develop better movement patterns, strength, and strategies to manage and prevent future episodes.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to address your neck pain?
          </h2>
          <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
            Whether you're dealing with daily stiffness, recurring headaches, or persistent discomfort that's affecting your activities, physiotherapy can help you understand your condition and develop effective strategies for lasting improvement.
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
                    Why Physiotherapy is Effective for Neck Pain
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Evidence shows that active treatment combining manual therapy, targeted exercises, and education about posture and movement leads to better outcomes than rest alone. I'll help you understand your neck condition, address muscle tension and joint stiffness, and build the resilience needed for long-term improvement.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully reduced their neck pain, improved their sleep quality, and regained confidence in daily activities like driving, reading, and participating in hobbies without constant discomfort.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Chronic neck stiffness and reduced range of motion</li>
                    <li>• Tension headaches originating from the neck</li>
                    <li>• Pain radiating into shoulders or arms</li>
                    <li>• Postural-related neck pain from desk work or prolonged activities</li>
                    <li>• Whiplash and acute neck injuries</li>
                    <li>• Age-related cervical spine changes and arthritis</li>
                    <li>• Sleep-related neck pain and morning stiffness</li>
                    <li>• Nerve-related symptoms (tingling, numbness in arms)</li>
                    <li>• Dizziness associated with neck problems</li>
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
                        "No more morning stiffness!"
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

export default NeckPain;