"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialSection() {
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

  const testimonialVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const testimonials: Testimonial[] = [
    {
      quote:
        "As someone who regularly sends money to family, this platform has been a lifesaver. The web app is intuitive and secure.",
      name: "Biola Oluwatito",
      role: "Product Designer",
    },
    {
      quote:
        "I've been using this service for my business transactions and it has simplified everything. The fees are reasonable and transfers are instant.",
      name: "Quin Darlington",
      role: "Business Owner",
    },
    {
      quote:
        "The customer service is exceptional. When I had an issue with a transaction, they resolved it within minutes. Highly recommend!",
      name: "Augustina Adika",
      role: "Tech Enthusiast",
    },
    {
      quote:
        "Pospadi changed the game for my business. I started with one terminal, now I manage three locations with steady daily earnings!",
      name: "Chris Okafor",
      role: "Business Owner",
    },
    {
      quote:
        "I love how easy it is to track my transactions and monitor my performance with the reports. It helps me plan better.",
      name: "Rachel Murabula",
      role: "Agency Banker",
    },
    {
      quote:
        "Customer service is always on point. Anytime I need support, they’re quick to respond and resolve.",
      name: "Mayowa Uche",
      role: "Product Manager",
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
              <span>Testimonial</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-[0.72px] text-[#290619]">
              Direct Stories From POS-Padi{" "}
              <span className="text-[#02B14F]">Users</span>
            </h2>
            <p className="mt-4 text-[#636F73] md:text-lg max-w-3xl mx-auto">
              Don't just take our word for it. Here's what people who use our
              services have to say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={testimonialVariants}
              >
                <Card className="p-6 h-full hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex-1">
                      <p className="text-[#7B8592] text-base">
                        "{testimonial.quote}"
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-200">
                        <Image
                          src="/placeholder.svg?height=48&width=48"
                          width={48}
                          height={48}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-[#7B8592]">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
