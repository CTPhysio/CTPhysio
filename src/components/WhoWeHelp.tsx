import React from 'react';
import { Users, Dumbbell, Activity, Heart, TrendingUp, ShieldCheck } from 'lucide-react';

const whoGroups = [
  {
    icon: Activity,
    title: "Active adults in their 50s, 60s, and 70s",
    description: "Staying strong, mobile, and independent as they get older."
  },
  {
    icon: Heart,
    title: "People recovering from surgery",
    description: "Rebuilding strength and confidence after an operation."
  },
  {
    icon: Dumbbell,
    title: "Adults returning to sport or exercise",
    description: "Golfers, hikers, and gym-goers sidelined by injury."
  },
  {
    icon: TrendingUp,
    title: "People with recurring or persistent pain",
    description: "Who want a clear plan that actually moves things forward."
  },
  {
    icon: Users,
    title: "Over 60s wanting to stay capable",
    description: "Walking confidently and keeping up with what matters."
  },
  {
    icon: ShieldCheck,
    title: "Adults worried about losing independence",
    description: "Taking an active approach before problems get worse."
  }
];

const WhoWeHelp: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-2">
              Who We Help
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
              We specialise in helping active adults stay strong, confident, and independent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {whoGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 border border-gray-100 hover:border-sky-100 hover:shadow-sm transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-sky-50 rounded-md flex items-center justify-center">
                      <Icon size={16} className="text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy-700 text-sm mb-0.5">{group.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{group.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-7">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-navy-700 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              Book a Free Discovery Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
