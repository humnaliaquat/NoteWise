"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FileSearch, Menu, X } from "lucide-react";

export default function LandingPageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative border-b border-(--border) px-6 py-4 md:px-12 lg:px-30">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-lg font-bold">
          <span className="flex items-center rounded-lg bg-(--accent) p-1.5 text-white">
            <FileSearch className="h-4 w-4" />
          </span>
          DocWise
        </Link>

        {/* Center links - Desktop */}
        <div className="hidden items-center gap-8 font-medium text-(--text-secondary) md:flex">
          <Link
            href="/#features"
            className="rounded-lg px-3 py-2 hover:bg-(--bg-softer-highlight) hover:text-(--text)"
          >
            Features
          </Link>

          <Link
            href="/#how-it-works"
            className="rounded-lg px-3 py-2 hover:bg-(--bg-softer-highlight) hover:text-(--text)"
          >
            How it works
          </Link>

          <Link
            href="/#faq"
            className="rounded-lg px-3 py-2 hover:bg-(--bg-softer-highlight) hover:text-(--text)"
          >
            FAQ
          </Link>
        </div>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/login"
            className="font-medium text-(--text-secondary) hover:text-(--text)"
          >
            Log in
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-(--border) px-4 py-2.5 font-medium hover:border-(--accent) hover:text-(--accent)"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 hover:bg-(--bg-softer-highlight) md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-(--border) mt-4 pt-4 md:hidden">
          <div className="flex flex-col gap-1">
            {/* Center links */}
            <Link
              href="/#features"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-(--text-secondary) hover:bg-(--bg-softer-highlight) hover:text-(--text)"
            >
              Features
            </Link>

            <Link
              href="/#how-it-works"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-(--text-secondary) hover:bg-(--bg-softer-highlight) hover:text-(--text)"
            >
              How it works
            </Link>

            <Link
              href="/#faq"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-(--text-secondary) hover:bg-(--bg-softer-highlight) hover:text-(--text)"
            >
              FAQ
            </Link>

            {/* Divider */}
            <div className="my-2 border-t border-(--border)" />

            {/* Auth buttons */}
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 font-medium text-(--text-secondary) hover:bg-(--bg-softer-highlight) hover:text-(--text)"
            >
              Log in
            </Link>

            <Link
              href="/register"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 rounded-lg bg-(--accent) px-4 py-2.5 text-center font-medium text-white hover:bg-(--accent-hover)"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
