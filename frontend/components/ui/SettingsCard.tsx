"use client";
import { X } from "lucide-react";
import React, { useState } from "react";

interface SettingsCardProps {
  onClose: () => void;
}
export default function SettingsCard({ onClose }: SettingsCardProps) {
  const toggle = () => {
    if (isToggle == false) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  const [isToggle, setToggle] = useState(false);
  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[0.5px]"
      />
      <div className="fixed left-1/2 top-1/2 z-50 w-95 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-(--border) bg-(--background) shadow-xl">
        <nav className="flex items-center justify-between border-b border-(--border) px-5 py-4">
          <h2 className="text-lg font-semibold">Settings</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-(--text-secondary) transition hover:bg-(--accent-light) hover:text-(--text) cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </nav>
        <main className="px-5 py-4 flex flex-col gap-4 text-[14px] ">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-medium">Email notifications</h1>
              <p className="text-(--text-tertiary)">
                Get notified when processing finishes
              </p>
            </div>
            <button
              onClick={toggle}
              className={`${isToggle ? " bg-gray-200 justify-start" : "bg-(--accent) justify-end"} cursor-pointer p-1 w-10 h-5.5 rounded-full  items-center flex `}
            >
              <div className="w-4 h-4 rounded-full bg-white"></div>
            </button>
          </div>
          <div>
            <h1 className="font-medium">Dark mode</h1>
            <p className="text-(--text-tertiary)">Coming Soon</p>
          </div>
          <button className="bg-(--danger-bg) text-(--danger) py-2.5 cursor-pointer rounded-lg font-medium">
            Log out
          </button>
        </main>
      </div>
    </>
  );
}
