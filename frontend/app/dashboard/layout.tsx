import Sidebar from "@/components/ui/Sidebar";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "Dashboard | DocWise",
    template: "%s | DocWise",
  },
  description: "Manage your documents and chat with your notes using DocWise.",
};
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <Sidebar />

      {/* Main section */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* <DashboardHeader /> */}

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
