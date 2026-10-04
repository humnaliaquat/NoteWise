"use client";
import React, { useState } from "react";
import { Sparkles } from "lucide-react";
type Source = {
  document_id: string;
  page: number | null;
  chunk_index: number;
  score: number;
};
type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
};
interface AfterChatUIProps {
  messages: Message[];
}
export default function AfterChatUI({ messages }: AfterChatUIProps) {
  return (
    <div className="flex flex-col gap-5 mt-10 px-52">
      {messages.map((item) => (
        <div
          key={item.id}
          className={`flex ${
            item.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`flex gap-3 ${
              item.role === "user"
                ? "max-w-xl items-end"
                : "max-w-xl items-start"
            }`}
          >
            {item.role === "assistant" && (
              <Sparkles
                size={17}
                strokeWidth={1.7}
                className="mt-1 shrink-0 opacity-60"
              />
            )}

            <div
              className={`p-3 ${
                item.role === "user"
                  ? "bg-(--accent) rounded-2xl rounded-br-md text-white"
                  : "border border-(--border) rounded-2xl bg-white"
              }`}
            >
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
