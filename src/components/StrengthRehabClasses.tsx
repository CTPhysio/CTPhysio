import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, RotateCw, Calendar, Clock, Users, ArrowRight, Dumbbell } from 'lucide-react';

const BOOKING_URL = 'https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings';

type ClassSlot = {
  day: string;
  time: string;
  spaces: number;
};

const classTimetable: ClassSlot[] = [
  { day: 'Monday', time: '6:30pm', spaces: 2 },
  { day: 'Monday', time: '7:30pm', spaces: 1 },
  { day: 'Wednesday', time: '6:30pm', spaces: 0 },
  { day: 'Wednesday', time: '7:30pm', spaces: 2 },
];

const DiscoveryButton: React.FC<{ className?: string; children?: React.ReactNode }> = ({
  className = '',
  children = 'Book a free 20-minute Discovery Visit',
}) => (
  <a
    href={BOOKING_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center px-7 py-3.5 text-sm sm:text-base font-semibold rounded-md shadow-sm text-white bg-navy-700 hover:bg-navy-800 transition-colors duration-200 ${className}`}
  >
    {children}
  </a>
);

const SectionHeading: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => (
  <h2 className={`text-2xl md:text-4xl font-bold text-navy-700 mb-4 leading-tight ${className}`}>
    {children}
  </h2>
);

const stations = [
  { label: 'Station 1', pattern: 'Squat' },
  { label: 'Station 2', pattern: 'Hinge' },
  { label: 'Station 3', pattern: 'Push' },
  { label: 'Station 4', pattern: 'Pull' },
  { label: 'Station 5', pattern: 'Carry' },
];

const FiveStationDiagram: React.FC = () => (
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
                <path d={`M ${x1} ${y1} A ${r - 52} ${r - 52} 0 0 1 ${x2} ${y2}`} fill="none" stroke="#0ea5e9" strokeWidth="2.5" markerEnd="url(#arrowhead)" />
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
      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-sky-500" /> Work</span>
      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-navy-300" /> Rest</span>
      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-navy-500" /> Repeat</span>
      <span className="flex items-center gap-1.5"><RotateCw size={14} className="text-sky-500" /> Rotate clockwise</span>
    </div>
  </div>
);

const progressionStages = [
  { label: 'Start', detail: 'Lighter resistance, 12 to 15 reps', sub: 'Learn the movement patterns' },
  { label: 'Progress', detail: 'Gradually increase resistance', sub: 'Build familiarity and confidence' },
  { label: 'Build', detail: 'More strength and confidence', sub: 'Comfortable with heavier loads' },
  { label: '12 weeks', detail: 'Heavier resistance, 3 to 6 reps', sub: 'Noticeably stronger' },
  { label: 'New block', detail: 'New movement patterns', sub: 'Progression starts again' },
];

const audienceCards = [
  {
    title: "You've finished physiotherapy",
    body: "You no longer need regular one-to-one treatment, but you want to keep building strength rather than managing it all on your own.",
  },
  {
    title: "You're returning to strength training after an injury",
    body: "You may have an old injury or concerns about what your body can cope with. Exercises can be adapted to your current level and progressed as you get stronger.",
  },
  {
    title: "You want to support the activities you enjoy",
    body: "Strength training complements activities like cycling, running, rugby, football, tennis and other sports.",
  },
  {
    title: "You want structured strength training",
    body: "You know strength training is something you should be doing, but you're unlikely to stick with it if you're left to plan it yourself at home or in a conventional gym.",
  },
];

const gettingStarted = [
  {
    num: '01',
    title: 'Book a free 20-minute Discovery Visit',
    body: "Come and look around the clinic, meet us and discuss what you're looking for from the classes. If booking online, you can add a note saying you're interested in the Strength & Rehab Classes. You can also contact the reception team by phone or email.",
  },
  {
    num: '02',
    title: 'Check that the classes are right for you',
    body: "We'll discuss previous injuries, current ability, what you want to achieve, and whether the classes are appropriate. If they are, we'll help you choose a suitable class time. If you'd benefit from one-to-one physiotherapy first, we'll explain that with you.",
  },
  {
    num: '03',
    title: 'Start at your own level',
    body: "There's no need to wait for the next 12-week block. We'll introduce you to the current movement patterns, find appropriate exercise variations and start progressing from your own level. You don't need to catch up with existing members.",
  },
];

const classFaqs = [
  { q: 'Do I need to have been a physiotherapy patient before?', a: "No. Many members are new to the clinic and haven't been previous physiotherapy patients." },
  { q: 'Do I need experience with weights?', a: "No. Many members are new to strength training, and there's no expectation that you already know what you're doing." },
  { q: 'Can I join if I have an old injury?', a: "Yes. Exercises can be adapted to your current level, taking into account previous injuries, current symptoms and your stage of progression." },
  { q: 'Can I join part-way through a 12-week block?', a: "Yes. You don't need to wait for the next block. You'll be introduced to the current movement patterns and given appropriate exercise variations for your ability. You start from your own level and progress from there." },
  { q: 'What happens if I miss a class?', a: "If you need to miss a session, you can make it up in another class that week if there's a space available." },
  { q: 'Can I attend more than one class per week?', a: "Your membership reserves your place in your chosen weekly class. If you'd like to attend more than once a week, get in touch and we can discuss availability." },
  { q: 'What happens if I need one-to-one physiotherapy first?', a: "If we think you'd benefit from one-to-one physiotherapy before joining the classes, we'll explain that and discuss the next step with you." },
  { q: 'How many people are in each class?', a: "A maximum of five participants per class." },
  { q: 'How do I cancel my membership?', a: "Membership is rolling monthly with one month's notice to cancel." },
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
              <ChevronDown size={16} className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
              <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const StrengthRehabClasses: React.FC = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]');
    const prevDescContent = prevDesc?.getAttribute('content');
    document.title = 'Strength & Rehab Classes in Birmingham | Chris Tiley Physiotherapy';
    if (prevDesc) prevDesc.setAttribute('content', 'Small-group strength classes in Harborne, Birmingham, led by physiotherapists and sports therapists. Build strength progressively with individual guidance.');
    return () => {
      document.title = prevTitle;
      if (prevDesc && prevDescContent) prevDesc.setAttribute('content', prevDescContent);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative bg-navy-800 rounded-b-[60px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 to-navy-700" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug">
              Strength &amp; Rehab Classes, led by physiotherapists and sports therapists
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed max-w-2xl">
              Small-group strength classes for people who want to get stronger with the reassurance of having a physiotherapist or sports therapist there to guide them. With a maximum of five people in each class, exercises can be adapted to your ability, injury history and individual needs.
            </p>
            <DiscoveryButton />
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              No obligation. Come and see the clinic, meet the team, and find out if the classes are right for you.
            </p>
          </div>
        </div>
      </section>

      {/* TRAINING SPACE PHOTO + INTRO */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <SectionHeading>A proper strength-training space</SectionHeading>
              <p className="text-gray-600 leading-relaxed mb-4">
                Classes take place in our dedicated training area at the clinic, with a range of equipment that allows exercises to be adapted to different abilities and experience levels. It's a clinical environment, not a commercial gym, so the focus is on doing things correctly and progressing at the right pace.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a maximum of five people in each class, there's time to give everyone individual attention. You don't need to plan your own programme, and you don't need to already know what you're doing.
              </p>
            </div>
            <figure className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
              <img
                src="/IMG_5689.jpeg"
                alt="The strength and rehab training space at Chris Tiley Physiotherapy"
                className="block w-full aspect-[4/3] object-cover"
              />
              <figcaption className="bg-gray-50 px-4 py-3 text-sm text-gray-500 border-t border-gray-100">
                Our dedicated training space at the clinic in Harborne.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* WHO ARE THE CLASSES FOR? */}
      <section className="py-10 md:py-16 bg-gray-50 rounded-b-[40px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading className="text-center mb-3">Who are the classes for?</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            The classes suit a range of people, and many members are new to strength training. Previous experience isn't required, and you don't need to have been a physiotherapy patient at the clinic before.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {audienceCards.map((card, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6">
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{card.body}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 max-w-3xl mx-auto text-center leading-relaxed">
            Some people also use strength training to maintain muscle and bone strength as they get older. A separate Over 60s Strength Classes page will be available in future.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS DURING A CLASS */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading className="text-center mb-3">What happens during a class?</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Each class lasts approximately one hour. The session is organised around five different movement patterns, with one person starting at each station so everyone is working on a different pattern at the same time.
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Each station lasts approximately seven minutes. During that time you perform several sets of your exercise, resting between sets. When the seven minutes are finished, everyone rotates clockwise to the next station. By the end of the session, everyone has worked through all five movement patterns.
              </p>
              <div className="bg-sky-50 rounded-lg p-5 border border-sky-100 mb-4">
                <p className="text-gray-700 leading-relaxed">
                  The aim isn&rsquo;t to keep moving for seven minutes without stopping. You complete your sets, take the rest you need and then repeat before moving on to the next station.
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The pattern for each session is: <span className="font-semibold text-navy-700">Work, Rest, Repeat, Rotate</span>.
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

      {/* EVERYONE WORKS AT THEIR OWN LEVEL + EQUIPMENT */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <SectionHeading>Everyone works at their own level</SectionHeading>
              <p className="text-gray-600 leading-relaxed mb-4">
                Everyone at a station works on the same broad movement pattern, but they may be doing completely different exercises. Two people working on the same pattern might use different exercises or equipment because of differences in:
              </p>
              <ul className="space-y-2 mb-5">
                {['Strength', 'Experience', 'Previous injuries', 'Current symptoms or concerns', 'Mobility or other limitations', 'Current stage of progression'].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <blockquote className="text-base md:text-lg font-semibold text-navy-700 leading-relaxed border-l-3 border-sky-400 pl-4">
                &ldquo;The movement pattern is shared, but the exercise is tailored to the individual.&rdquo;
              </blockquote>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-5">
                Equipment commonly used in the classes includes dumbbells, kettlebells, Olympic bars, a cable machine and resistance bands. The equipment is simply the tool. What matters is that the exercise is right for you.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                {['Dumbbells', 'Kettlebells', 'Olympic bars', 'Cable machine', 'Resistance bands'].map((eq, i) => (
                  <div key={i} className="bg-white rounded-lg border border-gray-100 px-4 py-3 text-center text-sm font-medium text-navy-700">
                    {eq}
                  </div>
                ))}
              </div>
              <figure className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                <img
                  src="/IMG_5688.jpeg"
                  alt="Strength training equipment in the clinic"
                  className="block w-full aspect-[4/3] object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* HOW YOU BUILD STRENGTH */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading className="text-center mb-3">How you build strength</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Classes run in 12-week blocks. Over the course of each block, resistance gradually increases and repetition ranges reduce as you get stronger. After 12 weeks, the programme changes to a different set of movement patterns and the progression starts again.
          </p>

          <div className="flex flex-col md:flex-row items-stretch gap-1.5 md:gap-0 mb-8">
            {progressionStages.map((stage, i) => (
              <React.Fragment key={i}>
                <div className="flex-1 bg-gray-50 rounded-lg border border-gray-100 p-4 text-center md:mx-1">
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-sky-100 rounded-full mb-2">
                    <span className="text-sky-700 font-bold text-sm">{i + 1}</span>
                  </div>
                  <h4 className="font-bold text-navy-700 text-sm md:text-base mb-1">{stage.label}</h4>
                  <p className="text-gray-600 text-xs md:text-sm leading-snug">{stage.detail}</p>
                </div>
                {i < progressionStages.length - 1 && (
                  <div className="flex items-center justify-center py-0.5">
                    <ArrowRight size={18} className="text-sky-400 rotate-90 md:rotate-0" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-sky-50 rounded-lg p-5 md:p-6 border border-sky-100">
              <h3 className="font-bold text-navy-700 text-base mb-2">Joining part-way through a block</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base mb-2">
                <span className="font-semibold text-navy-700">You don&rsquo;t need to wait for the next 12-week block.</span> If you join part-way through, you&rsquo;ll be introduced to the movement patterns and given appropriate exercise variations for your current ability.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                You start from your own level and progress from there. You are not expected to catch up with everyone else.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <DiscoveryButton />
          </div>
        </div>
      </section>

      {/* CURRENT CLASSES + MEMBERSHIP */}
      <section className="py-10 md:py-16 bg-gray-50 rounded-[40px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading className="text-center mb-3">Current classes and membership</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            There are currently classes on Monday and Wednesday evenings. You choose the particular day and time that works for you, and your place is then reserved in that class. Both days follow the same overall programme structure. Maximum of five participants per class.
          </p>

          {/* Timetable */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-4">
            <div className="grid grid-cols-3 bg-navy-700 text-white text-sm font-semibold">
              <div className="px-4 sm:px-5 py-3 flex items-center gap-2"><Calendar size={16} /> Day</div>
              <div className="px-4 sm:px-5 py-3 flex items-center gap-2"><Clock size={16} /> Time</div>
              <div className="px-4 sm:px-5 py-3 flex items-center gap-2"><Users size={16} /> Availability</div>
            </div>
            {classTimetable.map((slot, i) => (
              <div key={i} className={`grid grid-cols-3 border-t border-gray-100 ${i % 2 === 1 ? 'bg-gray-50/60' : ''}`}>
                <div className="px-4 sm:px-5 py-3 text-gray-700 font-medium text-sm sm:text-base">{slot.day}</div>
                <div className="px-4 sm:px-5 py-3 text-gray-600 text-sm sm:text-base">{slot.time}</div>
                <div className="px-4 sm:px-5 py-3">
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
          <p className="text-sm text-gray-400 text-center mb-8 leading-relaxed">
            This timetable is for information only. Class places are arranged through the clinic, not booked directly online.
          </p>

          {/* Membership */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="bg-white rounded-lg border border-gray-100 p-6 text-center md:text-left">
              <p className="text-3xl md:text-4xl font-bold text-navy-700 mb-1">£65<span className="text-lg font-medium text-gray-400"> / month</span></p>
              <p className="text-gray-500 text-sm mb-3">By Direct Debit</p>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your membership reserves your place in your chosen weekly class. This works out at around £15 per class on average across the year, though this is an average and not the exact cost of an individual session.
              </p>
            </div>
            <div className="space-y-2.5">
              {[
                'Rolling monthly membership',
                "One month's notice to cancel",
                'If you miss a session, you can make it up in another class that week if there is a space available',
                'If we have to cancel a class, we will credit the average session value',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                  <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading className="text-center mb-3">How to get started</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            You don't need to wait for the start of a new 12-week block. If you join part-way through, we'll introduce you to the current movement patterns and find the right exercise variations for your ability.
          </p>
          <div className="grid md:grid-cols-3 gap-5 md:gap-8">
            {gettingStarted.map((step, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-100 p-5 sm:p-6">
                <div className="text-3xl font-bold text-sky-300 mb-2">{step.num}</div>
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-center mb-6">Frequently asked questions</SectionHeading>
          <FAQAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-16 bg-navy-700 text-white rounded-t-[40px]">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">Ready to get stronger?</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            Come and see the clinic, meet the team and find out whether the Strength &amp; Rehab Classes are right for you. There&rsquo;s no pressure and no obligation, just an honest conversation about what you&rsquo;re looking for.
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
