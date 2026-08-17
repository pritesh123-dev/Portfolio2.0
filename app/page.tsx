import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <SmoothScroll>
      {/* Global ambient overlays */}
      <ScrollProgress />
      <CursorGlow />

      <main className="min-h-screen bg-[#030308] overflow-x-hidden">
        <Navbar />
        <Hero />

        {/* Tech strip after hero */}
        <Marquee />

        <About />

        {/* Strip between About and Experience */}
        <Marquee />

        <Experience />
        <Projects />

        {/* Strip before Skills */}
        <Marquee />

        <Skills />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
