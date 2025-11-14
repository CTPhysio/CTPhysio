import React from 'react';

const SpinalInjuries: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Purple-blue theme */}
      <section className="bg-blue-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Spinal Injuries
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Specialized treatment for spinal injuries and conditions. Our expert approach 
            helps you recover from spinal trauma, improve mobility, and prevent future 
            complications through comprehensive rehabilitation programs.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-blue-800 max-w-3xl mx-auto mb-8">
            Our specialized spinal injury treatments will help you regain function, 
            reduce pain, and return to your active lifestyle safely!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors text-lg"
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
                    Don't let spinal injuries limit your life.
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Spinal injuries can be life-changing, affecting your mobility, 
                    strength, and daily activities. Whether you're dealing with acute 
                    trauma or chronic spinal conditions, <span className="underline">our specialized approach 
                    helps you achieve the best possible recovery outcomes.</span>
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our comprehensive spinal rehabilitation programs combine 
                    advanced manual therapy techniques, targeted exercises, 
                    and movement re-education to restore function and 
                    prevent future complications.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We have successfully helped hundreds of people in 
                    Harborne and Birmingham recover from spinal injuries, 
                    regain their independence, and return to their favorite 
                    activities with confidence and improved quality of life.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    Some examples of spinal injuries and conditions that 
                    we have successfully treated include:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Herniated/Bulging Discs</li>
                    <li>• Spinal Stenosis</li>
                    <li>• Spondylolisthesis</li>
                    <li>• Compression Fractures</li>
                    <li>• Whiplash Injuries</li>
                    <li>• Facet Joint Dysfunction</li>
                    <li>• Spinal Cord Injuries</li>
                    <li>• Post-Surgical Spine Rehabilitation</li>
                    <li>• Degenerative Disc Disease</li>
                    <li>• Scoliosis Management</li>
                    <li>• Cervical Radiculopathy</li>
                    <li>• Lumbar Radiculopathy</li>
                    <li>• Spinal Instability</li>
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
                        "Regained my mobility and confidence!"
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

export default SpinalInjuries;