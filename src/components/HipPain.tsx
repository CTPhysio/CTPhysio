import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const HipPain: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Hip Pain Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Hip pain physiotherapy in Harborne, Birmingham. Help with hip arthritis, stiffness and rehabilitation through movement, advice and progressive strengthening."
    canonicalPath="/treatments/hip-pain"
    h1="Move More Comfortably and Confidently"
    heroEyebrow="Hip Pain Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Hip pain or stiffness can make walking, stairs, getting out of a chair or sleeping comfortably more difficult. Whether your symptoms started recently or have developed gradually, we can help you understand what might be contributing to them and find a way forward.",
      "At our Harborne clinic, we listen to your concerns, assess your movement and strength, and discuss the activities that matter to you. Together we can build a practical plan involving advice, manageable exercises and progressive strengthening.",
    ]}
    ctaHeading="Ready to address your hip pain?"
    ctaText="Whether your hip pain is affecting your walking, limiting your activities, or impacting your sleep, physiotherapy can help you understand your condition and develop effective strategies to improve your mobility and comfort."
    mainHeading="How We Approach Hip Pain"
    mainParagraphs={[
      "Exercise and progressive strengthening can be helpful for many hip problems, including hip osteoarthritis. We will help you find an appropriate starting point, manage changes in symptoms and gradually build towards the activities you want to do.",
      "Your goals might include walking further, climbing stairs, gardening, cycling or returning to sport. Some symptoms benefit from additional medical assessment or surgical advice; we will discuss this when appropriate rather than assuming one approach suits everyone.",
    ]}
    bulletList={[
      "Hip osteoarthritis and age-related joint changes",
      "Stiffness and reduced range of motion affecting daily tasks",
      "Pain with walking, stairs, or getting up from sitting",
      "Greater trochanteric pain syndrome (pain around the outside of the hip)",
      "Groin pain and hip flexor problems",
      "Post-surgical rehabilitation (including hip replacements)",
      "Referred pain from the lower back",
      "Hip weakness affecting balance and stability",
      "Persistent hip pain or weakness",
      "Difficulty with prolonged sitting or sleeping positions",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Back Pain", href: "/treatments/back-pain" },
      { label: "Arthritis", href: "/treatments/arthritis" },
      { label: "Surgical Rehabilitation", href: "/treatments/surgical-rehab" },
      { label: "Balance & Falls", href: "/treatments/balance-falls" },
    ]}
    conditionName="hip pain"
  />
  <section className="bg-white py-16" aria-labelledby="hip-pain-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="hip-pain-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Hip Pain: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help with hip osteoarthritis?</h3><p>Exercise, strength training and practical advice can help many people manage hip osteoarthritis and stay active. We will tailor the plan to your symptoms, goals and what you feel ready to do.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I keep walking if my hip hurts?</h3><p>Often you can stay active by adjusting the distance, pace or frequency of walking. We can help you work out what is manageable and how to build up gradually, rather than simply pushing through pain or stopping altogether.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help with pain on the outside of my hip?</h3><p>Yes. Pain around the outside of the hip can have several causes, including greater trochanteric pain syndrome. Assessment helps us understand your symptoms and choose appropriate advice and strengthening exercises.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you support recovery after a hip replacement?</h3><p>We can help you rebuild movement, strength and confidence after hip replacement surgery, taking account of the guidance from your surgical team and your individual goals.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I seek urgent medical advice?</h3><p>Seek urgent assessment if you cannot bear weight after a fall or injury, have severe sudden hip pain, or develop a hot, swollen joint with fever. These symptoms need medical assessment rather than a routine physiotherapy appointment.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default HipPain;
