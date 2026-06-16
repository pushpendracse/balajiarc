"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HiOutlineLightBulb,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineHeart,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FadeIn } from "@/components/animations/FadeIn";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { ABOUT_FEATURES } from "@/constants";

const iconMap = {
  architecture: HiOutlineLightBulb,
  vastu: HiOutlineHome,
  team: HiOutlineUserGroup,
  satisfaction: HiOutlineHeart,
};

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <FadeIn direction="left" className="relative">
          <div className="relative">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=750&fit=crop"
                alt="Modern house exterior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -right-4 -bottom-4 h-48 w-40 overflow-hidden rounded-xl border-4 border-white shadow-xl sm:-right-8 sm:h-56 sm:w-48">
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=500&fit=crop"
                alt="Luxury interior"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
              className="absolute -top-4 -right-4 flex items-center gap-3 rounded-xl bg-primary px-5 py-4 shadow-lg sm:-right-8"
            >
              <HiOutlineUserGroup className="text-2xl text-white" />
              <div>
                <p className="text-2xl font-bold text-white">+250</p>
                <p className="text-[10px] font-medium tracking-wider text-white/80 uppercase">
                  Projects Completed
                </p>
              </div>
            </motion.div>
          </div>
        </FadeIn>

        <div>
          <FadeIn>
            <SectionLabel>About Us</SectionLabel>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="mt-3 text-3xl leading-tight font-bold text-dark sm:text-4xl lg:text-[2.75rem]">
              Designing Spaces, Building{" "}
              <span className="text-primary">Relationships</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 leading-relaxed text-slate-600">
              Balaji Architect is a multi-disciplinary firm specializing in
              residential and commercial architecture. With over a decade of
              experience, we combine innovative design thinking with
              construction expertise to deliver spaces that inspire.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="mt-4 leading-relaxed text-slate-600">
              From Vastu-compliant planning to modern aesthetic elevations, our
              team ensures every project reflects your personality while meeting
              the highest standards of quality and safety.
            </p>
          </FadeIn>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {ABOUT_FEATURES.map((feature, index) => {
              const Icon = iconMap[feature.icon];
              return (
                <FadeIn key={feature.title} delay={0.3 + index * 0.1}>
                  <div className="group rounded-xl border border-slate-100 bg-slate-50 p-4 transition-all duration-300 hover:border-primary/20 hover:shadow-md">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                      <Icon className="text-lg text-primary transition-colors group-hover:text-white" />
                    </div>
                    <h4 className="text-sm font-bold text-navy">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.7}>
            <Button href="#about" className="mt-8">
              KNOW MORE ABOUT US
              <HiArrowRight />
            </Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
