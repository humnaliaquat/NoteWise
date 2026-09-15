"use client";

import { useState } from "react";
import Sidebar from "@/components/ui/Sidebar";
import SettingsCard from "@/components/ui/SettingsCard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Sidebar onSettingsClick={() => setSettingsOpen(true)} />

      <main className="ml-64 min-h-screen">{children}</main>

      {settingsOpen && <SettingsCard onClose={() => setSettingsOpen(false)} />}
    </div>
  );
}
