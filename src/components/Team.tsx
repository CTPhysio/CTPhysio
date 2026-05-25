import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, TrendingUp, Heart, CheckCircle, ChevronLeft, ChevronRight, Star, Phone } from 'lucide-react';

const approachCards = [
  {
    icon: BookOpen,
    title: 'Evidence-Based Care',
    description: 'Treatment and rehabilitation based on current evidence and best practice.',
  },
  {
    icon: Target,
    title: 'Personalised Rehabilitation',
    description: 'Every recovery plan is tailored to the individual and their goals.',
  },
  {
    icon: TrendingUp,
    title: 'Strength & Confidence',
    description: 'We help people feel stronger, more capable, and confident in movement again.',
  },
  {
    icon: Heart,
    title: 'Long-Term Results',
    description: 'Our focus is helping people stay active and independent for the long term.',
  },
];

const trustPoints = [
  'Personalised one-to-one care',
  'Clear explanations and realistic plans',
  'Strength-focused rehabilitation',
  'Friendly and supportive environment',
  'Evidence-based treatment',
  'Focus on long-term recovery, not quick fixes',
];

const testimonials = [
  {
    text: "Chris has been absolutely fantastic. His approach is patient, thorough, and he really listens. I came in with a knee problem that had been troubling me for months, and after just a few sessions I'm back to running.",
    author: 'Sarah M.',
    rating: 5,
  },
  {
    text: "The treatment I received was excellent. Chris explained everything clearly and gave me a realistic plan. I feel so much stronger now and more confident in my movement.",
    author: 'David T.',
    rating: 5,
  },
  {
    text: "Brilliant clinic. Warm, professional and genuinely focused on helping you recover for the long term, not just a quick fix. Cannot recommend highly enough.",
    author: 'Helen R.',
    rating: 5,
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const Team: React.FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const heroSection = useInView(0.1);
  const approachSection = useInView(0.1);
  const teamSection = useInView(0.1);
  const trustSection = useInView(0.1);
  const ctaSection = useInView(0.1);

  return (
    <div className="min-h-screen bg-white">

      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(56,189,248,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 20%, rgba(148,163,184,0.3) 0%, transparent 50%)',
            }}
          />
        </div>

        <div
          ref={heroSection.ref}
          className={`relative container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 transition-all duration-1000 ${heroSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-sky-500/20 text-sky-300 text-xs sm:text-sm font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 border border-sky-500/30">
              Chris Tiley Physiotherapy · Harborne, Birmingham
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Helping You Move Better, Feel Stronger, and Stay Active
            </h1>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto">
              At Chris Tiley Physiotherapy, we combine evidence-based physiotherapy with a personalised, practical approach to recovery — helping you move confidently and return to the activities that matter most.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                Book an Appointment
              </a>
              <a
                href="#meet-the-team"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                Meet the Team
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </section>

      {/* SECTION 2 — OUR APPROACH */}
      <section className="py-10 md:py-20 bg-white">
        <div
          ref={approachSection.ref}
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl transition-all duration-1000 ${approachSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3">Our Approach</h2>
            <p className="text-sm sm:text-lg text-slate-500 leading-relaxed">
              We believe physiotherapy should focus on more than short-term pain relief. Our aim is to help people build confidence, strength, and long-term resilience.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {approachCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="group bg-white border border-slate-100 rounded-2xl p-5 md:p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-sky-50 rounded-xl mb-4 group-hover:bg-sky-100 transition-colors duration-300">
                    <Icon size={20} className="text-sky-500" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-base md:text-lg mb-1.5">{card.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — MEET THE TEAM */}
      <section id="meet-the-team" className="py-10 md:py-20 bg-slate-50">
        <div
          ref={teamSection.ref}
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl transition-all duration-1000 ${teamSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3">Meet the Team</h2>
            <p className="text-sm sm:text-lg text-slate-500 leading-relaxed">
              Experienced, qualified, and genuinely passionate about helping you recover and stay active.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 md:gap-8 max-w-5xl mx-auto items-stretch">

            {/* Chris */}
            <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(15,23,42,0.07)] border border-slate-100 overflow-hidden hover:shadow-[0_4px_28px_rgba(15,23,42,0.11)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
              <div className="bg-gradient-to-br from-sky-50 to-slate-100 px-6 pt-8 pb-0 flex justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-[0_4px_20px_rgba(15,23,42,0.14)] overflow-hidden">
                  <img
                    src="/Headshot_2022.png"
                    alt="Chris Tiley - Founder & Physiotherapist"
                    style={{
                      width: '100%',
                      height: '130%',
                      objectFit: 'cover',
                      objectPosition: 'center 5%',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">Chris Tiley</h3>
                <p className="text-sky-500 font-semibold text-xs uppercase tracking-wider mb-3">Founder & Physiotherapist</p>
                <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                  Chris is a chartered physiotherapist with over 15 years of experience across the NHS, rehabilitation services, private practice, and elite sport, including work with Para Snowsport GB.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm flex-1">
                  He has a particular interest in helping active adults and older people move confidently, build strength, and stay independent. Chris combines evidence-based physiotherapy with strength-focused rehabilitation to help people recover from injury, manage pain, and return to the activities that matter most.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Strength Rehabilitation', 'Active Ageing', 'Sports Injury', 'Persistent Pain'].map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full border border-sky-100 hover:bg-sky-100 hover:border-sky-200 transition-colors duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Kate Evans */}
            <div className="bg-white rounded-2xl shadow-[0_2px_20px_rgba(15,23,42,0.07)] border border-slate-100 overflow-hidden hover:shadow-[0_4px_28px_rgba(15,23,42,0.11)] transition-all duration-300 hover:-translate-y-0.5 flex flex-col">
              <div className="bg-gradient-to-br from-sky-50 to-slate-100 px-6 pt-8 pb-0 flex justify-center">
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-white shadow-[0_4px_20px_rgba(15,23,42,0.14)] overflow-hidden">
                  <img
                    src="/1000083369.jpg"
                    alt="Kate Evans - Physiotherapist"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">Kate Evans</h3>
                <p className="text-sky-500 font-semibold text-xs uppercase tracking-wider mb-3">Physiotherapist</p>
                <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                  Kate is a chartered physiotherapist and former semi-professional footballer with experience across the NHS, private sports injury clinics, and pitch-side care with Wolverhampton Wanderers.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4 text-sm flex-1">
                  She has a particular interest in female health, sports rehabilitation, and helping people return confidently to sport, exercise, and everyday life following injury. Drawing on her background in elite sport, Kate combines evidence-based treatment with a personalised approach to ensure each patient feels supported throughout their recovery.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {['Female Health', 'Sports Rehabilitation', 'Return to Sport', 'Injury Recovery'].map(tag => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-sky-50 text-sky-700 text-xs font-medium rounded-full border border-sky-100 hover:bg-sky-100 hover:border-sky-200 transition-colors duration-200 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4 — WHY PATIENTS CHOOSE US */}
      <section className="py-10 md:py-16 bg-white">
        <div
          ref={trustSection.ref}
          className={`container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl transition-all duration-1000 ${trustSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-7 md:mb-10">
              <h2 className="text-2xl md:text-4xl font-bold text-slate-800 mb-3">
                Why Patients Choose Chris Tiley Physiotherapy
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-start">
              {/* Trust points */}
              <div className="space-y-2">
                {trustPoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-slate-50 rounded-xl hover:bg-sky-50 transition-colors duration-300"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <CheckCircle size={18} className="text-sky-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium text-sm sm:text-base">{point}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial carousel */}
              <div className="bg-slate-50/80 rounded-2xl p-6 sm:p-9 border border-slate-100 relative shadow-[0_2px_16px_rgba(15,23,42,0.06)]">
                <div className="absolute top-4 left-5 text-sky-200 select-none pointer-events-none" style={{ fontSize: '4rem', lineHeight: 1, fontFamily: 'Georgia, serif' }}>
                  "
                </div>
                <div className="flex gap-1 mb-4 relative z-10">
                  {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <blockquote className="text-slate-600 leading-relaxed italic mb-4 text-sm sm:text-base relative z-10 min-h-[80px]">
                  {testimonials[testimonialIndex].text}
                </blockquote>
                <p className="font-semibold text-slate-800 text-sm sm:text-base relative z-10">{testimonials[testimonialIndex].author}</p>

                <div className="flex gap-2 mt-5 relative z-10">
                  <button
                    onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
                    className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-500 transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
                    className="p-2.5 rounded-lg bg-white border border-slate-200 hover:border-sky-300 hover:text-sky-500 transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <div className="flex items-center gap-1.5 ml-2">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setTestimonialIndex(i)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === testimonialIndex ? 'bg-sky-500' : 'bg-slate-300'}`}
                        aria-label={`Testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="py-10 md:py-16 bg-gradient-to-br from-slate-800 to-sky-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 70% 50%, rgba(56,189,248,0.5) 0%, transparent 60%)',
            }}
          />
        </div>
        <div
          ref={ctaSection.ref}
          className={`relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl transition-all duration-1000 ${ctaSection.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Ready to Get Back to Doing What You Love?
            </h2>
            <p className="text-sm md:text-lg text-slate-300 mb-6 leading-relaxed">
              Whether you're recovering from injury, managing ongoing pain, or looking to stay active and independent, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings#service"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
              >
                Book Your Appointment
              </a>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 backdrop-blur-sm"
              >
                <Phone size={16} className="mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
