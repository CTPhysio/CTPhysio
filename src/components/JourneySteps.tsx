import React from 'react';
import { MessageCircle, Target, Heart } from 'lucide-react';

const JourneySteps: React.FC = () => {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Speak With Chris",
      description: "Start with a personal consultation to understand your condition and goals"
    },
    {
      number: "2", 
      icon: Target,
      title: "Get Tailored Treatment",
      description: "Receive a personalised treatment plan designed specifically for your needs"
    },
    {
      number: "3",
      icon: Heart,
      title: "Move With Confidence",
      description: "Build lasting resilience and return to the activities that matter to you"
    }
  ];

  return (
    <section className="py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              The 3 Stages Of Recovery
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image - Mobile: top, Desktop: left */}
            <div className="order-1 md:order-1">
              <img 
                src="/Headshot Square.png"
                alt="Chris Tiley working with patient in gym"
                className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto md:max-w-none"
                onError={(e) => {
                  console.log('Journey image failed to load');
                  e.currentTarget.src = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg';
                }}
              />
            </div>

            {/* Steps */}
            <div className="order-2 md:order-2 space-y-6 md:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-base md:text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Icon size={20} className="text-sky-500 mr-2 md:w-6 md:h-6" />
                        <h3 className="text-lg md:text-xl font-bold text-navy-700">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm md:text-base text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              
              <div className="pt-6 text-center md:text-left">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-base w-full md:w-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;