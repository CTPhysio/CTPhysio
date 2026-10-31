import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const SurgicalRehab: React.FC = () => (
  <>
  <TreatmentPageTemplate
    seoTitle="Surgical Rehabilitation Physiotherapy in Harborne, Birmingham | Chris Tiley"
    seoDescription="Physiotherapy before and after surgery in Harborne, Birmingham. Personalised rehabilitation to rebuild movement, strength and confidence."
    canonicalPath="/treatments/surgical-rehab"
    h1="Rebuild Strength and Confidence After Surgery"
    heroEyebrow="Surgical Rehabilitation Physiotherapy in Harborne, Birmingham"
    heroParagraphs={[
      "Preparing for surgery or recovering afterwards can bring questions about pain, movement and when you can return to everyday activities. Whether you are having a joint replacement, ligament repair or another operation, we can help you work towards your rehabilitation goals.",
      "At our Harborne clinic, we listen to your concerns, understand the procedure and any guidance from your surgical team, and agree on a practical plan. This may include preparing your strength before surgery and gradually rebuilding movement, capacity and confidence afterwards.",
    ]}
    ctaHeading="Looking for support before or after surgery?"
    ctaText="We can help you understand the next steps in your rehabilitation and develop a plan that reflects your procedure, recovery stage and goals."
    mainHeading="How We Approach Surgical Rehabilitation"
    mainParagraphs={[
      "Rehabilitation needs vary depending on the operation, your health and the advice from your surgical team. We can help you understand relevant precautions, work on appropriate movement and gradually rebuild strength and function as recovery allows.",
      "We will discuss what you want to get back to, whether that is walking comfortably, returning to work, lifting, sport or everyday independence. Your plan can change as you progress, and we will communicate with your medical team where appropriate.",
      "We avoid promising a fixed recovery timeline or outcome. Our aim is to support steady, realistic progress and help you feel more confident about the activities that matter to you.",
    ]}
    bulletList={[
      "Pre-surgical conditioning and preparation",
      "Post-operative pain and swelling management",
      "Joint replacement recovery (hip, knee, shoulder)",
      "Rotator cuff and shoulder surgery rehabilitation",
      "Spinal surgery recovery and movement re-education",
      "ACL and other sports injury surgery recovery",
      "Movement and mobility work where appropriate for your procedure",
      "Gradual return to daily activities and work",
      "Strength rebuilding and functional training",
      "Longer-term strength and activity planning",
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
  <section className="bg-white py-16" aria-labelledby="surgical-rehab-faq">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 id="surgical-rehab-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Surgical Rehabilitation: Frequently Asked Questions</h2>
      <div className="space-y-7 text-gray-700">
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can physiotherapy help before surgery?</h3><p>For some planned procedures, improving strength and understanding what to expect can be useful preparation. We can discuss what is appropriate for you and take account of any advice from your surgical team.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should I start physiotherapy after an operation?</h3><p>It depends on your procedure and your surgeon's instructions. Some people start gentle rehabilitation soon after surgery, while others need to protect healing tissues. We will work within the guidance relevant to your operation.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you help after a hip or knee replacement?</h3><p>Yes. We can support your rehabilitation by helping you progressively rebuild mobility, strength and confidence with activities such as walking, stairs and returning to exercise.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Will my rehabilitation programme be personalised?</h3><p>Yes. We consider your operation, current abilities, recovery stage and goals. We will review progress and adapt exercises as appropriate, rather than using the same programme for everyone.</p></div>
        <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What symptoms after surgery need urgent medical advice?</h3><p>Seek urgent medical assessment for signs such as increasing redness with fever or wound discharge, sudden marked swelling or pain in a calf, or new severe symptoms. Chest pain or sudden breathlessness after surgery requires emergency assessment. Contact your surgical team if you are unsure about new postoperative symptoms.</p></div>
      </div>
    </div>
  </section>
  </>
);

export default SurgicalRehab;
