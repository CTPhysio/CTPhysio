import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const HipPain: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Hip Pain Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for hip pain and stiffness in Harborne, helping you improve mobility, strength and confidence with everyday activities."
    canonicalPath="/treatments/hip-pain"
    h1="Hip Pain and Stiffness"
    heroParagraphs={[
      "Hip pain and stiffness can profoundly impact your mobility and independence, making everyday activities like walking, getting up from chairs, climbing stairs, or even getting comfortable in bed challenging. Whether your symptoms have developed gradually over time or started more recently, physiotherapy can help you regain function and confidence in your movement.",
      "My approach focuses on understanding what's contributing to your hip problem and helping you develop the strength, mobility, and movement strategies needed to reduce pain and improve your quality of life.",
    ]}
    ctaHeading="Ready to address your hip pain?"
    ctaText="Whether your hip pain is affecting your walking, limiting your activities, or impacting your sleep, physiotherapy can help you understand your condition and develop effective strategies to improve your mobility and comfort."
    mainHeading="Why Physiotherapy is Effective for Hip Pain"
    mainParagraphs={[
      "Evidence consistently shows that exercise-based treatment is highly beneficial for hip conditions, often helping people avoid or delay the need for surgery while significantly improving function and comfort. I'll help you understand your hip condition, address stiffness and weakness, and guide you through exercises that can make a real difference to your daily activities.",
      "Many of my patients in Harborne have successfully managed their hip pain, improved their walking distance and confidence, and returned to activities like gardening, dancing, and longer walks - often experiencing better outcomes than they thought possible.",
    ]}
    bulletList={[
      "Hip osteoarthritis and age-related joint changes",
      "Stiffness and reduced range of motion affecting daily tasks",
      "Pain with walking, stairs, or getting up from sitting",
      "Hip bursitis and inflammation (trochanteric pain syndrome)",
      "Groin pain and hip flexor problems",
      "Post-surgical rehabilitation (including hip replacements)",
      "Referred pain from the lower back",
      "Hip weakness affecting balance and stability",
      "Chronic hip tension and muscle imbalances",
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
);

export default HipPain;
