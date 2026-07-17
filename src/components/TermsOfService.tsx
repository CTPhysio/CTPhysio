import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '24 Earls Court Road, Harborne, Birmingham, B17 9AH' },
  { icon: Mail, label: 'Email', value: 'info@christileyphysiotherapy.com' },
  { icon: Phone, label: 'Phone', value: '0121 517 0806' },
];

const bookingItems = [
  'Online bookings (e.g. initial assessments booked via my website or booking system) are paid at the time of booking.',
  'Bookings made by phone are typically paid at the end of the session.',
  'Follow-up sessions can be paid either session-by-session (usually at the end of each session), or as a block of 5 or 10 sessions, paid in advance, usually settled at the end of your first session in that block.',
  'Prices for sessions, assessments, and classes are available on request or as published on my website, and may be updated from time to time.',
];

const cancellationItems = [
  "I ask for at least 24 hours' notice if you need to cancel or rearrange an appointment.",
  "If less than 24 hours' notice is given, or if you don't attend without letting me know, the full session fee will be charged.",
  "I understand things come up unexpectedly, if there are genuinely exceptional circumstances, please get in touch and I'll do my best to be reasonable.",
  "If you've paid in advance for a block of sessions and need to cancel one with appropriate notice, that session can usually be rearranged rather than lost.",
];

const clinicalItems = [
  "Physiotherapy treatment plans are individually tailored, and outcomes cannot be guaranteed. I'll always give you an honest, realistic view of what's achievable.",
  "You do not need a GP referral to book with me. If I believe further medical investigation is needed, I will let you know and may recommend you see your GP or a specialist.",
  "You're always in control of your treatment. If anything feels uncomfortable or you have concerns during a session, please tell me.",
];

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[35vh] bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 opacity-90" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-200">The terms that apply to booking appointments, classes, and sessions</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
              {/* Header block */}
              <div className="border-b border-gray-200 pb-6 space-y-3">
                <h2 className="text-2xl font-bold text-navy-700">Chris Tiley Physiotherapy</h2>
                <div className="space-y-2">
                  {contactInfo.map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-start space-x-3 text-gray-700">
                      <Icon size={18} className="text-sky-500 mt-0.5 flex-shrink-0" />
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-gray-500 pt-1">Last updated: 17 July 2026</p>
              </div>

              {/* 1. Introduction */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">1. Introduction</h3>
                <p className="text-gray-600 leading-relaxed">
                  These terms apply to anyone booking an appointment, class, or session with Chris Tiley Physiotherapy, whether online, by phone, or in person. By booking with me, you're agreeing to these terms.
                </p>
              </div>

              {/* 2. Bookings and Payment */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">2. Bookings and Payment</h3>
                <ul className="space-y-3">
                  {bookingItems.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 3. Cancellations and Missed Appointments */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">3. Cancellations and Missed Appointments</h3>
                <ul className="space-y-3">
                  {cancellationItems.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Free Discovery Visits */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">4. Free Discovery Visits</h3>
                <p className="text-gray-600 leading-relaxed">
                  Free 20-minute discovery visits are offered as an introductory conversation and are not a substitute for a full clinical assessment. The same 24-hour cancellation notice applies; persistent late cancellation or non-attendance may affect future access to this offer.
                </p>
              </div>

              {/* 5. Classes */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">5. Classes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Small-group strength classes have limited spaces (maximum 5 participants). The same cancellation and no-show terms apply as for individual sessions, given that a missed space cannot usually be offered to someone else at short notice.
                </p>
              </div>

              {/* 6. Clinical Care */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">6. Clinical Care</h3>
                <ul className="space-y-3">
                  {clinicalItems.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 7. Insurance Patients */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">7. Insurance Patients</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you're claiming through an insurer such as AXA, it's your responsibility to confirm your policy covers physiotherapy treatment and to obtain any required pre-authorisation before treatment begins. I'll support this process where I can, but the agreement for cover remains between you and your insurer.
                </p>
              </div>

              {/* 8. Liability */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">8. Liability</h3>
                <p className="text-gray-600 leading-relaxed">
                  While I take great care in assessing and treating you safely, physiotherapy and exercise carry some inherent risk. I'll always work within your comfort levels and explain what we're doing and why. It's important you tell me about any changes to your health, medication, or symptoms between sessions.
                </p>
              </div>

              {/* 9. Room Rental / Other Clinicians */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">9. Room Rental / Other Clinicians</h3>
                <p className="text-gray-600 leading-relaxed">
                  Some clinicians who rent rooms at my clinic are self-employed and operate independently. Their own terms of service, insurance, and clinical responsibility apply to any treatment you receive from them, separately from mine.
                </p>
              </div>

              {/* 10. Changes to These Terms */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">10. Changes to These Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  I may update these terms from time to time. The most recent version will always be available on this page.
                </p>
              </div>

              {/* 11. Contact */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">11. Contact</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these terms, please get in touch using the details above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;
