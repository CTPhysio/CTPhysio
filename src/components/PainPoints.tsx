import React from 'react';
import { Frown, PersonStanding, Hammer, TrendingUp, Frown as Worried, NotebookPen } from 'lucide-react';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: Frown,
      text: "Worried that pain or injury is going to stop you doing the things you love?"
    },
    {
      icon: PersonStanding,
      text: "Concerned about losing your strength, fitness, or independence as you get older?"
    },
    {
      icon: Hammer,
      text: "Tried rest, painkillers, or other treatments — but the problem keeps coming back?"
    },
    {
      icon: TrendingUp,
      text: "Ready to take an active approach to your recovery, not just manage symptoms?"
    },
    {
      icon: Worried,
      text: "Frustrated that nobody has given you a clear explanation or a realistic plan?"
    },
    {
      icon: NotebookPen,
      text: "Looking for someone who genuinely listens and treats you as an individual?"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-navy-700 mb-6 md:mb-8 leading-tight text-center">
            Does any of this sound familiar?
          </h2>

          <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-start space-x-3 p-3 md:p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Icon size={20} className="text-red-500 mt-0.5" />
                  </div>
                  <p className="text-sm md:text-base text-gray-700 font-medium leading-relaxed">{point.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-bold text-navy-700 mb-3">
              You don't have to accept this as the new normal.
            </h3>
            <p className="text-sm md:text-lg text-gray-600 mb-5 leading-relaxed">
              A free discovery visit with Chris is the first step — no pressure, no commitment, just honest guidance on what's possible for you.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors w-full md:w-auto"
              >
                Book Your Free Discovery Visit
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;