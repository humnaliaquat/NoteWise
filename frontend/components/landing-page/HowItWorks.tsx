import React from "react";
import { ArrowRight, Upload, MessageCircle, FileCheck } from "lucide-react";

export default function HowItWorks() {
  const cardsData = [
    {
      id: 1,
      icon: Upload,
      title: "Upload your notes",
      text: "Drag a PDF into DocWise, or browse to select one. Files up to 10MB are supported.",
    },
    {
      id: 2,
      icon: MessageCircle,
      title: "Ask a question",
      text: "Once processing finishes, ask anything about your document in your own words.",
    },
    {
      id: 3,
      icon: FileCheck,
      title: "Get a cited answer",
      text: "DocWise responds using only your document and shows exactly which pages it used.",
    },
  ];

  return (
    <section id="how-it-works" className="px-6 py-20 md:px-12 lg:px-30">
      {/* Heading */}
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold tracking-wider text-(--accent)">
          HOW IT WORKS
        </p>

        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Three steps, start to finish
        </h2>

        <p className="mt-4 leading-relaxed text-(--text-secondary)">
          No setup, no configuration. Just your notes and a question.
        </p>
      </div>

      {/* Steps */}
      <div className="grid gap-10 md:grid-cols-3">
        {cardsData.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="relative">
              {/* Step number + icon */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--accent-light) text-sm font-semibold text-(--accent)">
                  0{item.id}
                </div>
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="font-semibold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                  {item.text}
                </p>
              </div>

              {/* Arrow */}
              {index < cardsData.length - 1 && (
                <ArrowRight
                  className="
                    absolute right-0 top-5 hidden
                    h-4 w-4 text-(--text-tertiary)
                    md:block
                  "
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
