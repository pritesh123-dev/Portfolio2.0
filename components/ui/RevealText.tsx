"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Splits text into words and reveals each one by sliding up
 * from behind an overflow-hidden mask — the premium "curtain" effect.
 */
export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.07,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  const words = text.split(" ");

  return (
    <span
      ref={ref}
      aria-label={text}
      className={`inline-flex flex-wrap ${className ?? ""}`}
      style={{ gap: "0 0.3em" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block"
          style={{ paddingBottom: "0.08em" }}
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
