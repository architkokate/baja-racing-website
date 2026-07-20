"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 carbon-texture opacity-50" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-xs font-medium uppercase tracking-[0.4em] text-accent"
            >
              About Us
            </motion.span>

            <motion.h2
              custom={0.1}
              variants={fadeUp}
              className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl"
            >
              Engineered by Students,
              <br />
              Proven on the Track
            </motion.h2>

            <motion.div
              custom={0.2}
              variants={fadeUp}
              className="mt-8 space-y-5 text-sm leading-relaxed text-white/50 sm:text-base"
            >
              <p>
                Team Kaiser Racing (TKR) is the official BAJA SAE team of Fr.
                C. Rodrigues Institute of Technology (FCRIT), Vashi. Driven by
                innovation, teamwork, and engineering excellence, we design,
                manufacture, and validate a single-seat all-terrain vehicle from
                the ground up for national BAJA SAE competitions.
              </p>
              <p>
                Our multidisciplinary team works across chassis design,
                suspension, steering, braking, powertrain, transmission,
                electronics, manufacturing, and vehicle dynamics. Every
                component is designed, analyzed, fabricated, and tested by
                students, transforming classroom knowledge into real-world
                engineering solutions.
              </p>
              <p>
                Beyond building an off-road vehicle, Team Kaiser Racing develops
                future engineers by fostering technical expertise, leadership,
                project management, and collaboration. Every season presents new
                challenges that push us to innovate, compete, and represent FCRIT
                Vashi on the national motorsport stage.
              </p>
            </motion.div>

            <motion.div
              custom={0.35}
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-6"
            >
              {[
                { value: "2018", label: "Founded" },
                { value: "4", label: "Sub-teams" },
                { value: "800+", label: "Design Hours" },
              ].map((item) => (
                <div key={item.label} className="glass-panel px-6 py-4">
                  <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Image placeholder */}
          <motion.div
            id="vehicle"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 border border-accent/20" />
            <div className="relative aspect-[4/3] overflow-hidden glass-panel red-glow">
              <div className="absolute inset-0 carbon-texture" />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-accent/5 via-transparent to-black/60">
                <div className="flex h-20 w-20 items-center justify-center border border-white/10 bg-white/5">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-10 w-10 text-white/20"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path d="M4 16l1.5-5h13L20 16M6 16v2h12v-2M7 11l1-3h8l1 3" />
                    <circle cx="7.5" cy="18" r="1.5" />
                    <circle cx="16.5" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/30">
                  AR-26 Vehicle Render
                </p>
                <p className="mt-2 max-w-xs text-center text-[11px] text-white/20">
                  Tubular space-frame chassis · CVT powertrain · 10&quot; travel
                  suspension
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 glass-panel px-5 py-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                Current Build
              </p>
              <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-accent">
                 M12
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
