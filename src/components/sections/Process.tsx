"use client";

import {
  HiOutlineChatAlt2,
  HiOutlineTemplate,
  HiOutlineDocumentText,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import { FadeIn, staggerContainer, staggerItem } from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROCESS_STEPS } from "@/constants";
import { motion } from "framer-motion";

const iconMap = {
  consultation: HiOutlineChatAlt2,
  design: HiOutlineTemplate,
  approval: HiOutlineDocumentText,
  construction: HiOutlineOfficeBuilding,
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <SectionLabel>Our Work Process</SectionLabel>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            From Concept to{" "}
            <span className="text-primary">Creation</span>
          </h2>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="absolute top-16 right-[12.5%] left-[12.5%] hidden h-0.5 bg-primary/20 lg:block" />

          {PROCESS_STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative text-center"
              >
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
                  <Icon className="text-3xl text-white" />
                  <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-primary">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
