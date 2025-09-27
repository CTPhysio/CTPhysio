import React from 'react';

const OrthopedicRehab: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Teal blue theme */}
      <section className="bg-teal-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Orthopedic Rehabilitation
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive orthopedic rehabilitation to help you recover from musculoskeletal 
            injuries and conditions. Our specialized approach focuses on restoring function, 
            reducing pain, and preventing future injuries.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-teal-700 max-w-3xl mx-auto mb-8">
            Our expert orthopedic rehabilitation programs will help you regain strength, 
            mobility, and confidence in your movement!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition-colors text-lg"
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
          <div className="absolute inset-0 bg-teal-900 bg-opacity-60"></div>
        </div>

        {/* Content that scrolls over the fixed background */}
        <div className="relative z-10">
          {/* Spacer to allow scrolling effect */}
          <div className="h-32"></div>
          
          <div className="bg-teal-800 text-white">
            <div className="container mx-auto px-4 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Comprehensive orthopedic care for lasting recovery.
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Orthopedic conditions can significantly impact your quality of life, 
                    affecting your ability to work, exercise, and enjoy daily activities. 
                    Whether you're dealing with a recent injury or chronic condition, 
                    <span className="underline"> our specialized rehabilitation approach can help you achieve optimal recovery.</span>
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our comprehensive orthopedic rehabilitation programs combine 
                    evidence-based treatments with personalized exercise protocols 
                    to restore your function and get you back to your active lifestyle.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We have successfully helped hundreds of people in 
                    Harborne and Birmingham recover from orthopedic conditions, 
                    avoid unnecessary procedures, and return to their favorite 
                    activities with renewed confidence.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    Some examples of orthopedic conditions that we have 
                    successfully treated include:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Joint Replacements (Hip, Knee, Shoulder)</li>
                    <li>• Fracture Recovery</li>
                    <li>• Ligament Injuries (ACL, MCL, PCL)</li>
                    <li>• Meniscus Tears</li>
                    <li>• Cartilage Damage</li>
                    <li>• Osteoarthritis</li>
                    <li>• Rheumatoid Arthritis</li>
                    <li>• Tendon Injuries</li>
                    <li>• Muscle Strains and Tears</li>
                    <li>• Joint Stiffness</li>
                    <li>• Chronic Pain Conditions</li>
                    <li>• Post-Trauma Rehabilitation</li>
                    <li>• Movement Dysfunction</li>
                  </ul>
                  
                  <div className="pt-8">
                    <a
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-teal-800 transition-colors text-lg"
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
                        "Back to hiking without limitations!"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom spacer */}
          <div className="h-32 bg-teal-800"></div>
        </div>
      </section>
    </div>
  );
};

export default OrthopedicRehab;