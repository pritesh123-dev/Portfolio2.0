"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const ParticleScene = dynamic(
  () => import("@/components/three/ParticleScene"),
  { ssr: false }
);

const SOCIALS = [
  { Icon: Github, href: "https://github.com/priteshkumarsahoo16", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/priteshkumarsahoo16", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:priteshkumarsahoo16@gmail.com", label: "Email" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 3D canvas background */}
      <div className="absolute inset-0 z-0">
        <ParticleScene />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, #030308 100%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#030308] to-transparent z-[1] pointer-events-none" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
      >
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/8 text-emerald-400 text-xs font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Open to new opportunities · Bangalore, IN
        </motion.div>

        {/* Name */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.04]"
          >
            <span className="gradient-text">Pritesh Kumar</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading font-bold text-5xl sm:text-7xl lg:text-[5.5rem] tracking-tight leading-[1.04]"
          >
            <span className="gradient-text">Sahoo</span>
          </motion.h1>
        </div>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          {["Front End Developer", "4+ Years Exp", "React · Next.js · Three.js"].map(
            (tag, i) => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  i === 0
                    ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
                    : i === 1
                    ? "border-cyan-500/40 bg-cyan-500/10 text-cyan-300"
                    : "border-white/10 bg-white/5 text-slate-400"
                }`}
              >
                {tag}
              </span>
            )
          )}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto leading-relaxed mb-10"
        >
          Crafting pixel-perfect, high-performance web experiences across
          fintech, banking, and Web3 — with a 95+ Lighthouse obsession.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #06B6D4)",
              boxShadow: "0 0 24px rgba(124,58,237,0.35)",
            }}
          >
            View My Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-200" />
          </a>
          <a
            href="mailto:priteshkumarsahoo16@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/10 text-white font-semibold text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-200 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            Get In Touch
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex items-center justify-center gap-3"
        >
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-white/[0.08] flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500/40 hover:bg-violet-500/10 transition-all duration-200 cursor-pointer"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-slate-600 text-[10px] font-medium tracking-[0.25em] uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-violet-500/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
