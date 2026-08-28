"use client";
import { Divide, File, Upload } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import { uploadDocument } from "@/services/documentService";

import YourFiles from "@/components/dashboard/YourFiles";

export default function Dashboard() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showUploadProgress, setShowUploadProgress] = useState(false);
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // 1. Show in Your Documents
    setSelectedFile(file);

    // 2. Hide the separate upload card
    setShowUploadProgress(false);

    // 3. Backend processing continues
    setUploading(true);

    try {
      await uploadDocument(file);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };
  return (
    <div className="flex flex-col gap-6 px-6 py-4 md:px-10 lg:px-18 xl:px-25">
      {/* Header */}
      <div>
        <h1 className="text-[25px] font-bold">Good afternoon</h1>

        <p className="mt-1 text-(--text-secondary)">
          Upload your notes and start asking questions.
        </p>
      </div>

      {/* Upload File Card */}
      <div
        className="flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-(--border) bg-white p-10 transition-colors hover:border-(--accent) cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--accent-light) text-(--accent)">
          <Upload className="h-5 w-5" />
        </div>

        <p className="text-center font-medium">
          Drag & drop a PDF or TXT file here, or{" "}
          <Link href="#" className="text-(--accent) hover:underline">
            browse files
          </Link>
        </p>

        <p className="text-sm text-(--text-tertiary)">
          PDF or TXT files up to 10MB
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.txt"
          onChange={handleFileChange}
          className="hidden"
        />
      </div>

      {/* Your Files */}
      <YourFiles selectedFile={selectedFile} uploading={uploading} />
    </div>
  );
}
