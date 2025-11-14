import React from 'react';

const TreatmentConditions: React.FC = () => {
  const treatments = [
    { name: "LOWER BACK PAIN", href: "/treatments/back-pain" },
    { name: "KNEE PAIN", href: "/treatments/knee-pain" },
    { name: "NECK PAIN AND STIFFNESS", href: "/treatments/neck-pain" },
    { name: "SHOULDER PAIN", href: "/treatments/shoulder-pain" },
    { name: "HIP PAIN AND STIFFNESS", href: "/treatments/hip-pain" },
    { name: "SCIATICA", href: "/treatments/sciatica" },
    { name: "BALANCE AND FALLS PREVENTION", href: "/treatments/balance-falls" },
    { name: "POST-SURGICAL REHABILITATION", href: "/treatments/surgical-rehab" },
    { name: "GENERAL DECONDITIONING/MUSCLE WEAKNESS", href: "/treatments/deconditioning" }
  ];

  return (
    <section className="py-16 bg-gray-100 rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left Column - Title and Description */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                WHAT I TREAT:
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over 800 Harborne residents have regained their mobility and returned to the activities they love by actively participating in their recovery and developing lasting physical resilience.
              </p>
            </div>

            {/* Right Columns - Treatment Links */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {/* Left Column of Treatments */}
                <div className="space-y-4">
                  {treatments.slice(0, 5).map((treatment, index) => (
                    <a
                      key={index}
                      href={treatment.href}
                      className="block text-navy-700 hover:text-sky-500 font-semibold text-lg underline transition-colors duration-200"
                    >
                      {treatment.name}
                    </a>
                  ))}
                </div>

                {/* Right Column of Treatments */}
                <div className="space-y-4">
                  {treatments.slice(5).map((treatment, index) => (
                    <a
                      key={index}
                      href={treatment.href}
                      className="block text-navy-700 hover:text-sky-500 font-semibold text-lg underline transition-colors duration-200"
                    >
                      {treatment.name}
                    </a>
                  ))}
                  <p className="text-navy-700 font-semibold text-lg italic">
                    and more!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentConditions;