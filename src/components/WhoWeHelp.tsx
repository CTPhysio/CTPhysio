import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Dumbbell, Activity, Heart, TrendingUp, ShieldCheck } from 'lucide-react';

const whoGroups = [
  {
    icon: Activity,
    title: "Everyday aches and pains",
    description: "Back, neck, shoulder, hip and knee problems affecting daily life."
  },
  {
    icon: Dumbbell,
    title: "Sports and exercise injuries",
    description: "Helping people return to running, football, tennis, the gym and other activities."
  },
  {
    icon: Heart,
    title: "Recovery after surgery",
    description: "Gradually rebuilding movement, strength and confidence."
  },
  {
    icon: TrendingUp,
    title: "Persistent or recurring pain",
    description: "Understanding ongoing symptoms and developing a practical plan."
  },
  {
    icon: Users,
    title: "Strength and mobility concerns",
    description: "Building physical capability for everyday activities."
  },
  {
    icon: ShieldCheck,
    title: "Staying active as we get older",
    description: "Supporting balance, strength and independence in later life."
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
              We help people manage pain, recover from injury and build the strength and confidence to do more.
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

          <p className="text-center text-sm text-gray-500 mt-5 leading-relaxed">
            We also run small-group <Link to="/strength-rehab-classes" className="text-sky-600 hover:text-sky-700 underline">Strength &amp; Rehab Classes</Link> and <Link to="/over-60s-strength-classes" className="text-sky-600 hover:text-sky-700 underline">Over 60s Strength Classes</Link> for people who want to get stronger with the reassurance of a physiotherapist there to guide them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
