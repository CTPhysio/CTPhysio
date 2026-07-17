import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Address', value: '24 Earls Court Road, Harborne, Birmingham, B17 9AH' },
  { icon: Mail, label: 'Email', value: 'info@christileyphysiotherapy.com' },
  { icon: Phone, label: 'Phone', value: '0121 517 0806' },
];

const collectedInfo = [
  { title: 'Contact details', desc: 'name, address, phone number, email address, date of birth' },
  { title: 'Health information', desc: 'medical history, current symptoms, treatment notes, and other clinical information relevant to your care' },
  { title: 'Appointment and booking information', desc: 'via my booking system, Cliniko' },
  { title: 'Payment and insurance information', desc: "if you're claiming through an insurer such as AXA, this may include policy details and invoicing information" },
  { title: 'Photographs or video', desc: 'only where you\'ve given specific consent, for example for clinical assessment purposes, or for use in marketing (such as testimonials or social media)' },
  { title: 'Website usage information', desc: 'such as pages visited and how you found the site, via analytics tools (see Section 8, Cookies)' },
];

const collectionMethods = [
  'Directly from you, for example when you book an appointment, complete a form, or speak with my reception team',
  'From referrers, insurers, or case managers, where relevant (for example in medico-legal assessments)',
  'Automatically through my website, via cookies and analytics tools',
];

const legalBasisRows = [
  { purpose: 'Providing physiotherapy assessment and treatment', basis: 'Performance of a contract; and processing of special category (health) data under Article 9(2)(h), for health care purposes' },
  { purpose: 'Booking and managing appointments', basis: 'Performance of a contract' },
  { purpose: 'Billing and insurance claims', basis: 'Performance of a contract; legal obligation' },
  { purpose: 'Marketing communications (e.g. newsletter)', basis: 'Consent, which you can withdraw at any time' },
  { purpose: 'Using your photo, video, or testimonial in marketing', basis: 'Explicit consent, obtained separately and specifically for this purpose' },
  { purpose: 'Website analytics', basis: 'Consent (via cookie preferences)' },
  { purpose: 'Complying with my legal and professional obligations', basis: 'Legal obligation' },
];

const accessList = [
  'Chris Tiley and Kate Evans, as the clinicians providing your care, have access to your clinical records as needed to treat you.',
  'My virtual reception team have access to my info@ email address and an administrative login to Cliniko, to manage bookings and general enquiries. They do not have access to clinical notes or treatment records.',
  'Self-employed clinicians who rent rooms at the clinic operate independently, hold their own separate patient records, and do not have access to your records with me unless you are formally referred between us with your consent.',
  'AXA, if you are claiming treatment costs through your insurance policy, for the purposes of authorisation and invoicing.',
  'Healthcode, used to view remittance information relating to insurance claims.',
  'Specialists, GPs, or case managers, where I need to coordinate your care or provide medico-legal reporting, and only with your knowledge and consent.',
  'Cliniko, my practice management software, which stores and processes your booking and clinical information on my behalf. Cliniko accounts registered in the UK have their data stored within the UK.',
  'Professional indemnity insurer (Balens/Zurich), only in the event of a claim or complaint requiring their involvement.',
];

const retentionPeriods = [
  'Adult patient records are typically retained for 8 years from your last treatment or contact.',
  'Records for patients under 18 are typically retained for longer, in line with professional guidance from the Chartered Society of Physiotherapy, generally until the patient\'s 25th birthday (or 26th, if they were 17 at the end of treatment).',
];

const rightsList = [
  'Request access to the personal information I hold about you',
  'Request correction of inaccurate information',
  'Request deletion of your information, in certain circumstances',
  'Object to certain types of processing',
  'Request restriction of processing',
  'Request that your information be transferred to another organisation',
  'Withdraw consent at any time, where processing is based on consent',
];

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative h-[35vh] bg-navy-800">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700 opacity-90" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-200">How I collect, use, and protect your personal information</p>
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
                  I take your privacy seriously. This policy explains what personal information I collect when you visit my website, enquire about my services, or become a patient, how I use it, who I share it with, and what rights you have over it.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  I am registered with the Information Commissioner's Office (ICO), registration reference ZB047279.
                </p>
              </div>

              {/* 2. Who I Am */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">2. Who I Am</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm Chris Tiley, the data controller for Chris Tiley Physiotherapy. If you have any questions about this policy or how your information is used, you can contact me directly using the details above.
                </p>
              </div>

              {/* 3. What Information I Collect */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">3. What Information I Collect</h3>
                <p className="text-gray-600 leading-relaxed">
                  Depending on how you interact with me, I may collect:
                </p>
                <ul className="space-y-3">
                  {collectedInfo.map(({ title, desc }) => (
                    <li key={title} className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                      <span className="font-semibold text-navy-700 sm:min-w-[200px]">{title}:</span>
                      <span className="text-gray-600 leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. How I Collect Your Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">4. How I Collect Your Information</h3>
                <ul className="space-y-3">
                  {collectionMethods.map((method, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 5. Why I Use Your Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">5. Why I Use Your Information, and My Legal Basis</h3>
                <div className="overflow-x-auto rounded-lg border border-gray-200">
                  <table className="w-full text-left">
                    <thead className="bg-navy-50">
                      <tr>
                        <th className="px-4 py-3 text-sm font-semibold text-navy-700">Purpose</th>
                        <th className="px-4 py-3 text-sm font-semibold text-navy-700">Legal Basis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {legalBasisRows.map((row) => (
                        <tr key={row.purpose} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 text-sm text-gray-700 align-top">{row.purpose}</td>
                          <td className="px-4 py-3 text-sm text-gray-600 align-top">{row.basis}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 6. Who Has Access */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">6. Who Has Access to Your Information</h3>
                <ul className="space-y-3">
                  {accessList.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed font-medium pt-2">
                  I do not sell your personal information, and I do not share it with any other third party without your consent, unless required by law.
                </p>
              </div>

              {/* 7. How Long I Keep */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">7. How Long I Keep Your Information</h3>
                <p className="text-gray-600 leading-relaxed">
                  I keep clinical records for as long as necessary to provide your care and to meet my legal and professional obligations. As general guidance:
                </p>
                <ul className="space-y-3">
                  {retentionPeriods.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Where I have a legal obligation to retain information for longer (for example, for insurance, tax, or medico-legal reasons), I will do so, and will securely dispose of records once no longer required.
                </p>
              </div>

              {/* 8. Cookies */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">8. Cookies and Website Analytics</h3>
                <p className="text-gray-600 leading-relaxed">
                  My website uses cookies and similar technologies, including Google Analytics and Google Ads, to understand how visitors use the site and to measure the effectiveness of my advertising. These tools may collect information such as your IP address, browser type, and pages visited.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  When you first visit the site, you'll see a cookie banner allowing you to choose which categories of cookies you're happy for me to use: Necessary, Preferences, Statistics, and Marketing. You can allow all, allow a selection, or deny non-essential cookies entirely.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You can change your preferences at any time using the Cookiebot icon shown in the corner of the page.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You can also control cookies through your browser settings, though disabling them may affect how the website functions.
                </p>
              </div>

              {/* 9. Under-18s */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">9. Under-18s</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you are under 18, a parent or guardian must provide consent for your treatment and for the processing of your personal information. Parents or guardians may exercise data protection rights on behalf of a child where appropriate.
                </p>
              </div>

              {/* 10. International Transfers */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">10. International Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Where any of the tools or services I use process data outside the UK, appropriate safeguards (such as Standard Contractual Clauses) are put in place by those providers to protect your information, in line with UK GDPR requirements.
                </p>
              </div>

              {/* 11. Your Rights */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">11. Your Rights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Under UK data protection law, you have the right to:
                </p>
                <ul className="space-y-3">
                  {rightsList.map((right, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                      <span className="text-gray-600 leading-relaxed">{right}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  To exercise any of these rights, please contact me using the details at the top of this policy. I will normally respond within one month.
                </p>
              </div>

              {/* 12. Complaints */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">12. Complaints</h3>
                <p className="text-gray-600 leading-relaxed">
                  If you have any concerns about how I handle your personal information, please contact me directly in the first instance. You also have the right to complain to the Information Commissioner's Office (ICO):
                </p>
                <div className="bg-navy-50 rounded-lg p-5 space-y-1">
                  <p className="font-semibold text-navy-700">Information Commissioner's Office</p>
                  <p className="text-gray-600">Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
                  <p className="text-gray-600">Telephone: 0303 123 1113</p>
                  <p className="text-gray-600">Website: www.ico.org.uk</p>
                </div>
              </div>

              {/* 13. Changes */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-navy-700">13. Changes to This Policy</h3>
                <p className="text-gray-600 leading-relaxed">
                  I may update this policy from time to time to reflect changes in my practice or legal requirements. The most recent version will always be available on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
