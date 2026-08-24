import React from "react";
import Link from "next/link";
import { Sparkles, Plus, FileText, Send, Check } from "lucide-react";
export default function HeroSection() {
  return (
    <div className="flex gap-5 mt-30  px-6 py-4 md:px-12 lg:px-30  mb-10">
      <div className="grid grid-cols-2">
        {/* left side */}
        <div className="flex flex-col p-4 gap-4 justify-start">
          <div className="flex gap-2 items-center bg-(--accent-light) px-3 py-1.5 text-(--accent) text-sm font-medium rounded-full max-w-56">
            <Plus className="w-2 h-2" />
            <p>AI-powered document chat</p>
          </div>
          <h1 className="text-5xl font-bold  ">
            Ask your notes anything.{" "}
            <span className="text-(--accent)">Get real answers.</span>
          </h1>
          <p className="text-(--text-secondary) mt-2 text-lg">
            Upload your PDFs lecture slides, textbooks, scanned notes and
            DocWise answers your questions using exactly what's in them, with
            the page it came from.
          </p>
          <div className="flex gap-4 items-center mt-4">
            <Link
              href={"/register"}
              className="px-5 py-3 bg-(--accent) hover:bg-(--accent-hover) rounded-lg text-white font-medium cursor-pointer"
            >
              Get started free
            </Link>
            <button className="px-5 py-3 border border-(--border) hover:text-(--accent) hover:border-(--accent) font-medium rounded-lg cursor-pointer">
              See how it works
            </button>
          </div>
          <p className="flex gap-2 items-center text-sm mt-2 text-(--text-tertiary)">
            {" "}
            <Check className="w-3 h-3 text-green-700" /> No credit card required
          </p>
        </div>
        {/* Right side */}
        <div className="p-4 mt-12">
          <div className="overflow-hidden rounded-xl border border-(--border) bg-white shadow-md">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-(--border) p-3">
              {/* Left */}
              <div className="flex items-center gap-4">
                {/* Window dots */}
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full border border-(--border-strong) bg-(--bg-softer)" />
                  <span className="h-2.5 w-2.5 rounded-full border border-(--border-strong) bg-(--bg-softer)" />
                  <span className="h-2.5 w-2.5 rounded-full border border-(--border-strong) bg-(--bg-softer)" />
                </div>

                {/* Document */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-(--text-secondary)">
                  <span className="rounded-md bg-(--accent-light) p-1.5">
                    <FileText className="h-3 w-3 text-(--accent)" />
                  </span>

                  <span>Database Systems.pdf</span>
                </div>
              </div>

              {/* Ready status */}
              <div className="flex items-center gap-1.5 rounded-full bg-[#ddf3e9] px-3 py-1 text-xs font-semibold text-(--success)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--success)" />
                Ready
              </div>
            </div>

            {/* Chat */}
            <div className="flex flex-col gap-5 p-4">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-2xl rounded-br-md bg-(--accent) px-4 py-2.5 text-sm text-white">
                  What is database normalization?
                </div>
              </div>

              {/* AI response */}
              <div className="flex items-start gap-2">
                {/* AI icon */}
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-(--accent) text-white">
                  <Sparkles className="h-3 w-3" />
                </div>

                {/* Response */}
                <div className="min-w-0">
                  <div className="rounded-2xl rounded-tl-md border border-(--border) bg-white px-4 py-3 text-sm leading-relaxed text-(--text)">
                    Normalization organizes data to reduce redundancy. Tables
                    are split and linked with foreign keys, following normal
                    forms like 1NF, 2NF, and 3NF.
                  </div>

                  {/* Sources */}
                  <div className="mt-3 flex flex-wrap gap-2 text-(--text-secondary)">
                    <div className="flex items-center gap-1.5 rounded-md border border-(--border) bg-white px-2 py-1 text-xs">
                      <FileText className="h-3 w-3" />
                      Page 12
                    </div>

                    <div className="flex items-center gap-1.5 rounded-md border border-(--border) bg-white px-2 py-1 text-xs">
                      <FileText className="h-3 w-3" />
                      Page 6
                    </div>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="relative mt-2">
                <div className="flex min-h-11 items-center rounded-lg border border-(--border) bg-white px-3 pr-12">
                  <p className="text-xs text-(--text-tertiary)">
                    Ask something about your document...
                  </p>

                  <button
                    type="button"
                    className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md bg-(--accent) text-white transition hover:bg-(--accent-hover)"
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
