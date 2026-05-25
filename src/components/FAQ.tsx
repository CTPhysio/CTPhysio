import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I know if you can help me?",
    answer: "If pain, stiffness, or reduced confidence is stopping you doing the things you enjoy, there's a good chance we can help.\n\nWe work with active adults dealing with ongoing pain, recovery after surgery, mobility concerns, and strength or balance issues.\n\nThe best place to start is a free discovery visit. We'll listen, ask a few questions, and give you an honest view on whether we're the right fit."
  },
  {
    question: "What if I've tried physio before and it didn't work?",
    answer: "That's more common than you might think. What often makes the difference is taking the time to properly understand your situation, rather than just focusing on where it hurts.\n\nWe take a more individual approach and build plans around your goals, lifestyle, and confidence levels.\n\nIf you're unsure whether it's worth trying again, come in for a free discovery visit and we'll give you an honest opinion."
  },
  {
    question: "Will treatment be painful?",
    answer: "We always work within your comfort levels and explain things clearly as we go.\n\nSome exercises or movements can feel challenging at times, but treatment should never feel aggressive or overwhelming.\n\nYou're always in control throughout."
  },
  {
    question: "Do I need a GP referral?",
    answer: "No. You can book directly without seeing your GP first.\n\nIf we think anything needs further medical investigation, we'll let you know."
  },
  {
    question: "What happens at the free discovery visit?",
    answer: "It's a relaxed 15–20 minute conversation.\n\nWe'll listen to what's been going on, ask a few questions, and give you an honest view on whether and how we can help.\n\nThere's no examination or treatment at this stage, and no obligation to book further appointments."
  },
  {
    question: "What are your fees?",
    answer: "Free Discovery Visit — Free\nInitial Assessment (60 mins) — £80\nFollow-Up Session (45 mins) — £60\n5 Session Pack — £275\n10 Session Pack — £500\n\nWe accept card, cash, or bank transfer.\n\nAXA patients will need an authorisation code before booking. We don't currently work directly with BUPA."
  },
  {
    question: "What happens at my first appointment?",
    answer: "Your first appointment includes both an assessment and treatment, so you leave with clarity and a plan.\n\nWe'll talk through what's been going on, assess how you move, and explain what we think is causing the problem.\n\nIf treatment is appropriate, we'll get started straight away."
  },
  {
    question: "How long will my recovery take?",
    answer: "Recovery depends on what's going on, how long it's been there, and what you want to get back to.\n\nSome people improve quickly. Longer-standing problems can take more time.\n\nAfter your assessment, we'll give you a clear and honest idea of what to expect."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-8 text-center">
          Common Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <button
                className="w-full px-5 py-4 flex items-center justify-between text-left gap-3"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-sky-500 flex-shrink-0" />
                  <span className="font-semibold text-navy-700 text-sm md:text-base">{faq.question}</span>
                </div>
                {openIndex === index ? (
                  <ChevronUp size={18} className="text-sky-500 flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="text-sky-500 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base border-t border-gray-50 pt-3">
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
