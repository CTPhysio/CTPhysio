import React from 'react';
import { MessageCircle, Target, Heart } from 'lucide-react';

const JourneySteps: React.FC = () => {
  const steps = [
    {
      number: "1",
      icon: MessageCircle,
      title: "Tell Us What's Holding You Back",
      description: "Start with a free discovery visit. We listen, understand your goals, and work out what needs to change."
    },
    {
      number: "2",
      icon: Target,
      title: "Follow Your Strength-Based Plan",
      description: "A clear programme built around your body and the activities you want to get back to, whether that's the gym, golf, or keeping up with the grandchildren."
    },
    {
      number: "3",
      icon: Heart,
      title: "Move Freely and Stay Independent",
      description: "Build the strength and confidence to keep doing what matters, not just now, but for years to come."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-navy-700 mb-3">
              Your Path Back to Strength and Confidence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-1">
              <img
                src="/Headshot Square.png"
                alt="Chris Tiley working with patient in gym"
                className="w-full h-auto rounded-lg shadow-lg max-w-md mx-auto md:max-w-none"
                onError={(e) => {
                  e.currentTarget.src = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg';
                }}
              />
            </div>

            <div className="order-2 md:order-2 space-y-5 md:space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 md:space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-9 h-9 md:w-12 md:h-12 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-lg">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-1.5">
                        <Icon size={18} className="text-sky-500 mr-2" />
                        <h3 className="text-base md:text-xl font-bold text-navy-700">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}

              <div className="pt-4 md:pt-6">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-base w-full md:w-auto"
                >
                  See How We Can Help
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
