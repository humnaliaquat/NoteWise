import React from "react";
import { File } from "lucide-react";

export default function ChatPageNav() {
  return (
    <div className="flex justify-between items-center px-6  py-3.5 border-b border-(--border) bg-white">
      <h1 className=" font-semibold flex items-center gap-3 ">
        <span className="flex items-center rounded-lg bg-(--accent-light) p-2 text-(--accent)">
          <File className="h-4 w-4" />
        </span>{" "}
        Select a document
      </h1>
      <div className="text-(--success) bg-[#ebfdf4] px-2 py-1 rounded-full text-xs flex justify-center items-center gap-1 font-bold pb-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-(--success) font-bol"></div>
        Ready
      </div>
    </div>
  );
}
