import BeforeChatUI from "@/components/chat/BeforeChatUI";
import BottomMessageTypingBox from "@/components/chat/BottomMessageTypingBox";
import ChatPageNav from "@/components/ui/ChatPageNav";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen flex-col">
      <ChatPageNav />

      <main className="flex-1 overflow-y-auto">
        <BeforeChatUI />
      </main>

      <BottomMessageTypingBox />
    </div>
  );
}
