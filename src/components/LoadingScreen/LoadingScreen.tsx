"use client";

import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LOADER_DURATION_MS = 2800;

interface LoadingScreenProps {
  onComplete: () => void;
  logoText?: string;
  className?: string;
}

const textLines = ["ENGINEERING", "BEYOND", "LIMITS"] as const;

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: `${(i * 37 + 11) % 100}%`,
        top: `${(i * 53 + 7) % 100}%`,
        size: 1 + (i % 3),
        duration: 18 + (i % 12),
        delay: (i % 8) * 0.4,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white/20"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.45, 0.1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function LoadingScreen({
  onComplete,
  logoText = "BR",
  className,
}: LoadingScreenProps) {
  const completedRef = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (completedRef.current) return;
      completedRef.current = true;
      onComplete();
    }, LOADER_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#050505]",
        className
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -48 }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
      }}
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Subtle moving gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        animate={{
          background: [
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(225,6,0,0.06) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 80% 60%, rgba(225,6,0,0.08) 0%, transparent 60%)",
            "radial-gradient(ellipse 80% 60% at 20% 40%, rgba(225,6,0,0.06) 0%, transparent 60%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Carbon fiber overlay */}
      <div className="pointer-events-none absolute inset-0 carbon-texture opacity-[0.35]" aria-hidden />

      <FloatingParticles />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo ring */}
        <motion.div
          className="relative flex h-36 w-36 items-center justify-center sm:h-40 sm:w-40"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-accent/40"
            animate={{
              boxShadow: [
                "0 0 20px rgba(225,6,0,0.15), inset 0 0 20px rgba(225,6,0,0.05)",
                "0 0 55px rgba(225,6,0,0.45), inset 0 0 30px rgba(225,6,0,0.12)",
                "0 0 20px rgba(225,6,0,0.15), inset 0 0 20px rgba(225,6,0,0.05)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute inset-2 rounded-full border border-white/10 bg-white/[0.03]" />

          <span className="relative font-[family-name:var(--font-bebas-neue)] text-5xl tracking-[0.15em] text-white sm:text-6xl">
            {logoText}
          </span>
        </motion.div>

        {/* Text lines */}
        <div className="mt-10 flex flex-col items-center gap-1 sm:mt-12">
          {textLines.map((line, index) => (
            <div key={line} className="overflow-hidden">
              <motion.p
                className="font-[family-name:var(--font-bebas-neue)] text-3xl uppercase tracking-[0.25em] text-white sm:text-4xl md:text-5xl"
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.45 + index * 0.18,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-0">
        <div className="h-px w-full bg-white/10" />
        <motion.div
          className="h-[2px] origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: LOADER_DURATION_MS / 1000,
            ease: "linear",
            delay: 0.2,
          }}
          style={{ transformOrigin: "left center" }}
        />
      </div>
    </motion.div>
  );
}
