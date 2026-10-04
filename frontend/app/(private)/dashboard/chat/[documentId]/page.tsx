"use client";
import { useState } from "react";
import AfterChatUI from "@/components/chat/AfterChatUI";
import BeforeChatUI from "@/components/chat/BeforeChatUI";
import BottomMessageTypingBox from "@/components/chat/BottomMessageTypingBox";
import ChatPageNav from "@/components/ui/ChatPageNav";
import { askQuestion } from "@/services/chatApi";
import { useParams } from "next/navigation";
import React from "react";
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
export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [isLoading, setIsLoading] = React.useState(false);
  const params = useParams();
  const documentId = params?.documentId as string | undefined;
  const handleSend = async (question: string) => {
    if (!documentId) {
      return;
    }

    const userMessage = {
      id: Date.now(),
      role: "user" as const,
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setIsLoading(true);

    try {
      const result = await askQuestion(question, documentId);

      const assistantMessage = {
        id: Date.now() + 1,
        role: "assistant" as const,
        content: result.answer,
        sources: result.sources,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant" as const,
          content: "Sorry, I couldn't process your question.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-screen flex-col">
      <ChatPageNav Title={documentId || "Select a document"} />

      <main className="flex-1 overflow-y-auto">
        {messages.length === 0 && <BeforeChatUI />}
        {messages.length > 0 && <AfterChatUI messages={messages} />}
      </main>

      <BottomMessageTypingBox onSend={handleSend} loading={isLoading} />
    </div>
  );
}
