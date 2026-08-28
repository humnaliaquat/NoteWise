"use client";

import {
  FileSearch,
  File,
  MessageCircle,
  Clock4,
  Settings,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    id: 1,
    name: "Documents",
    icon: File,
    href: "/dashboard",
  },
  {
    id: 2,
    name: "Chat",
    icon: MessageCircle,
    href: "/dashboard/chat",
  },
  {
    id: 3,
    name: "Recents",
    icon: Clock4,
    href: "/dashboard/recents",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-(--border) bg-white">
      {/* Top */}
      <div>
        {/* Logo */}
        <nav className="border-b border-(--border) p-5">
          <Link href="/" className="flex items-center gap-2 text-md font-bold">
            <span className="flex items-center rounded-lg bg-(--accent) p-1.5 text-white">
              <FileSearch className="h-4 w-4" />
            </span>
            DocWise
          </Link>
        </nav>

        {/* Navigation */}
        <div className="p-3">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <Link
                href={item.href}
                key={item.id}
                className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-1.5 ${
                  isActive
                    ? "bg-(--accent-light) text-(--accent)"
                    : "text-(--text-secondary) hover:bg-gray-50"
                }`}
              >
                <item.icon className="h-4 w-4" />

                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom */}
      <footer className="mt-auto border-t border-(--border) p-3">
        {/* Settings */}
        <Link
          href="/dashboard/settings"
          className={`mb-3 flex items-center gap-3 rounded-lg px-3 py-1.5 ${
            pathname === "/dashboard/settings"
              ? "bg-(--accent-light) text-(--accent)"
              : "text-(--text-secondary) hover:bg-gray-50"
          }`}
        >
          <Settings className="h-4 w-4" />

          <span className="font-medium">Settings</span>
        </Link>

        {/* User */}
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--accent-light) text-sm font-medium text-(--accent)">
            HL
          </div>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-medium">Hamna</h1>

            <p className="truncate text-xs text-(--text-secondary)">
              hamna@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </aside>
  );
}
