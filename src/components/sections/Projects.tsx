"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FadeIn } from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/constants";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <FadeIn>
            <SectionLabel>Our Projects</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold text-dark sm:text-4xl lg:text-[2.75rem]">
              Our Latest Projects
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Button variant="outline" href="#projects" className="!border-dark !text-dark hover:!bg-dark hover:!text-white">
              VIEW ALL PROJECTS
              <HiArrowRight />
            </Button>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-12">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
              >
                {PROJECTS.map((project, index) => (
                  <div
                    key={project.title}
                    className={`group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl ${
                      index === activeIndex ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="absolute right-0 bottom-0 left-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                      <p className="text-sm font-semibold text-white">
                        {project.title}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-gray-300 hover:bg-primary/50"
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
