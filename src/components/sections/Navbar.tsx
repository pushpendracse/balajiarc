"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPhone, HiChevronDown, HiMenu, HiX } from "react-icons/hi";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/constants";

import Image from "next/image";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-white/95 py-3 shadow-lg backdrop-blur-md"
        : "bg-transparent py-5"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Image
          src="/balaji-logo.png"
          alt="Balaji Architect"
          width={120}
          height={30}
          priority
        />


        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group flex items-center gap-1 text-xs font-semibold tracking-widest transition-colors ${scrolled
                ? 'text-gray-700 hover:text-primary'
                : 'text-white/90 hover:text-white'
                }`}
            >
              {link.label}
              {"hasDropdown" in link && link.hasDropdown && (
                <HiChevronDown className="text-sm transition-transform group-hover:rotate-180" />
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href={`tel:${SITE.phone}`} className="!px-5 !py-2.5 !text-xs">
            <HiPhone className="text-base" />
            CALL NOW
          </Button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`text-2xl lg:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white/98 backdrop-blur-md lg:hidden shadow-lg"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-gray-200 py-3 text-sm font-semibold tracking-widest text-gray-700 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
              <Button
                href={`tel:${SITE.phone}`}
                className="mt-4 w-full !text-xs"
              >
                <HiPhone />
                CALL NOW
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
