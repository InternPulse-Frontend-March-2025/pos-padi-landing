"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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

  const headerVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const faqVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const faqs: FaqItem[] = [
    {
      question: "How do I become a Pospadi agent?",
      answer:
        "Simply fill out the signup form on our website or contact our support team to get started. We'll guide you through the onboarding process and provide all necessary training.",
    },
    {
      question: "What services can I offer with the Pospadi POS?",
      answer:
        "With POS-Padi, you can offer cash withdrawals, deposits, bill payments (electricity, TV subscriptions, etc.), airtime and data purchases, and money transfers. Our platform is constantly expanding with new services.",
    },
    {
      question: "How fast are settlements?",
      answer:
        "We process settlements daily. Funds are typically credited to your account within 24 hours of transaction completion, ensuring you have quick access to your earnings.",
    },
    {
      question: "What if my POS has an issue?",
      answer:
        "Our dedicated support team is available to help resolve any issues. You can reach out through the app, call our support line, or visit one of our service centers. We typically resolve technical issues within 24-48 hours.",
    },
    {
      question: "Is there a daily transaction limit?",
      answer:
        "Yes, there are transaction limits for security purposes. Standard accounts have a daily transaction limit of ₦500,000, while verified business accounts can have higher limits based on their business needs and verification status.",
    },
    {
      question: "Do I need a business name or shop to start?",
      answer:
        "No, you don't necessarily need a registered business name to start. Individual agents can operate with just their personal details. However, having a dedicated space for your operations is recommended for better customer service.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={headerVariants} className="text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-green-200 bg-green-100 px-3 py-1 text-sm text-green-500 mb-4">
              <Star className="mr-1 h-4 w-4" />
              <span>FAQs</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-[0.72px] text-[#290619]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-[#636F73] md:text-lg max-w-3xl mx-auto">
              These are some of the questions that users frequently ask and we
              have answered them here
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <motion.div key={index} custom={index} variants={faqVariants}>
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
