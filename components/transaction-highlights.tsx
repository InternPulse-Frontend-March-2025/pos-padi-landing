"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import FeatureCard from "@/components/feature-card";

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-12">
      <div className="flex flex-col px-4 md:px-6 gap-10">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <FeatureCard
            title="Realtime Transaction Update"
            description="Get all withdrawal and bills payment history on the go"
            imageSrc="/images/transaction-update.svg"
            imageAlt="Transaction Highlights"
            itemVariants={itemVariants}
          />
          <FeatureCard
            title="Instant Notification"
            description="All issues are notified to the agent and the business owner"
            imageSrc="/images/notification.svg"
            imageAlt="Notification Highlights"
            itemVariants={itemVariants}
          />
        </motion.div>
        <motion.div
          ref={ref}
          className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 scroll-smooth snap-x snap-mandatory"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="flex-shrink-0 w-full snap-start md:w-auto">
            <FeatureCard
              title="Loyalty Points"
              description="Customers get rewarded for transactions"
              imageSrc="/images/loyalty.svg"
              imageAlt="Loyalty Points"
              itemVariants={itemVariants}
            />
          </div>
          <div className="flex-shrink-0 w-full snap-start md:w-auto">
            <FeatureCard
              title="Recharge Effortlessly"
              description="Recharge your phone or buy data bundles for yourself and loved ones."
              imageSrc="/images/recharge.svg"
              imageAlt="Recharge Effortlessly"
              itemVariants={itemVariants}
            />
          </div>
          <div className="flex-shrink-0 w-full snap-start md:w-auto">
            <FeatureCard
              title="Terminal Management"
              description="Control how terminals are used across agents"
              imageSrc="/images/terminals.svg"
              imageAlt="Terminal Management"
              itemVariants={itemVariants}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
