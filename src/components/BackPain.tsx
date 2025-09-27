import React from 'react';

const BackPain: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Blue background like first screenshot */}
      <section className="bg-navy-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Lower Back Pain
          </h1>
          <div className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Back pain affects most people at some point in their lives and can significantly impact your daily activities and quality of life. The good news is that most back pain responds well to physiotherapy, even when it feels persistent or concerning.
            </p>
            <p>
              My approach focuses on understanding what's contributing to your pain and helping you develop the knowledge, strength, and confidence to manage it effectively. Through a combination of hands-on treatment, targeted exercises, and education about your condition, we'll work together to get you moving comfortably again.
            </p>
          </div>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-100 py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">
            Ready to address your back pain?
          </h2>
          <p className="text-lg md:text-xl text-navy-700 max-w-3xl mx-auto mb-8">
            Whether you're dealing with a recent flare-up or long-standing discomfort, 
            physiotherapy can help you regain control and get back to the activities that matter to you.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-lg"
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
            backgroundImage: 'url("https://lh3.googleusercontent.com/p/AF1QipOBSAH73ObiUfNTFSDCJv3sKIxkXEKimAFAnjCW=s680-w680-h510-rw")',
            zIndex: -1
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-navy-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Why Choose Physiotherapy for Back Pain?
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Research consistently shows that staying active and engaging with physiotherapy leads to better outcomes than rest alone. I'll help you understand your pain, develop strategies to manage flare-ups, and build resilience to prevent future episodes.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Many of my patients in Harborne have successfully returned to their normal activities, avoided unnecessary procedures, and developed confidence in their body's ability to heal and adapt.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    I regularly help people with:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Lower back stiffness and muscle tension</li>
                    <li>• Acute back strains and spasms</li>
                    <li>• Sciatica and nerve-related leg pain</li>
                    <li>• Disc-related pain (herniated or bulging discs)</li>
                    <li>• Age-related changes (arthritis, degenerative disc disease)</li>
                    <li>• Spinal stenosis and spondylolisthesis</li>
                    <li>• Post-surgical rehabilitation</li>
                    <li>• Chronic pain that has persisted for months or years</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-800 transition-colors text-lg"
                    >
                      Get In Touch
                    </a>
                  </div>
                </div>

                {/* Right Column - Image placeholder for the testimonial/patient image */}
                <div className="lg:sticky lg:top-8">
                  <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                    <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                      <p className="text-center text-lg">
                        "Back to moving comfortably again!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-navy-800"></div>
        </div>
      </section>
    </div>
  );
};

export default BackPain;