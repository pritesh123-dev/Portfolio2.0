"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, Zap, Trophy } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";
import { CountUp } from "@/components/ui/CountUp";

const STATS = [
  { icon: Briefcase, end: 4.5, suffix: "+ Yrs", decimals: 1, label: "Full Stack Delivery", color: "#7C3AED" },
  { icon: Trophy, end: 95, suffix: "+", decimals: 0, label: "Lighthouse & CWV", color: "#22D3EE" },
  { icon: Zap, end: 30, suffix: "%", decimals: 0, label: "Faster page delivery", color: "#10B981" },
  { icon: MapPin, end: 6, suffix: "+", decimals: 0, label: "Surfaces on shared UI kit", color: "#F59E0B" },
];

const ABOUT_LINES = [
  {
    text: "Frontend-heavy full stack developer with 4.5+ years shipping consumer Web3, tier-1 banking/fintech and B2B SaaS products end to end — React.js, Next.js and TypeScript on the front, Node.js and Java services behind them.",
    primary: true,
  },
  {
    text: "I own the whole surface: component architecture, state management, API contracts and release. Recent work spans DEX swap and liquidity interfaces on wagmi/viem, corporate banking dashboards with maker-checker approval flows, and internal npm packages of typed React components used across 6+ product surfaces.",
    primary: false,
  },
  {
    text: "Strong on the fundamentals that make the rest hold up — data structures, algorithms and system design — plus a performance habit that has taken real products from LCP 4.8s to 1.6s and Lighthouse 60s to 95+, at WCAG 2.1 AA.",
    primary: false,
  },
];

const HIGHLIGHT_SKILLS = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js / Express",
  "Redux Toolkit",
  "Tailwind CSS",
  "wagmi / viem",
  "AWS S3",
  "WCAG 2.1 AA",
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header with reveal */}
        <div className="text-center mb-16">
          <motion.span
            className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            <RevealText text="Who I am" delay={0.1} stagger={0.12} />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Text column — each paragraph slides in individually */}
          <div>
            {ABOUT_LINES.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24, filter: "blur(4px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.14,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`leading-[1.8] mb-5 ${
                  line.primary ? "text-slate-200 text-lg" : "text-slate-400 text-base"
                }`}
              >
                {line.text}
              </motion.p>
            ))}

            {/* Skill tags wave in */}
            <div className="flex flex-wrap gap-2 mt-6">
              {HIGHLIGHT_SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85, y: 8 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.55 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="px-3 py-1 text-xs font-medium rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 cursor-default hover:bg-violet-500/20 transition-colors duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Stats — CountUp numbers */}
          <div className="grid grid-cols-2 gap-4">
            {STATS.map(({ icon: Icon, end, suffix, decimals, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 32, scale: 0.92 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="glass p-6 rounded-2xl group relative overflow-hidden cursor-default"
                style={{
                  ["--accent" as string]: color,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${color}12, transparent 70%)`,
                  }}
                />

                <Icon
                  className="w-5 h-5 mb-3 transition-transform duration-200 group-hover:scale-110"
                  style={{ color }}
                />
                <div
                  className="font-heading font-bold text-3xl mb-1"
                  style={{ color }}
                >
                  <CountUp end={end} suffix={suffix} decimals={decimals} duration={1.8} />
                </div>
                <div className="text-xs text-slate-500 font-medium leading-snug">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
