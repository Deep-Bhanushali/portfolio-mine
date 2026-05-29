import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from './GlitchText';
import { NeuralGraph } from './NeuralGraph';
export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-12 px-6 overflow-hidden">
      
      {/* Floating scan line */}
      <motion.div
        className="absolute left-0 right-0 h-32 scanline pointer-events-none"
        animate={{
          y: ['-10%', '110%']
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'linear',
          delay: 2
        }} />
      

      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* LEFT — IDENTITY */}
        <div className="lg:col-span-8">
          {/* Meta tag */}
          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 1.7
            }}
            className="flex items-center gap-3 mb-8 font-mono text-xs uppercase tracking-widest">
            
            <span className="text-cyber">{'>'}</span>
            <span className="text-mute">init --identity</span>
            <span className="text-cyber animate-blink">_</span>
          </motion.div>

          {/* Main name */}
          <motion.h1
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 1.9
            }}
            className="font-display font-bold text-[clamp(3rem,9vw,11rem)] leading-[0.9] tracking-tighter mb-6">
            
            <span className="block text-text">
              <Typewriter text="DEEP" delay={2} speed={80} />
            </span>
            <span className="block text-cyber text-glow">
              <Typewriter text="BHANUSHALI." delay={2.4} speed={60} />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: 3.2,
              duration: 0.6
            }}
            className="max-w-2xl font-mono text-sm md:text-base text-mute leading-relaxed bg-void/20">
            
            <span className="text-cyber">{'//'}</span> Full-stack engineer
            training intelligent systems. Specialized in{' '}
            <span className="text-text">AI/ML</span>,{' '}
            <span className="text-text">MERN</span>, and{' '}
            <span className="text-text">embedded computing</span>.
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              delay: 3.6
            }}
            className="flex flex-wrap gap-2 mt-8">
            
            {['STATUS: AVAILABLE', 'BASED: GUJARAT, IN', 'ROLE: SWE / ML'].map(
              (t) =>
              <span
                key={t}
                className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 border border-line bg-panel/50 text-mute hover:border-cyber hover:text-cyber transition-colors">
                
                  <span className="text-cyber mr-1">◆</span>
                  {t}
                </span>

            )}
          </motion.div>
        </div>

        {/* RIGHT — NEURAL GRAPH */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            delay: 2.6,
            duration: 0.8
          }}
          className="lg:col-span-4 border border-line bg-panel/70 backdrop-blur-sm">
          
          <div className="flex items-center justify-between px-3 py-2 border-b border-line bg-panel2/60">
            <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
              model.preview
            </span>
            <span className="font-mono text-[10px] text-cyber">RUNNING</span>
          </div>
          <div className="p-4">
            <NeuralGraph className="w-full h-48" />
            <div className="mt-3 font-mono text-[10px] text-mute leading-5">
              <div className="flex justify-between">
                <span>layers</span>
                <span className="text-text">3</span>
              </div>
              <div className="flex justify-between">
                <span>params</span>
                <span className="text-text">8.6M</span>
              </div>
              <div className="flex justify-between">
                <span>loss</span>
                <span className="text-cyber">0.0124</span>
              </div>
              <div className="flex justify-between">
                <span>epoch</span>
                <span className="text-text">∞</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 4
        }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-mute flex flex-col items-center gap-2">
        
        <span>SCROLL_TO_CONTINUE</span>
        <motion.span
          animate={{
            y: [0, 6, 0]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5
          }}
          className="text-cyber">
          
          ↓
        </motion.span>
      </motion.div>
    </section>);

}
