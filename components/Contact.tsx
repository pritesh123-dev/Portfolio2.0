"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone, ArrowUpRight, MapPin } from "lucide-react";
import { RevealText } from "@/components/ui/RevealText";

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "priteshkumarsahoo16@gmail.com",
    href: "mailto:priteshkumarsahoo16@gmail.com",
    primary: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7978017435",
    href: "tel:+917978017435",
    primary: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bangalore, Karnataka, IN",
    href: "#",
    primary: false,
  },
];

const SOCIALS = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/priteshkumarsahoo16",
    handle: "priteshkumarsahoo16",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/priteshkumarsahoo16",
    handle: "priteshkumarsahoo16",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Centre glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        {/* Label */}
        <motion.span
          className="text-xs font-semibold text-violet-400 uppercase tracking-[0.2em] block mb-3"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.span>

        {/* Heading — two lines, each word reveals */}
        <h2 className="font-heading font-bold text-4xl md:text-6xl text-white mb-3 leading-[1.1]">
          <RevealText text="Let's build something" delay={0.08} stagger={0.07} />
        </h2>
        <h2 className="font-heading font-bold text-4xl md:text-6xl mb-8 leading-[1.1]">
          <RevealText
            text="remarkable"
            delay={0.45}
            stagger={0.04}
            className="text-transparent bg-clip-text"
          />
        </h2>

        {/* Inline gradient for the word — applied via motion wrapper */}
        <style>{`
          #contact h2:last-of-type span span {
            background: linear-gradient(135deg, #a78bfa 0%, #7C3AED 40%, #22D3EE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
        `}</style>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md mx-auto"
        >
          Available for freelance, contract, and full-time opportunities. I
          respond within 24 hours.
        </motion.p>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          {CONTACT_ITEMS.map(({ icon: Icon, label, value, href, primary }, i) => (
            <motion.a
              key={label}
              href={href}
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.6 + i * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className={`group flex items-center gap-3 px-5 py-3.5 rounded-2xl border transition-all duration-300 cursor-pointer w-full sm:w-auto ${
                primary
                  ? "border-violet-500/30 bg-violet-500/8 hover:bg-violet-600 hover:border-violet-400 hover:shadow-lg hover:shadow-violet-500/20"
                  : "glass hover:border-white/14 hover:bg-white/5"
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 transition-colors duration-200 ${
                  primary
                    ? "text-violet-300 group-hover:text-white"
                    : "text-slate-500 group-hover:text-slate-300"
                }`}
              />
              <div className="text-left min-w-0">
                <div
                  className={`text-[10px] font-semibold uppercase tracking-wider mb-0.5 ${
                    primary ? "text-violet-400 group-hover:text-violet-200" : "text-slate-600"
                  }`}
                >
                  {label}
                </div>
                <div
                  className={`text-sm font-medium truncate transition-colors duration-200 ${
                    primary
                      ? "text-violet-200 group-hover:text-white"
                      : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {value}
                </div>
              </div>
              {primary && (
                <ArrowUpRight className="w-4 h-4 text-violet-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 ml-1" />
              )}
            </motion.a>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3">
          {SOCIALS.map(({ icon: Icon, label, href, handle }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.85 + i * 0.08 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="group flex items-center gap-2.5 px-5 py-3 rounded-xl glass hover:border-violet-500/30 hover:bg-violet-500/8 transition-all duration-200 cursor-pointer"
            >
              <Icon className="w-4 h-4 text-slate-400 group-hover:text-violet-300 transition-colors duration-200" />
              <span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors duration-200">
                {handle}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-24 pt-8 border-t border-white/[0.05] text-center"
      >
        <p className="text-slate-700 text-sm">
          Designed &amp; built by{" "}
          <span className="text-slate-500">Pritesh Kumar Sahoo</span> —{" "}
          {new Date().getFullYear()}
        </p>
      </motion.footer>
    </section>
  );
}
