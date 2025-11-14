import React from 'react';

const Arthritis: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Slate blue theme */}
      <section className="bg-blue-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl mb-4 opacity-90">
            CHRIS TILEY PHYSIOTHERAPY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Arthritis Management
          </h1>
          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Comprehensive arthritis management to help you maintain mobility, reduce pain, 
            and improve quality of life. Our specialized approach focuses on joint health, 
            strength training, and adaptive strategies for living well with arthritis.
          </p>
        </div>
      </section>

      {/* Transition Section */}
      <section className="bg-gray-50 py-12 text-center">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-blue-600 max-w-3xl mx-auto mb-8">
            Our specialized arthritis management programs will help you stay active, 
            reduce pain, and maintain your independence!
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors text-lg"
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
                    Don't let arthritis stop you from living actively.
                  </h2>
                  
                  <p className="text-lg leading-relaxed">
                    Arthritis affects millions of people, causing joint pain, stiffness, 
                    and reduced mobility. While there's no cure, proper management can 
                    significantly improve your symptoms and quality of life. <span className="underline">Our 
                    evidence-based approach helps you stay active and independent.</span>
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    Our comprehensive arthritis management programs combine 
                    gentle exercise therapy, joint protection strategies, 
                    pain management techniques, and lifestyle modifications 
                    to help you live well with arthritis.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    We have successfully helped hundreds of people in 
                    Harborne and Birmingham manage their arthritis symptoms, 
                    maintain their mobility, and continue enjoying their 
                    favorite activities with less pain and greater confidence.
                  </p>
                  
                  <p className="text-lg leading-relaxed font-semibold">
                    Some examples of arthritis conditions that we have 
                    successfully helped manage include:
                  </p>
                  
                  <ul className="space-y-2 text-lg">
                    <li>• Osteoarthritis (Knee, Hip, Spine)</li>
                    <li>• Rheumatoid Arthritis</li>
                    <li>• Psoriatic Arthritis</li>
                    <li>• Ankylosing Spondylitis</li>
                    <li>• Fibromyalgia</li>
                    <li>• Juvenile Arthritis</li>
                    <li>• Gout Management</li>
                    <li>• Joint Stiffness</li>
                    <li>• Morning Stiffness</li>
                    <li>• Activity-Related Pain</li>
                    <li>• Reduced Range of Motion</li>
                    <li>• Muscle Weakness</li>
                    <li>• Balance Issues</li>
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
                        "Managing my arthritis with confidence!"
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

export default Arthritis;