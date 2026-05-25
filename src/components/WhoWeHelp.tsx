import React from 'react';
import { Users, Dumbbell, Activity, Heart, TrendingUp, ShieldCheck } from 'lucide-react';

const whoGroups = [
  {
    icon: Activity,
    title: "Active adults in their 50s, 60s, and 70s",
    description: "Who want to stay strong, mobile, and independent as they get older."
  },
  {
    icon: Heart,
    title: "People recovering from surgery",
    description: "Getting back on their feet and regaining strength and confidence after an operation."
  },
  {
    icon: Dumbbell,
    title: "Adults returning to sport or exercise",
    description: "Golfers, gym-goers, hikers, and swimmers who've been sidelined by injury."
  },
  {
    icon: TrendingUp,
    title: "People with recurring or persistent pain",
    description: "Who've tried other treatments and want a clear plan that actually moves things forward."
  },
  {
    icon: Users,
    title: "Over 60s wanting to stay capable",
    description: "Keeping up with grandchildren, walking confidently, and reducing the risk of falls."
  },
  {
    icon: ShieldCheck,
    title: "Adults worried about losing their independence",
    description: "Who want to take an active approach to their health before problems get worse."
  }
];

const WhoWeHelp: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-navy-700 mb-3">
              Who We Help
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We specialise in helping active adults stay strong, confident, and independent. Here's who tends to come through our door.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whoGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-5 md:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-sky-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-700 text-sm md:text-base mb-1">{group.title}</h3>
                      <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{group.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-8 md:mt-10">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors"
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
