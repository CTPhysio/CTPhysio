import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const EventWaitingListConfirmed: React.FC = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]');
    const prevDescContent = prevDesc?.getAttribute('content');
    document.title = 'Thank You | Chris Tiley Physiotherapy';
    if (prevDesc) prevDesc.setAttribute('content', "Your email address has been confirmed and you're now on the waiting list for a Chris Tiley Physiotherapy event.");

    return () => {
      document.title = prevTitle;
      if (prevDesc && prevDescContent) prevDesc.setAttribute('content', prevDescContent);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[35vh] bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 opacity-90" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Thank you</h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-50 rounded-full mb-6">
                <CheckCircle2 size={28} className="text-sky-600" />
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Your email address has been confirmed and you&rsquo;re now on the waiting list.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We&rsquo;ll contact you as soon as the event date is confirmed, with full details and how to book your place.
              </p>
              <Link
                to="/events"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold rounded-md shadow-sm text-white bg-navy-700 hover:bg-navy-800 transition-colors duration-200"
              >
                Back to Events
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventWaitingListConfirmed;
