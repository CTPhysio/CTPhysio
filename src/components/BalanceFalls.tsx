import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const BalanceFalls: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Balance & Falls Prevention Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for balance problems and falls prevention in Harborne, helping you improve strength, stability and confidence when moving."
    canonicalPath="/treatments/balance-falls"
    h1="Balance and Falls Prevention"
    heroParagraphs={[
      "Balance problems and concerns about falling can significantly impact your confidence and independence, often leading to reduced activity and social isolation. Whether you've experienced a fall, feel unsteady on your feet, or are worried about your balance deteriorating, physiotherapy can help you regain stability and confidence in your movement.",
      "My approach focuses on identifying what's contributing to your balance issues and helping you develop the strength, coordination, and strategies needed to move safely and confidently in all situations.",
    ]}
    ctaHeading="Ready to improve your balance and confidence?"
    ctaText="Whether you're experiencing dizziness, feeling unsteady, or simply want to maintain your independence as you age, physiotherapy can help you develop the strength and skills needed to move safely and confidently."
    mainHeading="Why Physiotherapy is Effective for Balance Issues"
    mainParagraphs={[
      "Research consistently demonstrates that targeted balance and strength training can significantly reduce fall risk and improve confidence in movement. I'll help you understand your specific balance challenges, address any underlying causes, and guide you through exercises proven to enhance stability and prevent falls.",
      "Many of my patients in Harborne have successfully improved their balance, regained confidence in walking on uneven surfaces, and returned to activities they had started avoiding due to fear of falling.",
    ]}
    bulletList={[
      "General unsteadiness and reduced confidence walking",
      "Dizziness and vertigo affecting balance",
      "BPPV (Benign Positional Vertigo) - treated with techniques like the Epley manoeuvre",
      "Muscle weakness in legs affecting stability",
      "Poor balance on uneven surfaces or in the dark",
      "Fear of falling limiting daily activities",
      "Recovery after a fall or near-miss",
      "Medication-related dizziness and balance issues",
      "Age-related balance decline",
      "Coordination problems affecting walking",
      "Strengthening programs to prevent future falls",
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
);

export default BalanceFalls;
