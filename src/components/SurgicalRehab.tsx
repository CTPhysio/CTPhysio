import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const SurgicalRehab: React.FC = () => (
  <TreatmentPageTemplate
    seoTitle="Pre & Post-Surgical Physiotherapy in Harborne | Chris Tiley Physiotherapy"
    seoDescription="Pre and post-surgical physiotherapy in Harborne to help you prepare for surgery, recover well and rebuild strength, movement and confidence."
    canonicalPath="/treatments/surgical-rehab"
    h1="Pre/Post Surgical Rehabilitation"
    heroParagraphs={[
      "Surgery can be a significant step in addressing your condition, whether it's a planned joint replacement, rotator cuff repair, or other procedure. The period before and after surgery presents a valuable opportunity to optimize your recovery and achieve the best possible outcomes through targeted physiotherapy.",
      "My approach focuses on preparing your body for surgery when possible, and then guiding you through a structured recovery process that helps you regain function, strength, and confidence in your movement.",
    ]}
    ctaHeading="Ready to optimize your surgical recovery?"
    ctaText="Whether you're preparing for surgery or beginning your rehabilitation journey, physiotherapy can help you navigate this process with confidence and achieve the best possible outcome from your procedure."
    mainHeading="Why Pre and Post-Surgical Physiotherapy Makes a Difference"
    mainParagraphs={[
      "Evidence shows that patients who engage in physiotherapy before surgery often experience faster recovery times, less post-operative pain, and better long-term outcomes. Post-surgically, structured rehabilitation is essential for restoring function and preventing complications.",
      "I'll help you understand what to expect during your recovery, address any concerns you have about the process, and provide you with the tools and exercises needed to achieve your rehabilitation goals.",
      "Many of my patients in Harborne have successfully navigated their surgical recovery, often achieving better outcomes than they anticipated and returning to activities they value with renewed confidence.",
    ]}
    bulletList={[
      "Pre-surgical conditioning and preparation",
      "Post-operative pain and swelling management",
      "Joint replacement recovery (hip, knee, shoulder)",
      "Rotator cuff and shoulder surgery rehabilitation",
      "Spinal surgery recovery and movement re-education",
      "ACL and other sports injury surgery recovery",
      "Scar tissue management and mobility restoration",
      "Gradual return to daily activities and work",
      "Strength rebuilding and functional training",
      "Long-term maintenance and injury prevention",
      "Managing expectations and recovery anxieties",
    ]}
    imageUrl="https://lh3.googleusercontent.com/p/AF1QipP4v9ya-xB_2jtMgpyz5gjO0ONL6mcdIUcvyVwC=s680-w680-h510-rw"
    relatedConditions={[
      { label: "Knee Pain", href: "/treatments/knee-pain" },
      { label: "Hip Pain", href: "/treatments/hip-pain" },
      { label: "Shoulder Pain", href: "/treatments/shoulder-pain" },
    ]}
    conditionName="surgical recovery"
  />
);

export default SurgicalRehab;
