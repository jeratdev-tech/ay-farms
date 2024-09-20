import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="space-y-6">
        {[
          {
            question: "How can I apply for a loan?",
            answer:
              "You reach out to us in our page or via email, or contact attached to our bio Which is at.",
          },

          {
            question: "What types of crops do you grow?",
            answer: "We specialize in maize, rice, and soybeans.",
          },
          {
            question: "How can I invest in AY Farms?",
            answer:
              "Check our Agricultural Investment page for details and contact us to get started.",
          },
          {
            question: "What training programs do you offer?",
            answer:
              "We offer training in modern farming techniques, business management, and more.",
          },
        ].map((faq, index) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-md cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
            <p
              className={`text-gray-700 transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
