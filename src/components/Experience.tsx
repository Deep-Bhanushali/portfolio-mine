import React from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
export function Experience() {
  return (
    <section id="exp" className="py-24 px-6 max-w-[1600px] mx-auto">
      <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="text-cyber">[02]</span>
        <span className="text-text">experience.log</span>
        <div className="flex-1 h-px bg-line" />
        <span className="text-mute">changelog</span>
      </div>

      <TerminalWindow title="$ cat experience.log">
        <div className="p-8 md:p-10">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-48 flex-shrink-0">
              <div className="font-mono text-[10px] text-mute mb-2">
                [CURRENT]
              </div>
              <div className="font-mono text-cyber text-sm">06/2025 →</div>
              <div className="font-mono text-mute text-xs">PRESENT</div>
              <div className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-cyber border border-cyber/40 px-2 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
                LIVE
              </div>
            </div>

            <div className="flex-1 border-l border-line lg:pl-10">
              <h3 className="font-display text-3xl md:text-5xl text-text mb-1 leading-tight">
                MERN Stack Developer
              </h3>
              <div className="font-mono text-sm text-cyber mb-8">
                @ EnactOn Technologies Pvt Ltd
              </div>

              <ul className="space-y-4">
                {[
                'Built and maintained full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
                'Implemented secure APIs with JWT/bcrypt authentication and optimized database performance.',
                'Integrated third-party APIs and deployed to Vercel, AWS and internal infrastructure.',
                'Contributed to feature development, debugging, and code reviews within Agile sprints.'].
                map((line, i) =>
                <motion.li
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -20
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: 0.08 * i
                  }}
                  className="font-mono text-sm text-mute leading-relaxed flex gap-3">
                  
                    <span className="text-cyber flex-shrink-0">└─</span>
                    <span>{line}</span>
                  </motion.li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>);

}