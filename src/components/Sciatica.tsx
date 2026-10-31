import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const Sciatica: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Sciatica Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Sciatica physiotherapy in Harborne, Birmingham. Understand leg pain and nerve symptoms, manage flare-ups and build confidence with movement."
    canonicalPath="/treatments/sciatica"
    h1="Find Your Way Back to Moving Confidently"
    heroEyebrow="Sciatica Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Sciatica can cause pain, tingling or numbness that travels from the lower back or buttock into the leg. It can make sitting, walking and sleeping difficult, particularly during a flare-up. We can help you understand your symptoms and work out manageable next steps.",
      "At our Harborne clinic, we listen to your concerns, assess your movement and relevant nerve function, and discuss what matters most to you. Together we can plan practical ways to manage symptoms, stay as active as possible and gradually rebuild confidence.",
    ]}
    ctaHeading="Ready to address your sciatica?"
    ctaText="Whether this is your first episode or you have had recurring leg pain, we can help you understand your symptoms and develop a realistic rehabilitation plan."
    mainHeading="How We Approach Sciatica"
    mainParagraphs={[
      "Many people with sciatica improve over time. Where appropriate, staying gently active and adapting aggravating activities may be more helpful than prolonged bed rest. We can help you find comfortable starting points, explore suitable exercises and gradually return to activities you value.",
      "Sciatica can have different causes and recovery times vary. We will explain our assessment, monitor symptoms such as weakness or altered sensation, and discuss medical review or further investigations if needed rather than promising a quick fix.",
    ]}
    bulletList={[
      "Sharp, shooting pain from lower back into leg",
      "Numbness and tingling in the buttock, leg, or foot",
      "Burning or electric-like sensations down the leg",
      "Pain that worsens with sitting or certain movements",
      "Difficulty finding comfortable positions for sleep",
      "Leg or foot weakness that requires careful assessment",
      "Chronic or recurring sciatica episodes",
      "Disc-related sciatica (herniated or bulging discs)",
      "Deep buttock pain that may have causes other than sciatica",
      "Fear and anxiety about movement during pain episodes",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Back Pain", href: "/treatments/back-pain" },
      { label: "Hip Pain", href: "/treatments/hip-pain" },
    ]}
    conditionName="sciatica"
  />
  <section className="bg-white py-16" aria-labelledby="sciatica-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="sciatica-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Sciatica: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What is sciatica?</h3><p>Sciatica describes symptoms caused by irritation or compression of a nerve supplying the leg. These can include radiating pain, tingling, numbness or sometimes weakness. Not every pain in the buttock or leg is sciatica, so assessment matters.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I rest or keep moving?</h3><p>Prolonged bed rest is usually not recommended. Gentle movement and adjusting activities to a tolerable level can be helpful, although what you can manage will depend on your symptoms. We can help you find a suitable starting point.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need an MRI scan?</h3><p>Not everyone with sciatica needs an MRI. Your history and examination help guide whether imaging or a medical referral is appropriate, especially if symptoms are severe, progressing or not improving as expected.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">How long does sciatica take to improve?</h3><p>Recovery varies. Many people improve over weeks to months, while some have more persistent symptoms. We can help you set realistic expectations, monitor progress and adjust your plan as needed.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I seek urgent medical help?</h3><p>Seek emergency medical assessment for new difficulty passing urine, loss of bladder or bowel control, numbness around the genitals or back passage, or rapidly worsening leg weakness, particularly with symptoms in both legs. These can be signs of serious nerve compression and should not wait for a routine physiotherapy appointment.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default Sciatica;
