import React from 'react';

const treatments = [
  {
    title: 'Lower Back Pain',
    description: "Get help understanding and managing your back pain, so you can get back to doing the things you enjoy.",
    href: '/treatments/back-pain',
  },
  {
    title: 'Knee Pain',
    description: "Whether your knee pain is affecting everyday activities, exercise or sport, we can help you understand what's going on and what to do next.",
    href: '/treatments/knee-pain',
  },
  {
    title: 'Shoulder Pain',
    description: 'Practical physiotherapy to help you manage shoulder pain and get back to the activities that matter to you.',
    href: '/treatments/shoulder-pain',
  },
  {
    title: 'Hip Pain & Stiffness',
    description: "Understand what's contributing to your hip pain or stiffness and work towards moving more comfortably.",
    href: '/treatments/hip-pain',
  },
  {
    title: 'Balance & Falls Prevention',
    description: 'Build your balance, strength and confidence to help you stay active and independent.',
    href: '/treatments/balance-falls',
  },
  {
    title: 'Muscle Weakness & Deconditioning',
    description: "Build strength, confidence and physical capacity if you've become weaker or less active.",
    href: '/treatments/deconditioning',
  },
];

const HowCanWeHelp: React.FC = () => {
  return (
    <section className="py-10 md:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-2">
              How Can We Help?
            </h2>
            <p className="text-sm md:text-base text-gray-500 max-w-xl mx-auto">
              Whether you're dealing with pain, recovering from an injury or looking to improve your strength, movement and confidence, we can help.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {treatments.map((t, i) => (
              <a
                key={i}
                href={t.href}
                className="block bg-white rounded-lg p-4 border border-gray-100 hover:border-sky-100 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="font-semibold text-navy-700 text-sm mb-1">{t.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t.description}</p>
              </a>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm font-semibold text-navy-700 mb-1">Not sure what you need?</p>
            <p className="text-sm text-gray-500 mb-4">We can help you work out the right next step.</p>
            <a
              href="/services"
              className="inline-flex items-center justify-center px-7 py-3 bg-navy-700 text-white text-sm font-semibold rounded-lg hover:bg-navy-800 transition-colors"
            >
              View all conditions we help with
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowCanWeHelp;
