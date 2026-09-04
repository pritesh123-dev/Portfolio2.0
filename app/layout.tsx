import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Pritesh Kumar Sahoo — Frontend-Heavy Full Stack Developer",
  description:
    "Frontend-heavy full stack developer with 4.5+ years building consumer Web3, tier-1 banking/fintech and B2B SaaS products end to end. React.js · Next.js · TypeScript · Node.js.",
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Web3",
    "DEX Frontend",
    "Fintech",
    "Banking",
    "Bangalore",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${archivo.variable} ${spaceGrotesk.variable} bg-[#030308] text-[#f1f5f9] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
