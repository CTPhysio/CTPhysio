import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const Deconditioning: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Physiotherapy for Muscle Weakness & Deconditioning | Chris Tiley Physiotherapy"
    seoDescription="Physiotherapy and progressive exercise for muscle weakness and deconditioning in Harborne, helping you rebuild strength, fitness and confidence."
    canonicalPath="/treatments/deconditioning"
    h1="General Deconditioning/Muscle Weakness"
    heroParagraphs={[
      "Loss of strength and fitness can happen gradually over time due to reduced activity, illness, injury, or simply the natural changes that come with aging. You might notice that everyday tasks feel more challenging, you tire more easily, or you've lost confidence in your physical abilities. The encouraging news is that with the right approach, strength and fitness can be rebuilt at any age.",
      "My approach focuses on understanding your current fitness level and health history, then gradually building your strength, endurance, and confidence through a safe and progressive exercise program tailored to your needs and goals.",
    ]}
    ctaHeading="Ready to rebuild your strength and confidence?"
    ctaText="Whether you're recovering from illness, dealing with gradual decline, or simply want to feel stronger and more capable in your daily activities, physiotherapy can help you safely regain the fitness and confidence you deserve."
    mainHeading="Why Physiotherapy is Effective for Deconditioning"
    mainParagraphs={[
      "Research consistently shows that structured, progressive exercise programmes can significantly improve strength, endurance, and quality of life, even in people who have been inactive for extended periods. I'll help you start at an appropriate level and progress safely, ensuring you build both physical capacity and confidence in your abilities.",
      "Many of my patients in Harborne have successfully rebuilt their fitness and strength, often surprised by how much they can achieve with consistent effort and proper guidance, returning to activities they thought were no longer possible.",
    ]}
    bulletList={[
      "General weakness affecting daily activities",
      "Reduced stamina and early fatigue",
      "Loss of confidence in physical abilities",
      "Deconditioning following illness or injury",
      "Age-related muscle loss and frailty",
      "Difficulty with stairs, lifting, or walking distances",
      "Poor balance and coordination from inactivity",
      "Rebuilding fitness after prolonged bed rest",
      "Post-hospitalisation weakness and recovery",
      "Chronic fatigue affecting activity levels",
      "Fear of exercise due to past injuries or health concerns",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Balance & Falls", href: "/treatments/balance-falls" },
      { label: "Arthritis", href: "/treatments/arthritis" },
    ]}
    conditionName="deconditioning and muscle weakness"
  />
);

export default Deconditioning;
