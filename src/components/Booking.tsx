import React, { useState } from 'react';
import { Phone, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const CLINIC_PHONE = '0121 517 0806';
const CLINIC_PHONE_TEL = 'tel:01215170806';
const BOOKING_URL = 'https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    referralSource: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const encode = (data: Record<string, string>) =>
        Object.keys(data)
          .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
          .join('&');

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          'firstName': formData.firstName,
          'lastName': formData.lastName,
          'email': formData.email,
          'phone': formData.phone,
          'message': formData.message,
          'referralSource': formData.referralSource
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          referralSource: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => setSubmitStatus('idle');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact heading */}
      <section className="bg-navy-800 py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Book an Appointment
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed">
            Not sure which appointment is right for you? We’re happy to help.
          </p>
        </div>
      </section>

      {/* Success / Error messages */}
      {submitStatus !== 'idle' && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h4 className="font-semibold text-green-800">Thanks for your enquiry!</h4>
                  <p className="text-green-700 text-sm mt-1">We’ll get back to you soon.</p>
                </div>
                <button onClick={resetStatus} className="text-green-500 hover:text-green-700 ml-2">×</button>
              </div>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg">
              <div className="flex items-start">
                <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-800">Submission Failed</h4>
                  <p className="text-red-700 text-sm mt-1">Please try again or call us directly at 0121 517 0806.</p>
                </div>
                <button onClick={resetStatus} className="text-red-500 hover:text-red-700 ml-2">×</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main two-column section */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* MOBILE: Call card first, then form, then online booking.
                DESKTOP: Left = form, Right = call + online booking */}

            {/* Left column – Enquiry form (desktop) */}
            <div className="order-2 md:order-1 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-navy-700 mb-3">
                Prefer to message us?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                If you’d rather send us a message, complete the short enquiry form and we’ll get back to you.
              </p>

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How can we help? *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 h-32"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us? *</label>
                  <input
                    type="text"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={handleChange}
                    placeholder="Google, doctor, gym... (be specific so we can thank...)"
                    className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-700 text-white py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Enquire about an Appointment'}
                </button>
              </form>
            </div>

            {/* Right column – Call + Online booking (desktop) */}
            <div className="order-1 md:order-2 flex flex-col gap-6">
              {/* Call the Clinic card – most prominent */}
              <div className="bg-navy-700 rounded-xl shadow-lg p-6 md:p-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Call the Clinic</h2>
                <a
                  href={CLINIC_PHONE_TEL}
                  className="block text-3xl md:text-4xl font-bold text-white hover:text-sky-300 transition-colors mb-4"
                >
                  {CLINIC_PHONE}
                </a>
                <p className="text-gray-200 leading-relaxed mb-6 text-sm md:text-base">
                  The quickest way to get started is to give us a call. We can talk through what’s going on, answer any questions and help you find the right appointment.
                </p>
                <a
                  href={CLINIC_PHONE_TEL}
                  className="inline-flex items-center justify-center w-full px-6 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors text-lg"
                >
                  <Phone className="mr-2" size={22} />
                  Call the Clinic
                </a>
              </div>

              {/* Book Online card – secondary */}
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-navy-700 mb-2">Ready to Book?</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  If you already know what you’d like to book, you can book your appointment online.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-navy-700 text-navy-700 font-semibold rounded-lg hover:bg-navy-700 hover:text-white transition-colors"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
