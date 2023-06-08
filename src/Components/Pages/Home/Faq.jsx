import React, { useState } from "react";
import { FaMinus, FaPlus} from "react-icons/fa";


const Faq = () => {
  const faqData = [
    {
      id: 1,
      question: "What is a Direct Immigration Services?",
      answer:
        "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 2,
      question: "What are the Benefits of Visa Consultancy?",
      answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
    {
      id: 3,
      question: "What We should do If our Visa get Rejection?",
      answer: "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
    },
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <div className="container mx-auto px-3 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="sm:text-3xl text-slate-800 text-2xl capitalize font-medium title-font text-center mb-24">
          Frequently Asked Questions
        </h2>

        <div className="mt-6">
          <dl className="space-y-8">
            {faqData.map((faq) => (
              <div key={faq.id}>
                <div
                  onClick={() => toggleQuestion(faq.id)}
                  className={`${
                    activeQuestion === faq.id
                      ?`text-rose-600 border border-rose-600 p-3 rounded-md `
                      : "text-gray-900"
                  } text-lg flex items-center justify-between leading-6 font-medium cursor-pointer`}
                >
                  {faq.question}
                  {
                    activeQuestion === faq.id ? <FaMinus/>  : <FaPlus/>
                  }
                </div>

                {activeQuestion === faq.id && (
                  <div className="mt-2 text-base text-gray-500 transition-all duration-500">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Faq;
