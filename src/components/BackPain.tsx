import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const BackPain: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Lower Back Pain Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for lower back pain in Harborne, helping you understand your symptoms, improve movement and build confidence in managing your back pain."
    canonicalPath="/treatments/back-pain"
    h1="Lower Back Pain"
    heroParagraphs={[
      "Back pain affects most people at some point in their lives and can significantly impact your daily activities and quality of life. The good news is that most back pain responds well to physiotherapy, even when it feels persistent or concerning.",
      "My approach focuses on understanding what's contributing to your pain and helping you develop the knowledge, strength, and confidence to manage it effectively. Through a combination of hands-on treatment, targeted exercises, and education about your condition, we'll work together to get you moving comfortably again.",
    ]}
    ctaHeading="Ready to address your back pain?"
    ctaText="Whether you're dealing with a recent flare-up or long-standing discomfort, physiotherapy can help you regain control and get back to the activities that matter to you."
    mainHeading="Why Choose Physiotherapy for Back Pain?"
    mainParagraphs={[
      "Research consistently shows that staying active and engaging with physiotherapy leads to better outcomes than rest alone. I'll help you understand your pain, develop strategies to manage flare-ups, and build resilience to prevent future episodes.",
      "Many of my patients in Harborne have successfully returned to their normal activities, avoided unnecessary procedures, and developed confidence in their body's ability to heal and adapt.",
    ]}
    bulletList={[
      "Lower back stiffness and muscle tension",
      "Acute back strains and spasms",
      "Sciatica and nerve-related leg pain",
      "Disc-related pain (herniated or bulging discs)",
      "Age-related changes (arthritis, degenerative disc disease)",
      "Spinal stenosis and spondylolisthesis",
      "Post-surgical rehabilitation",
      "Chronic pain that has persisted for months or years",
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
