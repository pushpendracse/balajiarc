"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineDocumentText,
  HiOutlineCube,
  HiOutlineColorSwatch,
  HiOutlineOfficeBuilding,
  HiOutlineTemplate,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { FadeIn, staggerContainer, staggerItem } from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import { SERVICES } from "@/constants";

const iconMap = {
  plan: HiOutlineDocumentText,
  elevation: HiOutlineCube,
  interior: HiOutlineColorSwatch,
  construction: HiOutlineOfficeBuilding,
  structural: HiOutlineTemplate,
  commercial: HiOutlineBriefcase,
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center">
          <SectionLabel>Our Services</SectionLabel>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-gray-900 sm:text-4xl lg:text-[2.75rem]">
            Complete Architectural & Construction Solutions
          </h2>
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group overflow-hidden rounded-2xl bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  <div className="absolute -bottom-6 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="text-2xl text-white" />
                  </div>
                </div>
                <div className="px-6 pt-10 pb-8 text-center">
                  <h3 className="text-lg font-bold tracking-wide text-gray-900 uppercase">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
