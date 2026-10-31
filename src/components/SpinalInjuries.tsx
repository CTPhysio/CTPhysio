import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const SpinalInjuries: React.FC = () => (
  <>
    <TreatmentPageTemplate
      seoTitle="Spinal Injury Rehabilitation in Harborne, Birmingham | Chris Tiley"
      seoDescription="Physiotherapy for appropriate spinal injury rehabilitation in Harborne, Birmingham, with individual assessment, graded movement and strength work."
      canonicalPath="/treatments/spinal-injuries"
      h1="Spinal Injury Rehabilitation in Harborne"
      heroEyebrow="Spinal Injuries in Harborne, Birmingham"
      heroParagraphs={["A spinal injury or a diagnosis involving your back or neck can understandably raise concerns about movement and what is safe. The right rehabilitation depends on the nature of the injury and whether medical assessment or restrictions are needed.","We support people with suitable musculoskeletal spinal problems at our Harborne clinic, with an emphasis on understanding your situation and gradually rebuilding confidence and function."]}
      ctaHeading="Ready to discuss your rehabilitation?"
      ctaText="We can assess your symptoms, discuss your goals and agree on a realistic next step."
      mainHeading="Careful assessment and appropriate progression"
      mainParagraphs={["We will ask about the onset of symptoms, any injury or diagnosis, investigations, treatment received and current restrictions. A physical assessment is only appropriate when it is safe to proceed.","For suitable patients, rehabilitation may include gentle movement, progressive strengthening and practical advice about returning to work, exercise and daily tasks. We tailor the plan to your symptoms, goals and medical guidance.","Suspected spinal fracture, spinal cord injury or new neurological problems require urgent medical assessment rather than routine physiotherapy. If you have had spinal surgery or a significant injury, we may need clearance or guidance from your treating team before starting."]}
      bulletList={["Rehabilitation after medically assessed back or neck injuries","Movement and strength following an appropriate healing period","Managing stiffness and reduced confidence with movement","Returning to everyday activities and exercise","Working alongside advice from a surgeon or medical team when required"]}
      imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
      relatedConditions={[{"label":"Back Pain","href":"/treatments/back-pain/"},{"label":"Neck Pain","href":"/treatments/neck-pain/"},{"label":"Surgical Rehabilitation","href":"/treatments/surgical-rehab/"}]}
      conditionName="spinal injuries"
    />
    <section className="bg-white py-16" aria-labelledby="spinal-injuries-faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="spinal-injuries-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Spinal Injuries: Frequently Asked Questions</h2>
        <div className="space-y-7 text-gray-700">
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can I book physiotherapy after a spinal injury?</h3><p>It depends on the injury and any medical restrictions. Please tell us about your diagnosis and treatment so we can advise whether an appointment is appropriate.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What if I have a spinal fracture?</h3><p>A suspected or recent fracture needs medical assessment and a clear plan for healing and activity restrictions before routine rehabilitation.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Is exercise safe after a spinal injury?</h3><p>Exercise may be helpful at the right stage, but the type and timing depend on the diagnosis and medical advice.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What symptoms need urgent attention?</h3><p>New bladder or bowel dysfunction, numbness around the saddle area, or significant or worsening weakness need urgent emergency assessment.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help after spinal surgery?</h3><p>We can discuss rehabilitation once the surgeon's guidance and any restrictions are clear. The programme will depend on the procedure and your recovery.</p></div>
        </div>
      </div>
    </section>
  </>
);

export default SpinalInjuries;
