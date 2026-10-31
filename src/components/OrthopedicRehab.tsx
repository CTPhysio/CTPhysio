import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const OrthopedicRehab: React.FC = () => (
  <>
    <TreatmentPageTemplate
      seoTitle="Orthopaedic Rehabilitation in Harborne, Birmingham | Chris Tiley"
      seoDescription="Physiotherapy for joint, bone and soft-tissue problems in Harborne, Birmingham. Build strength, restore movement and work towards your goals."
      canonicalPath="/treatments/orthopedic-rehab"
      h1="Orthopaedic Rehabilitation in Harborne"
      heroEyebrow="Orthopaedic Rehabilitation in Harborne, Birmingham"
      heroParagraphs={["An injury, painful joint or period of reduced activity can make everyday movement feel less straightforward. Whether you are recovering after a fracture, managing persistent joint symptoms or building confidence after an injury, rehabilitation should fit your circumstances.","At our Harborne clinic, we listen to what has changed, assess your movement and strength, and help you work towards the activities that matter to you."]}
      ctaHeading="Ready to discuss your rehabilitation?"
      ctaText="We can assess your symptoms, discuss your goals and agree on a realistic next step."
      mainHeading="A practical plan for your recovery"
      mainParagraphs={["Your first appointment includes a discussion of your symptoms, medical history and goals, followed by a relevant physical assessment. We will explain what we find and agree a plan together.","Rehabilitation often involves gradually progressing strength, mobility and activity. We can adapt exercises to your starting point and review how you respond rather than following a fixed programme for everyone.","If your injury needs medical investigation or input from another healthcare professional, we will discuss the appropriate next steps. Recovery times vary according to the condition and individual circumstances."]}
      bulletList={["Rehabilitation after fractures once medically cleared","Joint pain and stiffness","Ligament and soft-tissue injuries","Building strength after a period of reduced activity","Confidence with walking, stairs and daily activities","Returning to exercise and hobbies"]}
      imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
      relatedConditions={[{"label":"Surgical Rehabilitation","href":"/treatments/surgical-rehab/"},{"label":"Arthritis","href":"/treatments/arthritis/"},{"label":"Knee Pain","href":"/treatments/knee-pain/"}]}
      conditionName="orthopaedic rehabilitation"
    />
    <section className="bg-white py-16" aria-labelledby="orthopedic-rehab-faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="orthopedic-rehab-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Orthopaedic Rehabilitation: Frequently Asked Questions</h2>
        <div className="space-y-7 text-gray-700">
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What happens at an orthopaedic rehabilitation appointment?</h3><p>We will ask about your symptoms, history and goals, assess relevant movements and strength, and agree a practical starting plan.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need a scan before booking?</h3><p>Not necessarily. We can assess many musculoskeletal problems clinically and discuss whether imaging or medical review would be useful.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help after a fracture?</h3><p>Once your treating team has confirmed the appropriate stage of healing and any restrictions, rehabilitation may help you restore movement, strength and confidence.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Will I need exercises at home?</h3><p>Often, yes. We aim for a manageable programme that fits your routine and progress it as your capacity improves.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">How long will rehabilitation take?</h3><p>That depends on the injury, your starting point and goals. We will review progress together and adjust the plan rather than promise a fixed recovery time.</p></div>
        </div>
      </div>
    </section>
  </>
);

export default OrthopedicRehab;
