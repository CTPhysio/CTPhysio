import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const KneePain: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Knee Pain Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for knee pain in Harborne, including arthritis, injuries, stiffness and post-surgical rehabilitation. Get help to move with confidence again."
    canonicalPath="/treatments/knee-pain"
    h1="Knee Pain"
    heroParagraphs={[
      "Knee pain is one of the most common reasons people seek physiotherapy, particularly as we age. Whether you're experiencing the gradual onset of arthritis, recovering from a recent injury, or dealing with persistent discomfort that's affecting your daily life, effective treatment can help you regain confidence in your movement.",
      "My approach focuses on understanding your specific knee condition and helping you develop the strength, mobility, and knowledge needed to manage your symptoms and return to activities you value.",
    ]}
    ctaHeading="Ready to address your knee pain?"
    ctaText="Whether your knee pain developed gradually over time or started after a specific incident, physiotherapy can help you understand your condition and develop strategies to move forward with confidence."
    mainHeading="Why Physiotherapy Works for Knee Pain"
    mainParagraphs={[
      "Research shows that exercise-based treatment is highly effective for most knee conditions, often providing better long-term outcomes than passive treatments alone. I'll help you understand what's happening with your knee, guide you through appropriate exercises, and provide hands-on treatment to reduce pain and improve function.",
      "Many of my patients in Harborne have successfully managed their knee pain, improved their walking confidence, and returned to activities like gardening, hiking, and playing with grandchildren - often avoiding the need for surgery.",
    ]}
    bulletList={[
      "Knee osteoarthritis and age-related joint changes",
      "Persistent knee stiffness and reduced range of motion",
      "Pain with walking, stairs, or getting up from chairs",
      "Post-surgical rehabilitation (including knee replacements)",
      "Meniscus tears and cartilage issues",
      "Kneecap pain (patellofemoral pain syndrome)",
      "Sports-related injuries (ACL, MCL, runner's knee)",
      "Chronic swelling and inflammation",
      "Knee instability and weakness",
      "IT band syndrome and bursitis",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Arthritis", href: "/treatments/arthritis" },
      { label: "Sports Injuries", href: "/treatments/sports-injuries" },
      { label: "Runner/Triathlete Rehabilitation", href: "/treatments/runner-triathlete-rehab" },
      { label: "Surgical Rehabilitation", href: "/treatments/surgical-rehab" },
    ]}
    conditionName="knee pain"
  />
);

export default KneePain;
