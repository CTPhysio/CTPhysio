import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const OveruseInjuries: React.FC = () => (
  <>
    <TreatmentPageTemplate
      seoTitle="Overuse Injury Physiotherapy in Harborne, Birmingham | Chris Tiley"
      seoDescription="Physiotherapy for persistent tendon and activity-related pain in Harborne, Birmingham. Understand symptoms and build a gradual return to activity."
      canonicalPath="/treatments/overuse-injuries"
      h1="Physiotherapy for Overuse Injuries"
      heroEyebrow="Overuse Injuries in Harborne, Birmingham"
      heroParagraphs={["Pain that builds gradually during work, sport or everyday activity can be frustrating, especially when it keeps returning. It is not always caused by a single incident, and stopping everything is not necessarily the best long-term solution.","At our Harborne clinic, we help you understand what may be contributing to symptoms and find a manageable way to rebuild your tolerance for activity."]}
      ctaHeading="Ready to discuss your rehabilitation?"
      ctaText="We can assess your symptoms, discuss your goals and agree on a realistic next step."
      mainHeading="Understanding load, recovery and symptoms"
      mainParagraphs={["We will discuss what you do, how your symptoms behave and whether your activity has changed recently. We also assess relevant movement, strength and other factors that might affect your rehabilitation.","Treatment may include adjusting how much or how often you do an activity, progressive strengthening and advice on returning to your normal routine. We aim to find a balance between doing too much and avoiding movement unnecessarily.","Not every persistent pain problem is an overuse injury. We will consider other possible causes and recommend medical review when the history or examination suggests it is needed."]}
      bulletList={["Achilles and patellar tendon pain","Elbow tendon-related pain","Persistent shoulder pain with activity","Running-related lower-limb symptoms","Pain associated with repetitive work or hobbies","Gradual return to training and exercise"]}
      imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
      relatedConditions={[{"label":"Running & Triathlon Rehabilitation","href":"/treatments/runner-triathlete-rehab/"},{"label":"Sports Injuries","href":"/treatments/sports-injuries/"},{"label":"Shoulder Pain","href":"/treatments/shoulder-pain/"}]}
      conditionName="overuse injuries"
    />
    <section className="bg-white py-16" aria-labelledby="overuse-injuries-faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="overuse-injuries-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Overuse Injuries: Frequently Asked Questions</h2>
        <div className="space-y-7 text-gray-700">
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What is an overuse injury?</h3><p>It is a broad term for symptoms that develop or persist in association with repeated activity and the demands placed on tissues. The precise diagnosis still matters.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need to rest completely?</h3><p>Sometimes a short period of reduced activity helps, but complete rest is not always needed. We can help you find an appropriate level of movement.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Will exercises make my pain worse?</h3><p>We select and progress exercises according to your symptoms and response. Some discomfort can be acceptable in certain conditions, but the plan should be individual.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Why does the pain keep coming back?</h3><p>Recurring symptoms can have several contributors, including activity changes, insufficient recovery or an underlying condition. An assessment can help clarify the picture.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help me return to sport?</h3><p>Yes. We can plan a graded return based on the demands of your sport and how you respond to rehabilitation.</p></div>
        </div>
      </div>
    </section>
  </>
);

export default OveruseInjuries;
