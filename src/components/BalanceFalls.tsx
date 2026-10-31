import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const BalanceFalls: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Balance and Falls Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Balance and falls physiotherapy in Harborne, Birmingham. Build strength, practise balance and improve confidence with everyday movement."
    canonicalPath="/treatments/balance-falls"
    h1="Build Strength and Confidence in Your Balance"
    heroEyebrow="Balance and Falls Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Feeling unsteady or worrying about falling can make everyday activities more difficult. Whether you have experienced a fall, noticed changes in your balance or want to stay capable as you get older, we can help you understand what is happening and take practical steps forward.",
      "At our Harborne clinic, we assess the factors that may be affecting your balance and confidence. Together we can build a plan that includes appropriate strength training, balance practice and gradually working towards the activities that matter to you.",
    ]}
    ctaHeading="Ready to improve your balance and confidence?"
    ctaText="Whether you want to feel steadier on your feet, return to walking outdoors or build confidence after a fall, we can help you work towards those goals."
    mainHeading="How We Approach Balance and Falls"
    mainParagraphs={[
      "Balance and strength exercises can reduce falls risk in many older adults. We focus on improving the abilities that matter in everyday life, including getting up from a chair, stepping, recovering balance and moving confidently in different environments. Where relevant, we can discuss other factors that need medical review.",
      "Our aim is not to promise that you will never fall. It is to help you become stronger, practise useful skills and feel more capable. We can adapt the level of challenge to your starting point and progress it as you become ready.",
    ]}
    bulletList={[
      "General unsteadiness and reduced confidence walking",
      "Dizziness and vertigo affecting balance",
      "Positional vertigo, including BPPV, where appropriate assessment and treatment may be needed",
      "Muscle weakness in legs affecting stability",
      "Poor balance on uneven surfaces or in the dark",
      "Fear of falling limiting daily activities",
      "Recovery after a fall or near-miss",
      "Dizziness that may require review of medication or other medical causes",
      "Age-related balance decline",
      "Coordination problems affecting walking",
      "Progressive strength and balance training to reduce falls risk",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Deconditioning", href: "/treatments/deconditioning" },
      { label: "Hip Pain", href: "/treatments/hip-pain" },
      { label: "Arthritis", href: "/treatments/arthritis" },
      { label: "Strength Training for Over 60s", href: "/strength-training-over-60s" },
    ]}
    conditionName="balance and falls"
  />
  <section className="bg-white py-16" aria-labelledby="balance-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="balance-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Balance and Falls: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can strength training improve balance?</h3><p>Strength is one important part of staying steady, but balance also improves through practising balance tasks. We can combine appropriate strengthening with exercises that challenge your balance safely and progressively.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Is it too late to improve my balance?</h3><p>No. People can improve strength and balance at many ages. We will start from what you can manage now and build the challenge gradually, taking account of your confidence and any health conditions.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What happens during a balance assessment?</h3><p>We discuss any falls or near-misses, your health and daily activities, then assess relevant strength, mobility and balance tasks. We will explain what we find and agree on a practical plan.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help if I am worried about getting up after a fall?</h3><p>Where appropriate, we can work on strength, mobility and strategies for getting down to and up from the floor. We will adapt this to your abilities and discuss when it is safer to call for help.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should dizziness or balance changes be checked urgently?</h3><p>Sudden severe dizziness or loss of balance with facial drooping, speech changes, new weakness, double vision or a severe headache needs emergency assessment. New unexplained falls, fainting or rapidly worsening balance should also be medically assessed rather than assumed to be an age-related change.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default BalanceFalls;
