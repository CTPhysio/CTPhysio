import React, { useState } from 'react';
import { Phone, Mail, MapPin, CheckCircle, AlertCircle } from 'lucide-react';
import GoogleMap from './GoogleMap';

const Contact: React.FC = () => {
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
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmSubmission = async () => {
    setShowConfirmation(false);
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Encode form data for Netlify Forms
      const encode = (data: Record<string, string>) => {
        return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
      };

      const response = await fetch("/", {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          "firstName": formData.firstName,
          "lastName": formData.lastName,
          "email": formData.email,
          "phone": formData.phone,
          "message": formData.message,
          "referralSource": formData.referralSource
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
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
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cancelSubmission = () => {
    setShowConfirmation(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetStatus = () => {
    setSubmitStatus('idle');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] bg-navy-800">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg"
            alt="Path to a stronger future"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Find Your Path to a Stronger Future
            </h1>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-navy-700 mb-4">Confirm Your Enquiry</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to send this enquiry to Chris Tiley Physiotherapy?
            </p>
            <div className="flex gap-4">
              <button
                onClick={confirmSubmission}
                className="flex-1 bg-navy-700 text-white py-2 px-4 rounded-md font-semibold hover:bg-navy-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Yes, Send Enquiry'}
              </button>
              <button
                onClick={cancelSubmission}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md font-semibold hover:bg-gray-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success/Error Messages */}
      {submitStatus !== 'idle' && (
        <div className="fixed top-4 right-4 z-50 max-w-md">
          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-lg">
              <div className="flex items-start">
                <CheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h4 className="font-semibold text-green-800">Thanks for getting in touch!</h4>
                  <p className="text-green-700 text-sm mt-1">Chris will reply soon.</p>
                </div>
                <button
                  onClick={resetStatus}
                  className="text-green-500 hover:text-green-700 ml-2"
                >
                  ×
                </button>
              </div>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg">
              <div className="flex items-start">
                <AlertCircle className="text-red-500 mt-1 mr-3 flex-shrink-0" size={20} />
                <div className="flex-1">
                  <h4 className="font-semibold text-red-800">Submission Failed</h4>
                  <p className="text-red-700 text-sm mt-1">
                    Please try again or call us directly at 0121 517 0806.
                  </p>
                </div>
                <button
                  onClick={resetStatus}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-navy-700 mb-6">Make An Enquiry</h2>
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">How can I help? *</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about me? *</label>
                    <input 
                      type="text" 
                      name="referralSource"
                      value={formData.referralSource}
                      onChange={handleChange}
                      placeholder="Google, doctor, gym... (be specific so we can thank them!)"
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

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <a
                    href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors text-lg"
                  >
                    Book Online
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="text-sky-500 mt-1 mr-3" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p>0121 517 0806</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="text-sky-500 mt-1 mr-3" />
                      <div>
                        <p className="font-semibold">Email</p>
                        <p>info@christileyphysiotherapy.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="text-sky-500 mt-1 mr-3" />
                      <div>
                        <p className="font-semibold">Address</p>
                        <p>24 Earls Ct Rd, Harborne, Birmingham B17 9AH</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy-700 mb-4">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>8am - 6pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-navy-700 mb-6 text-center">Find Us</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <GoogleMap className="w-full h-[400px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;