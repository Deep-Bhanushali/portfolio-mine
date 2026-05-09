"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Mail, ExternalLink, FileText, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface Particle {
  id: number;
  width: number;
  height: number;
  left: string;
  top: string;
  moveX: number[];
  moveY: number[];
  duration: number;
}

export function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generatedParticles = [...Array(20)].map((_, i) => ({
      id: i,
      width: Math.random() * 300 + 100,
      height: Math.random() * 300 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      moveX: [0, Math.random() * 100 - 50],
      moveY: [0, Math.random() * 100 - 50],
      duration: Math.random() * 10 + 10,
    }));
    setParticles(generatedParticles);

    // Optimized Typewriter Logic (Bypasses React Render Cycle)
    const el = typewriterRef.current;
    if (!el) return;

    const words = ["MERN Stack Developer", "AI/ML Enthusiast", "Full Stack Engineer"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const current = words[wordIndex];
      el.textContent = deleting
        ? current.substring(0, charIndex--)
        : current.substring(0, charIndex++);

      let delta = deleting ? 50 : 100;

      if (!deleting && charIndex === current.length + 1) {
        deleting = true;
        delta = 1500; // Pause at end of word
      } else if (deleting && charIndex < 0) {
        deleting = false;
        charIndex = 0;
        wordIndex = (wordIndex + 1) % words.length;
        delta = 500; // Pause before next word
      }

      timeoutId = setTimeout(tick, delta);
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 isolate">
      {/* Background Decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="mesh-gradient absolute inset-0" />
        <div className="grid-pattern absolute inset-0 opacity-[0.3] dark:opacity-[0.1]" />

        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-[80px]"
              style={{  
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
              }}
              animate={{
                x: particle.moveX,
                y: particle.moveY,
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ willChange: "transform, opacity" }}
        >
          <Badge className="mb-8 py-2 px-6 text-sm font-semibold tracking-wide uppercase bg-blue-100/80 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 backdrop-blur-sm border border-blue-200/50 dark:border-blue-700/30">
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open for opportunity
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 tracking-tighter text-slate-900 dark:text-white">
            Hi, I&apos;m <br className="sm:hidden" />
            <span className="relative inline-block mt-2 md:mt-0">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-violet-600 to-indigo-600 dark:from-blue-400 dark:via-violet-400 dark:to-indigo-400">
                Deep Bhanushali
              </span>
              <motion.span
                className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-blue-100 dark:bg-blue-900/30 -z-10 rounded-full origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
            </span>
          </h1>

          <div className="flex items-center justify-center mb-8 md:mb-10 overflow-hidden">
            <div 
              ref={typewriterRef}
              className="text-xl sm:text-2xl md:text-4xl font-bold text-slate-700 dark:text-slate-200 min-h-[1.5em] md:min-h-[1.2em] flex items-center justify-center"
              style={{ 
                minWidth: '280px', 
                display: 'inline-block',
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
            >
              {/* Typewriter content injected via ref */}
            </div>
            <span className="w-1 h-[1.2em] bg-blue-600 dark:bg-blue-400 ml-1 animate-pulse" />
          </div>

          <p className="text-base sm:text-lg md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed font-medium px-2 sm:px-0">
            Building <span className="text-blue-600 dark:text-blue-400 font-semibold">intelligent, scalable</span> web applications — from idea to deployment.
            Passionate about bridging software engineering and AI-driven solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 md:mb-16">
            <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg rounded-2xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              Explore Projects <ExternalLink size={18} className="ml-2" />
            </Button>
            <Button size="lg" className="w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 text-base sm:text-lg rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all hover:scale-105 active:scale-95" onClick={() => window.open('/resume.pdf', '_blank')}>
              Resume <FileText size={18} className="ml-2" />
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-10 mb-8 md:mb-12">
            {[
              { icon: FaGithub, href: "https://github.com/Deep-Bhanushali" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/deep-bhanushali-73307a341" },
              { icon: Code2, href: "https://leetcode.com/u/DeepBhanushali24/" },
              { icon: Mail, href: "mailto:bhanushalideep24@gmail.com" },
            ].map((social, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5, scale: 1.1 }}
                className="relative group"
                style={{ willChange: 'transform' }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity" />
                <Link href={social.href} target="_blank" className="relative text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors">
                  <social.icon size={28} />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView()}
      >
        <div className="w-8 h-14 border-2 border-slate-200 dark:border-slate-800 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-blue-600 dark:bg-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Helper Badge for Hero (if not imported)
function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-3 py-1 text-sm font-medium text-blue-800 dark:text-blue-200 ring-1 ring-inset ring-blue-700/10 dark:ring-blue-400/20 ${className}`}>
      {children}
    </span>
  );
}
