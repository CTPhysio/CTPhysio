import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const KneePain: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Knee Pain Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Knee pain physiotherapy in Harborne, Birmingham. Support for knee arthritis, injuries and rehabilitation to help you move with strength and confidence."
    canonicalPath="/treatments/knee-pain"
    h1="Move with Confidence Again"
    heroEyebrow="Knee Pain Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Knee pain can make walking, stairs, sport and everyday activities more difficult. Whether it started after an injury or developed gradually, we can help you understand your symptoms and work towards what matters to you.",
      "At our Harborne clinic, we listen to your concerns, assess your knee and discuss your goals. Together we can build a plan involving appropriate movement, progressive strength training and advice to help you return to activities with greater confidence.",
    ]}
    ctaHeading="Ready to address your knee pain?"
    ctaText="Whether your knee pain developed gradually over time or started after a specific incident, physiotherapy can help you understand your condition and develop strategies to move forward with confidence."
    mainHeading="How We Approach Knee Pain"
    mainParagraphs={[
      "Exercise and progressive strengthening can be important parts of managing many knee problems. We will help you find a manageable starting point, gradually increase what your knee can do and adapt the plan to your symptoms and goals. Hands-on treatment may be useful in some situations, but it is not the whole plan.",
      "Your goals might include walking comfortably, climbing stairs, gardening, running or returning to the gym. Some knee problems benefit from further medical assessment or surgical advice; we will discuss this with you when appropriate.",
    ]}
    bulletList={[
      "Knee osteoarthritis and age-related joint changes",
      "Persistent knee stiffness and reduced range of motion",
      "Pain with walking, stairs, or getting up from chairs",
      "Post-surgical rehabilitation (including knee replacements)",
      "Meniscus tears and cartilage issues",
      "Kneecap pain (patellofemoral pain syndrome)",
      "Sports-related injuries (ACL, MCL, runner's knee)",
      "Chronic swelling and inflammation",
      "Knee instability and weakness",
      "IT band syndrome and bursitis",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Arthritis", href: "/treatments/arthritis" },
      { label: "Sports Injuries", href: "/treatments/sports-injuries" },
      { label: "Runner/Triathlete Rehabilitation", href: "/treatments/runner-triathlete-rehab" },
      { label: "Surgical Rehabilitation", href: "/treatments/surgical-rehab" },
    ]}
    conditionName="knee pain"
  />
  <section className="bg-white py-16" aria-labelledby="knee-pain-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="knee-pain-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Knee Pain: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help with knee arthritis?</h3><p>For many people with knee osteoarthritis, tailored exercise, strength training and advice can improve function and help manage symptoms. We will work with you to find a realistic starting point.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I exercise if my knee hurts?</h3><p>Some discomfort during rehabilitation can be manageable, but the right amount depends on your symptoms and how your knee responds afterwards. We can help you adjust activities and progress gradually rather than simply avoiding movement.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need an MRI before seeing a physiotherapist?</h3><p>Not necessarily. Many knee problems can be assessed without a scan. If your history or examination suggests that imaging or further medical assessment may be helpful, we will discuss the next steps.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help after knee surgery?</h3><p>We can support rehabilitation after procedures such as knee replacement or ligament surgery, working with any instructions from your surgical team and progressing exercises towards your goals.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I seek urgent advice about knee pain?</h3><p>Seek prompt medical assessment if your knee is very hot, red or swollen with fever, if you cannot bear weight after an injury, or if you have sudden significant swelling or severe pain. These symptoms should not wait for a routine appointment.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default KneePain;
