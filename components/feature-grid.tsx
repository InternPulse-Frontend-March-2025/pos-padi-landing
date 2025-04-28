"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Features } from "@/components/transaction-highlights";

export function FeatureGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={headerVariants} className="text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm text-green-500 mb-4 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M2.5 8.5625L2.5415 11.5555C2.583 14.5486 3.79952 15.7318 6.79257 15.6903L10.3856 15.6405C13.3786 15.599 14.5619 14.3825 14.5203 11.3894L14.4788 8.3964"
                  stroke="#02B14F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.49994 8.99752C9.71983 8.98061 10.606 7.97489 10.4691 6.75667L9.96736 2.30987L6.85433 2.35303L6.46945 6.81213C6.36638 8.03368 7.28006 9.01444 8.49994 8.99752Z"
                  stroke="#02B14F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.7062 8.94146C14.0527 8.92279 15.0241 7.81588 14.8722 6.47786L14.6602 4.64729C14.3962 2.91745 13.7203 2.26009 11.9738 2.28431L9.94067 2.3125L10.4721 6.97891C10.6007 8.07724 11.6063 8.95671 12.7062 8.94146Z"
                  stroke="#02B14F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4.26059 9.05723C5.36048 9.04198 6.34133 8.13496 6.43274 7.03359L6.55896 5.55836L6.83457 2.35423L4.80143 2.38242C3.05493 2.40664 2.39757 3.08249 2.18163 4.81898L2.02706 6.65463C1.91232 7.99635 2.91405 9.0759 4.26059 9.05723Z"
                  stroke="#02B14F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5459 12.3285C7.43267 12.3439 6.88707 12.9048 6.9025 14.0181L6.92561 15.6846L10.2586 15.6384L10.2355 13.9719C10.2201 12.8586 9.65913 12.313 8.5459 12.3285Z"
                  stroke="#02B14F"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#290619]">
              All You Need For Your Agency Banking Business
            </h2>
            <p className="mt-4 font-normal text-[#667085] md:text-xl max-w-3xl mx-auto">
              Our POS platform is packed with powerful tools to help you serve
              customers faster, manage your earnings, and grow with ease—no tech
              skills needed.
            </p>
          </motion.div>
          <Features />
        </motion.div>
      </div>
    </section>
  );
}
