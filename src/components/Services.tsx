import React from 'react';
import { Activity, Dumbbell, Users, CircleDot, ArrowRight, Target } from 'lucide-react';
import PainPoints from './PainPoints';
import GoogleReviewsSlider from './GoogleReviewsSlider';

const Services: React.FC = () => {
  const services = [
    {
      title: "Physiotherapy",
      icon: Activity,
      description: "Expert physiotherapy to help you move well, recover from injury, and build confidence in your body again.",
      image: "https://lh3.googleusercontent.com/p/AF1QipNUIFWtazHZCfcGL_0SirdXWy2s-d-xG-4HPuGS=s680-w680-h510-rw",
      link: "https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service",
      buttonText: "Call the Clinic",
      pricing: [
        { name: "Free Discovery Visit", price: "£0" },
        { name: "Initial Assessment (60 mins)", price: "£80" },
        { name: "Follow-Up Appointment (45 mins)", price: "£60" },
        { name: "Block of 5 Follow-Ups", price: "£275" },
        { name: "Block of 10 Follow-Ups", price: "£500" }
      ]
    },
    {
      title: "Strength Training",
      icon: Dumbbell,
      description: "Clinician-led strength training to build physical resilience, support your recovery, and help you stay capable long term.",
      image: "https://lh3.googleusercontent.com/p/AF1QipP4v9ya-xB_2jtMgpyz5gjO0ONL6mcdIUcvyVwC=s680-w680-h510-rw",
      link: "https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service",
      buttonText: "Call the Clinic",
      pricing: [
        { name: "Initial Assessment (60 mins)", price: "£80" },
        { name: "Follow-Up Session (45 mins)", price: "£60" },
        { name: "Block of 5 Sessions", price: "£275" },
        { name: "Block of 10 Sessions", price: "£500" }
      ]
    },
    {
      title: "Strength & Rehab Classes",
      icon: Users,
      description: "Small group sessions designed for active adults who want to build strength, move well, and stay independent.",
      image: "/dhdnevertoooldtoliftimage.webp",
      link: "https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service",
      buttonText: "Call the Clinic",
      pricing: [
        { name: "Block of 12 Classes", price: "£225" },
        { name: "Monthly Direct Debit", price: "£65/month" }
      ]
    }
  ];

  const steps = [
    {
      icon: CircleDot,
      title: "Assessment",
      description: "A thorough assessment to understand your condition and what's really going on"
    },
    {
      icon: Target,
      title: "Your Plan",
      description: "A strength-based programme built around your goals and lifestyle"
    },
    {
      icon: ArrowRight,
      title: "Progress",
      description: "Guided support to help you stay active, confident, and independent"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-navy-800">
        <div className="absolute inset-0">
          <img 
            src="https://www.medigap.com/wp-content/uploads/2020/04/exercise-routine-for-seniors.jpg"
            alt="Seniors doing exercise routine"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Physiotherapy For Your Active Life
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              At Chris Tiley Physiotherapy, we help you reduce pain, regain strength, and return to the activities that matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col">
                  {/* Service Image */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-300 ${
                        service.title === "Physiotherapy" ? "object-bottom" : ""
                      }`}
                      onError={(e) => {
                        console.log(`${service.title} image failed to load:`, service.image);
                        e.currentTarget.src = 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg';
                      }}
                    />
                  </div>
                  
                  <div className="p-8 flex-grow">
                    <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-6">
                      <Icon size={32} className="text-sky-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy-700 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.pricing.map((price, i) => (
                        <div key={i} className="flex justify-between items-center">
                          <span className="text-gray-700">{price.name}</span>
                          <span className="font-semibold text-navy-700">{price.price}</span>
                        </div>
                      ))}
                    </div>

                    {service.title === "Strength & Rehab Classes" && (
                      <p className="text-sm text-gray-600 mb-6 italic">
                        *If you're interested in our strength classes, please book a free discovery visit first so we can discuss the best option for you.
                      </p>
                    )}
                  </div>
                  
                  <div className="p-8 pt-0">
                    <a
                      href="tel:01215170806"
                      className="block w-full text-center px-6 py-3 bg-navy-700 text-white font-semibold rounded-lg hover:bg-navy-800 transition-colors"
                    >
                      {service.buttonText}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-16 bg-navy-700 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Your Recovery Journey
          </h2>
          
          <div className="flex justify-center items-center max-w-5xl mx-auto relative">
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-sky-500 transform -translate-y-1/2"></div>
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-navy-800 rounded-full flex items-center justify-center mb-4 border-4 border-sky-500">
                      <Icon size={24} className="text-sky-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
            Hear From Our Patients
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Over 100 people across Harborne and Birmingham have worked with us to get back to the things they love, from returning to the gym to walking confidently again.
          </p>
        </div>
      </section>

      <GoogleReviewsSlider />

      {/* Pain Points Section (only shown on physiotherapy page) */}
      {window.location.pathname === '/services/physiotherapy' && <PainPoints />}
    </div>
  );
};

export default Services;