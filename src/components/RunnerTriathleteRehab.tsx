import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const RunnerTriathleteRehab: React.FC = () => (
  <>
    <TreatmentPageTemplate
      seoTitle="Running Injury Physiotherapy in Harborne, Birmingham | Chris Tiley"
      seoDescription="Physiotherapy for running and triathlon injuries in Harborne, Birmingham. Assess symptoms, manage training load and rebuild confidence in running."
      canonicalPath="/treatments/runner-triathlete-rehab"
      h1="Running and Triathlon Injury Physiotherapy"
      heroEyebrow="Running & Triathlon Rehabilitation in Harborne, Birmingham"
      heroParagraphs={["When pain interrupts running, cycling or swimming, it can be difficult to know whether to rest, change your training or keep going. The right answer depends on the symptoms, the demands of your sport and how you respond to activity.","We help runners and triathletes in Harborne and Birmingham understand their symptoms and develop a realistic plan for getting back to training."]}
      ctaHeading="Ready to discuss your rehabilitation?"
      ctaText="We can assess your symptoms, discuss your goals and agree on a realistic next step."
      mainHeading="Rebuild your training, one step at a time"
      mainParagraphs={["We will explore your training history, recent changes in volume or intensity, recovery, footwear where relevant and the movements that reproduce symptoms. An assessment may include strength, range of movement and functional tasks.","Rehabilitation commonly combines appropriate exercise with adjustments to training load. Depending on your goals, we may use progressive strength work and a staged return to running, cycling or swimming.","We do not assume every running injury comes from faulty technique. Where changes to training or movement are useful, we will explain why and assess their effect over time."]}
      bulletList={["Knee pain associated with running","Achilles and other tendon-related symptoms","Calf and hamstring injuries","Foot and ankle pain","Hip pain during training","Planning a graded return to running","Strength training alongside endurance sport"]}
      imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
      relatedConditions={[{"label":"Sports Injuries","href":"/treatments/sports-injuries/"},{"label":"Overuse Injuries","href":"/treatments/overuse-injuries/"},{"label":"Knee Pain","href":"/treatments/knee-pain/"}]}
      conditionName="running & triathlon rehabilitation"
    />
    <section className="bg-white py-16" aria-labelledby="runner-triathlete-rehab-faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="runner-triathlete-rehab-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Running & Triathlon Rehabilitation: Frequently Asked Questions</h2>
        <div className="space-y-7 text-gray-700">
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Should I stop running if I have pain?</h3><p>Not always. Some symptoms can be managed with a temporary change to distance, speed or frequency. We will help you decide what is appropriate.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Can you assess my running technique?</h3><p>We can discuss and assess relevant aspects of your running when they may help explain symptoms or guide rehabilitation.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do runners need strength training?</h3><p>Strength training can support physical capacity and rehabilitation, but the right programme depends on your current training and goals.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What if I have shin pain?</h3><p>Shin pain has several possible causes, including bone stress injuries. Focal bone pain or worsening symptoms need careful assessment and sometimes medical imaging.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">How soon can I return to an event?</h3><p>We will consider your symptoms, training tolerance and the event demands. We cannot promise a return date without assessing your situation.</p></div>
        </div>
      </div>
    </section>
  </>
);

export default RunnerTriathleteRehab;
