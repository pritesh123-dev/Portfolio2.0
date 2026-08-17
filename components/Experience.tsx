"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";

const EXPERIENCES = [
  {
    role: "Front End Developer",
    company: "Flexi Ventures",
    url: "#",
    period: "Oct 2025 – Present",
    location: "Bangalore, IN",
    current: true,
    accent: "#7C3AED",
    highlights: [
      "Build high-traffic consumer and Web3 marketing & product websites with React.js, HTML5, CSS3",
      "Engineer scroll-triggered animations and parallax using GSAP + Framer Motion — +40% avg. time-on-page",
      "Raised Lighthouse performance scores from the 60s to 90+ via code-splitting, lazy loading & WebP",
      "Ship features ~2× faster using AI dev tools (Cursor, GitHub Copilot, ChatGPT)",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "I-Exceed Technology & Solutions",
    url: "#",
    period: "Aug 2024 – Sep 2025",
    location: "Bangalore, IN",
    current: false,
    accent: "#22D3EE",
    highlights: [
      "Developed retail & corporate banking apps on AppZillon — consumed by tier-1 banks across India & SEA",
      "Reduced initial load times by 30% via code-splitting and lazy loading in React.js modules",
      "Delivered corporate banking dashboard with role-based UI, multi-approver workflows & real-time status",
      "Implemented PCI-DSS-compliant OTP authentication (Twilio + Firebase) on the frontend",
    ],
  },
  {
    role: "Senior Systems Associate",
    company: "Infosys PVT LTD",
    url: "#",
    period: "Apr 2022 – Jul 2024",
    location: "Bangalore, IN",
    current: false,
    accent: "#10B981",
    highlights: [
      "Built & maintained React.js dashboards and internal admin tools used by 1,000+ associates",
      "Migrated legacy jQuery screens to modular React.js with Hooks & Context API — load time ↓ 40%",
      "Owned UI features end-to-end: design hand-off → production release, within Agile sprint cycles",
    ],
  },
];

function ExperienceCard({ exp, index }: { exp: (typeof EXPERIENCES)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{
        duration: 0.75,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative mb-10 last:mb-0"
    >
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.12 + 0.2 }}
        className="absolute -left-8 md:-left-[2.85rem] top-5 w-3 h-3 rounded-full border-2 z-10"
        style={{
          borderColor: exp.accent,
          backgroundColor: exp.current ? exp.accent : "#030308",
          boxShadow: exp.current ? `0 0 14px ${exp.accent}90` : `0 0 8px ${exp.accent}40`,
        }}
      />

      {/* Card */}
      <div className="glass rounded-2xl p-6 group hover:border-white/14 transition-all duration-300 relative overflow-hidden">
        {/* Hover glow wash */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${exp.accent}08 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                <h3 className="font-heading font-semibold text-lg text-white">{exp.role}</h3>
                {exp.current && (
                  <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                    CURRENT
                  </span>
                )}
              </div>
              <a
                href={exp.url}
                className="inline-flex items-center gap-1 text-sm font-medium hover:text-white transition-colors duration-200"
                style={{ color: exp.accent }}
              >
                {exp.company}
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="text-right shrink-0">
              <div className="text-xs font-medium text-slate-300">{exp.period}</div>
              <div className="text-xs text-slate-500 mt-0.5">{exp.location}</div>
            </div>
          </div>

          <ul className="space-y-2">
            {exp.highlights.map((h, j) => (
              <motion.li
                key={j}
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.3 + j * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex items-start gap-2.5 text-sm text-slate-400 leading-relaxed"
              >
                <span
                  className="mt-[0.45rem] w-1 h-1 rounded-full shrink-0"
                  style={{ backgroundColor: exp.accent }}
                />
                {h}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  /* Scroll-driven timeline line draw */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 30%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="py-32 px-6 relative" ref={sectionRef}>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headingRef}>
          <motion.span
            className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Experience
          </motion.span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            <RevealText text="Where I've worked" delay={0.1} stagger={0.1} />
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Scroll-driven animated line */}
          <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px overflow-hidden">
            {/* Track line */}
            <div className="absolute inset-0 bg-white/[0.05]" />
            {/* Animated fill */}
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                scaleY: lineScaleY,
                height: "100%",
                background: "linear-gradient(to bottom, #7C3AED, #22D3EE 50%, #10B981)",
                transformOrigin: "top",
              }}
            />
          </div>

          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={exp.company} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
