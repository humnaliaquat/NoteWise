"use client";

import { File, FileText, Loader2, MoreVertical, Upload } from "lucide-react";

interface YourFilesProps {
  selectedFile: File | null;
  uploading: boolean;
}

interface Document {
  id: number;
  name: string;
  pages: number;
  size: number;
  time: string;
  status: "Ready" | "Processing";
}

// Temporary data — replace this with API data later
const documents: Document[] = [];

export default function YourFiles({ selectedFile, uploading }: YourFilesProps) {
  const totalDocuments = documents.length + (selectedFile ? 1 : 0);

  const hasDocuments = totalDocuments > 0;

  return (
    <section className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-md font-bold">Your Documents</h2>

        <p className="text-sm text-(--text-tertiary)">
          {totalDocuments} {totalDocuments === 1 ? "document" : "documents"}
        </p>
      </div>

      {/* Empty State */}
      {!hasDocuments ? (
        <div className="flex min-h-55 flex-col items-center justify-center rounded-xl px-6 py-10 text-center">
          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-(--accent-light) text-(--accent)">
            <FileText className="h-5 w-5" />
          </div>

          <h3 className="font-semibold">No documents yet</h3>

          <p className="mt-1 max-w-sm text-sm text-(--text-tertiary)">
            Upload your first PDF or TXT file to start chatting with your notes.
          </p>
        </div>
      ) : (
        /* Documents */
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Newly uploaded file */}
          {selectedFile && (
            <DocumentCard
              name={selectedFile.name}
              size={selectedFile.size / (1024 * 1024)}
              time="Just now"
              status={uploading ? "Processing" : "Ready"}
            />
          )}

          {/* Existing documents */}
          {documents.map((document) => (
            <DocumentCard
              key={document.id}
              name={document.name}
              pages={document.pages}
              size={document.size}
              time={document.time}
              status={document.status}
            />
          ))}
        </div>
      )}
    </section>
  );
}

/* -------------------------------- */
/* Document Card */
/* -------------------------------- */

interface DocumentCardProps {
  name: string;
  pages?: number;
  size: number;
  time: string;
  status: "Ready" | "Processing";
}

function DocumentCard({ name, pages, size, time, status }: DocumentCardProps) {
  const isProcessing = status === "Processing";

  return (
    <div className="group rounded-xl border border-(--border) bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      {/* Top section */}
      <div className="flex items-start justify-between gap-3">
        {/* File icon */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-(--accent-light) text-(--accent)">
          <File className="h-4 w-4" />
        </div>

        {/* More button */}
        <button
          type="button"
          aria-label={`More options for ${name}`}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-(--text-tertiary) opacity-0 transition-all hover:bg-gray-100 hover:text-(--text-primary) group-hover:opacity-100"
        >
          <MoreVertical className="h-4 w-4" />
        </button>
      </div>

      {/* Document information */}
      <div className="mt-4 min-w-0">
        <p className="truncate font-semibold" title={name}>
          {name}
        </p>

        <p className="mt-1 truncate text-xs text-(--text-tertiary)">
          {pages !== undefined && `${pages} pages · `}
          {size.toFixed(2)} MB · {time}
        </p>
      </div>

      {/* Status */}
      <div className="mt-3">
        {isProcessing ? (
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-[#ffe8ce] px-2.5 py-1 text-[11px] font-semibold text-(--warning)">
            <Loader2 className="h-3 w-3 animate-spin" />
            Processing
          </div>
        ) : (
          <div className="flex w-fit items-center gap-1.5 rounded-full bg-[#ccfce5] px-2.5 py-1 text-[11px] font-semibold text-(--success)">
            <span className="h-1.5 w-1.5 rounded-full bg-(--success)" />
            Ready
          </div>
        )}
      </div>
    </div>
  );
}
