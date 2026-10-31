import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const ShoulderPain: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Shoulder Pain Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Shoulder pain physiotherapy in Harborne, Birmingham. Support with shoulder stiffness, injuries and rehabilitation to help you regain movement and strength."
    canonicalPath="/treatments/shoulder-pain"
    h1="Get Back to Moving with Confidence"
    heroEyebrow="Shoulder Pain Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Shoulder pain can make everyday things like getting dressed, reaching overhead, sleeping or lifting more difficult. Whether it started suddenly or has developed gradually, we can help you understand what may be contributing to it and find a way forward.",
      "At our Harborne clinic, we listen to your concerns, assess how your shoulder moves and works, and agree on a plan that fits your goals. That may include advice, exercises and progressive strengthening to help you regain confidence in using your arm.",
    ]}
    ctaHeading="Ready to address your shoulder pain?"
    ctaText="Whether your shoulder pain is affecting work, sleep, exercise or everyday activities, we can help you understand your options and plan a gradual return to what matters to you."
    mainHeading="How We Approach Shoulder Pain"
    mainParagraphs={[
      "Many shoulder problems can benefit from exercise, gradually increasing strength and finding ways to keep moving. We will tailor your rehabilitation to your symptoms and goals, and consider other treatment options or further medical assessment where appropriate.",
      "Your goals might include reaching a high shelf, lifting your children, returning to swimming, playing tennis or feeling comfortable in the gym. We will help you work towards them at a pace that suits you, without promising a one-size-fits-all result.",
    ]}
    bulletList={[
      "Rotator cuff-related shoulder pain and injuries",
      "Frozen shoulder (adhesive capsulitis) and stiffness",
      "Age-related shoulder wear and arthritis",
      "Pain with overhead reaching and lifting",
      "Night pain affecting sleep quality",
      "Post-surgical rehabilitation (rotator cuff repair, shoulder replacement)",
      "Shoulder instability and weakness",
      "Neck-related shoulder pain",
      "Sports-related shoulder injuries",
      "Persistent shoulder discomfort and weakness",
      "Bursitis and inflammation",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Neck Pain", href: "/treatments/neck-pain" },
      { label: "Surgical Rehabilitation", href: "/treatments/surgical-rehab" },
    ]}
    conditionName="shoulder pain"
  />
  <section className="bg-white py-16" aria-labelledby="shoulder-pain-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="shoulder-pain-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Shoulder Pain: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help with rotator cuff-related shoulder pain?</h3><p>Many people with rotator cuff-related pain benefit from understanding their symptoms, adapting aggravating activities and gradually building shoulder strength. We can help you develop a plan that suits your goals.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I stop using my shoulder if it hurts?</h3><p>Complete rest is not usually necessary for uncomplicated shoulder pain. We can help you find manageable movements, adjust activities that aggravate your symptoms and gradually rebuild your capacity.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need a scan before booking physiotherapy?</h3><p>Not always. Your symptoms and examination help us decide whether imaging or further medical assessment might be useful. Many shoulder problems can be assessed and managed without a scan.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help with a frozen shoulder?</h3><p>We can help you understand the condition, find ways to manage day-to-day activities and work on movement and strength within your tolerance. Recovery varies, so we will discuss realistic expectations and other treatment options when relevant.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I seek urgent medical advice?</h3><p>Seek prompt medical assessment after a significant injury, particularly if you cannot move your arm, the shoulder looks deformed, or you develop sudden marked weakness. Shoulder pain with chest pain, breathlessness or other concerning symptoms needs emergency medical assessment.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default ShoulderPain;
