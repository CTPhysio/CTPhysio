import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const SportsInjuries: React.FC = () => (
  <>
    <TreatmentPageTemplate
      seoTitle="Sports Injury Physiotherapy in Harborne, Birmingham | Chris Tiley"
      seoDescription="Sports injury physiotherapy in Harborne, Birmingham. Assessment, progressive rehabilitation and support returning to running, football, cycling and other activities."
      canonicalPath="/treatments/sports-injuries"
      h1="Sports Injury Physiotherapy in Harborne, Birmingham"
      heroEyebrow="SPORTS INJURIES AND REHABILITATION"
      heroParagraphs={[
        "An injury can interrupt your training, sport or everyday routine. Whether you play regularly, exercise for enjoyment or are returning after time away, we can help you understand what is happening and plan your next steps.",
        "Our physiotherapists combine assessment, advice and progressive exercise to help you rebuild strength, confidence and the capacity your activity requires."
      ]}
      ctaHeading="Ready to Get Moving Again?"
      ctaText="Book a physiotherapy assessment to discuss your injury, your sport and a realistic route back to the activities you enjoy."
      mainHeading="Rehabilitation Built Around Your Sport and Your Goals"
      mainParagraphs={[
        "Sports injuries do not all need the same approach. We start by discussing how your symptoms began, what makes them better or worse, your training history and what you want to return to. An examination helps us decide what is likely to be contributing and whether further investigation or medical review is needed.",
        "Your plan may involve temporarily adjusting training, gradually restoring movement, and building strength and tolerance to load. As you progress, we can introduce the movements and demands that matter for your activity, such as running, jumping, changing direction or lifting.",
        "Returning to sport is usually a process rather than a single date. We use your symptoms, function, strength and confidence to help guide progress. We cannot promise a particular recovery time or guarantee that an injury will not recur."
      ]}
      bulletList={[
        "Muscle strains, including hamstring and calf injuries",
        "Ankle sprains and rehabilitation after ligament injuries",
        "Knee pain and rehabilitation following sporting injuries",
        "Tendon-related pain affecting the Achilles, patellar tendon or elbow",
        "Shoulder pain associated with sport or gym training",
        "Running-related pain and training-load problems",
        "Building strength and confidence when returning to sport after time away"
      ]}
      imageUrl="/hero-1920.webp"
      relatedConditions={[
        { label: "Knee Pain", href: "/treatments/knee-pain" },
        { label: "Shoulder Pain", href: "/treatments/shoulder-pain" },
        { label: "Hip Pain", href: "/treatments/hip-pain" },
        { label: "Strength & Rehab Classes", href: "/strength-rehab-classes" }
      ]}
      conditionName="sports injury rehabilitation"
    />
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-navy-700 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I stop exercising when I have a sports injury?</h3><p>Not necessarily. Depending on the injury, you may be able to continue some activities while temporarily reducing or modifying others. We can help you work out what is appropriate rather than automatically stopping everything.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">How do I know when I can return to sport?</h3><p>It depends on the injury and the demands of your sport. We look at how you are moving, how you tolerate increasing activity, your strength and your confidence, rather than relying on time alone.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need a scan before booking physiotherapy?</h3><p>Many sports injuries can be assessed without imaging. If your history or examination suggests a scan or medical assessment would be useful, we can discuss the next steps.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help with an injury that keeps coming back?</h3><p>We can review the pattern of symptoms, your training and the physical demands of your sport. Rehabilitation may include adjusting training loads and building strength and capacity, alongside considering other possible causes.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What if I have just had a serious injury?</h3><p>A suspected fracture, dislocation, major tendon rupture or injury with marked inability to bear weight needs prompt medical assessment. Head injuries with concerning symptoms, particularly suspected concussion, should be assessed through an appropriate medical pathway before returning to play.</p></div>
        </div>
      </div>
    </section>
  </>
);

export default SportsInjuries;
