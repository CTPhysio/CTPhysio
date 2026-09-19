import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const ShoulderPain: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Shoulder Pain Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for shoulder pain in Harborne, helping you restore movement, strength and confidence and get back to the activities you enjoy."
    canonicalPath="/treatments/shoulder-pain"
    h1="Shoulder Pain"
    heroParagraphs={[
      "Shoulder pain can be particularly frustrating as it often interferes with everyday tasks we take for granted - reaching into cupboards, getting dressed, sleeping comfortably, or lifting objects. Whether your shoulder pain developed gradually or started after a specific activity, physiotherapy can help you regain function and confidence in your arm movement.",
      "My approach focuses on understanding what's contributing to your shoulder problem and helping you restore mobility, strength, and the ability to use your arm without pain or limitation.",
    ]}
    ctaHeading="Ready to address your shoulder pain?"
    ctaText="Whether your shoulder pain is preventing you from reaching comfortably, affecting your sleep, or limiting activities you enjoy, physiotherapy can help you understand your condition and work toward regaining full, pain-free movement."
    mainHeading="Why Physiotherapy Works for Shoulder Pain"
    mainParagraphs={[
      "Research demonstrates that exercise-based treatment is highly effective for most shoulder conditions, often providing better long-term results than injections or passive treatments alone. I'll help you understand your shoulder condition, address any movement restrictions, and guide you through a progressive program to restore function.",
      "Many of my patients in Harborne have successfully overcome shoulder pain that was limiting their daily activities, sleep, and hobbies - often avoiding the need for surgery and regaining full use of their arm.",
    ]}
    bulletList={[
      "Rotator cuff injuries and impingement syndrome",
      "Frozen shoulder (adhesive capsulitis) and stiffness",
      "Age-related shoulder wear and arthritis",
      "Pain with overhead reaching and lifting",
      "Night pain affecting sleep quality",
      "Post-surgical rehabilitation (rotator cuff repair, shoulder replacement)",
      "Shoulder instability and weakness",
      "Neck-related shoulder pain",
      "Sports-related shoulder injuries",
      "Chronic shoulder tension and muscle imbalances",
      "Bursitis and inflammation",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Neck Pain", href: "/treatments/neck-pain" },
      { label: "Surgical Rehabilitation", href: "/treatments/surgical-rehab" },
    ]}
    conditionName="shoulder pain"
  />
);

export default ShoulderPain;
