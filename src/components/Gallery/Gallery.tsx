"use client";

import { motion } from "framer-motion";

const galleryItems = [
  { label: "Endurance Run", tag: "Competition" },
  { label: "Chassis Welding", tag: "Build" },
  { label: "Suspension Tuning", tag: "Testing" },
  { label: "Design Review", tag: "Engineering" },
  { label: "Pit Crew", tag: "Team" },
  { label: "Dynamic Event", tag: "Race Day" },
] as const;

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
            Gallery
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            On Track & In Shop
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group relative aspect-[4/3] overflow-hidden glass-panel"
            >
              <div className="absolute inset-0 carbon-texture" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <div className="h-12 w-12 border border-accent/40 bg-accent/10" />
              </div>
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
                  {item.tag}
                </span>
                <p className="mt-1 text-sm font-medium text-white">{item.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
