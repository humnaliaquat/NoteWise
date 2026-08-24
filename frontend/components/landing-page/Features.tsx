import React from "react";
import {
  Upload,
  MessageCircle,
  FileText,
  Table2,
  Clock,
  Lock,
} from "lucide-react";

export default function Features() {
  const cardsData = [
    {
      id: 1,
      icon: Upload,
      title: "Upload any PDF",
      description:
        "Lecture slides, textbooks, or scanned notes. Drop them in and DocWise gets them ready to chat with in seconds.",
    },
    {
      id: 2,
      icon: MessageCircle,
      title: "Ask in plain language",
      description:
        "No search syntax to learn. Ask questions naturally, just like you would ask a classmate, and get a direct answer.",
    },
    {
      id: 3,
      icon: FileText,
      title: "Every answer cited",
      description:
        "Each response links back to the exact page it came from, so you can verify the answer or explore the context.",
    },
    {
      id: 4,
      icon: Table2,
      title: "Organized by document",
      description:
        "Keep each course or subject in its own space, so answers never mix material from unrelated documents.",
    },
    {
      id: 5,
      icon: Clock,
      title: "Ready in seconds",
      description:
        "Most documents finish processing in seconds, so you can start asking questions almost immediately.",
    },
    {
      id: 6,
      icon: Lock,
      title: "Private by default",
      description:
        "Your documents and conversations stay yours. Nothing you upload is shared or used to train anything.",
    },
  ];

  return (
    <section
      id="features"
      className="bg-(--bg-softer) px-6 py-20 md:px-12 lg:px-30"
    >
      {/* Heading */}
      <div className="max-w-2xl mb-10">
        <p className="mb-3 text-sm font-semibold tracking-wider text-(--accent)">
          FEATURES
        </p>

        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Everything grounded in your own material
        </h2>

        <p className="mt-4 leading-relaxed text-(--text-secondary)">
          DocWise doesn't answer from the open internet. It reads your uploaded
          documents and grounds every response in them.
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {cardsData.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.id}
              className="
                group
                rounded-xl
                border border-(--border)
                bg-white
                p-6
                transition-all duration-300
                hover:-translate-y-1
                hover:border-(--accent)
                hover:shadow-md
              "
            >
              {/* Icon */}
              <div
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-lg
                  bg-(--bg-softer)
                  transition-colors duration-300
                  group-hover:bg-(--accent-light)
                "
              >
                <Icon className="h-5 w-5 text-(--accent)" />
              </div>

              {/* Content */}
              <div className="mt-5">
                <h3 className="font-semibold text-(--text)">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
