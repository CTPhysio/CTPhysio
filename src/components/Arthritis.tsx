import React from 'react';
import TreatmentPageTemplate from './TreatmentPageTemplate';

const Arthritis: React.FC = () => (
  <>
    <TreatmentPageTemplate
      seoTitle="Arthritis Physiotherapy in Harborne, Birmingham | Chris Tiley"
      seoDescription="Arthritis physiotherapy in Harborne, Birmingham. Understand joint pain and stiffness, build strength and stay active with a personalised plan."
      canonicalPath="/treatments/arthritis"
      h1="Stay Strong and Active with Arthritis"
      heroEyebrow="Arthritis Physiotherapy in Harborne, Birmingham"
      heroParagraphs={[
        "Arthritis can make everyday activities feel more difficult, whether you are dealing with knee pain on the stairs, a stiff hip after sitting or aching hands and joints. It is understandable to worry that movement might make things worse.",
        "At our Harborne clinic, we help you understand your symptoms, find ways to stay active and build strength at a level that suits you. Our approach focuses on what you want to do, not just what shows up on a scan."
      ]}
      ctaHeading="Want to feel more confident moving with arthritis?"
      ctaText="We can help you make sense of your symptoms and plan practical steps towards the activities that matter to you."
      mainHeading="How Physiotherapy Can Help with Arthritis"
      mainParagraphs={[
        "Osteoarthritis is common in joints such as the knees, hips and hands. Pain and stiffness can vary from day to day, and changes seen on an X-ray do not always match how much pain someone feels. Exercise, education and adapting activity can play an important role in managing symptoms.",
        "We will discuss your symptoms, health and goals, assess your movement and strength, and agree on a programme that you can build into everyday life. This might include progressive resistance training, walking or other aerobic activity, and ways to manage temporary flare-ups.",
        "Inflammatory forms of arthritis, including rheumatoid and psoriatic arthritis, need medical assessment and management. Physiotherapy can complement that care by supporting appropriate exercise and physical function. We will recommend medical review if your symptoms suggest a condition that needs further investigation."
      ]}
      bulletList={[
        "Knee and hip osteoarthritis",
        "Joint stiffness and difficulty getting moving",
        "Strength training around painful joints",
        "Managing activity during symptom flare-ups",
        "Building confidence with stairs, walking and daily tasks",
        "Returning to hobbies and recreational exercise",
        "Exercise support alongside medical care for inflammatory arthritis",
        "Improving balance and overall physical capacity"
      ]}
      imageUrl="https://lh3.googleusercontent.com/p/AF1QipMPeZpwD2vsxUz9DSm9BKzha0SzdF3R4AanKr9E=s680-w680-h510-rw"
      relatedConditions={[
        { label: "Knee Pain", href: "/treatments/knee-pain" },
        { label: "Hip Pain", href: "/treatments/hip-pain" },
        { label: "Balance & Falls", href: "/treatments/balance-falls" },
        { label: "Strength Training for Over 60s", href: "/strength-training-over-60s" }
      ]}
      conditionName="arthritis"
    />
    <section className="bg-white py-16" aria-labelledby="arthritis-faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 id="arthritis-faq" className="text-3xl md:text-4xl font-bold text-navy-700 mb-8">Arthritis: Frequently Asked Questions</h2>
        <div className="space-y-7 text-gray-700">
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Is exercise safe if I have osteoarthritis?</h3><p>Exercise is generally recommended for osteoarthritis and can help improve strength and function. We will help you find a suitable starting point and adjust the amount or type of exercise around your symptoms.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Will strength training make my joints worse?</h3><p>Appropriately progressed strength training is often a useful part of arthritis management. Some discomfort does not necessarily mean damage, but we will consider how your joints respond and adapt your programme when needed.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">Do I need an X-ray before seeing a physiotherapist?</h3><p>Not always. Osteoarthritis can often be assessed from your symptoms and examination. If imaging or medical review is appropriate, we can discuss the reasons with you.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">What if my arthritis flares up?</h3><p>A flare-up may mean temporarily adjusting activity rather than stopping everything. We can help you plan manageable movement and a gradual return to your usual routine as symptoms settle.</p></div>
          <div><h3 className="text-xl font-semibold text-navy-700 mb-2">When should joint pain be checked urgently?</h3><p>A suddenly very painful, hot or swollen joint, especially with fever or feeling unwell, needs urgent medical assessment to rule out infection. New persistent joint swelling or prolonged morning stiffness should also be discussed with a healthcare professional.</p></div>
        </div>
      </div>
    </section>
  </>
);

export default Arthritis;
