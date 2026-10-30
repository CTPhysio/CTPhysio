import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const BackPain: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Lower Back Pain Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Lower back pain physiotherapy in Harborne, Birmingham. Understand your symptoms, build strength and confidence, and get back to the activities you enjoy."
    canonicalPath="/treatments/back-pain"
    h1="Get Back to Doing What You Love"
    heroEyebrow="Lower Back Pain Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Back pain can make everyday activities, work, sleep and exercise feel difficult. Whether your symptoms started recently or have been around for a while, we can help you understand what may be contributing to them and find a way forward.",
      "At our Harborne clinic, we take time to listen, assess your movement and discuss what matters to you. Treatment may include advice, exercises, progressive strength training and hands-on treatment where appropriate. The aim is to help you move with more confidence and return to the activities you enjoy.",
    ]}
    ctaHeading="Ready to address your back pain?"
    ctaText="Whether you're dealing with a recent flare-up or long-standing discomfort, physiotherapy can help you regain control and get back to the activities that matter to you."
    mainHeading="Why Choose Physiotherapy for Back Pain?"
    mainParagraphs={[
      "For many people with lower back pain, gradually returning to normal activity is more helpful than prolonged rest. We will work with you to find movements you can manage, understand flare-ups and build up activity at a pace that suits you.",
      "There is no single exercise or treatment that suits everyone. Your plan will reflect your symptoms, goals and preferences, whether you want to sit comfortably at work, lift your children, get back to running or feel more confident in the gym.",
    ]}
    bulletList={[
      "Lower back stiffness and muscle tension",
      "Acute back strains and spasms",
      "Sciatica and nerve-related leg pain",
      "Back pain sometimes associated with disc changes",
      "Back pain associated with age-related spinal changes",
      "Symptoms associated with spinal stenosis or spondylolisthesis",
      "Post-surgical rehabilitation",
      "Persistent back pain lasting months or years",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipOBSAH73ObiUfNTFSDCJv3sKIxkXEKimAFAnjCW=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Sciatica", href: "/treatments/sciatica" },
      { label: "Hip Pain", href: "/treatments/hip-pain" },
      { label: "Surgical Rehabilitation", href: "/treatments/surgical-rehab" },
    ]}
    conditionName="back pain"
  />
  <section className="bg-white py-16" aria-labelledby="back-pain-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="back-pain-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Lower Back Pain: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help with lower back pain?</h3><p>Physiotherapy can help you understand your symptoms, identify activities you can safely build back towards and develop a plan to improve movement, strength and confidence. The right approach depends on your individual assessment.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I rest or keep moving when my back hurts?</h3><p>For most episodes of uncomplicated lower back pain, gentle movement and a gradual return to usual activities are preferable to prolonged bed rest. We can help you find a manageable starting point and adjust it as you improve.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need a scan before booking?</h3><p>Not usually. Many people with back pain do not need an X-ray or MRI before physiotherapy. We will discuss your symptoms and assess whether further medical investigation is appropriate.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What happens at my first appointment?</h3><p>Your initial physiotherapy assessment lasts 60 minutes and costs £80. We will talk through your symptoms and goals, assess what is relevant and agree on a plan together.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I seek urgent medical help?</h3><p>Seek urgent medical assessment if back pain is accompanied by new bladder or bowel difficulties, numbness around your genitals or bottom, or significant or worsening leg weakness. These symptoms need prompt medical attention rather than a routine physiotherapy booking.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default BackPain;
