import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const Sciatica: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Sciatica Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy for sciatica in Harborne, helping you understand your symptoms, manage flare-ups and build confidence in moving again."
    canonicalPath="/treatments/sciatica"
    h1="Sciatica"
    heroParagraphs={[
      "Sciatica can be one of the most distressing conditions, with sharp, shooting pain, numbness, or tingling radiating from your lower back down through your buttock and leg. This nerve-related pain can make simple activities like sitting, walking, or even lying down extremely uncomfortable, often leaving you wondering if you'll ever feel normal again.",
      "My approach focuses on understanding what's irritating your sciatic nerve and helping you develop effective strategies to reduce symptoms and build confidence in your movement, even during flare-ups.",
    ]}
    ctaHeading="Ready to address your sciatica?"
    ctaText="Whether you're experiencing your first episode of sciatica or dealing with recurring symptoms that have been disrupting your life, physiotherapy can help you understand your condition and develop practical strategies for both immediate relief and long-term management."
    mainHeading="Why Physiotherapy is Effective for Sciatica"
    mainParagraphs={[
      "Research shows that staying active and engaging with appropriate physiotherapy leads to better outcomes for sciatica than bed rest or avoiding movement. I'll help you understand your condition, teach you positions and movements that can ease symptoms, and guide you through exercises that promote healing and prevent recurrence.",
      "Many of my patients in Harborne have successfully overcome sciatica episodes that initially felt overwhelming, learning to manage symptoms effectively and returning to their normal activities with renewed confidence in their body's ability to heal.",
    ]}
    bulletList={[
      "Sharp, shooting pain from lower back into leg",
      "Numbness and tingling in the buttock, leg, or foot",
      "Burning or electric-like sensations down the leg",
      "Pain that worsens with sitting or certain movements",
      "Difficulty finding comfortable positions for sleep",
      "Weakness in the affected leg or foot",
      "Chronic or recurring sciatica episodes",
      "Disc-related sciatica (herniated or bulging discs)",
      "Piriformis syndrome and deep buttock pain",
      "Fear and anxiety about movement during pain episodes",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Back Pain", href: "/treatments/back-pain" },
      { label: "Hip Pain", href: "/treatments/hip-pain" },
    ]}
    conditionName="sciatica"
  />
);

export default Sciatica;
