import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from './Seo';

const FloorTransfersArticle: React.FC = () => {
  const title = "Can You Get Up From the Floor? Why It's a Skill Worth Practising as You Get Older";
  const url = 'https://christileyphysiotherapy.com/advice/getting-up-from-the-floor-as-you-get-older';
  const image = '/floor-transfers-older-adults.png';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    author: { '@type': 'Person', name: 'Chris Tiley', jobTitle: 'Chartered Physiotherapist' },
    publisher: { '@type': 'Organization', name: 'Chris Tiley Physiotherapy' },
    datePublished: '2026-10-29',
    dateModified: '2026-10-29',
    image: 'https://christileyphysiotherapy.com' + image,
    mainEntityOfPage: url,
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <Seo title="Getting Up From the Floor as You Age | Harborne Physio" description="Worried about getting up from the floor as you get older? Harborne physiotherapist Chris Tiley explains how to build strength and confidence." image={image} canonicalPath="/advice/getting-up-from-the-floor-as-you-get-older" article />
      <section className="bg-navy-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-3xl">
            <Link to="/advice" className="inline-flex items-center text-sky-300 hover:text-sky-200 transition-colors mb-6 text-sm font-medium"><ArrowLeft size={16} className="mr-2" />All Advice</Link>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{title}</h1>
            <p className="text-base md:text-lg text-gray-200 mb-2">By Chris Tiley, Chartered Physiotherapist</p>
            <p className="text-sm text-gray-400">Chris Tiley Physiotherapy, Harborne, Birmingham</p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto -mt-8 md:-mt-12 mb-8 md:mb-10">
          <img src={image} alt="Older woman confidently practising supported kneeling on a mat beside a sturdy box in a physiotherapy gym" className="w-full rounded-xl shadow-lg object-cover aspect-[3/2]" />
        </div>
      </div>
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
          <div className="prose-content">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">If you were sitting on the floor right now, could you get yourself back up again?</p>
            <p className="text-gray-700 leading-relaxed mb-6">It's a question I recently asked members of our Over 60s Strength Classes at Chris Tiley Physiotherapy in Harborne.</p>
            <p className="text-gray-700 leading-relaxed mb-6">For some, the answer was a confident yes. But several weren't so sure. Some hadn't tried getting down to the floor for years, while others were concerned about their knees, their balance or whether they'd be able to stand up again.</p>
            <p className="text-gray-700 leading-relaxed mb-6">It's understandable. If getting onto the floor is something you rarely do, how would you know whether you can still manage it?</p>
            <p className="text-gray-700 leading-relaxed mb-6">But here's the encouraging part: <strong>getting up from the floor is a skill that can be practised and improved, whatever your starting point.</strong></p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">Why does getting up from the floor matter?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">When we talk about falls as we get older, most of the advice focuses on preventing them.</p>
            <p className="text-gray-700 leading-relaxed mb-6">And rightly so. Improving strength, balance, and mobility can reduce the risk of falling.</p>
            <p className="text-gray-700 leading-relaxed mb-6">But there's another question worth considering: what happens if you do end up on the floor?</p>
            <p className="text-gray-700 leading-relaxed mb-6">Research involving people aged over 90 found that, among those who experienced a fall, 80% were unable to get themselves up after at least one fall. Around 30% spent an hour or longer on the floor.</p>
            <p className="text-gray-700 leading-relaxed mb-6">These findings highlight why it's worth practising the ability to get up, rather than simply hoping we'll never need it.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Of course, this isn't just about falls.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Think about some of the things you might want to do in everyday life:</p>
            <ul className="space-y-2 mb-6 pl-6 list-disc text-gray-700">
              <li>Get down to play with your grandchildren.</li><li>Kneel while gardening.</li><li>Retrieve something from underneath the furniture.</li><li>Sit on the grass at a picnic.</li><li>Get down to the floor to do some exercises.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">Being able to do these things comfortably gives you more freedom and independence.</p>
            <p className="text-gray-700 leading-relaxed mb-6">And perhaps just as importantly, knowing that you <em>could</em> get yourself up again can make the prospect of getting down to the floor feel much less daunting.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">What happened when we tried this in our Over 60s Strength Classes?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">I run small-group strength classes for older adults at our physiotherapy clinic in Harborne, Birmingham.</p>
            <p className="text-gray-700 leading-relaxed mb-6">We regularly work on building strength, balance and confidence through exercises such as squats, step-ups and resistance training.</p>
            <p className="text-gray-700 leading-relaxed mb-6">But after a conversation with fellow physiotherapist Dustin Jones on my podcast, The Never Too Old to Lift Podcast, I realised there was something we could be doing more of: practising getting down to the floor and back up again.</p>
            <p className="text-gray-700 leading-relaxed mb-6">So I started introducing it into our classes.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Initially, several members were apprehensive.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Some were convinced their knees wouldn't cope. Others worried about losing their balance or becoming stuck on the floor.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Rather than asking everyone to perform the same movement, we broke it down into manageable stages.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Some people used a sturdy box for support and simply lowered their knees onto a padded step before standing back up.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Others were comfortable kneeling directly on a mat.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Some could lower themselves through a lunge, using their hands on their thighs for support.</p>
            <p className="text-gray-700 leading-relaxed mb-6">And others progressed towards getting all the way down to sitting or lying on the floor before standing up again.</p>
            <p className="text-gray-700 leading-relaxed mb-6"><strong>Everyone worked at a level that felt appropriate for them.</strong></p>
            <p className="text-gray-700 leading-relaxed mb-6">What I particularly enjoyed was seeing the reaction from people who had been convinced they couldn't do it.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Once they realised they didn't have to go straight from standing to sitting on the floor without using their hands, they became more willing to try.</p>
            <p className="text-gray-700 leading-relaxed mb-6">And several surprised themselves with what they were capable of.</p>
            <p className="text-gray-700 leading-relaxed mb-6">That's one of the things I enjoy most about working with people who are new to strength training. Sometimes the biggest achievement isn't lifting a heavier weight. It's discovering that something you thought was beyond you is actually possible.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">How can you practise getting up from the floor?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">The key is to start at an appropriate level and gradually build confidence.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Here are some of the stages we use.</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">1. Practise supported kneeling</h3>
            <p className="text-gray-700 leading-relaxed mb-6">Start with a sturdy, stable surface in front of you for support.</p>
            <p className="text-gray-700 leading-relaxed mb-6">With appropriate padding beneath your knees, practise lowering one knee and then the other towards the floor, before returning to standing.</p>
            <p className="text-gray-700 leading-relaxed mb-6">You might initially use a raised padded surface rather than going all the way to the floor.</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">2. Progress towards sitting on the floor</h3>
            <p className="text-gray-700 leading-relaxed mb-6">Once you're comfortable kneeling, the next challenge is lowering yourself into a sitting position.</p>
            <p className="text-gray-700 leading-relaxed mb-6">You can use your hands for support and reverse the movement to return to kneeling, then standing.</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">3. Practise lying down and getting back up</h3>
            <p className="text-gray-700 leading-relaxed mb-6">If you're comfortable sitting on the floor, you can gradually practise lowering yourself onto your side or back, before reversing the movement.</p>
            <p className="text-gray-700 leading-relaxed mb-6">This adds another level of challenge and helps you become familiar with moving between different positions.</p>
            <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">4. Gradually reduce the support you need</h3>
            <p className="text-gray-700 leading-relaxed mb-6">As your strength and confidence improve, you might find you can complete some of these movements with less assistance.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Perhaps you initially needed both hands on a sturdy surface, but eventually only need one.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Or perhaps you can get down to the floor without assistance but still prefer to use your hands when standing up.</p>
            <p className="text-gray-700 leading-relaxed mb-6">All of these are worthwhile improvements.</p>
            <p className="text-gray-700 leading-relaxed mb-6"><strong>The goal isn't necessarily to get up without using your hands. It's to become more capable and confident than you were before.</strong></p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">Is it safe to practise at home?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">For some people, practising these movements at home may be appropriate. However, it's important to consider your starting point and any existing health conditions.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Use a clear space, a comfortable padded surface and something genuinely sturdy for support.</p>
            <p className="text-gray-700 leading-relaxed mb-6">If you have osteoporosis, a recent fracture, recent surgery, significant balance difficulties or concerns about whether the movements are appropriate for you, seek advice from your physiotherapist or another suitable healthcare professional before trying them.</p>
            <p className="text-gray-700 leading-relaxed mb-6">And if you're particularly nervous about getting onto the floor, I'd recommend practising with professional supervision rather than attempting it alone.</p>
            <p className="text-gray-700 leading-relaxed mb-6">There's no benefit in pushing yourself into a position you aren't confident you can get out of.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">You don't need to wait until you're struggling</h2>
            <p className="text-gray-700 leading-relaxed mb-6">One of the things I often tell patients is that you don't have to be in pain to benefit from physiotherapy.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Perhaps you've noticed that getting out of a low chair has become more difficult.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Maybe you avoid kneeling because you're worried you won't be able to stand back up.</p>
            <p className="text-gray-700 leading-relaxed mb-6">Or perhaps you simply want to maintain your strength and independence as you get older.</p>
            <p className="text-gray-700 leading-relaxed mb-6">These are all perfectly good reasons to work on your physical abilities.</p>
            <p className="text-gray-700 leading-relaxed mb-6">The earlier you start, the more opportunities you have to gradually build confidence.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">Strength training for over 60s in Harborne, Birmingham</h2>
            <p className="text-gray-700 leading-relaxed mb-6">At Chris Tiley Physiotherapy, our Over 60s Strength Classes are designed to help people build strength, improve balance and feel more confident in everyday movements.</p>
            <p className="text-gray-700 leading-relaxed mb-6">You don't need previous gym experience, and everyone works at a level appropriate to their abilities.</p>
            <p className="text-gray-700 leading-relaxed mb-6">We use a combination of strength exercises, balance challenges and practical movements to help people become more capable over time.</p>
            <p className="text-gray-700 leading-relaxed mb-6">If you're interested, you can find out more about our <Link to="/over-60s-strength-classes" className="text-sky-600 hover:text-sky-700 underline">Over 60s Strength Classes</Link>.</p>
            <p className="text-gray-700 leading-relaxed mb-6">We also offer a free Discovery Visit, where we can discuss the classes and whether they're suitable for you.</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mt-10 mb-5">Want to learn more about getting up from the floor?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">I've explored this subject in more detail in Episode 59 of my Never Too Old to Lift podcast.</p>
            <p className="text-gray-700 leading-relaxed mb-6">In the episode, I explain why getting up from the floor matters, share more of my experience introducing these exercises into our classes and talk through a progression you can work towards.</p>
            <p className="text-gray-700 leading-relaxed mb-6">You can choose whichever format suits you:</p>
            <p className="text-gray-700 leading-relaxed mb-4"><a href="https://nevertoooldtolift.com/podcast059/" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 underline font-semibold">Listen to Episode 59: Never Too Old to Lift</a></p>
            <p className="text-gray-700 leading-relaxed mb-6"><a href="https://www.youtube.com/watch?v=uIUKn9fePlI" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:text-sky-700 underline font-semibold">Watch Episode 59 on YouTube</a></p>
            <p className="text-gray-700 leading-relaxed mb-6">Remember, getting up from the floor isn't something you either can or can't do.</p>
            <p className="text-gray-700 leading-relaxed mb-6">It's a skill you can work on, one manageable step at a time.</p>
            <p className="text-gray-700 leading-relaxed mb-6">And you might just surprise yourself with what you're capable of.</p>
            <p className="text-gray-700 leading-relaxed mb-6 italic">Chris Tiley is a Chartered Physiotherapist based in Harborne, Birmingham, with an interest in helping people build strength and confidence through exercise.</p>
          </div>
          <div className="mt-10 text-center"><Link to="/advice" className="inline-flex items-center text-sky-600 hover:text-sky-700 font-semibold transition-colors"><ArrowLeft size={16} className="mr-2" />Back to all Advice</Link></div>
        </div></div>
      </article>
    </div>
  );
};

export default FloorTransfersArticle;
