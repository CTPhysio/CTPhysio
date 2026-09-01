import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, RotateCw, Clock, Users, Calendar, ArrowRight } from 'lucide-react';

const BOOKING_URL = 'https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings';

// =================================================================
// TIMETABLE DATA — edit spaces / availability here
// =================================================================
type ClassSlot = {
  day: string;
  time: string;
  spaces: number;        // 0 = fully booked, positive number = spaces available
};

const classTimetable: ClassSlot[] = [
  { day: 'Monday', time: '6:30pm', spaces: 2 },
  { day: 'Monday', time: '7:30pm', spaces: 1 },
  { day: 'Wednesday', time: '6:30pm', spaces: 0 },
  { day: 'Wednesday', time: '7:30pm', spaces: 2 },
];
// =================================================================

const DiscoveryButton: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = '',
  children = 'Book a free 20-minute Discovery Visit',
}) => (
  <a
    href={BOOKING_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center w-full sm:w-auto sm:inline-flex px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-sky-500 text-white font-bold rounded-lg hover:bg-sky-600 transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2 className={`text-2xl md:text-4xl font-bold text-navy-700 mb-5 leading-tight ${className}`}>
    {children}
  </h2>
);

/* ---------- Five-station rotation diagram ---------- */
const stations = [
  { label: 'Station 1', pattern: 'Squat' },
  { label: 'Station 2', pattern: 'Hinge' },
  { label: 'Station 3', pattern: 'Push' },
  { label: 'Station 4', pattern: 'Pull' },
  { label: 'Station 5', pattern: 'Carry' },
];

const FiveStationDiagram: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-sm mx-auto" style={{ aspectRatio: '1 / 1' }}>
        <svg viewBox="0 0 300 300" className="w-full h-full" aria-hidden="true">
          <circle cx="150" cy="150" r="125" fill="none" stroke="#e0f2fe" strokeWidth="2" strokeDasharray="6 6" />
          <text x="150" y="142" textAnchor="middle" className="fill-navy-700" style={{ fontSize: '13px', fontWeight: 700 }}>7 min</text>
          <text x="150" y="160" textAnchor="middle" className="fill-navy-700" style={{ fontSize: '10px', fontWeight: 600 }}>per station</text>

          {(() => {
            const angleStep = 360 / stations.length;
            const startAngle = -90;
            return stations.map((s, i) => {
              const angle = ((startAngle + i * angleStep) * Math.PI) / 180;
              const cx = 150 + Math.cos(angle) * 125;
              const cy = 150 + Math.sin(angle) * 125;
              return (
                <g key={i}>
                  <circle cx={cx} cy={cy} r="40" fill="#2d416b" />
                  <text x={cx} y={cy - 4} textAnchor="middle" fill="white" style={{ fontSize: '11px', fontWeight: 700 }}>{s.label}</text>
                  <text x={cx} y={cy + 10} textAnchor="middle" fill="#7dd3fc" style={{ fontSize: '10px', fontWeight: 600 }}>{s.pattern}</text>
                </g>
              );
            });
          })()}

          {(() => {
            const angleStep = 360 / stations.length;
            const startAngle = -90;
            return stations.map((_, i) => {
              const a1 = ((startAngle + i * angleStep) * Math.PI) / 180;
              const a2 = ((startAngle + (i + 1) * angleStep) * Math.PI) / 180;
              const r = 125;
              const x1 = 150 + Math.cos(a1) * (r - 52);
              const y1 = 150 + Math.sin(a1) * (r - 52);
              const x2 = 150 + Math.cos(a2) * (r - 52);
              const y2 = 150 + Math.sin(a2) * (r - 52);
              return (
                <g key={`arrow-${i}`}>
                  <path
                    d={`M ${x1} ${y1} A ${r - 52} ${r - 52} 0 0 1 ${x2} ${y2}`}
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="2.5"
                    markerEnd="url(#arrowhead)"
                  />
                </g>
              );
            });
          })()}
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto">
              <polygon points="0 0, 6 3, 0 6" fill="#0ea5e9" />
            </marker>
          </defs>
        </svg>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-5 text-sm text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> Work
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-navy-300" /> Rest
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-navy-500" /> Repeat
        </span>
        <span className="flex items-center gap-1.5">
          <RotateCw size={14} className="text-sky-500" /> Rotate clockwise
        </span>
      </div>
    </div>
  );
};

/* ---------- 12-week progression timeline ---------- */
const progressionStages = [
  { label: 'Start', detail: 'Lighter resistance · 12–15 reps', sub: 'Learn the movement patterns' },
  { label: 'Progress', detail: 'Gradually increase resistance', sub: 'Build familiarity and confidence' },
  { label: 'Build', detail: 'More strength and confidence', sub: 'Comfortable with heavier loads' },
  { label: '12 weeks', detail: 'Heavier resistance · 3–6 reps', sub: 'Noticeably stronger' },
  { label: 'New block', detail: 'New movement patterns', sub: 'Progression starts again' },
];

const ProgressionTimeline: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-stretch gap-1.5 md:gap-0">
      {progressionStages.map((stage, i) => (
        <React.Fragment key={i}>
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-navy-100 p-4 md:p-5 text-center md:mx-1">
            <div className="inline-flex items-center justify-center w-9 h-9 bg-sky-100 rounded-full mb-2.5">
              <span className="text-sky-700 font-bold text-sm">{i + 1}</span>
            </div>
            <h4 className="font-bold text-navy-700 text-sm md:text-base mb-1">{stage.label}</h4>
            <p className="text-gray-600 text-xs md:text-sm leading-snug">{stage.detail}</p>
            <p className="text-gray-400 text-xs mt-1">{stage.sub}</p>
          </div>
          {i < progressionStages.length - 1 && (
            <div className="flex items-center justify-center py-0.5 md:py-0">
              <ArrowRight size={18} className="text-sky-400 rotate-90 md:rotate-0" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

/* ---------- Who it's for cards ---------- */
const audienceCards = [
  {
    title: "You've finished physiotherapy",
    body: "You've reached the point where you no longer need regular one-to-one treatment, but you want to continue building strength rather than being left to manage it all yourself.",
  },
  {
    title: "You're returning to strength training after an injury",
    body: "You may have an old injury or concerns about what your body can cope with. Exercises can be adapted to your current level and progressed as you get stronger.",
  },
  {
    title: "You want to support the activities you enjoy",
    body: "Strength training can complement activities such as cycling, running, rugby, football, tennis, and other sports and activities.",
  },
  {
    title: "You want structured strength training",
    body: "You know strength training is something you should be doing, but you know you're unlikely to stick with it if you're left to plan and motivate yourself at home or in a conventional gym.",
  },
];

/* ---------- Getting started steps ---------- */
const gettingStarted = [
  {
    num: '01',
    title: 'Book a free 20-minute Discovery Visit',
    body: "Come and look around the clinic, meet us and discuss what you are looking for from the classes. If booking online, you can add a note saying you're interested in the Strength & Rehab Classes. You can also contact the clinic by phone or email through the reception team.",
  },
  {
    num: '02',
    title: 'Check that the classes are right for you',
    body: "The Discovery Visit is used to discuss previous injuries, current ability, what you want to achieve, and whether the classes are appropriate. If they are, we'll help you choose a suitable class time. If you'd benefit from one-to-one physiotherapy first, we'll explain that and discuss the next step.",
  },
  {
    num: '03',
    title: 'Start at your own level',
    body: "There's no need to wait for the next 12-week block. We'll introduce you to the current movement patterns, find appropriate exercise variations and start progressing from your own level. You don't need to catch up with existing members.",
  },
];

/* ---------- FAQ ---------- */
const classFaqs = [
  {
    q: 'Do I need to have been a physiotherapy patient before?',
    a: "No. Many members are new to the clinic and have not been previous physiotherapy patients. Previous experience with the clinic isn't required.",
  },
  {
    q: 'Do I need experience with weights?',
    a: "No. Many members are new to strength training. Previous strength-training experience is not required, and there's no expectation that you already know what you're doing.",
  },
  {
    q: 'Can I join if I have an old injury?',
    a: "Yes. Exercises can be adapted to your current level, taking into account previous injuries, current symptoms or concerns, and your stage of progression.",
  },
  {
    q: 'Can I join part-way through a 12-week block?',
    a: "Yes. You don't need to wait for the next block. You'll be introduced to the current movement patterns and given appropriate exercise variations for your ability. You start from your own level and progress from there. You're not expected to catch up with everyone else.",
  },
  {
    q: 'What happens if I miss a class?',
    a: "If you need to miss a session, you can make it up in another class that week if there's a space available.",
  },
  {
    q: 'Can I attend more than one class per week?',
    a: "Your membership reserves your place in your chosen weekly class. If you'd like to attend more than once a week, get in touch and we can discuss availability.",
  },
  {
    q: 'What happens if I need one-to-one physiotherapy first?',
    a: "If, during your Discovery Visit, we think you'd benefit from one-to-one physiotherapy before joining the classes, we'll explain that and discuss the next step with you.",
  },
  {
    q: 'How many people are in each class?',
    a: "A maximum of five participants per class.",
  },
  {
    q: 'How do I cancel my membership?',
    a: "Membership is rolling monthly with one month's notice to cancel.",
  },
];

const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="max-w-2xl mx-auto divide-y divide-gray-100">
      {classFaqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index}>
            <button
              className="w-full py-4 flex items-center justify-between text-left gap-4 group"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className={`font-medium text-sm md:text-base transition-colors duration-200 ${isOpen ? 'text-sky-600' : 'text-navy-700 group-hover:text-sky-600'}`}>
                {faq.q}
              </span>
              <ChevronDown
                size={16}
                className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

/* =============================================================== */
/* MAIN PAGE                                                       */
/* =============================================================== */
const StrengthRehabClasses: React.FC = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]');
    const prevDescContent = prevDesc?.getAttribute('content');

    document.title = 'Strength & Rehab Classes in Birmingham | Chris Tiley Physiotherapy';
    if (prevDesc) {
      prevDesc.setAttribute('content', 'Small-group strength classes in Harborne, Birmingham, led by physiotherapists and sports therapists. Build strength progressively with individual guidance.');
    }

    return () => {
      document.title = prevTitle;
      if (prevDesc && prevDescContent) {
        prevDesc.setAttribute('content', prevDescContent);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ---- 1. HERO ---- */}
      <section className="relative bg-navy-800 rounded-b-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-[1.625rem] sm:text-3xl md:text-5xl font-bold text-white mb-5 leading-snug">
              Strength &amp; Rehab Classes, led by physiotherapists and sports therapists
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-6 leading-relaxed max-w-2xl">
              Small-group strength classes for people who want to get stronger with the reassurance of having a physio or sports therapist there to guide them. With a maximum of five people in each class, exercises can be adapted to your ability, injury history and individual needs, while still helping you gradually progress and lift more.
            </p>
            <DiscoveryButton />
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              No obligation. Come and see the clinic, meet the team, and find out if the classes are right for you.
            </p>
          </div>
        </div>
      </section>

      {/* ---- 2. THE DIFFERENCE ---- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center max-w-6xl mx-auto">
            <div>
              <SectionHeading>Strength training with the right support</SectionHeading>
              <ul className="space-y-2.5 mb-2">
                {[
                  'A maximum of five participants in each class',
                  "There's no expectation that you already know what you're doing",
                  "You don't need to plan your own strength programme",
                  'A physiotherapist or sports therapist is present throughout',
                  'Exercises are adapted to your ability, experience and previous injuries',
                  'You are encouraged to progress, but progression isn\'t rushed',
                  'The small group creates a friendly, familiar atmosphere',
                  'Many members continue attending for years',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-navy-50 rounded-2xl p-6 md:p-10 border border-navy-100">
                <blockquote className="text-lg md:text-2xl font-semibold text-navy-700 leading-relaxed">
                  &ldquo;We won&rsquo;t force you to do something you&rsquo;re not ready for, but we will help you gradually become capable of doing more.&rdquo;
                </blockquote>
              </div>
              <div className="mt-5 rounded-2xl border-2 border-dashed border-navy-100 bg-gray-50 flex items-center justify-center text-gray-400 text-sm py-10">
                <span>Photograph of the clinic space to be added</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 3. WHO ARE THE CLASSES FOR? ---- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading className="text-center mb-3">Who are the classes for?</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            The classes suit a range of people, and many members are new to strength training. Previous experience isn't required, and you don't need to have been a previous physiotherapy patient at the clinic.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {audienceCards.map((card, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 max-w-3xl mx-auto text-center leading-relaxed">
            Some people also use strength training as part of maintaining muscle and bone strength as they get older. A separate Over 60s Strength Classes page will be available in future.
          </p>
        </div>
      </section>

      {/* ---- 4. WHAT HAPPENS DURING A CLASS ---- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading className="text-center mb-8">What happens during a class?</SectionHeading>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Each class lasts approximately one hour. The session is organised around five different movement patterns. One person starts at each station, so everyone is working on a different movement pattern at the same time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Each station lasts approximately seven minutes. During that time you perform several sets of your exercise, resting between sets. When the seven minutes are finished, everyone rotates clockwise to the next station. By the end of the session, everyone has worked through all five movement patterns.
              </p>
              <div className="bg-sky-50 rounded-lg p-5 border border-sky-100">
                <p className="text-gray-700 leading-relaxed">
                  The aim isn&rsquo;t to keep moving for seven minutes without stopping. You complete your sets, take the rest you need and then repeat before moving on to the next station.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The pattern for each session is: <span className="font-semibold text-navy-700">Work &rarr; Rest &rarr; Repeat &rarr; Rotate</span>.
              </p>
            </div>
            <div>
              <FiveStationDiagram />
              <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                Movement patterns shown are illustrative. The specific exercises change between 12-week blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 5. EVERYONE WORKS AT THEIR OWN LEVEL ---- */}
      <section className="py-12 md:py-20 bg-navy-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <SectionHeading>Everyone works at their own level</SectionHeading>
              <p className="text-gray-600 leading-relaxed mb-4">
                Everyone at a station is working on the same broad movement pattern, but they may be doing completely different exercises. For example, two people working on the same movement pattern might use different exercises or equipment because of:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'Strength',
                  'Experience',
                  'Previous injuries',
                  'Current symptoms or concerns',
                  'Mobility or other limitations',
                  'Their current stage of progression',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="text-sky-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white rounded-xl p-5 border border-navy-100">
                <blockquote className="text-base md:text-lg font-semibold text-navy-700 leading-relaxed">
                  &ldquo;The movement pattern is shared, but the exercise is tailored to the individual.&rdquo;
                </blockquote>
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Equipment commonly used in the classes includes dumbbells, kettlebells, Olympic bars, a cable machine, and resistance bands. The equipment is simply the tool. What matters is that the exercise is right for you.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {['Dumbbells', 'Kettlebells', 'Olympic bars', 'Cable machine', 'Resistance bands'].map((eq, i) => (
                  <div key={i} className="bg-white rounded-lg border border-navy-100 px-4 py-3 text-center text-sm font-medium text-navy-700">
                    {eq}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 6. HOW YOU BUILD STRENGTH OVER 12 WEEKS ---- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <SectionHeading className="text-center mb-3">How you build strength</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Classes run in 12-week blocks. Over the course of each block, resistance gradually increases and repetition ranges reduce as you get stronger. After 12 weeks, the programme changes to a different set of movement patterns and the progression starts again.
          </p>

          <ProgressionTimeline />

          <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
            <div className="bg-sky-50 rounded-xl p-5 md:p-8 border border-sky-100">
              <h3 className="font-bold text-navy-700 text-base md:text-lg mb-2.5">Joining part-way through a block</h3>
              <p className="text-gray-600 leading-relaxed mb-2.5 text-sm md:text-base">
                <span className="font-semibold text-navy-700">You don&rsquo;t need to wait for the next 12-week block.</span> If you join part-way through, you&rsquo;ll be introduced to the movement patterns and given appropriate exercise variations for your current ability.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                You start from your own level and progress from there. You are not expected to catch up with everyone else.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- 7. CURRENT CLASSES ---- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading className="text-center mb-3">Current classes</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Maximum five participants per class. There are currently classes on Monday and Wednesday evenings. You choose the particular day and time that works for you, and your place is then reserved in that class. Both days follow the same overall programme structure.
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-3 bg-navy-700 text-white text-sm font-semibold">
              <div className="px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-2"><Calendar size={16} /> Day</div>
              <div className="px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-2"><Clock size={16} /> Time</div>
              <div className="px-4 sm:px-5 py-3 sm:py-4 flex items-center gap-2"><Users size={16} /> Availability</div>
            </div>
            {classTimetable.map((slot, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50/60' : ''}`}>
                <div className="px-4 sm:px-5 py-3 sm:py-4 text-gray-700 font-medium text-sm sm:text-base">{slot.day}</div>
                <div className="px-4 sm:px-5 py-3 sm:py-4 text-gray-600 text-sm sm:text-base">{slot.time}</div>
                <div className="px-4 sm:px-5 py-3 sm:py-4">
                  {slot.spaces === 0 ? (
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-medium text-xs sm:text-sm">Fully booked</span>
                  ) : (
                    <span className={`inline-flex items-center px-3 py-1 rounded-full font-medium text-xs sm:text-sm ${slot.spaces === 1 ? 'bg-amber-50 text-amber-700' : 'bg-sky-50 text-sky-700'}`}>
                      {slot.spaces} {slot.spaces === 1 ? 'space' : 'spaces'} available
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400 text-center mt-4 leading-relaxed">
            This timetable is for information only. Class places are arranged through the clinic, not booked directly online.
          </p>

          <div className="text-center mt-8">
            <DiscoveryButton />
          </div>
        </div>
      </section>

      {/* ---- 8. MEMBERSHIP & PRICING ---- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <SectionHeading className="text-center mb-8">Membership &amp; pricing</SectionHeading>
          <div className="bg-navy-700 rounded-2xl p-6 md:p-12 text-center text-white">
            <p className="text-sm text-sky-300 font-semibold uppercase tracking-wide mb-2">By Direct Debit</p>
            <p className="text-4xl md:text-5xl font-bold mb-2">£65<span className="text-xl md:text-2xl font-medium text-gray-300"> / month</span></p>
            <p className="text-gray-300 max-w-xl mx-auto leading-relaxed mt-4 text-sm md:text-base">
              Your membership reserves your place in your chosen weekly class. This works out at around £15 per class on average across the year.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
            {[
              'Rolling monthly membership',
              "One month's notice to cancel",
              'If you miss a session, you can make it up in another class that week if there is a space available',
              'If we have to cancel a class, we will credit the £15 average session value',
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 text-center mt-5 max-w-2xl mx-auto leading-relaxed">
            The £15 figure is an average across the year, not the exact cost of an individual class.
          </p>
        </div>
      </section>

      {/* ---- 9. HOW TO GET STARTED ---- */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <SectionHeading className="text-center mb-8">How to get started</SectionHeading>
          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
            {gettingStarted.map((step, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
                <div className="text-3xl font-bold text-sky-300 mb-2.5">{step.num}</div>
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2.5 leading-snug">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <DiscoveryButton />
          </div>
        </div>
      </section>

      {/* ---- 10. FAQ ---- */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading className="text-center mb-6">Frequently asked questions</SectionHeading>
          <FAQAccordion />
        </div>
      </section>

      {/* ---- 11. FINAL CTA ---- */}
      <section className="py-12 md:py-20 bg-navy-800 text-white">
        <div className="container mx-auto text-center px-4 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">Ready to get stronger?</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Come and see the clinic, meet the team, and find out whether the Strength &amp; Rehab Classes are right for you. There&rsquo;s no pressure and no obligation, just an honest conversation about what you&rsquo;re looking for.
          </p>
          <DiscoveryButton />
          <p className="text-sm text-gray-400 mt-4">
            Or <Link to="/contact" className="text-sky-300 hover:text-sky-200 underline">get in touch</Link> with the reception team by phone or email.
          </p>
        </div>
      </section>
    </div>
  );
};

export default StrengthRehabClasses;
