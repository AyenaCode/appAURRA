"use client";
import { useState } from "react";

interface FaqCardProps {
  question: string;
  answer: string;
}

export const FaqCard = ({ question, answer }: FaqCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => setIsOpen(!isOpen);

  return (
    <div className="faq-card border border-gray-200 rounded-lg shadow-md p-4 my-2">
      <div
        className="faq-question cursor-pointer font-semibold text-lg flex justify-between items-center"
        onClick={toggleFAQ}
      >
        {question}
        <span
          className={`ml-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && <div className="faq-answer mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};
