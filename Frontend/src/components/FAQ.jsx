import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I order medications?',
    answer: 'You can order medications by uploading your prescription through our secure platform or by contacting our support team.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, and various digital payment methods.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Delivery typically takes 1-3 business days depending on your location.',
  },
  {
    question: 'Is my information secure?',
    answer: 'Yes, we use industry-standard encryption to protect all your personal and medical information.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null); // Removed type annotation

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#2A6041] text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-[#A5D6A7] rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#F5F5F5] hover:bg-[#A5D6A7] transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#2A6041]">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-[#2A6041]" />
                ) : (
                  <ChevronDown className="text-[#2A6041]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
