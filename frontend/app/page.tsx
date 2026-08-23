import HeroSection from "@/components/landing-page/HeroSection";
import LandingPageNav from "@/components/ui/LandingPageNav";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col  ">
      <LandingPageNav />
      <HeroSection />
    </div>
  );
}
