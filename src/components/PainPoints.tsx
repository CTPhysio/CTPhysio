import React from 'react';
import { Frown, PersonStanding, Hammer, TrendingUp, Frown as Worried, NotebookPen } from 'lucide-react';

const PainPoints: React.FC = () => {
  const painPoints = [
    {
      icon: Frown,
      text: "Feeling frustrated after trying multiple approaches without lasting results?"
    },
    {
      icon: PersonStanding,
      text: "Wanting active solutions rather than just managing symptoms?"
    },
    {
      icon: Hammer,
      text: "Tried various gadgets and products with limited success?"
    },
    {
      icon: TrendingUp,
      text: "Motivated to invest in your physical wellbeing and future quality of life?"
    },
    {
      icon: Worried,
      text: "Concerned about your condition progressing and further affecting your day-to-day life?"
    },
    {
      icon: NotebookPen,
      text: "Looking for a clear, personalised treatment approach?"
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-white rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-8 leading-tight text-center">
            Are pain and injuries holding you back?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <Icon size={24} className="text-red-500 mt-1" />
                  </div>
                  <p className="text-gray-700 font-medium">{point.text}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-navy-700 mb-4">
              Schedule A Free Discovery Visit With Chris Tiley
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              So you don't have to give up your active lifestyle.
            </p>
            <div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors w-full md:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPoints;