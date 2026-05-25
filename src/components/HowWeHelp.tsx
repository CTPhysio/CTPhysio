import React from 'react';
import { MessageCircle, Search, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    title: "We Listen",
    description: "You'll have time to explain what's been going on and what you want to get back to."
  },
  {
    icon: Search,
    title: "We Assess",
    description: "We look at how you move, what's contributing to the problem, and what's holding you back."
  },
  {
    icon: CheckCircle,
    title: "You Leave With Clarity",
    description: "You'll leave understanding what's going on and the best next step for recovery."
  }
];

const HowWeHelp: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 text-center mb-10 leading-tight">
            What To Expect At Your Free Discovery Visit
          </h2>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center mb-4 border border-sky-100">
                    <Icon size={22} className="text-sky-500" />
                  </div>
                  <h3 className="font-bold text-navy-700 text-base mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeHelp;
