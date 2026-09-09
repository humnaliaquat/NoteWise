import { File } from "lucide-react";
import React from "react";

export default function RecentChats() {
  const chatsData = [
    { id: 1, name: "Operating Systems.pdf", status: "processing" },
    { id: 2, name: "Operating Systems.pdf", status: "Ready" },
    { id: 3, name: "Operating Systems.pdf", status: "processing" },
  ];
  return (
    <div className="flex flex-col px-36 py-12">
      <h1>Recent</h1>
      <p>Documents and conversations you've opened recently.</p>
      {/* chats */}
      <div className="flex flex-col gap-2 ">
        {chatsData.map((item) => (
          <div
            className="border border-(--border) p-2 flex items-center justify-between rounded-lg"
            key={item.id}
          >
            <div>
              <div className="bg-(--accent-light) text-(--accent) p-2.5 rounded-lg">
                <File className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
