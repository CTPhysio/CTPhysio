import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-navy-700 mb-6 md:mb-8 text-center">
          Common Questions
        </h2>

        <div className="max-w-2xl mx-auto divide-y divide-gray-100">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index}>
                <button
                  className="w-full py-4 flex items-center justify-between text-left gap-4 group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-medium text-sm md:text-base transition-colors duration-200 ${isOpen ? 'text-sky-600' : 'text-navy-700 group-hover:text-sky-600'}`}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-sky-500' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
