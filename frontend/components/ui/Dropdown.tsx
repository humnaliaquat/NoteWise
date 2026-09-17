import React from "react";
import { FilePen, MessageCircle, Trash } from "lucide-react";
interface DropdownProps {
  onDelete: () => void;
}
export default function Dropdown({ onDelete }: DropdownProps) {
  const data = [
    { id: 1, name: "Rename", icon: FilePen },
    { id: 2, name: "Open chat", icon: MessageCircle },
    { id: 3, name: "Delete", icon: Trash },
  ];
  return (
    <div className="border border-(--border) shadow rounded-lg bg-white px-1 py-1.5 flex flex-col  z-50 w-37 text-sm font-medium ">
      {data.map((item) => (
        <button
          onClick={item.name == "Delete" ? onDelete : undefined}
          key={item.id}
          className={`${item.name == "Delete" ? "text-(--danger)" : "text-(--text)"} flex gap-2 px-3 py-1.5 cursor-pointer items-center hover:bg-(--accent-light) rounded-lg`}
        >
          <span>
            <item.icon className="w-4 h-4" />
          </span>
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}
