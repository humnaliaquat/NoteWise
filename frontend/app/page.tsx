import FAQ from "@/components/landing-page/FAQ";
import Features from "@/components/landing-page/Features";
import HeroSection from "@/components/landing-page/HeroSection";
import HowItWorks from "@/components/landing-page/HowItWorks";
import LandingPageNav from "@/components/ui/LandingPageNav";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col  ">
      <LandingPageNav />
      <HeroSection />
      <Features />
      <HowItWorks />
      <FAQ />
      <section className=" py-20 ">
        <div className="flex flex-col items-center gap-5  bg-[#e8e7f7]  py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Start chatting with your notes
          </h2>

          <p className="max-w-lg leading-relaxed text-(--text-secondary)">
            Upload your first document and ask your first question in under a
            minute.
          </p>

          <button
            className="
        mt-2 rounded-lg
        bg-(--accent)
        px-6 py-3
        font-semibold text-white
        shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5
        hover:bg-(--accent-hover)
        hover:shadow-md cursor-pointer
      "
          >
            Get started free
          </button>
        </div>
      </section>
    </div>
  );
}
