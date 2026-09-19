import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const NeckPain: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Neck Pain Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for neck pain and stiffness in Harborne, helping you improve movement, reduce discomfort and build confidence in everyday activities."
    canonicalPath="/treatments/neck-pain"
    h1="Neck Pain and Stiffness"
    heroParagraphs={[
      "Neck pain and stiffness can significantly impact your daily comfort and quality of life, often affecting everything from sleep and driving to simple tasks like looking over your shoulder. Whether your symptoms developed gradually over time or started after a specific incident, effective physiotherapy treatment can help you regain mobility and reduce discomfort.",
      "My approach focuses on identifying the factors contributing to your neck pain and helping you develop better movement patterns, strength, and strategies to manage and prevent future episodes.",
    ]}
    ctaHeading="Ready to address your neck pain?"
    ctaText="Whether you're dealing with daily stiffness, recurring headaches, or persistent discomfort that's affecting your activities, physiotherapy can help you understand your condition and develop effective strategies for lasting improvement."
    mainHeading="Why Physiotherapy is Effective for Neck Pain"
    mainParagraphs={[
      "Evidence shows that active treatment combining manual therapy, targeted exercises, and education about posture and movement leads to better outcomes than rest alone. I'll help you understand your neck condition, address muscle tension and joint stiffness, and build the resilience needed for long-term improvement.",
      "Many of my patients in Harborne have successfully reduced their neck pain, improved their sleep quality, and regained confidence in daily activities like driving, reading, and participating in hobbies without constant discomfort.",
    ]}
    bulletList={[
      "Chronic neck stiffness and reduced range of motion",
      "Tension headaches originating from the neck",
      "Pain radiating into shoulders or arms",
      "Postural-related neck pain from desk work or prolonged activities",
      "Whiplash and acute neck injuries",
      "Age-related cervical spine changes and arthritis",
      "Sleep-related neck pain and morning stiffness",
      "Nerve-related symptoms (tingling, numbness in arms)",
      "Dizziness associated with neck problems",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Shoulder Pain", href: "/treatments/shoulder-pain" },
      { label: "Back Pain", href: "/treatments/back-pain" },
    ]}
    conditionName="neck pain"
  />
);

export default NeckPain;
