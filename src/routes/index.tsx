import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { useReveal } from "@/lib/useReveal";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Premium from "@/components/site/Premium";
import BibleBanner from "@/components/site/BibleBanner";
import Worlds from "@/components/site/Worlds";
import ParentsSection from "@/components/site/ParentsSection";
import Testimonials from "@/components/site/Testimonials";
import FAQ from "@/components/site/FAQ";
import FinalCTA from "@/components/site/FinalCTA";
import Footer from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  useReveal();
  useEffect(() => {
    document.body.classList.add("uc-body");
    return () => document.body.classList.remove("uc-body");
  }, []);
  return (
    <div className="cosmic grain relative">
      <Navbar />
      <main>
        <Hero />
        <Premium />
        <BibleBanner />
        <Worlds />
        <ParentsSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
