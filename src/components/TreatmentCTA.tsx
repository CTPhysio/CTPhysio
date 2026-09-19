import React from 'react';
import { Phone, Calendar } from 'lucide-react';

interface TreatmentCTAProps {
  conditionName: string;
}

const CLINIC_PHONE = '0121 517 0806';
const CLINIC_PHONE_TEL = 'tel:01215170806';

const TreatmentCTA: React.FC<TreatmentCTAProps> = ({ conditionName }) => {
  return (
    <section className="bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">
          Need help with your {conditionName}?
        </h2>
        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
          If you're struggling with {conditionName} or would like help understanding what's contributing to your symptoms, we're happy to help.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/booking"
            className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-lg"
          >
            <Calendar className="mr-2" size={20} />
            Book an Appointment
          </a>
          <a
            href={CLINIC_PHONE_TEL}
            className="inline-flex items-center text-navy-700 font-semibold text-lg hover:text-sky-500 transition-colors"
          >
            <Phone className="mr-2" size={20} />
            {CLINIC_PHONE}
          </a>
        </div>
        <div className="mt-6">
          <a
            href="/advice"
            className="text-sm text-gray-500 hover:text-navy-700 transition-colors underline"
          >
            Read our latest advice &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default TreatmentCTA;
