import { ChevronRight, File, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function RecentChats() {
  const chatsData = [
    {
      id: 1,
      name: "Operating Systems.pdf",
      status: "processing",
      viewedOrChated: "chated",
      timeWhenViewedorChated: "2 days ago",
    },
    {
      id: 2,
      name: "Operating Systems.pdf",
      status: "Ready",
      viewedOrChated: "chated",
      timeWhenViewedorChated: "2 days ago",
    },
    {
      id: 3,
      name: "Operating Systems.pdf",
      status: "processing",
      viewedOrChated: "chated",
      timeWhenViewedorChated: "2 days ago",
    },
  ];

  return (
    <div className="flex flex-col px-36 py-12">
      <h1 className="text-[25px] font-bold">Recent</h1>

      <p className="mt-1 mb-8 text-(--text-secondary)">
        Documents and conversations you've opened recently.
      </p>

      <div className="flex flex-col gap-3">
        {chatsData.map((item) => {
          const isReady = item.status.toLowerCase() === "ready";

          return (
            <div
              key={item.id}
              className="group flex items-center justify-between rounded-xl border border-(--border) bg-(--background) p-4 transition-all duration-200 hover:border-(--accent)/40 hover:shadow-sm"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-(--accent-light) text-(--accent)">
                  <File className="h-4 w-4" />
                </div>

                <div className="flex flex-col gap-1">
                  <h2 className="text-sm font-semibold">{item.name}</h2>

                  <div className="flex items-center gap-1.5 text-xs text-(--text-secondary)">
                    {item.viewedOrChated === "chated" ? (
                      <MessageCircle className="h-3.5 w-3.5" />
                    ) : (
                      <File className="h-3.5 w-3.5" />
                    )}

                    <span className="capitalize">
                      {item.viewedOrChated} · {item.timeWhenViewedorChated}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    isReady
                      ? "bg-[#ebfdf4] text-(--success)"
                      : "bg-[#fff7ed] text-[#f97316]"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      isReady ? "bg-(--success)" : "bg-[#f97316] animate-pulse"
                    }`}
                  />

                  {isReady ? "Ready" : "Processing"}
                </div>

                <Link
                  href="/dashboard/chat"
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-(--text-secondary) transition-all duration-200 hover:bg-(--accent-light) hover:text-(--accent)"
                >
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
