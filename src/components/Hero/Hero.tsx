"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
<div className="absolute inset-0 overflow-hidden">

<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 h-full w-full object-cover"
>
  <source src="/videos/hero.mp4" type="video/mp4" />
</video>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/65" />

{/* Red Gradient */}
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/50" />

{/* Bottom Fade */}
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

</div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-4"
        >
          <span className="h-px w-12 bg-accent" />
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
            Season 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-5xl font-[family-name:var(--font-display)] text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Engineering
          <br />
          <span className="text-gradient-red">Beyond Limits</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-lg text-lg tracking-wide text-white/60 sm:text-xl"
        >
          Design <span className="text-accent">•</span> Build{" "}
          <span className="text-accent">•</span> Race
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-xl text-sm leading-relaxed text-white/40"
        >
          A university motorsport team pushing the boundaries of off-road
          vehicle design for BAJA SAE competitions across India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 flex flex-col gap-4 sm:flex-row"
        >
          <motion.a
            href="#about"
            whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(225,6,0,0.3)" }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-accent-hover"
          >
            Explore Team
          </motion.a>
          <motion.a
            href="#vehicle"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="glass-panel inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all hover:border-accent/40 hover:bg-white/5"
          >
            View Vehicle
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40 transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
