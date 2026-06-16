"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  HiPhone,
  HiMail,
  HiLocationMarker,
} from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import {
  SITE,
  FOOTER_QUICK_LINKS,
  FOOTER_SERVICES,
  SOCIAL_LINKS,
} from "@/constants";
import Image from "next/image";

const socialIconMap = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", mobile: "", message: "" });
  };

  return (
    <footer id="contact" className="bg-gray-900 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <FadeIn className="lg:col-span-3">
            <Image
                      src="/balaji-logo.png"
                      alt="Balaji Architect"
                      width={120}
                      height={30}
                      priority
                    />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Balaji Architect delivers innovative architectural and construction
              solutions with a commitment to quality, Vastu compliance, and
              customer satisfaction.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-white transition-colors hover:bg-primary"
                    aria-label={social.label}
                  >
                    <Icon className="text-sm" />
                  </motion.a>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.3} className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiPhone className="mt-0.5 shrink-0 text-lg text-primary" />
                <div>
                  <p className="text-xs text-white/50">Phone</p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-sm text-white/80 hover:text-primary"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiMail className="mt-0.5 shrink-0 text-lg text-primary" />
                <div>
                  <p className="text-xs text-white/50">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-sm text-white/80 hover:text-primary"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <HiLocationMarker className="mt-0.5 shrink-0 text-lg text-primary" />
                <div>
                  <p className="text-xs text-white/50">Address</p>
                  <p className="text-sm text-white/80">{SITE.address}</p>
                </div>
              </li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.4} className="lg:col-span-3">
            <h4 className="mb-4 text-sm font-bold tracking-wider text-white uppercase">
              Enquire Now!
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                required
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary"
              />
              <textarea
                placeholder="Your Message"
                rows={3}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full resize-none rounded-lg border border-gray-600 bg-gray-800 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-primary"
              />
              <Button type="submit" className="w-full">
                SEND MESSAGE
              </Button>
            </form>
          </FadeIn>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Balaji Architect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
