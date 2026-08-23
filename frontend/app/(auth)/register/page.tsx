"use client";
import React, { useState } from "react";
import { FileSearch, EyeOff, Eye } from "lucide-react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen p-8 pt-6 flex flex-col">
      {/* Navbar */}
      <nav>
        <Link href={"/"} className="flex items-center gap-2 text-lg font-bold">
          <span className="flex items-center bg-(--accent) p-1.5 rounded-lg text-white">
            <FileSearch className="w-4 h-4" />
          </span>
          DocWise
        </Link>
      </nav>

      {/* Center everything */}
      <main className="flex-1 flex items-center justify-center pt-10">
        <div className="w-full max-w-sm">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Create your account</h1>

            <p className="text-(--text-secondary) mt-2">
              Start chatting with your documents in minutes.
            </p>
          </div>

          {/* Form */}
          <form
            action=""
            method="post"
            className="border border-(--border) rounded-2xl shadow-md bg-white p-6"
          >
            {/* Google */}
            <button
              type="button"
              className="w-full border border-(--border) hover:bg-(--bg-soft) cursor-pointer rounded-lg p-2 flex gap-2 items-center justify-center transition"
            >
              <FcGoogle className="w-5 h-5" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <hr className="flex-1 border-(--border)" />

              <span className="text-sm text-(--text-secondary)">
                or sign up with email
              </span>

              <hr className="flex-1 border-(--border)" />
            </div>

            {/* Full name */}
            <div className="mb-4">
              <label
                htmlFor="fullname"
                className="block mb-1.5 text-sm font-medium"
              >
                Full name
              </label>

              <input
                id="fullname"
                type="text"
                name="fullname"
                placeholder="Your name"
                className="w-full border border-(--border) rounded-lg p-2 outline-none focus:border-(--accent) transition"
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1.5 text-sm font-medium"
              >
                Email
              </label>

              <div className="relative">
                <input
                  id="email"
                  type={showPassword ? "text" : "password"}
                  name="email"
                  placeholder="you@example.com"
                  className="w-full border border-(--border) rounded-lg p-2 outline-none focus:border-(--accent) transition"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary) hover:text-(--text-primary) cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1.5 text-sm font-medium"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full border border-(--border) rounded-lg p-2 outline-none focus:border-(--accent) transition"
              />

              <p className="text-xs text-(--text-tertiary) mt-1.5">
                Use at least 8 characters
              </p>
            </div>

            {/* Terms */}
            <div className="flex gap-2 items-start text-sm pt-5 pb-5">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                required
                className="mt-1 accent-(--accent) cursor-pointer "
              />

              <label htmlFor="terms">
                I agree to the{" "}
                <Link
                  className="text-(--accent) font-medium hover:underline"
                  href="/terms"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-(--accent) font-medium hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            {/* Create account */}
            <button
              type="submit"
              className="w-full bg-(--accent) hover:bg-(--accent-hover) cursor-pointer text-white rounded-lg p-2 font-medium transition"
            >
              Create account
            </button>
          </form>

          {/* Login */}
          <p className="text-center mt-5 text-sm text-(--text-secondary)">
            Already have an account?{" "}
            <Link href="/login" className="text-(--accent) hover:underline">
              Log in
            </Link>
          </p>

          {/* Footer */}
          <footer className="text-center mt-12 text-sm text-(--text-secondary)">
            Privacy · Terms
          </footer>
        </div>
      </main>
    </div>
  );
}
