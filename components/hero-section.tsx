"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="flex flex-col items-center text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-xs text-green-500 mb-6"
          >
            <span>Top Rated POS App For Agency Banking</span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-5xl font-semibold text-[#290619] max-w-3xl mb-4"
          >
            Powering Reliable Transactions, Anywhere
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-[800px] font-normal text-[#667085] md:text-xl mb-8"
          >
            POS-Padi platform is fast, secure, and designed for growth. Manage
            your transfers, withdrawals, bill payments, and more, all from one
            device.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Button
              className="bg-green-500 hover:bg-green-600 text-white rounded-full"
              onClick={() =>
                (window.location.href =
                  "https://pos-padi.netlify.app/admin-signup")
              }
            >
              Get Started
            </Button>
            <Button
              variant="outline"
              className="rounded-full border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600"
            >
              Book a Demo
            </Button>
          </motion.div>

          <motion.div
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.7,
                  ease: "easeOut",
                },
              },
            }}
            className="relative w-full max-w-5xl"
          >
            <Image
              src="/images/hero-img.svg"
              width={1200}
              height={600}
              alt="POS-Padi Dashboard"
              className="rounded-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
