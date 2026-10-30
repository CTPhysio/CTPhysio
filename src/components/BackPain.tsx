import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const BackPain: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Lower Back Pain Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Lower back pain physiotherapy in Harborne, Birmingham. Understand your symptoms, build strength and confidence, and get back to the activities you enjoy."
    canonicalPath="/treatments/back-pain"
    h1="Lower Back Pain Physiotherapy in Harborne, Birmingham"
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
);

export default BackPain;
