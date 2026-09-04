"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealText } from "@/components/ui/RevealText";

const SKILL_GROUPS = [
  {
    category: "Languages",
    color: "#7C3AED",
    skills: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frontend",
    color: "#22D3EE",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Context API",
      "React Hooks",
      "React Router",
      "Tailwind CSS",
      "Material-UI",
      "Storybook",
      "Design Systems",
    ],
  },
  {
    category: "Backend & APIs",
    color: "#10B981",
    skills: [
      "Node.js",
      "Express.js",
      "Java",
      "REST API Design",
      "Auth & Authorization",
      "AWS S3",
      "Axios",
    ],
  },
  {
    category: "CS Fundamentals",
    color: "#6366F1",
    skills: [
      "Data Structures & Algorithms",
      "System Design",
      "System Architecture",
      "Design Patterns",
      "OOP",
    ],
  },
  {
    category: "Web3",
    color: "#F59E0B",
    skills: [
      "ethers.js",
      "wagmi",
      "viem",
      "WalletConnect",
      "ERC-20 / ERC-721",
      "DEX & AMM Interfaces",
      "On-chain Data Indexing",
    ],
  },
  {
    category: "Performance & Realtime",
    color: "#EC4899",
    skills: [
      "Core Web Vitals",
      "Code-Splitting",
      "Lazy Loading",
      "Caching",
      "Lighthouse",
      "WebSocket",
      "GSAP",
    ],
  },
  {
    category: "Testing, Tooling & DevOps",
    color: "#0EA5E9",
    skills: [
      "React Testing Library",
      "Vite",
      "Webpack",
      "ESLint",
      "Prettier",
      "Postman",
      "PostHog",
      "Git & GitHub",
      "Jenkins",
      "CI/CD",
      "Docker",
      "Vercel",
      "npm Publishing",
    ],
  },
  {
    category: "Practices & AI Tools",
    color: "#A855F7",
    skills: [
      "Component-Driven Development",
      "A/B Testing",
      "WCAG 2.1 AA",
      "Agile / Scrum",
      "Code Reviews",
      "Cursor",
      "GitHub Copilot",
      "Claude",
    ],
  },
];

function SkillCard({ group, gi }: { group: (typeof SKILL_GROUPS)[0]; gi: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: gi * 0.09,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ perspective: 600, transformStyle: "preserve-3d" }}
      className="glass p-6 rounded-2xl group hover:border-white/14 transition-all duration-300 relative overflow-hidden"
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 20% 20%, ${group.color}10, transparent 65%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/[0.06] relative z-10">
        <motion.div
          className="w-2 h-2 rounded-full shrink-0"
          style={{
            backgroundColor: group.color,
            boxShadow: `0 0 8px ${group.color}`,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: gi * 0.3, ease: "easeInOut" }}
        />
        <h3 className="font-heading font-semibold text-sm text-white">{group.category}</h3>
      </div>

      {/* Pills — wave stagger */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {group.skills.map((skill, si) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 12, scale: 0.88 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.4,
              delay: gi * 0.09 + si * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.15 },
            }}
            className="px-2.5 py-1.5 text-xs font-medium rounded-lg text-slate-300 hover:text-white transition-colors duration-150 cursor-default"
            style={{
              backgroundColor: `${group.color}10`,
              border: `1px solid ${group.color}22`,
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = `${group.color}22`;
              el.style.borderColor = `${group.color}55`;
              el.style.color = group.color;
              el.style.boxShadow = `0 0 10px ${group.color}30`;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.backgroundColor = `${group.color}10`;
              el.style.borderColor = `${group.color}22`;
              el.style.color = "";
              el.style.boxShadow = "";
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16" ref={headingRef}>
          <motion.span
            className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Skills
          </motion.span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            <RevealText text="My toolkit" delay={0.1} stagger={0.14} />
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_GROUPS.map((group, gi) => (
            <SkillCard key={group.category} group={group} gi={gi} />
          ))}
        </div>
      </div>
    </section>
  );
}
