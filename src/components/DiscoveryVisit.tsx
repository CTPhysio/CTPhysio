import React from 'react';
import { MessageSquare, Activity, FileText } from 'lucide-react';

const DiscoveryVisit: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "We Listen",
      description: "You'll have time to explain what's been going on and what you want to be able to do again."
    },
    {
      icon: Activity,
      title: "We Assess",
      description: "A gentle movement assessment to understand what's really going on, not just where it hurts."
    },
    {
      icon: FileText,
      title: "You Leave with a Plan",
      description: "An honest picture of what's causing the problem and what recovery looks like for you."
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-navy-700 mb-8 md:mb-12 text-center leading-tight">
          What to Expect at Your Free Discovery Visit
        </h2>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-8 md:mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="inline-block p-3 md:p-4 bg-sky-100 rounded-full mb-3">
                  <Icon size={26} className="text-sky-500" />
                </div>
                <h3 className="text-base md:text-xl font-bold text-navy-700 mb-2">{step.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <p className="text-sm md:text-lg text-gray-600 mb-5 leading-relaxed">
            Completely free. No obligation. Many patients tell us it's the most useful conversation they've had about their health.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors"
          >
            Book Your Free Discovery Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryVisit;
