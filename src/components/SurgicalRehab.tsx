import React from 'react';

const SurgicalRehab: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Indigo blue theme */}
      <section className="bg-indigo-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Pre/Post Surgical Rehabilitation
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Surgery can be a significant step in addressing your condition, whether it's a planned joint replacement, rotator cuff repair, or other procedure. The period before and after surgery presents a valuable opportunity to optimize your recovery and achieve the best possible outcomes through targeted physiotherapy.
            </p>
            <p>
              My approach focuses on preparing your body for surgery when possible, and then guiding you through a structured recovery process that helps you regain function, strength, and confidence in your movement.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4">
            Ready to optimize your surgical recovery?
          </h2>
          <p className="text-lg md:text-xl text-indigo-700 max-w-3xl mx-auto mb-8">
            Whether you're preparing for surgery or beginning your rehabilitation journey, physiotherapy can help you navigate this process with confidence and achieve the best possible outcome from your procedure.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors text-lg"
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
          <div className="absolute inset-0 bg-indigo-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-indigo-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Pre and Post-Surgical Physiotherapy Makes a Difference
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Evidence shows that patients who engage in physiotherapy before surgery often experience faster recovery times, less post-operative pain, and better long-term outcomes. Post-surgically, structured rehabilitation is essential for restoring function and preventing complications.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    I'll help you understand what to expect during your recovery, address any concerns you have about the process, and provide you with the tools and exercises needed to achieve your rehabilitation goals.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully navigated their surgical recovery, often achieving better outcomes than they anticipated and returning to activities they value with renewed confidence.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Pre-surgical conditioning and preparation</li>
                    <li>• Post-operative pain and swelling management</li>
                    <li>• Joint replacement recovery (hip, knee, shoulder)</li>
                    <li>• Rotator cuff and shoulder surgery rehabilitation</li>
                    <li>• Spinal surgery recovery and movement re-education</li>
                    <li>• ACL and other sports injury surgery recovery</li>
                    <li>• Scar tissue management and mobility restoration</li>
                    <li>• Gradual return to daily activities and work</li>
                    <li>• Strength rebuilding and functional training</li>
                    <li>• Long-term maintenance and injury prevention</li>
                    <li>• Managing expectations and recovery anxieties</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-800 transition-colors text-lg"
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
                        "Faster recovery than expected!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-indigo-800"></div>
        </div>
      </section>
    </div>
  );
};

export default SurgicalRehab;