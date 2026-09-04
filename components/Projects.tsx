"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, CandlestickChart, UtensilsCrossed } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AI Travel Studio",
    subtitle: "Next.js App Router & Streaming AI Agent",
    description:
      "Next.js travel planner driven by a streaming agent loop over the Claude Messages API — day-by-day itineraries render while the model is still writing them, each day drawn as a Mapbox walking route with live weather deciding which stops land where. Drag-and-drop editing with optimistic writes, version-conflict reconciliation, and an offline-first service worker.",
    tech: ["Next.js 15", "React 19", "Claude API", "Mapbox GL", "dnd-kit", "Zustand", "TypeScript"],
    accent: "#7C3AED",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    icon: Sparkles,
    github: "https://github.com/pritesh123-dev/ai-travel-studio",
    live: "https://friendly-frangollo-0caa36.netlify.app/",
  },
  {
    id: 2,
    title: "Blackhole DEX",
    subtitle: "Decentralized Exchange Interface & On-Chain Automation",
    description:
      "Production DEX frontend — AMM swap flows with multi-hop routing, slippage and price-impact controls, ERC-20 approvals and gas estimation, liquidity-pool / staking / gauge-voting dashboards, wallet connect and full transaction lifecycle states, with on-chain data indexed through a GraphQL subgraph layer.",
    tech: ["React", "Vite", "TypeScript", "wagmi / viem", "RainbowKit", "Uniswap SDK", "GraphQL"],
    accent: "#22D3EE",
    gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
    icon: CandlestickChart,
    github: "https://github.com/pritesh123-dev/Blackhole_Dex_Bot",
    live: null,
  },
  {
    id: 3,
    title: "Biriyani Nation",
    subtitle: "Full-Stack Ordering App on Serverless AWS",
    description:
      "Pickup-only ordering platform for a cloud kitchen, built to run on roughly ₹10–150 of AWS a month. Ships an Expo React Native app for Android, an installable React PWA for iOS, and a single-file kitchen dashboard — all against one serverless backend of Lambda, DynamoDB, S3/CloudFront and SNS-based OTP auth.",
    tech: ["React Native (Expo)", "React PWA", "AWS Lambda", "DynamoDB", "S3 / CloudFront", "TypeScript"],
    accent: "#F59E0B",
    gradient: "from-amber-500/20 via-orange-600/10 to-transparent",
    icon: UtensilsCrossed,
    github: "https://github.com/pritesh123-dev/Biriyani_Nation_App",
    live: "https://biriyanination.netlify.app/",
  },
];

function TiltCard({ project }: { project: (typeof PROJECTS)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const Icon = project.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
      className="h-full"
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 350, damping: 35 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative rounded-2xl overflow-hidden cursor-pointer group h-full"
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Glass surface */}
        <div className="absolute inset-0 glass" />

        {/* Mouse glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(200px circle at ${glowPos.x}% ${glowPos.y}%, ${project.accent}18, transparent 70%)`,
          }}
        />

        {/* Border glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{ boxShadow: `inset 0 0 0 1px ${project.accent}40` }}
        />

        {/* Content */}
        <div
          className="relative z-10 p-8"
          style={{ transform: "translateZ(20px)" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${project.accent}15`,
                border: `1px solid ${project.accent}30`,
              }}
            >
              <Icon className="w-5 h-5" style={{ color: project.accent }} />
            </div>
            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} live demo`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Text */}
          <p className="text-[11px] font-semibold uppercase tracking-widest mb-2" style={{ color: project.accent }}>
            {project.subtitle}
          </p>
          <h3 className="font-heading font-bold text-2xl text-white mb-3">
            {project.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-medium rounded-lg"
                style={{
                  backgroundColor: `${project.accent}10`,
                  color: project.accent,
                  border: `1px solid ${project.accent}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-violet-600/6 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em]">
            Projects
          </span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 text-white">
            Things I&apos;ve built
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => {
            /* A lone card on the final row is centred at half width instead of
               hanging off to one side. */
            const isLonelyLast =
              i === PROJECTS.length - 1 && PROJECTS.length % 2 === 1;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={
                  isLonelyLast
                    ? "md:col-span-2 md:max-w-[calc(50%-0.75rem)] md:mx-auto"
                    : undefined
                }
              >
                <TiltCard project={project} />
              </motion.div>
            );
          })}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/pritesh123-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 border border-white/8 hover:border-white/16 px-5 py-2.5 rounded-xl hover:bg-white/5 cursor-pointer"
          >
            <Github className="w-4 h-4" />
            More on GitHub
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
