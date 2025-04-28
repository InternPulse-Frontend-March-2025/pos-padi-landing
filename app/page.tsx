"use client";

import { HeroSection } from "@/components/hero-section";
import { FeatureGrid } from "@/components/feature-grid";
import { ValueProposition } from "@/components/value-proposition";
import { TestimonialSection } from "@/components/testimonial-section";
import { TransactionMonitoring } from "@/components/transaction-monitoring";
import { FaqSection } from "@/components/faq-section";

export default function Home() {
  return (
    <main className="flex-1 bg-[#F4F9FA]">
      <HeroSection />
      <FeatureGrid />
      <ValueProposition />
      <TestimonialSection />
      <TransactionMonitoring />
      <FaqSection />
    </main>
  );
}
