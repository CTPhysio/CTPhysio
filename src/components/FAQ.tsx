import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I know if my problem is something you can help with?",
      answer: "We help people with a broad range of movement and pain-related problems. If your condition is affecting your ability to do things you want or need to do, whether that's walking comfortably, playing sport, working without pain, or simply moving around your home with confidence, then physiotherapy is likely to be beneficial.\n\nCommon conditions we treat include back and neck pain, joint problems like arthritis, sports injuries, post-surgical recovery, and general concerns about strength, balance, or fitness. We also work with people who have chronic conditions or complex health issues that affect their movement.\n\nThe best way to find out if we can help is through a free discovery visit where we can discuss your specific situation without any commitment."
    },
    {
      question: "What if I've tried other physios?",
      answer: "Many of our most successful patients have tried physiotherapy elsewhere before coming to see us. What often makes the difference is taking time to properly understand your specific situation and addressing the underlying factors contributing to your pain, rather than just focusing on where it hurts."
    },
    {
      question: "How is physiotherapy different from what I might expect?",
      answer: "Many people think physiotherapy is just about lying on a table for massage or doing generic stretches, but it is much more comprehensive and tailored to your specific needs.\n\nOur approach combines several elements: hands-on treatment to reduce pain and improve mobility, targeted strengthening exercises to build resilience, and education about your condition so you understand what's happening and how to manage it.\n\nThe goal isn't just to make you feel better temporarily. It's to give you the tools, knowledge, and physical capacity to manage your condition long-term and stay active. Every treatment plan is different because every person's situation, goals, and needs are unique.\n\nThink of it as a genuine partnership, working together to get you back to doing the things that matter to you, with real confidence in your body's ability to handle daily life."
    },
    {
      question: "Do I need a GP referral, or can I book directly?",
      answer: "No referral is needed. You can book directly with us and start addressing your concerns straight away. Our registered physiotherapists are qualified to assess and treat musculoskeletal conditions without requiring a GP referral first.\n\nThis means you can take control of your situation immediately rather than waiting for GP appointments or referral processes. Many people find this direct access approach much more convenient and allows them to address problems before they potentially worsen.\n\nIf your condition requires input from other healthcare professionals or if we identify anything that needs medical investigation, we'll discuss this with you and can communicate with your GP (with your permission) to ensure you receive joined-up care.\n\nYou can book either a free discovery visit to discuss your concerns, or go straight to an initial assessment if you're ready to begin treatment."
    },
    {
      question: "Why do you offer a free discovery visit, and what's the commitment?",
      answer: "There's genuinely no catch or hidden commitment. The free discovery visit exists because we understand that choosing the right physiotherapist is an important decision, and you deserve to feel confident about that choice before investing your time and money.\n\nDuring this 15-20 minute conversation, we'll discuss your condition, explain how we might be able to help, and you'll get a feel for our approach. It's also an opportunity for you to ask any questions about treatment, costs, or expectations.\n\nYou're under absolutely no obligation to book further treatment. Some people leave feeling reassured that physiotherapy isn't right for them at this time, others book a session, and some prefer to think about it first. All of these outcomes are perfectly fine.\n\nWe'd rather you make an informed decision that's right for your situation than feel pressured into treatment you're uncertain about. The discovery visit simply ensures we're a good fit before you commit to anything."
    },
    {
      question: "What are your appointment costs?",
      answer: "You can begin with a free discovery visit to discuss your concerns with no obligation, or book directly for an initial assessment.\n\nIndividual appointments:\n\nInitial assessment (60 minutes) including treatment: £80\nFollow-up sessions (45 minutes): £60 each\n\nTreatment packages for better value:\n\n5 sessions: £275 (save £25)\n10 sessions: £500 (save £100)\n\nThe packages don't expire and can be used flexibly over time, making them ideal if you're planning ongoing treatment or want to secure sessions at a reduced rate.\n\nAll fees are payable at the time of treatment. We accept cash, card, or bank transfer. Many private health insurance policies cover physiotherapy and we can provide receipts for you to claim from your insurer if applicable.\n\nAXA patients: Please contact AXA before your appointment to obtain your membership number and authorisation code, then provide these when booking.\n\nBUPA patients: We don't work directly with BUPA. You can either attend on a self-paying basis, or contact BUPA to find an alternative physiotherapist within their network."
    },
    {
      question: "What happens during my initial assessment?",
      answer: "Your first appointment (60 minutes) combines both assessment and treatment, so you'll leave feeling like real progress has been made from day one.\n\nWe'll start with a conversation about your condition, when it started, what makes it better or worse, how it's affecting your daily life, and what you're hoping to achieve. We'll also ask about your general health, activity levels, and any previous treatments you've tried.\n\nNext comes a physical assessment: we'll observe how you move, test your range of motion and strength, and identify any areas of tension or restriction. We'll explain what we're checking and why, so you understand what we're finding.\n\nBased on this assessment, we'll explain what we think is contributing to your problem and outline a treatment approach. The remainder of the session typically includes hands-on treatment (such as massage, joint mobilisation, or other techniques) along with some initial exercises or advice to start with.\n\nBefore you leave, we'll discuss a treatment plan, realistic expectations for your recovery, and book follow-up appointments if you'd like to continue. You'll also receive a summary of key points and any exercises to practice at home.\n\nThe goal is that you leave with a clear understanding of your condition, feeling some improvement from the treatment, and confident about the path forward."
    },
    {
      question: "What should I wear to appointments?",
      answer: "Comfortable, loose-fitting clothing that allows easy movement is ideal. Think gym clothes or casual wear. Avoid tight-fitting clothing like suits, skinny jeans, or restrictive garments that limit movement.\n\nFor specific areas being treated:\n\nNeck, upper back, or shoulder issues: Women may find a strappy vest top or sports bra most practical for easy access to the treatment area\nLower back or hip problems: Loose shorts or tracksuit bottoms work well\nKnee injuries: Shorts or clothing that can be easily rolled up above the knee"
    },
    {
      question: "I'm nervous about treatment being painful. What should I expect?",
      answer: "We always prioritise your comfort and will explain what we're doing before we do it. You have complete control. If anything feels uncomfortable, just say so and we'll stop or adjust immediately.\n\nMost hands-on techniques actually feel pleasant and often provide immediate relief. With exercises, we'll start at an appropriate level, making sure there's no adverse reaction before introducing anything more challenging.\n\nIf you're particularly anxious, we'd always recommend starting with the free discovery visit to discuss your concerns before committing to any treatment."
    },
    {
      question: "How long does recovery take?",
      answer: "The number of sessions varies significantly depending on your specific condition, how long you've had the problem, and your personal goals. Research shows that most musculoskeletal conditions respond well to physiotherapy, but the timeframe differs considerably.\n\nFor acute injuries (recent onset), you might see substantial improvement within 3-6 sessions over a few weeks. Chronic conditions that have been present for months or years typically require a longer approach, often 8-12 sessions or more, spread over several months.\n\nSome people come for just a few sessions to understand their condition and learn self-management strategies, whilst others benefit from ongoing support to maintain their progress and prevent recurrence.\n\nWhat's most important is that we're seeing consistent progress toward your goals. We'll be able to give you a clearer estimate after your initial assessment once we understand your specific situation and what you're hoping to achieve.\n\nWe'll always be honest about realistic expectations and will regularly review your progress with you. If you're not improving as expected, we'll discuss why and adjust our approach accordingly."
    },
    {
      question: "What if I need to cancel or reschedule?",
      answer: "We understand that sometimes appointments need to be changed due to illness, work commitments, or unexpected circumstances. You can reschedule or cancel by calling 01215170806 during business hours (8am-6pm, Monday-Friday) or by emailing info@christileyphysiotherapy.com at any time.\n\nPlease provide at least 24 hours' notice when cancelling or rescheduling. This allows us to offer the slot to other patients who may be waiting for treatment.\n\nIf you cancel with less than 24 hours' notice, you'll be liable for the full appointment fee. This policy helps ensure we can maintain appointment availability for all patients while covering the costs of reserved time slots.\n\nWe'll always try to be flexible where possible, particularly for genuine emergencies or sudden illness. If you're unwell, please don't attend your appointment. We can reschedule without penalty as your health and the wellbeing of other patients is the priority."
    },
    {
      question: "How do I join your strength training classes?",
      answer: "Our strength training classes are led by Chris and other qualified physiotherapists or sports therapists. They focus on building functional strength that translates to real-life activities and long-term independence.\n\nThe best way to get started is to book a free discovery visit where we can discuss your goals, current fitness level, and any conditions that might affect your participation. This ensures the classes are suitable for you and that you'll get the most benefit from them.\n\nCurrent class times are:\n\nGeneral classes: Mondays and Wednesdays at 6:30pm and 7:30pm\nOver 60s classes: Tuesdays at 11am and Thursdays at 1:30pm"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center">
                  <HelpCircle size={24} className="text-sky-500 mr-3 flex-shrink-0" />
                  <span className="font-semibold text-navy-700">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="text-sky-500" />
                ) : (
                  <ChevronDown className="text-sky-500" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
