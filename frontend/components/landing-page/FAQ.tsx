"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const data = [
    {
      id: 1,
      question: "Is my data private?",
      answer:
        "Yes. Documents you upload are only used to answer your questions and aren't shared or used to train any models.",
    },
    {
      id: 2,
      question: "What file types are supported?",
      answer:
        "DocWise currently supports PDF files up to 10MB. Support for more formats is planned.",
    },
    {
      id: 3,
      question: "Does it work with scanned notes?",
      answer:
        "Scanned PDFs work as long as the text is legible. Very low-quality scans may not process correctly.",
    },
    {
      id: 4,
      question: "Is DocWise free to use?",
      answer:
        "DocWise is free to use while in beta. No credit card is required to get started.",
    },
  ];

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="flex flex-col items-center px-6 py-20 md:px-12 lg:px-30"
    >
      {/* Heading */}
      <div className="mb-12 flex flex-col items-center text-center">
        <p className="mb-3 text-sm font-semibold tracking-wider text-(--accent)">
          FAQ
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Common questions
        </h2>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-3xl">
        {data.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div key={item.id} className="border-b border-(--border)">
              {/* Question */}
              <button
                type="button"
                onClick={() => toggleFAQ(item.id)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-medium">{item.question}</span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--bg-softer) cursor-pointer">
                  {isOpen ? (
                    <X className="h-4 w-4 text-(--accent)" />
                  ) : (
                    <Plus className="h-4 w-4 text-(--text-secondary)" />
                  )}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pb-5 pr-12 leading-6 text-(--text-secondary)">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
