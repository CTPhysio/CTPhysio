import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Calendar, Clock, Users, Dumbbell, Scale, HeartPulse, ShieldCheck } from 'lucide-react';

const BOOKING_URL = 'https://chris-tiley-physiotherapy.uk1.cliniko.com/bookings';

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

const capabilityCards = [
  { icon: Dumbbell, title: 'Strength', body: 'Build and maintain the muscle strength you need for everyday activities.' },
  { icon: Scale, title: 'Balance', body: 'Challenge your balance and control in different positions and situations.' },
  { icon: HeartPulse, title: 'Fitness', body: 'Maintain the cardiovascular fitness needed to cope with everyday activity.' },
  { icon: ShieldCheck, title: 'Confidence', body: 'Become more confident in what your body is capable of doing.' },
];

const realLifeExamples = [
  { title: 'Get up from the floor', body: 'Build the strength and confidence to get down and back up again.' },
  { title: 'Walk with friends', body: "Improve your strength and fitness so you can keep up without feeling like you're holding everyone back." },
  { title: 'Keep working in the garden', body: 'Build the strength and physical capacity for the jobs and projects you enjoy.' },
  { title: 'Carry things with confidence', body: 'Develop the strength needed to lift and carry everyday objects without worrying about what you can manage.' },
  { title: 'Keep travelling', body: "Maintain the strength, fitness and confidence to stay active when you're away from home." },
];

const componentElements = [
  { title: 'Strength', body: 'Progressive resistance exercises help you maintain and build muscle strength, supporting your ability to stay active and independent.' },
  { title: 'Balance', body: 'Exercises challenge your balance and control in different positions and situations.' },
  { title: 'Fitness', body: 'Short intervals using equipment such as the ski erg, bike or rower help maintain cardiovascular fitness and your ability to cope with physical activity.' },
  { title: 'Bone health', body: 'Progressive resistance and weight-bearing exercise are included because maintaining bone strength becomes increasingly important as we get older.' },
  { title: 'Falls preparedness', body: 'We work on physical skills that may help you deal with a fall if one does happen, including balance, leg strength and getting down to and back up from the floor.' },
];

const whoForReasons = [
  'Know you should be doing more strength training but struggle to do it consistently on your own',
  'Want to stay strong enough to enjoy activities such as gardening, walking, travelling or spending time with friends and family',
  'Have lost confidence in what your body can do after an injury or period of pain',
  'Want professional guidance without having to work out your own gym programme',
  'Want to exercise alongside other people at a similar stage of life',
];

const gettingStarted = [
  {
    num: '01',
    title: 'Book a free 20-minute Discovery Visit',
    body: "Come and meet us, see the training space and talk through what you'd like to achieve, along with any concerns you have about exercising.",
  },
  {
    num: '02',
    title: 'Make sure the class is right for you',
    body: "We'll look at your current ability, previous injuries and any health concerns to make sure you're ready for this type of exercise. If you need some one-to-one support first, we'll explain why.",
  },
  {
    num: '03',
    title: 'Start at your level',
    body: "You don't need to be fit or experienced with weights. We'll start with exercises that are appropriate for you and gradually increase the challenge as you become stronger and more confident.",
  },
];

const classFaqs = [
  { q: 'Do I need to have experience with weights?', a: "No. Many of our members had never done strength training before joining. There's no expectation that you already know what you're doing." },
  { q: "I've never been to a gym. Will I fit in?", a: "Yes. Most of our members wouldn't describe themselves as gym people. The environment is clinical and supportive, not a commercial gym." },
  { q: "I'm worried about hurting myself. Is the class suitable for me?", a: "Exercises are adapted to your current ability and closely supervised by a physiotherapist. We'll discuss any concerns and make sure the class is appropriate before you start." },
  { q: 'Will everyone be doing the same exercises?', a: "Not necessarily. The movement patterns are shared, but the specific exercises and resistance are adapted to each person. Everyone works at their own level." },
  { q: 'What if I have arthritis or an old injury?', a: "Exercises can be adapted to take into account previous injuries, current symptoms and your stage of progression. Your physiotherapist knows your history and will adjust things accordingly." },
  { q: 'How much weight will I be expected to lift?', a: "There is no expectation. You start with an appropriate level of resistance for you and progress from there. The weight you lift is determined by your ability and confidence, not anyone else's." },
  { q: 'Is a physiotherapist there throughout the class?', a: "Yes. A physiotherapist is present throughout every class, guiding you and making adjustments as needed." },
  { q: 'Do I need an assessment before joining?', a: "Yes. You'll have either a free Discovery Visit or an Initial Assessment first, so we can make sure the class is right for you." },
  { q: 'Can I join if I\'m over 80?', a: "Yes. The classes are for anyone over 60, and exercises are adapted to your individual ability rather than your age." },
  { q: 'Can I join part-way through a 12-week block?', a: "Yes. You don't need to wait for the next block. You'll be introduced to the current movement patterns and given appropriate exercise variations for your ability." },
  { q: 'What happens if I miss a class?', a: 'We are finalising the membership arrangements and will share details of how missed sessions are handled once they are confirmed.' },
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

const Over60sStrengthClasses: React.FC = () => {
  useEffect(() => {
    const prevTitle = document.title;
    const prevDesc = document.querySelector('meta[name="description"]');
    const prevDescContent = prevDesc?.getAttribute('content');
    document.title = 'Over 60s Strength Classes in Harborne, Birmingham | Chris Tiley Physiotherapy';
    if (prevDesc) prevDesc.setAttribute('content', 'Small-group strength and fitness classes for over 60s in Harborne, Birmingham. Led by a physiotherapist, with individualised exercises to build strength, balance, fitness and confidence.');
    const ldJson = document.createElement('script');
    ldJson.type = 'application/ld+json';
    ldJson.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      name: 'Chris Tiley Physiotherapy',
      description: 'Physiotherapy clinic offering small-group strength and fitness classes for over 60s, led by a physiotherapist.',
      url: 'https://christileyphysiotherapy.com/over-60s-strength-classes',
      telephone: '01215170806',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Harborne, Birmingham',
        addressRegion: 'West Midlands',
        addressCountry: 'GB',
      },
    });
    document.head.appendChild(ldJson);

    return () => {
      document.title = prevTitle;
      if (prevDesc && prevDescContent) prevDesc.setAttribute('content', prevDescContent);
      document.head.removeChild(ldJson);
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
              Over 60s Strength Classes
            </h1>
            <p className="text-lg md:text-xl text-sky-200 font-medium mb-4 leading-relaxed max-w-2xl">
              Build strength, fitness and confidence to keep doing the things you enjoy.
            </p>
            <p className="text-base md:text-lg text-gray-200 mb-6 leading-relaxed max-w-2xl">
              Small-group strength and fitness classes for people over 60, led by a physiotherapist at our clinic in Harborne, Birmingham. You don't need to be a gym person or have experience with weights. Everyone works at their own level, with exercises adapted to you and progressed as you become stronger and more confident.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <DiscoveryButton />
              <p className="text-sm text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Maximum 5 people</span> per class
              </p>
            </div>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              No obligation. Come and see the clinic, meet the team, and find out if the classes are right for you.
            </p>
          </div>
        </div>
      </section>

      {/* STAYING STRONG MEANS STAYING CAPABLE */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading className="text-center mb-3">Staying strong means staying capable</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Getting older doesn't mean you have to accept becoming weaker or less capable. Strength training can help you maintain muscle strength, support bone health, improve balance and maintain the fitness you need for everyday life. But the real benefit is what that strength allows you to do outside the gym.
          </p>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether that's working in the garden, walking with friends, travelling, carrying things or getting down onto the floor and back up again, the aim is to help you stay active and confident in the things that matter to you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {capabilityCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-sky-50 rounded-lg mb-3">
                    <Icon size={20} className="text-sky-600" />
                  </div>
                  <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{card.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{card.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STRENGTH TRAINING FOR REAL LIFE */}
      <section className="py-10 md:py-16 bg-gray-50 rounded-b-[40px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading className="text-center mb-3">Strength training for real life</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4 leading-relaxed">
            The exercises we use aren't chosen simply to make you better at exercising. They're chosen to help you build the physical qualities you need for everyday life.
          </p>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            You might work on squatting, lifting, carrying, pushing, pulling, balancing or getting up from the floor. Exercises can be adapted to your current ability and gradually progressed as you become stronger. The goal isn't to become a gym enthusiast. It's to give you the strength and confidence to keep doing the things you enjoy.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {realLifeExamples.map((item, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 sm:p-6">
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOU DON'T HAVE TO BE A GYM PERSON */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>You don't have to be a gym person to get stronger</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most of our members wouldn't describe themselves as fitness people. Some had never done strength training before joining us. Others knew they should be doing more but didn't feel comfortable going to a gym on their own.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don't need to work out what exercises to do, what weight to use or how many sets and repetitions to complete. Your programme is planned for you, and we keep track of your exercises so you know what you're working on when you come back.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            And because you have a set time each week, a small group of people who know you'll be there and a physiotherapist waiting for you, you're less reliant on motivation to keep exercising.
          </p>
          <p className="text-gray-600 leading-relaxed font-medium text-navy-700">
            You don't have to do it on your own.
          </p>
        </div>
      </section>

      {/* EVERYONE WORKS AT THEIR OWN LEVEL */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <SectionHeading>Everyone works at their own level</SectionHeading>
              <p className="text-gray-600 leading-relaxed mb-4">
                There is no expectation that everyone in the class will lift the same weight or perform the same version of an exercise. The movement patterns are shared, but the exercises and resistance are adapted to each person.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                One person might be working on sitting to standing from a chair while holding a kettlebell, while someone else is doing a loaded squat with a barbell.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Your previous injuries, current symptoms, mobility, experience and confidence all help determine where you start. The aim isn't for everyone to do the same thing. It's for everyone to be appropriately challenged.
              </p>
              <p className="text-gray-600 leading-relaxed">
                As you become stronger and more confident, we'll gradually increase the challenge.
              </p>
            </div>
            <figure className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
              <img
                src="/IMG_5689.jpeg"
                alt="The strength and fitness training space at Chris Tiley Physiotherapy"
                className="block w-full aspect-[4/3] object-cover"
              />
              <figcaption className="bg-gray-50 px-4 py-3 text-sm text-gray-500 border-t border-gray-100">
                Our dedicated training space at the clinic in Harborne.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* A PHYSIOTHERAPIST IS THERE THROUGHOUT */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>A physiotherapist is there throughout</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            With a maximum of five people in each class, there is plenty of opportunity for individual guidance.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Your physiotherapist knows your history and understands any injuries or concerns you've had. They'll help you choose the right exercise and resistance, watch how you're moving and make adjustments when needed.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You don't need to work out what exercise to do, what weight to use or how many sets and repetitions to complete. Your programme is planned for you and recorded so you know what you're working on each time you come back.
          </p>
          <p className="text-gray-600 leading-relaxed">
            It's strength training with the reassurance of having a physiotherapist there to guide you.
          </p>
        </div>
      </section>

      {/* PROGRESS AT THE RIGHT PACE */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>Progress at the right pace</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Getting stronger takes time. Particularly if you're starting after an injury or a period of doing less, trying to do too much too soon can leave you sore, frustrated or lacking confidence.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            That's why we take a gradual approach. We'll start with an appropriate level of challenge and increase the resistance as your body becomes ready for it. Sometimes that might mean doing a little more than you expected. Sometimes it means holding back and giving your body more time to adapt.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The goal is consistent progress, not pushing yourself as hard as possible every time you come to class.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Over time, those small increases can add up to a significant difference in what you feel capable of doing.
          </p>
        </div>
      </section>

      {/* STRENGTH, BALANCE AND FITNESS */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading className="text-center mb-3">Strength, balance and fitness</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Strength is at the heart of the class, but getting older isn't just about maintaining muscle strength. Sessions also include exercises that challenge your balance, cardiovascular fitness and ability to deal with unexpected situations.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {componentElements.map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-lg border border-gray-100 p-5 sm:p-6">
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT'S NOT JUST YOUR STRENGTH THAT CHANGES */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>It's not just your strength that changes</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Getting stronger can change how you feel about what your body is capable of.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            You might find yourself getting down onto the floor without worrying about whether you'll get back up. Carrying things becomes easier. You can walk further with friends without feeling like you're holding everyone back. You might even find yourself taking on a gardening project or activity that you'd previously decided was no longer possible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            These changes can build confidence, not just physical strength. The aim is to help you feel more capable in everyday life, not just stronger in the gym.
          </p>
        </div>
      </section>

      {/* SOMETIMES THE HARDEST PART IS TURNING UP */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>Sometimes the hardest part is turning up</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most of our members wouldn't say that exercise is their favourite way to spend an hour. There are always some exercises they enjoy more than others, and getting yourself out of the house isn't always easy.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            But they also tell us they always feel better for coming.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Having a set time each week, a small group of people who know you'll be there and a physiotherapist waiting for you makes it much easier to stay consistent. You don't have to rely on motivation or work out what to do when you arrive. You just turn up, and we'll take care of the rest.
          </p>
          <p className="text-gray-600 leading-relaxed font-medium text-navy-700">
            You don't have to do it on your own.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS DURING A CLASS */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <SectionHeading className="text-center mb-3">What happens during a class?</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Each session lasts around an hour and is built around five stations. You'll work through a range of exercises based around important movement patterns such as squatting, hinging, lunging, pushing, pulling, rotating and carrying.
          </p>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on the session, there may also be balance exercises or short intervals to challenge your cardiovascular fitness. You'll spend several minutes working at each station, completing sets with rest between them before moving on to the next exercise.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The exercises change throughout each 12-week block, while the underlying aim remains the same: gradually build your strength, fitness and confidence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Everyone works at their own level, so the person next to you may be doing a completely different version of the same movement.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/ChatGPT_Image_Sep_2,_2026,_05_58_47_PM.png"
                alt="Five station strength class movement pattern diagram"
                className="block w-full max-w-md mx-auto h-auto"
              />
              <p className="text-xs text-gray-400 text-center mt-4 leading-relaxed">
                Movement patterns shown are illustrative. The specific exercises change between 12-week blocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO ARE THE CLASSES FOR */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading className="text-center mb-3">Who are the classes for?</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
            The classes are designed for people over 60 who want to get stronger and stay active, whether or not they have previous experience with strength training. You don't need to consider yourself fit, have a sporting background or know your way around a gym.
          </p>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            The class can be particularly useful if you:
          </p>
          <ul className="space-y-3 max-w-2xl mx-auto mb-6">
            {whoForReasons.map((reason, i) => (
              <li key={i} className="flex items-start space-x-3">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span className="text-gray-600 leading-relaxed">{reason}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm text-center max-w-2xl mx-auto leading-relaxed">
            Not over 60, or looking for a more general strength class? You might be better suited to our <Link to="/strength-rehab-classes" className="text-sky-600 hover:text-sky-700 underline">Strength &amp; Rehab Classes</Link>.
          </p>
        </div>
      </section>

      {/* EVERYONE STARTS WITH AN ASSESSMENT */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>Everyone starts with an assessment</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Before joining a class, you'll have either a free Discovery Visit or an Initial Assessment, depending on what you need.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            This gives us the opportunity to understand your health, previous injuries, current ability and goals, and make sure the class is appropriate for you.
          </p>
          <p className="text-gray-600 leading-relaxed">
            If you need more individual support before joining, we'll explain why and help you decide what the best next step is.
          </p>
        </div>
      </section>

      {/* A NATURAL NEXT STEP AFTER PHYSIOTHERAPY */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading>A natural next step after physiotherapy</SectionHeading>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many people who join our classes first came to us because of pain, an injury or a problem that was affecting their everyday life. Once they've made progress with their one-to-one physiotherapy, the next challenge is often staying strong and building their confidence back up.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            The classes provide a way to continue exercising with professional guidance, without needing ongoing one-to-one appointments.
          </p>
          <p className="text-gray-600 leading-relaxed">
            You don't need to have been a physiotherapy patient to join. If you're over 60 and simply want to get stronger, the class may be right for you too.
          </p>
        </div>
      </section>

      {/* CURRENT CLASSES */}
      <section className="py-10 md:py-16 bg-gray-50 rounded-[40px]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading className="text-center mb-3">Current classes</SectionHeading>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8 leading-relaxed">
            Maximum of 5 people per class. Class places are arranged through the clinic, not booked directly online.
          </p>

          {/* Active classes */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="grid grid-cols-3 bg-navy-700 text-white text-sm font-semibold">
              <div className="px-4 sm:px-5 py-3 flex items-center gap-2"><Calendar size={16} /> Day</div>
              <div className="px-4 sm:px-5 py-3 flex items-center gap-2"><Clock size={16} /> Time</div>
              <div className="px-4 sm:px-5 py-3 flex items-center gap-2"><Users size={16} /> Status</div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-100">
              <div className="px-4 sm:px-5 py-3 text-gray-700 font-medium text-sm sm:text-base">Tuesday</div>
              <div className="px-4 sm:px-5 py-3 text-gray-600 text-sm sm:text-base">11:00am</div>
              <div className="px-4 sm:px-5 py-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-medium text-xs sm:text-sm">Full</span>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-gray-100 bg-gray-50/60">
              <div className="px-4 sm:px-5 py-3 text-gray-700 font-medium text-sm sm:text-base">Thursday</div>
              <div className="px-4 sm:px-5 py-3 text-gray-600 text-sm sm:text-base">1:30pm</div>
              <div className="px-4 sm:px-5 py-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-500 font-medium text-xs sm:text-sm">Full</span>
              </div>
            </div>
          </div>

          {/* Waiting list */}
          <div className="bg-white rounded-lg border border-dashed border-gray-200 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-amber-50 text-amber-700 font-medium text-xs sm:text-sm">Coming soon</span>
              <span className="text-gray-700 font-medium text-sm sm:text-base">Thursday 2:30pm</span>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              We're considering adding another Thursday class. If you're interested in this time, <Link to="/contact" className="text-sky-600 hover:text-sky-700 underline">join the waiting list</Link> and we'll let you know when a place becomes available.
            </p>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <SectionHeading className="text-center mb-3">Membership</SectionHeading>
          <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg border border-gray-100 p-5 md:p-6 text-center">
            <p className="text-3xl md:text-4xl font-bold text-navy-700 mb-1">£65<span className="text-lg font-medium text-gray-400"> / month</span></p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Membership is £65 per month for one fixed weekly class, with your place reserved each week.
            </p>
          </div>
        </div>
      </section>

      {/* GETTING STARTED */}
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading className="text-center mb-3">Getting started is simple</SectionHeading>
          <div className="grid md:grid-cols-3 gap-5 md:gap-8 mb-8">
            {gettingStarted.map((step, i) => (
              <div key={i} className="bg-white rounded-lg border border-gray-100 p-5 sm:p-6">
                <div className="text-3xl font-bold text-sky-300 mb-2">{step.num}</div>
                <h3 className="font-bold text-navy-700 text-base sm:text-lg mb-2 leading-snug">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <DiscoveryButton />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-center mb-6">Frequently asked questions</SectionHeading>
          <FAQAccordion />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 md:py-16 bg-navy-700 text-white rounded-t-[40px]">
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 leading-tight">Ready to feel stronger and more confident?</h2>
          <p className="text-base md:text-lg text-gray-300 mb-6 leading-relaxed">
            You don't need to know whether you're "fit enough" for the class. Come and meet us, see the training space and talk through what you'd like to achieve. We'll explain how the classes work and help you decide whether they're right for you. There's no pressure and no obligation to join.
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

export default Over60sStrengthClasses;
