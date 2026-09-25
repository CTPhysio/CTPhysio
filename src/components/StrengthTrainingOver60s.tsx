import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from './Seo';

const SITE_URL = 'https://christileyphysiotherapy.com';

const StrengthTrainingOver60s: React.FC = () => {
  const kitContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-uid', 'c41c0b5a21');
    script.src = 'https://nevertoooldtolift.kit.com/c41c0b5a21/index.js';
    if (kitContainerRef.current) {
      kitContainerRef.current.appendChild(script);
    }
    return () => {
      if (kitContainerRef.current) {
        kitContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Strength Training for Over 60s: How to Get Started',
      description:
        'A Birmingham physiotherapist explains how to start strength training after 60, from setting goals and choosing exercises to progressing safely.',
      author: {
        '@type': 'Person',
        name: 'Chris Tiley',
        jobTitle: 'Chartered Physiotherapist',
        worksFor: {
          '@type': 'MedicalBusiness',
          name: 'Chris Tiley Physiotherapy',
        },
      },
      publisher: {
        '@type': 'Organization',
        name: 'Chris Tiley Physiotherapy',
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/strength-training-over-60s/`,
      },
    };
    const el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-structured', 'strength-training-over-60s-article');
    el.textContent = JSON.stringify(structuredData);
    document.head.appendChild(el);
    return () => {
      document.head.removeChild(el);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Seo
        title="Strength Training for Over 60s: How to Get Started | Harborne Physio"
        description="A Birmingham physiotherapist explains how to start strength training after 60, from setting goals and choosing exercises to progressing safely."
        canonicalPath="/strength-training-over-60s/"
        article
      />

      {/* Article header */}
      <section className="bg-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <Link
              to="/advice"
              className="inline-flex items-center text-sky-300 hover:text-sky-200 transition-colors mb-6 text-sm font-medium"
            >
              <ArrowLeft size={16} className="mr-2" />
              All Advice
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
              Strength Training for Over 60s: How to Get Started
            </h1>
            <p className="text-base md:text-lg text-gray-200 mb-2">
              By Chris Tiley, Chartered Physiotherapist
            </p>
            <p className="text-sm text-gray-400">
              Chris Tiley Physiotherapy, Harborne, Birmingham
            </p>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose-content">
              {/* Intro */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Getting older does not mean you have to accept becoming weaker.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Perhaps you want to keep playing golf or tennis, keep walking in the hills, look after your garden or keep up with your grandchildren. Or perhaps you simply want to stay independent, doing the things you enjoy without relying on somebody else. Strength training is one of the most useful things you can do to make that possible.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I&rsquo;m Chris Tiley, a chartered physiotherapist and owner of Chris Tiley Physiotherapy in Harborne, Birmingham. Over the last 18 years I&rsquo;ve worked in hospitals, sports teams and private practice. Along the way, I&rsquo;ve developed a particular interest in helping older adults who lack the confidence to start strength training. That&rsquo;s why I created Never Too Old to Lift, a podcast, YouTube channel and online community for people over 60 who want to get stronger.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In this article, I&rsquo;ll explain why strength matters more as we get older, how to get started and how to progress safely. It&rsquo;s the same approach I use with patients in clinic.
              </p>

              {/* Why strength matters more after 60 */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                Why strength matters more after 60
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                As we get older, we gradually lose muscle mass and strength, a process called sarcopenia. By the time we reach 50, muscle mass is thought to decline at around 0.5 to 1% per year.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The numbers themselves are rarely the problem. What matters is what happens to everyday life. A common story I see in clinic starts with more demanding activities, such as golf or tennis, beginning to feel harder. People keep going for as long as they can, then eventually stop. Without that activity, strength declines faster. Before long, carrying the shopping, getting out of a low chair or doing the gardening becomes a challenge. Many people start relying on family, or paying someone else, for jobs they used to do themselves, and even a flight of stairs can become daunting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The good news is that this cycle can be slowed and, in many cases, reversed. Starting strength training at any age can help you regain strength that has already been lost.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Strength also plays a part in several conditions I see regularly as a physiotherapist:
              </p>
              <ul className="space-y-3 mb-6 pl-6 list-disc">
                <li className="text-gray-700 leading-relaxed"><strong>Falls.</strong> Reduced muscle strength is associated with poorer balance and a higher risk of falls. The recovery period after a fall-related injury can then speed up further loss of strength.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Osteoporosis.</strong> The Royal Osteoporosis Society recommends combining weight-bearing and impact exercise with muscle strengthening to keep bones strong. Strengthening should be done on two to three days a week, with the resistance increasing over time.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Osteoarthritis.</strong> I often describe muscles as the suspension in your car. Stronger muscles absorb more of the impact, so less is transferred to your joints. That can help painful joints settle and let you get back to the activities you enjoy.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                The World Health Organization recommends that all adults include muscle-strengthening activity on two or more days a week. Strength training is how you meet that recommendation in a way that also carries over into everyday life.
              </p>

              {/* Start with your goal, not an exercise */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                Start with your goal, not an exercise
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Before you pick up a weight, it&rsquo;s worth working out why you want to get stronger. Search online for exercises for over 60s and you&rsquo;ll find hundreds of options, with no way of knowing which ones matter for you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                &ldquo;Get fitter&rdquo; or &ldquo;feel stronger&rdquo; are good reasons, but they&rsquo;re too vague to measure. It helps to be more specific. What problem would strength training solve for you? What would you need to be able to do? What might get in the way, and how much time do you have?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                A patient I saw in clinic was going on a scuba diving holiday four months after her first appointment. Following a recent episode of pain, she felt weaker than she had six months earlier and was worried she wouldn&rsquo;t manage the physical demands of the trip. She had never done any strength training before.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Rather than giving her a list of exercises, we looked at what the holiday would ask of her. She would need to carry a 15kg dive tank while out of the water, wear another 10kg of lead weights, climb a ladder with that extra load and move around on an unstable boat. From there, we set specific goals: lifting 25kg from the floor, walking 10 metres carrying 25kg, standing up from a chair with a 25kg barbell across her shoulders, and stepping up onto a 30cm step while holding 25kg.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Those goals shaped every exercise we chose. She could see exactly how each squat or step-up was helping her get back in the water. She went on the holiday and loved it, and has since been on skiing holidays too, something she had resigned herself to giving up.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Your goals will look different, but the process is the same. When you understand why you&rsquo;re doing an exercise, you&rsquo;re far more likely to keep going.
              </p>

              {/* The 7 functional movement patterns */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                The 7 functional movement patterns
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you look at the things you do every day, you&rsquo;ll see the same movement patterns again and again. I group them into seven functional movements:
              </p>
              <ol className="space-y-3 mb-6 pl-6 list-decimal">
                <li className="text-gray-700 leading-relaxed"><strong>Squat:</strong> sitting down to a chair and standing back up</li>
                <li className="text-gray-700 leading-relaxed"><strong>Hip hinge:</strong> bending forwards from the hips to pick something up</li>
                <li className="text-gray-700 leading-relaxed"><strong>Lunge:</strong> stepping, and climbing stairs</li>
                <li className="text-gray-700 leading-relaxed"><strong>Push:</strong> pushing a load away from you, or pushing yourself up from the floor</li>
                <li className="text-gray-700 leading-relaxed"><strong>Pull:</strong> pulling a load towards you</li>
                <li className="text-gray-700 leading-relaxed"><strong>Rotation:</strong> turning your body, or resisting being pulled into a twist</li>
                <li className="text-gray-700 leading-relaxed"><strong>Gait/carry:</strong> walking, and carrying things as you go</li>
              </ol>
              <p className="text-gray-700 leading-relaxed mb-6">
                Getting stronger in these patterns makes the same movements easier in everyday life. They also give you a simple way to check that your programme covers everything you need. I explain each one in more detail, with ways to make them easier or harder, in{' '}
                <a
                  href="https://nevertoooldtolift.com/7-functional-movements/"
                  className="text-sky-600 hover:text-sky-700 underline"
                >
                  The 7 Functional Movements
                </a>.
              </p>

              {/* Find the right starting point */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                Find the right starting point
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you look at an exercise and think &ldquo;I can&rsquo;t do that&rdquo;, it doesn&rsquo;t mean the movement isn&rsquo;t for you. In my experience, the movement you struggle with is often the one you most need to practise. You just need a version that suits you today.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Almost every exercise can be adapted:
              </p>
              <ul className="space-y-3 mb-6 pl-6 list-disc">
                <li className="text-gray-700 leading-relaxed"><strong>Squat:</strong> if a full squat is too much, squat to a chair or bench, lightly tapping it before standing back up.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Split squat:</strong> if lowering your back knee to the floor is difficult, a cushion or small step underneath it reduces the depth.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Push:</strong> if lifting your arms overhead is uncomfortable, a chest press lying on your back may suit you better than a shoulder press.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                As that version becomes easier, you progress it. You might add weight, increase the range of movement or move on to a harder variation.
              </p>

              {/* How often, and how many reps? */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                How often, and how many reps?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                For most people starting out, two sessions a week is a good minimum and three is plenty. Leave at least a day between sessions so your muscles have time to recover. Around 30 minutes is enough to cover the key movements.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The thing that makes strength training work is intensity. Each set should be challenging enough that, by your final repetition, you couldn&rsquo;t manage another with good form. Most people are too cautious and never challenge themselves enough, which is why they don&rsquo;t see progress.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Going straight to heavy weights isn&rsquo;t the answer either. The approach I use starts at 15 repetitions. You then gradually increase the weight, so the target number of repetitions comes down over 12 weeks:
              </p>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-6">
                <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50">
                  <div className="px-4 sm:px-5 py-3 font-bold text-navy-700 text-sm sm:text-base">Weeks</div>
                  <div className="px-4 sm:px-5 py-3 font-bold text-navy-700 text-sm sm:text-base">Target reps</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">Weeks 1 to 2</div>
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">15 reps</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100 bg-gray-50/60">
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">Weeks 3 to 4</div>
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">12 reps</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">Weeks 5 to 6</div>
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">10 reps</div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100 bg-gray-50/60">
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">Weeks 7 to 10</div>
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">8 reps</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">Weeks 11 to 12</div>
                  <div className="px-4 sm:px-5 py-3 text-gray-700 text-sm sm:text-base">5 reps</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                Not everyone will reach 5 repetitions in 12 weeks, and that&rsquo;s fine. If you need an extra week or two at any stage, take it. Your programme should progress with you, not the other way round.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                If reps, sets and &ldquo;reps in reserve&rdquo; are new to you, I explain them fully in{' '}
                <a
                  href="https://nevertoooldtolift.com/reps-and-sets/"
                  className="text-sky-600 hover:text-sky-700 underline"
                >
                  What Do Reps and Sets Mean? 6, 12 &amp; 15 Reps Explained
                </a>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                It&rsquo;s also normal to feel some muscle soreness a day or two after your first few sessions. This usually eases as your body adapts, and starting at higher repetitions helps keep it manageable.
              </p>

              {/* What equipment do you need? */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                What equipment do you need?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Less than you might think. You can train in a gym, where there&rsquo;s more equipment and staff on hand to help, or at home.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                For home training, a pair of adjustable dumbbells and some resistance bands will cover all seven movements. Dumbbells are also a sensible choice when you&rsquo;re training on your own. If you lose your balance or tire sooner than expected, you can simply let them go.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Keep it simple at first. Too much choice can make getting started harder, and you can always add equipment as you progress.
              </p>

              {/* What if you have pain or an existing condition? */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                What if you have pain or an existing condition?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                This is where my work as a physiotherapist comes in most. A painful knee, a stiff back or a previous injury doesn&rsquo;t automatically rule out strength training. More often, it means adapting where you start. You might reduce the load, change the range of movement or your position, or choose a different variation of the same movement pattern.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                A simple rule I give patients:
              </p>
              <ul className="space-y-3 mb-6 pl-6 list-disc">
                <li className="text-gray-700 leading-relaxed"><strong>Mild discomfort, but you can keep good control:</strong> reduce the load for the rest of that session, and possibly the next.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Pain that makes you grimace, or stops you moving with control:</strong> stop that exercise for the day.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Pain that persists:</strong> see a physiotherapist or other medical professional.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you&rsquo;re injured, unwell or have a medical condition that may affect your ability to exercise, seek appropriate advice before you start.
              </p>

              {/* Inline Birmingham CTA / blockquote */}
              <blockquote className="bg-sky-50 border-l-4 border-sky-400 rounded-r-lg p-5 md:p-6 mb-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  <strong className="text-navy-700">Based in Birmingham?</strong> If you&rsquo;re over 60 and would rather have support than work this out on your own, our Over 60s Strength Classes at Chris Tiley Physiotherapy in Harborne are designed to help you build strength and confidence in a supportive environment.{' '}
                  <Link
                    to="/over-60s-strength-classes"
                    className="text-sky-600 hover:text-sky-700 underline font-medium"
                  >
                    Find out about our Over 60s Strength Classes
                  </Link>
                </p>
              </blockquote>

              {/* A simple way to get started */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                A simple way to get started
              </h2>
              <ol className="space-y-3 mb-6 pl-6 list-decimal">
                <li className="text-gray-700 leading-relaxed"><strong>Decide why you want to get stronger.</strong> Think about what you want to keep doing or get back to.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Turn it into a specific goal.</strong> &ldquo;Get up from a chair without using my hands&rdquo; is easier to work towards than &ldquo;get fitter&rdquo;.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Identify the movements involved.</strong> Which of the seven functional movements does your goal rely on?</li>
                <li className="text-gray-700 leading-relaxed"><strong>Choose a starting version of each exercise.</strong> Pick one you can do with confidence and control.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Plan two or three sessions a week,</strong> with a rest day in between.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Write down what you do:</strong> the date, the number of reps and the weight you used.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Increase the challenge gradually</strong> as each exercise becomes easier.</li>
                <li className="text-gray-700 leading-relaxed"><strong>Keep your goal in sight.</strong> If you&rsquo;re working towards golf, the squat isn&rsquo;t just a squat. It&rsquo;s getting you back on the course.</li>
              </ol>

              {/* Strength training is about your future */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                Strength training is about your future
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Imagine yourself at 80. What would you like to still be doing? Where would you like to go, and who would you like to spend time with?
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Strength training is one of the most practical ways to work towards that future. You don&rsquo;t need to become exceptionally strong or spend hours in a gym. You need to start where you are, challenge your muscles appropriately and progress from there.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                You&rsquo;re never too old to start getting stronger.
              </p>

              {/* Where to go next */}
              <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">
                Where to go next
              </h2>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                If you&rsquo;re in or near Birmingham
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                If you&rsquo;re over 60 and based in or near Birmingham, you can get support in person through our Over 60s Strength Classes at Chris Tiley Physiotherapy in Harborne. These sessions are designed to help you build strength progressively and feel more confident with exercise.
              </p>
              <div className="mb-6">
                <Link
                  to="/over-60s-strength-classes"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-sky-500 text-white font-bold rounded-xl hover:bg-sky-400 transition-all duration-300 shadow-lg hover:shadow-sky-500/30 hover:-translate-y-0.5"
                >
                  Find out about our Over 60s Strength Classes
                </Link>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you&rsquo;re dealing with pain, recovering from an injury, or feel you need more individual support first, our Strength &amp; Rehab Classes may be a better starting point.
              </p>
              <div className="mb-8">
                <Link
                  to="/strength-rehab-classes"
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-navy-700 font-semibold rounded-lg border border-navy-200 hover:border-navy-300 hover:bg-navy-50 transition-colors"
                >
                  Find out about Strength &amp; Rehab Classes
                </Link>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                Wherever you are
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                My free Never Too Old to Lift guide takes you through the full process step by step: setting your goals, choosing your exercises, planning your first workout and progressing over 12 weeks.
              </p>

              {/* Kit form */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-8 mb-6">
                <div ref={kitContainerRef} className="kit-form-container" />
              </div>
            </div>

            {/* About the author */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 md:p-8 mt-10">
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-sky-50 shadow-sm overflow-hidden flex-shrink-0">
                  <img
                    src="/Chris_Headshot_No_Background.png"
                    alt="Chris Tiley, Chartered Physiotherapist"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      display: 'block',
                    }}
                  />
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-navy-700 mb-1">About the author</h2>
                  <p className="text-sm text-sky-600 font-semibold uppercase tracking-wider mb-3">Chris Tiley</p>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    Chris Tiley is a chartered physiotherapist and owner of Chris Tiley Physiotherapy in Harborne, Birmingham. He qualified from Coventry University in 2008 and has worked in hospitals, sports teams and private practice, including with GB Para Snowsport. He specialises in strength training for older adults, is a regular speaker at Therapy Expo, and is the founder of Never Too Old to Lift.
                  </p>
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="mt-10 text-center">
              <Link
                to="/advice"
                className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to all Advice
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default StrengthTrainingOver60s;
