"use client";

import { HiArrowRight } from "react-icons/hi";
import { FadeIn } from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 lg:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10h80v80H10z' fill='none' stroke='%23ffffff' stroke-width='0.5'/%3E%3Cpath d='M10 50h80M50 10v80' fill='none' stroke='%23ffffff' stroke-width='0.3'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <FadeIn direction="left">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Build Something Amazing Together!
          </h2>
          <p className="mt-3 max-w-lg text-base text-white/80">
            Ready to start your dream project? Get in touch with our expert team
            for a free consultation and personalized quote.
          </p>
        </FadeIn>

        <FadeIn direction="right" delay={0.2}>
          <Button variant="white" href="#contact" className="shrink-0">
            GET FREE CONSULTATION
            <HiArrowRight />
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
