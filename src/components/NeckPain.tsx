import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const NeckPain: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Neck Pain Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Neck pain physiotherapy in Harborne, Birmingham. Help with neck stiffness, headaches and rehabilitation through advice, movement and progressive strengthening."
    canonicalPath="/treatments/neck-pain"
    h1="Move with More Comfort and Confidence"
    heroEyebrow="Neck Pain Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Neck pain or stiffness can make working, driving, sleeping and everyday movement uncomfortable. Whether it started recently or has been troubling you for some time, we can help you understand your symptoms and work towards what matters to you.",
      "At our Harborne clinic, we listen to your concerns, assess your neck movement and relevant strength and nerve function, and agree on a plan together. That may include advice, exercises and gradually building confidence with movement and activity.",
    ]}
    ctaHeading="Ready to address your neck pain?"
    ctaText="Whether neck pain is affecting your sleep, work or activities you enjoy, we can help you explore what is contributing to it and develop a manageable plan."
    mainHeading="How We Approach Neck Pain"
    mainParagraphs={[
      "Many people with neck pain benefit from staying active, finding manageable movement and gradually building strength and tolerance. We can also consider hands-on treatment where appropriate, but the plan will be guided by your symptoms, preferences and goals.",
      "Your goals might include turning your head comfortably while driving, getting back to exercise, managing desk work or sleeping better. We will help you build towards those activities without assuming that posture alone is the cause of your pain.",
    ]}
    bulletList={[
      "Chronic neck stiffness and reduced range of motion",
      "Tension headaches originating from the neck",
      "Pain radiating into shoulders or arms",
      "Neck discomfort associated with prolonged desk work or other activities",
      "Whiplash and acute neck injuries",
      "Age-related cervical spine changes and arthritis",
      "Sleep-related neck pain and morning stiffness",
      "Nerve-related symptoms (tingling, numbness in arms)",
      "Neck pain alongside dizziness, where further assessment may be needed",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Shoulder Pain", href: "/treatments/shoulder-pain" },
      { label: "Back Pain", href: "/treatments/back-pain" },
    ]}
    conditionName="neck pain"
  />
  <section className="bg-white py-16" aria-labelledby="neck-pain-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="neck-pain-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Neck Pain: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help with neck pain?</h3><p>Physiotherapy can help you understand your symptoms, explore movements and activities you can manage, and build strength and confidence over time. We tailor the approach to your assessment rather than relying on a single treatment for everyone.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Is poor posture causing my neck pain?</h3><p>Neck pain rarely has one simple cause. Spending a long time in one position may aggravate symptoms, but there is no single perfect posture. Changing position regularly and gradually building tolerance for everyday activities can be helpful.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I keep moving when my neck is stiff?</h3><p>For many uncomplicated episodes of neck pain, gentle movement and gradually returning to usual activities are helpful. We can guide you on what feels manageable and how to adapt activities if symptoms flare up.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can neck problems cause headaches or arm symptoms?</h3><p>Some headaches and arm symptoms can be associated with the neck, but they can have other causes. We will ask about your symptoms, assess what is relevant and discuss whether further medical assessment is needed.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I seek urgent medical advice?</h3><p>Seek urgent medical assessment for neck pain with new or worsening arm or leg weakness, difficulty walking, or new bladder or bowel changes. A sudden severe headache, fever with marked neck stiffness, or symptoms following significant trauma also need urgent medical assessment rather than a routine appointment.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default NeckPain;
