import React from "react";
import { FilePlus, Send } from "lucide-react";
import { JetBrains_Mono } from "next/font/google";

interface BottomMessageTypingBoxProps {
  onSend: (message: string) => void;
  loading: boolean;
}
export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
export default function BottomMessageTypingBox({
  onSend,
  loading,
}: BottomMessageTypingBoxProps) {
  return (
    <div className="w-full border-t border-(--border) ">
      <div className="mx-auto max-w-4xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full border border-(--border) focus-within:border-(--accent) p-2 bg-white">
          <div className="flex flex-1 items-center gap-4 px-3">
            <button type="button">
              <FilePlus className="h-4 w-4" />
            </button>

            <input
              type="text"
              name="message"
              placeholder="Ask something about your document..."
              className={`${jetbrainsMono.className} flex-1 bg-transparent outline-none text-sm`}
            />
          </div>

          <button
            type="button"
            onClick={() => {
              const input = document.querySelector(
                'input[name="message"]',
              ) as HTMLInputElement;
              if (input) {
                onSend(input.value);
                input.value = "";
              }
            }}
            disabled={loading}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-(--accent)"
          >
            <Send className="h-4 w-4 text-white" />
          </button>
        </div>
        <p className="text-center mt-2.5 mb-1 text-xs text-(--text-tertiary)">
          DocWise answers using only the content of your uploaded document.
        </p>
      </div>
    </div>
  );
}
