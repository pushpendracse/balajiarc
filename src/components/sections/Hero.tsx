"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiPhone, HiArrowRight } from "react-icons/hi";
import Button from "@/components/ui/Button";
import FeatureBar from "@/components/sections/FeatureBar";
import { SITE } from "@/constants";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop"
          alt="Luxury modern villa"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-32 pb-48 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4 flex items-center gap-3"
          >
            <span className="h-0.5 w-10 bg-primary" />
            <span className="text-xs font-bold tracking-[0.25em] text-white/90 uppercase">
              We Design Your
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl"
          >
            <span className="text-primary">Dream</span>{" "}
            <span className="text-white">Home.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-3 text-2xl text-white/90 sm:text-3xl"
          >
            {SITE.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/70"
          >
            End-to-end architectural and construction solutions — from concept
            sketches to turnkey delivery. We transform your vision into
            beautifully crafted living spaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Button href="#contact">
              GET FREE CONSULTATION
              <HiArrowRight />
            </Button>
            <Button variant="outline" href={`tel:${SITE.phone}`}>
              <HiPhone />
              CALL NOW
            </Button>
          </motion.div>
        </div>
      </div>

      <FeatureBar />
    </section>
  );
}
