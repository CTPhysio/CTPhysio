import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const Deconditioning: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Muscle Weakness and Deconditioning Physio in Harborne, Birmingham | Chris Tiley"
    seoDescription="Physiotherapy for muscle weakness and deconditioning in Harborne, Birmingham. Rebuild strength, stamina and confidence with progressive exercise."
    canonicalPath="/treatments/deconditioning"
    h1="Build Strength for Everyday Life"
    heroEyebrow="Muscle Weakness and Deconditioning Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "When everyday activities start to feel harder, it can be frustrating or worrying. You might notice difficulty getting up from a chair, climbing stairs, carrying shopping or walking as far as you used to. Reduced activity, illness, injury or time in hospital can all contribute to losing strength and stamina.",
      "At our Harborne clinic, we take time to understand your health, current abilities and goals. Together we can find an appropriate starting point and gradually build your strength, endurance and confidence through manageable exercises.",
    ]}
    ctaHeading="Ready to rebuild your strength and confidence?"
    ctaText="Whether you want to feel stronger after illness, return to activities you have stopped doing or make everyday tasks easier, we can help you plan a gradual way forward."
    mainHeading="How We Approach Muscle Weakness and Deconditioning"
    mainParagraphs={[
      "Strength and physical capacity can often improve with progressive exercise, even after long periods of reduced activity. We focus on useful movements and activities, choosing a level that is appropriate for you and increasing the challenge as your abilities develop.",
      "We will also consider whether symptoms such as unexpected weakness or marked fatigue need medical assessment. Our aim is to help you build capacity and confidence, not simply tell you to do more or promise a fixed result.",
    ]}
    bulletList={[
      "General weakness affecting daily activities",
      "Reduced stamina and early fatigue",
      "Loss of confidence in physical abilities",
      "Deconditioning following illness or injury",
      "Age-related loss of muscle strength and physical capacity",
      "Difficulty with stairs, lifting, or walking distances",
      "Poor balance and coordination from inactivity",
      "Rebuilding fitness after prolonged bed rest",
      "Post-hospitalisation weakness and recovery",
      "Reduced activity tolerance, with assessment of possible contributing factors",
      "Fear of exercise due to past injuries or health concerns",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Balance & Falls", href: "/treatments/balance-falls" },
      { label: "Arthritis", href: "/treatments/arthritis" },
      { label: "Strength Training for Over 60s", href: "/strength-training-over-60s" },
    ]}
    conditionName="deconditioning and muscle weakness"
  />
  <section className="bg-white py-16" aria-labelledby="deconditioning-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="deconditioning-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Muscle Weakness and Deconditioning: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What does deconditioning mean?</h3><p>Deconditioning describes a reduction in physical capacity, such as strength or stamina, often following a period of reduced activity, illness or injury. We can help you understand what is contributing to your difficulties and how to rebuild gradually.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can I rebuild strength as I get older?</h3><p>Yes. Strength can improve at many ages with appropriately challenging exercise. We tailor exercises to your current abilities and progress them over time, rather than assuming that getting older means you cannot get stronger.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What if I have not exercised for years?</h3><p>You do not need to be fit to begin. We can start with manageable movements and build towards more demanding activities at a pace that suits your health, confidence and goals.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help after illness or a hospital stay?</h3><p>For many people, graded activity and strength training are useful parts of recovery. We will consider your medical history and any advice from your healthcare team before deciding what is appropriate.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should weakness be checked by a doctor?</h3><p>New, unexplained or rapidly worsening weakness needs medical assessment rather than assuming it is deconditioning. Sudden weakness, especially on one side or with facial drooping or speech changes, requires emergency help. We will also discuss medical review when fatigue or other symptoms suggest an underlying cause.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default Deconditioning;
