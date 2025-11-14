import React from 'react';
import { MessageSquare, Activity, FileText } from 'lucide-react';

const DiscoveryVisit: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Understanding Your Condition",
      description: "We'll discuss your symptoms, concerns, and what you're hoping to achieve."
    },
    {
      icon: Activity,
      title: "Simple Movement Assessment",
      description: "Gentle observations to understand how your body is currently moving."
    },
    {
      icon: FileText,
      title: "Personalised Recovery Plan",
      description: "A clear, realistic roadmap tailored to your specific situation and goals."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-12 text-center">
          What Happens During Your Free Discovery Visit?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center flex flex-col items-center">
                <div className="inline-block p-4 bg-sky-100 rounded-full mb-4">
                  <Icon size={32} className="text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-700 mb-2 min-h-[3rem] flex items-center">{step.title}</h3>
                <p className="text-gray-600 flex-1">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            This visit is completely free and you're under no obligation to continue.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryVisit;