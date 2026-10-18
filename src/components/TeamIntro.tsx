import React from 'react';
import { Link } from 'react-router-dom';

type Clinician = {
  name: string;
  image: string;
  alt: string;
  description: string;
  maxHeight: string;
};

const clinicians: Clinician[] = [
  {
    name: 'Chris Tiley',
    image: '/Chris_Headshot_No_Background.png',
    alt: 'Chris Tiley, Physiotherapist',
    description: 'Particular interest in strength, rehabilitation and helping people stay active as they get older.',
    maxHeight: '100%',
  },
  {
    name: 'Kate Evans',
    image: '/Kate_Headshot_No_Background.png',
    alt: 'Kate Evans, Physiotherapist',
    description: "Particular interest in sports injuries and women's football.",
    maxHeight: '100%',
  },
  {
    name: 'Jessamyn',
    image: '/assets/images/Jessamyn_Headshot_No_Background.png',
    alt: 'Jessamyn, Physiotherapist',
    description: 'Particular interest in sports injuries and tennis.',
    maxHeight: '72%',
  },
];

const TeamIntro: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-3 leading-tight">
            Meet Your Physiotherapy Team
          </h2>
          <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto mb-7">
            Chris, Kate and Jessamyn provide physiotherapy for a wide range of muscle and joint problems. We take time to understand what's troubling you, what you want to get back to and how we can help you make progress.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 text-left">
            {clinicians.map((clinician) => (
              <article key={clinician.name} className="h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col">
                <div className="h-56 bg-gradient-to-br from-sky-50 to-slate-100 flex items-end justify-center overflow-hidden">
                  <img
                    src={clinician.image}
                    alt={clinician.alt}
                    className="w-auto object-contain object-bottom"
                    style={{ maxHeight: clinician.maxHeight }}
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-navy-700 mb-1">{clinician.name}</h3>
                  <p className="text-sky-600 font-semibold text-xs uppercase tracking-wider mb-3">Physiotherapist</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{clinician.description}</p>
                </div>
              </article>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center justify-center mt-7 px-7 py-3 bg-navy-700 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TeamIntro;
