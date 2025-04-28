"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  ThumbsUp,
  AlignEndHorizontal,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ValueProposition() {
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

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: <Shield className="h-6 w-6 text-[#02B14F]" />,
      title: "Secure Transaction",
      description:
        "Bank-level encryption and security protocols to keep your money safe. Transact and be happy",
    },
    {
      icon: <Users className="h-6 w-6 text-[#02B14F]" />,
      title: "Customer Support",
      description:
        "Dedicated support team to assist you with any questions or issues.",
    },
    {
      icon: <AlignEndHorizontal className="h-6 w-6 text-[#02B14F]" />,
      title: "Comprehensive Reporting",
      description:
        "Get the insights you need with detailed reports designed to guide better business decisions.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          className="flex flex-col md:flex-row gap-8 items-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div variants={leftVariants} className="md:w-2/3">
            <div className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm text-[#02B14F] mb-4">
              <ThumbsUp className="mr-1 h-4 w-4" />
              <span>Why Choose POS-Padi</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-[0.72px] text-gray-900 mb-4">
              Your No 1 Web App To Boost Business Goals
            </h2>
            <p className="text-[#636F73] mb-6">
              POS-Padi isn't just another POS—it's your reliable partner. With
              top-notch uptime, fast settlements, support, and competitive
              commissions.
            </p>
            <Button
              variant="outline"
              className="gap-2 group bg-[#02B14F] text-white hover:bg-green-50 hover:text-green-600 rounded-full px-8 py-6"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <motion.div
            variants={rightVariants}
            className="md:w-1/3 text-center p-8 rounded-xl shadow-sm"
          >
            <div className="flex flex-col items-center">
              <Users className="h-10 w-10 text-green-500 mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">10.5k</div>
              <p className="text-[#636F73]">
                Users have been enjoying POS-Padi
              </p>
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-[50px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={featureVariants}
              custom={index}
              className="bg-white p-6 rounded-xl hover:shadow-md transition-shadow duration-300 h-[300px] align-middle"
            >
              <div className="pt-10">
                <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-[#636F73]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
