import React, { useState } from 'react';
import { Phone, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const CLINIC_PHONE = '0121 517 0806';
const CLINIC_PHONE_TEL = 'tel:01215170806';
const BOOKING_URL = 'https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    help: '',
    when: '',
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
          'form-name': 'booking-enquiry',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          help: formData.help,
          when: formData.when,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', phone: '', email: '', help: '', when: '' });
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
      {/* Hero */}
      <section className="bg-navy-800 py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Let’s get you booked
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            Not sure which appointment is right for you? Give us a call and we’ll help you find the best option.
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

      {/* Primary booking option – Call the clinic */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-6">Call the clinic</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The quickest way to get started is to call us.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We’re happy to talk through what’s going on, answer any questions and help you find the right appointment.
          </p>
          <div className="mb-8">
            <a
              href={CLINIC_PHONE_TEL}
              className="text-3xl md:text-4xl font-bold text-navy-700 hover:text-navy-800 transition-colors"
            >
              {CLINIC_PHONE}
            </a>
          </div>
          <a
            href={CLINIC_PHONE_TEL}
            className="inline-flex items-center justify-center px-8 py-4 bg-navy-700 text-white font-bold rounded-lg hover:bg-navy-800 transition-colors text-lg md:text-xl"
          >
            <Phone className="mr-2" size={24} />
            Call the Clinic
          </a>
        </div>
      </section>

      {/* Secondary option – Enquiry form */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">Prefer to message us?</h2>
            <p className="text-gray-600 leading-relaxed">
              If you’d rather send us a message, complete the short enquiry form below and we’ll get back to you.
            </p>
          </div>

          <form
            name="booking-enquiry"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6 max-w-xl mx-auto"
          >
            <input type="hidden" name="form-name" value="booking-enquiry" />
            <p className="hidden">
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </p>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
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
              <label className="block text-sm font-medium text-gray-700 mb-1">What can we help you with? *</label>
              <textarea
                name="help"
                value={formData.help}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500 h-28"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">When would you ideally like to come in?</label>
              <input
                type="text"
                name="when"
                value={formData.when}
                onChange={handleChange}
                placeholder="e.g. weekday mornings, ASAP, a specific date"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-sky-500"
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-navy-700 text-white py-3 rounded-md font-semibold hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>
          </form>
        </div>
      </section>

      {/* Online booking option */}
      <section className="py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-4">Prefer to book online?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            If you already know what you’d like to book, you can book an appointment online at a time that suits you.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy-700 text-navy-700 font-semibold rounded-lg hover:bg-navy-700 hover:text-white transition-colors"
          >
            <Calendar className="mr-2" size={20} />
            Book Online
          </a>
        </div>
      </section>

      {/* Final reassurance */}
      <section className="bg-navy-800 py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            Not sure what you need? That’s absolutely fine. Give us a call and we’ll talk things through with you.
          </p>
          <div className="mb-8">
            <a
              href={CLINIC_PHONE_TEL}
              className="text-2xl md:text-3xl font-bold text-white hover:text-sky-400 transition-colors"
            >
              {CLINIC_PHONE}
            </a>
          </div>
          <a
            href={CLINIC_PHONE_TEL}
            className="inline-flex items-center justify-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors text-lg"
          >
            <Phone className="mr-2" size={24} />
            Call the Clinic
          </a>
        </div>
      </section>
    </div>
  );
};

export default Booking;
