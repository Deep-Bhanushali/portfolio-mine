import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Splash } from './components/Splash';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Bento } from './components/Bento';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Marquee } from './components/Marquee';
import { ParticleField } from './components/ParticleField';
export function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div className="relative bg-void min-h-screen selection:bg-cyber selection:text-void">
      {/* Background layers */}
      <ParticleField />
      <div className="vignette" />
      <div className="crt" />

      {/* Boot splash */}
      <Splash />

      {/* Scroll progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-px bg-cyber origin-left z-[100]"
        style={{
          scaleX,
          boxShadow: '0 0 6px rgba(52, 232, 220, 0.55)'
        }} />
      

      <Nav />

      <main className="relative z-10">
        <Hero />
        <Marquee
          text="AVAILABLE FOR HIRE / OPEN TO OPPORTUNITIES / LET'S BUILD"
          speed={45} />
        
        <Bento />
        <Marquee
          text="CURRENTLY COMPILING: EMBEDDED AI / ROBOTICS / AUTOMATIONS"
          speed={35}
          variant="secondary" />
        
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>);

}
