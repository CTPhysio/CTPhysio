import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I know if you can help me?",
      answer: "If pain or reduced mobility is stopping you from doing things you enjoy, physiotherapy is likely to help. We work with a wide range of conditions, including back and neck pain, joint problems, post-surgical recovery, and concerns about strength or balance.\n\nThe simplest way to find out is through a free discovery visit. No commitment, just an honest conversation."
    },
    {
      question: "What if I've tried physio before and it didn't work?",
      answer: "That's more common than you might think. What often makes the difference is taking the time to properly understand your situation, rather than focusing on where it hurts.\n\nWe take a different approach. If you're not sure whether it's worth trying again, come in for a free discovery visit and we'll be straight with you."
    },
    {
      question: "Will treatment be painful?",
      answer: "We always explain what we're doing and check in throughout. You're in control at every stage. If anything feels uncomfortable, just say so.\n\nMost hands-on treatment feels pleasant, and many people feel better within their first session."
    },
    {
      question: "Do I need a GP referral?",
      answer: "No. You can book directly with us without seeing your GP first. We'll let you know if anything needs further medical investigation."
    },
    {
      question: "What happens at the free discovery visit?",
      answer: "It's a relaxed 15-20 minute conversation. We'll listen to what's been going on, ask a few questions, and give you an honest view of whether and how we can help.\n\nThere's no examination or treatment at this stage, and no obligation to book anything further."
    },
    {
      question: "What are your fees?",
      answer: "Free discovery visit: £0\nInitial assessment (60 mins): £80\nFollow-up session (45 mins): £60\nBlock of 5 sessions: £275\nBlock of 10 sessions: £500\n\nPayment is taken at the time of treatment. We accept cash, card, or bank transfer. We can provide receipts for private health insurance claims.\n\nAXA patients: please obtain your authorisation code before booking. We don't work directly with BUPA."
    },
    {
      question: "What happens at my first appointment?",
      answer: "Your first session (60 minutes) includes both an assessment and treatment, so you leave having made a start.\n\nWe'll talk through your history, assess how you move, explain what we think is going on, and begin treatment. You'll leave with a clear plan and exercises to get started at home."
    },
    {
      question: "What should I wear?",
      answer: "Comfortable, loose clothing you can move freely in. Gym wear is ideal. For knee or hip problems, shorts or clothing that rolls up easily. For shoulder issues, a vest top works well."
    },
    {
      question: "How long will my recovery take?",
      answer: "It depends on your condition and goals. Recent injuries often respond well within 3-6 sessions. Long-standing problems can take longer.\n\nAfter your initial assessment we'll give you a realistic picture of what to expect, and we'll review your progress regularly."
    },
    {
      question: "What if I need to cancel?",
      answer: "Please give at least 24 hours' notice by calling 01215170806 or emailing info@christileyphysiotherapy.com. Late cancellations may incur the full appointment fee.\n\nIf you're unwell, please don't come in. We'll reschedule with no penalty."
    },
    {
      question: "How do I join your strength classes?",
      answer: "We run small group strength classes for general attendees and a separate programme for over 60s. Book a free discovery visit first so we can make sure the classes are right for you.\n\nCurrent times:\nGeneral classes: Mon and Wed at 6:30pm and 7:30pm\nOver 60s: Tues at 11am and Thurs at 1:30pm"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50 rounded-b-[60px]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-12 text-center">
          Common Questions
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
                  <ChevronUp className="text-sky-500 flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="text-sky-500 flex-shrink-0 ml-2" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
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
