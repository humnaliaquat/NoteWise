"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FileSearch, Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen p-8 pt-6 flex flex-col">
      {/* Navbar */}
      <nav>
        <Link
          href={"/"}
          className="flex items-center gap-2 text-lg font-bold cursor-pointer"
        >
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
            <h1 className="text-2xl font-bold">Welcome Back</h1>

            <p className="text-(--text-secondary) mt-2">
              Log in to keep chatting with your documents.
            </p>
          </div>

          {/* Form */}
          <form
            action=""
            method="post"
            className="border border-(--border) rounded-2xl shadow-md bg-white p-6"
          >
            <button
              type="button"
              className="w-full border border-(--border) hover:bg-(--bg-soft) cursor-pointer rounded-lg p-2 flex gap-2 items-center justify-center"
            >
              <FcGoogle className="w-5 h-5" />
              Continue with Google
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-5">
              <hr className="flex-1 border-(--border)" />

              <span className="text-sm text-(--text-secondary)">
                or login with email
              </span>

              <hr className="flex-1 border-(--border)" />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-1.5 text-sm font-medium"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                className="w-full border border-(--border) rounded-lg p-2 outline-none"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <div className="flex justify-between">
                {" "}
                <label
                  htmlFor="password"
                  className="block mb-1.5 text-sm font-medium"
                >
                  Password
                </label>
                <Link
                  href={"/"}
                  className="text-(--accent) mb-1.5 text-sm font-medium"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  name="password"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-(--border) rounded-lg p-2 pr-10 outline-none focus:border-(--accent)"
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text-secondary) hover:text-(--text-primary) cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-(--accent) hover:bg-(--accent-hover) cursor-pointer text-white rounded-lg p-2"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <p className="text-center mt-5 text-sm text-(--text-secondary)">
            Don't have an account?{" "}
            <Link href="/register" className="text-(--accent) hover:underline">
              Sign up
            </Link>
          </p>

          <footer className="text-center mt-15 text-sm text-(--text-secondary)">
            Privacy · Terms
          </footer>
        </div>
      </main>
    </div>
  );
}
