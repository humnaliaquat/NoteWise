import React from "react";
import { MessageSquareMore, TextAlignJustify } from "lucide-react";
export default function BeforeChatUI() {
  const questions = [
    "What's this about?",
    "Key points?",
    "Summarize it.",
    "What should I remember?",
  ];
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-24">
      {" "}
      {/* Icon */}{" "}
      <div className="relative">
        {" "}
        <div className="flex h-14 w-10 items-center justify-center rounded-lg border border-(--border-strong) bg-(--accent-light)">
          {" "}
          <TextAlignJustify className="h-6 w-6 text-(--text-tertiary)" />{" "}
        </div>{" "}
        <div className="absolute -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-(--accent) text-white shadow-sm">
          {" "}
          <MessageSquareMore className="h-4.5 w-4.5" />{" "}
        </div>{" "}
      </div>{" "}
      {/* Heading */}{" "}
      <div className="mt-10 text-center">
        {" "}
        <h1 className="text-xl font-bold text-(--text-primary)">
          {" "}
          Ask anything about your documents{" "}
        </h1>{" "}
        <p className="mt-1.5 max-w-md  leading-relaxed text-(--text-secondary)">
          {" "}
          Upload a document and start a conversation with your notes.{" "}
        </p>{" "}
      </div>{" "}
      {/* Suggested questions */}{" "}
      <div className="mt-7 grid max-w-md grid-cols-2 gap-2">
        {" "}
        {questions.map((question) => (
          <button
            key={question}
            type="button"
            className="rounded-full border border-(--border) bg-white  px-4 py-2 text-sm text-(--text-secondary) transition hover:border-(--accent) hover:bg-(--accent-light) hover:text-(--accent)"
          >
            {" "}
            {question}{" "}
          </button>
        ))}{" "}
      </div>{" "}
    </div>
  );
}
