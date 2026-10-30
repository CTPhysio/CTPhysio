import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, Users, CircleDot, ArrowRight, Target } from 'lucide-react';
import PainPoints from './PainPoints';
import { lazy, Suspense } from 'react';
const GoogleReviewsSlider = lazy(() => import('./GoogleReviewsSlider'));
import Seo from './Seo';

const Services: React.FC<{ prerender?: boolean }> = ({ prerender = false }) => {
  const services = [
    {
      title: "Physiotherapy",
      icon: Activity,
      description: "Assessment and treatment for back pain, joint problems, sports injuries and other musculoskeletal conditions, with a plan tailored to your goals.",
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
      title: "One-to-One Strength & Rehabilitation",
      icon: Dumbbell,
      description: "Individual support to rebuild strength, improve confidence and return to the activities that matter to you, whether you are recovering from injury or want to become more capable.",
      image: "https://lh3.googleusercontent.com/p/AF1QipP4v9ya-xB_2jtMgpyz5gjO0ONL6mcdIUcvyVwC=s680-w680-h510-rw",
      link: "https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service",
      buttonText: "Call the Clinic",
      pricing: [
        { name: "Free Discovery Visit", price: "£0" },
        { name: "Initial Assessment (60 mins)", price: "£80" },
        { name: "Follow-Up Session (45 mins)", price: "£60" },
        { name: "Block of 5 Sessions", price: "£275" },
        { name: "Block of 10 Sessions", price: "£500" }
      ]
    },
    {
      title: "Strength & Rehab Classes",
      icon: Users,
      description: "Supportive, structured strength training to help you get stronger and stay active, including dedicated Over 60s classes.",
      image: "/dhdnevertoooldtoliftimage.webp",
      link: "https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service",
      buttonText: "Call the Clinic",
      pricing: [
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
      <Seo
        title="Physiotherapy Services in Harborne, Birmingham | Chris Tiley"
        description="Physiotherapy, injury rehabilitation and strength training in Harborne, Birmingham. Personalised support to reduce pain, recover and stay active."
        canonicalPath="/services"
      />
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
              Physiotherapy Services in Harborne, Birmingham
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Helping you recover from injury, manage pain and build the strength to keep doing the things you enjoy.
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
                    {service.title === "Strength & Rehab Classes" && (
                      <a
                        href="/strength-rehab-classes"
                        className="block text-sm font-semibold text-sky-600 hover:text-sky-700 mb-4"
                      >
                        Learn more about Strength &amp; Rehab Classes &rarr;
                      </a>
                    )}
                    {service.title === "Strength & Rehab Classes" && (
                      <p className="text-sm text-gray-600 mb-2">
                        We also run <Link to="/over-60s-strength-classes" className="text-sky-600 hover:text-sky-700 underline">Over 60s Strength Classes</Link> for people who want a class focused on this stage of life.
                      </p>
                    )}
                  </div>
                  
                  <div className="p-8 pt-0 space-y-3">
                    {service.title !== "Strength & Rehab Classes" && (
                      <a href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service" className="block w-full text-center px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors">Book Online</a>
                    )}
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

      {/* Our approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">More than just getting out of pain</h2>
          <p className="text-lg text-gray-700 mb-4">Physiotherapy is not only about relieving symptoms. It is about helping you get back to the things you enjoy and building the confidence and physical capacity to keep doing them.</p>
          <p className="text-lg text-gray-700 mb-4">At Chris Tiley Physiotherapy, we combine assessment, advice, exercise and progressive strength training to help you make meaningful progress.</p>
          <p className="text-lg text-gray-700">We will not push you into something you are not ready for, but we will help you gradually become capable of doing more.</p>
          <p className="mt-5 text-gray-700">Meet <Link to="/about" className="text-sky-700 underline">our physiotherapy team</Link> and learn more about the people who will support you.</p>
        </div>
      </section>

      {/* Common Problems We Help With */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 text-center mb-4">
              Common Problems We Help With
            </h2>
            <p className="text-lg text-gray-600 text-center mb-10 max-w-2xl mx-auto">
              Not sure where to start? Learn more about how we approach some of the most common conditions we treat.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              <a href="/treatments/back-pain" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Lower Back Pain</a>
              <a href="/treatments/shoulder-pain" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Shoulder Pain</a>
              <a href="/treatments/knee-pain" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Knee Pain</a>
              <a href="/treatments/neck-pain" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Neck Pain</a>
              <a href="/treatments/hip-pain" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Hip Pain</a>
              <a href="/treatments/sciatica" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Sciatica</a>
              <a href="/treatments/balance-falls" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Balance &amp; Falls</a>
              <a href="/treatments/surgical-rehab" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Surgical Rehabilitation</a>
              <a href="/treatments/deconditioning" className="block px-4 py-3 md:px-5 md:py-4 bg-white rounded-xl shadow hover:shadow-md text-navy-700 font-semibold text-center transition-shadow">Muscle Weakness &amp; Deconditioning</a>
            </div>
          </div>
        </div>
      </section>

      {/* Practical questions for people considering an appointment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What conditions can you help with?</h3><p className="text-gray-700">We see people with back, neck, knee, hip and shoulder problems, sports injuries, difficulties with balance and rehabilitation after surgery. We will discuss your symptoms and goals to establish whether physiotherapy is appropriate.</p></div>
            <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need to be sporty or fit to attend?</h3><p className="text-gray-700">Not at all. We help people with a wide range of activity levels, from those returning to sport to those who want to feel stronger and more confident in everyday life.</p></div>
            <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What happens at my first physiotherapy appointment?</h3><p className="text-gray-700">Your initial appointment lasts 60 minutes. We will talk through your symptoms and goals, assess what is relevant and discuss a plan for moving forward.</p></div>
            <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do you offer strength training for older adults?</h3><p className="text-gray-700">Yes. Our <Link to="/over-60s-strength-classes" className="text-sky-700 underline">Over 60s Strength Classes</Link> are designed to help people build strength, balance and confidence. We offer a free discovery visit to discuss whether a class is suitable.</p></div>
            <div><h3 className="text-xl font-semibold text-navy-700 mb-2">How much does physiotherapy cost?</h3><p className="text-gray-700">An initial 60-minute assessment costs £80 and a 45-minute follow-up costs £60. Packages of five follow-ups (£275) and ten follow-ups (£500) are also available.</p></div>
            <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Where is the clinic?</h3><p className="text-gray-700">Chris Tiley Physiotherapy is based in Harborne, Birmingham. <Link to="/contact" className="text-sky-700 underline">Find our location and contact details</Link> before your visit.</p></div>
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

      {!prerender && <Suspense fallback={null}><GoogleReviewsSlider /></Suspense>}

      {/* Pain Points Section (only shown on physiotherapy page) */}
      {!prerender && typeof window !== 'undefined' && window.location.pathname === '/services/physiotherapy' && <PainPoints />}
    </div>
  );
};

export default Services;