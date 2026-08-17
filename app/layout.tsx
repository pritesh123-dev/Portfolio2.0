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
  title: "Pritesh Kumar Sahoo — Front End Developer",
  description:
    "Front End Developer with 4+ years of experience shipping pixel-perfect, high-performance web applications across fintech, banking, and Web3. React.js · Next.js · Three.js · TypeScript.",
  keywords: [
    "Front End Developer",
    "React Developer",
    "Next.js",
    "Three.js",
    "TypeScript",
    "Fintech",
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
