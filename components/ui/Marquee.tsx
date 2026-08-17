const TECH = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Three.js / R3F",
  "GSAP",
  "Framer Motion",
  "Tailwind CSS",
  "Redux Toolkit",
  "Lenis",
  "WebSocket",
  "Jest",
  "Vite",
  "Figma",
  "Cursor AI",
  "GitHub Copilot",
  "Core Web Vitals",
];

// Duplicate for seamless loop
const ITEMS = [...TECH, ...TECH];

export function Marquee() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/[0.05]">
      {/* Fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#030308] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#030308] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max" style={{ animation: "marquee 32s linear infinite" }}>
        {ITEMS.map((tech, i) => (
          <div key={i} className="flex items-center gap-3 mx-8 shrink-0">
            <span className="w-1 h-1 rounded-full bg-violet-500/50" />
            <span className="text-sm font-medium text-slate-500 hover:text-slate-200 transition-colors duration-200 cursor-default whitespace-nowrap">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
