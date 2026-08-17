"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, Box } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    title: "AI Travel Studio",
    subtitle: "Vibe-coded with Cursor + Claude",
    description:
      "React / Next.js travel planner where users chat with an AI agent that generates day-by-day itineraries with embedded Mapbox routes and live weather overlays. Features streaming AI responses, drag-and-drop reordering, optimistic UI updates, and cinematic Framer Motion page transitions.",
    tech: ["Next.js", "React", "Claude API", "Mapbox", "Framer Motion", "TypeScript"],
    accent: "#7C3AED",
    gradient: "from-violet-600/20 via-purple-600/10 to-transparent",
    icon: Sparkles,
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "3D Interactive Portfolio",
    subtitle: "Vibe-coded with React Three Fiber",
    description:
      "React + Three.js site featuring GPU-instanced particle hero, scroll-locked camera animations, and an in-browser GLSL shader playground. Tuned to a 95+ Lighthouse score using Lenis smooth scroll, code-splitting, and texture compression for buttery 60 FPS interactions.",
    tech: ["React", "Three.js", "R3F", "GLSL", "Lenis", "TypeScript"],
    accent: "#22D3EE",
    gradient: "from-cyan-600/20 via-teal-600/10 to-transparent",
    icon: Box,
    github: "#",
    live: "#",
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
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={project.live}
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
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
            Things I've built
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <TiltCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/priteshkumarsahoo16"
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
