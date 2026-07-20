"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com", icon: FaYoutube },
  { label: "Email", href: "mailto:architkokate@gmail.com", icon: Mail },
] as const;

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Vehicle", href: "#vehicle" },
  { label: "Team", href: "#team" },
  { label: "Sponsors", href: "#sponsors" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/5">
      <div className="absolute inset-0 carbon-texture opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-accent bg-accent/10">
                <span className="font-[family-name:var(--font-display)] text-lg font-bold text-accent">
                  AO
                </span>
              </div>
              <div>
                <p className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-[0.2em]">
                  Team Kaiser Racing
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
                  BAJA SAE Racing
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/40">
              Engineering the next generation of off-road competition vehicles
              from our campus workshop.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Quick Links
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 lg:justify-center">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:text-right"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Get in Touch
            </p>
            <a
              href="mailto:architkokate@gmail.com"
              className="mt-4 block text-sm text-white/40 transition-colors hover:text-accent"
            >
             architkokate@gmail.com
            </a>
            <div className="mt-6 flex gap-3 lg:justify-end">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-white/40 transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {year} Team Kaiser Racing BAJA SAE Team. All rights reserved.
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Design · Build · Race
          </p>
        </div>
      </div>
    </footer>
  );
}
