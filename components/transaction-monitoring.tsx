"use client";

import { useRef } from "react";
import Image from "next/image";
import { Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function TransactionMonitoring() {
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

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  return (
    <section className="pt-8 bg-gradient-to-b from-[#02B14F] to-[#F4F9FA] text-white overflow-hidden">
      <div className="container px-4 md:px-6">
  <motion.div
    ref={ref}
    className="flex flex-col md:flex-row gap-8 items-center md:items-start"
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
    variants={containerVariants}
  >
    <motion.div variants={textVariants} className="md:w-1/2 gap-8">
      <div className="inline-flex items-center rounded-full border border-white/20 bg-white text-[#02B14F] px-3 py-1 text-sm mb-4">
        <Zap className="mr-1 h-4 w-4" />
        <span>Call to Action</span>
      </div>
      <h2 className="text-4xl font-semibold tracking-[0.72px] mb-4">
        Transaction Monitoring On The Go
      </h2>
      <p className="mb-6">
        With our mobile responsive platform, you can monitor transactions
        anywhere and anytime, regardless of the screen size
      </p>
    </motion.div>
    <motion.div variants={imageVariants} className="md:w-1/2">
      <div className="relative">
        <Image
          src="/images/cta.svg"
          width={300}
          height={600}
          alt="Mobile Dashboard"
          className="mx-auto w-[400px] h-full"
        />
      </div>
    </motion.div>
  </motion.div>
</div>

    </section>
  );
}
