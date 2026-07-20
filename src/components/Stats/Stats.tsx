"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Handshake, Car, Trophy } from "lucide-react";

interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  description: string;
}

const stats: StatItem[] = [
  {
    id: "team",
    label: "Members",
    value: 45,
    suffix: "+",
    icon: <Users size={24} />,
    description: "Engineering students across mechanical, electrical, and business disciplines.",
  },
  {
    id: "sponsors",
    label: "Sponsors",
    value: 18,
    suffix: "",
    icon: <Handshake size={24} />,
    description: "Industry partners providing materials, tooling, and technical mentorship.",
  },
  {
    id: "vehicles",
    label: "Vehicles",
    value: 7,
    suffix: "",
    icon: <Car size={24} />,
    description: "Competition prototypes built since the team was established in 2018.",
  },
  {
    id: "competitions",
    label: "Competitions",
    value: 12,
    suffix: "+",
    icon: <Trophy size={24} />,
    description: "National and regional BAJA SAE events attended across the United States.",
  },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setCount(start);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-white sm:text-6xl">
      {count}
      {suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      id={stat.id === "team" ? "team" : stat.id === "sponsors" ? "sponsors" : undefined}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative overflow-hidden glass-panel p-8 transition-colors hover:border-accent/30"
    >
      <div className="absolute top-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />

      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center border border-white/10 text-accent transition-colors group-hover:border-accent/40 group-hover:bg-accent/10">
          {stat.icon}
        </div>
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">
          0{index + 1}
        </span>
      </div>

      <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
        {stat.label}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-white/40">{stat.description}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-medium uppercase tracking-[0.4em] text-accent">
            By the Numbers
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl">
            Team Performance
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/40">
            Eight seasons of continuous development, growing partnerships, and
            podium finishes at collegiate off-road events.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
