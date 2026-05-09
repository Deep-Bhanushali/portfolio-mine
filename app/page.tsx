import { Navbar } from "@/components/layout/Navbar";
import { Footer, BackToTop } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
// import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* Scroll Spy effect wrapper */}
      <div className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        {/* <Certifications /> */}
        <Contact />
      </div>

      <Footer />
      <BackToTop />

      {/* Custom Cursor Glow (Optional Aesthetic) */}
      <CursorGlow />
    </main>
  );
}

function CursorGlow() {
  return (
    <div
      className="hidden md:block fixed inset-0 pointer-events-none z-[60] opacity-30 dark:opacity-20"
      style={{
        background: `radial-gradient(600px at var(--mouse-x, 0) var(--mouse-y, 0), rgba(59, 130, 246, 0.15), transparent 80%)`,
      }}
      id="cursor-glow"
    />
  );
}
