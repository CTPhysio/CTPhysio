import React from 'react';

const Deconditioning: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Violet blue theme */}
      <section className="bg-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            General Deconditioning/Muscle Weakness
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Loss of strength and fitness can happen gradually over time due to reduced activity, illness, injury, or simply the natural changes that come with aging. You might notice that everyday tasks feel more challenging, you tire more easily, or you've lost confidence in your physical abilities. The encouraging news is that with the right approach, strength and fitness can be rebuilt at any age.
            </p>
            <p>
              My approach focuses on understanding your current fitness level and health history, then gradually building your strength, endurance, and confidence through a safe and progressive exercise program tailored to your needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Ready to rebuild your strength and confidence?
          </h2>
          <p className="text-lg md:text-xl text-blue-900 max-w-3xl mx-auto mb-8">
            Whether you're recovering from illness, dealing with gradual decline, or simply want to feel stronger and more capable in your daily activities, physiotherapy can help you safely regain the fitness and confidence you deserve.
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
                    Why Physiotherapy is Effective for Deconditioning
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Research consistently shows that structured, progressive exercise programmes can significantly improve strength, endurance, and quality of life, even in people who have been inactive for extended periods. I'll help you start at an appropriate level and progress safely, ensuring you build both physical capacity and confidence in your abilities.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully rebuilt their fitness and strength, often surprised by how much they can achieve with consistent effort and proper guidance, returning to activities they thought were no longer possible.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• General weakness affecting daily activities</li>
                    <li>• Reduced stamina and early fatigue</li>
                    <li>• Loss of confidence in physical abilities</li>
                    <li>• Deconditioning following illness or injury</li>
                    <li>• Age-related muscle loss and frailty</li>
                    <li>• Difficulty with stairs, lifting, or walking distances</li>
                    <li>• Poor balance and coordination from inactivity</li>
                    <li>• Rebuilding fitness after prolonged bed rest</li>
                    <li>• Post-hospitalisation weakness and recovery</li>
                    <li>• Chronic fatigue affecting activity levels</li>
                    <li>• Fear of exercise due to past injuries or health concerns</li>
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
                        "Stronger and more energetic than ever!"
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

export default Deconditioning;