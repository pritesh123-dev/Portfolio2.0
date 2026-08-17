"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function CursorGlow() {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  // Lagged spring for smooth trailing effect
  const smoothX = useSpring(x, { stiffness: 55, damping: 18, restDelta: 0.5 });
  const smoothY = useSpring(y, { stiffness: 55, damping: 18, restDelta: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed pointer-events-none z-[9998] hidden md:block"
      style={{
        left: smoothX,
        top: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        width: 480,
        height: 480,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(34,211,238,0.03) 50%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
