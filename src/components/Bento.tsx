import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TerminalWindow } from './TerminalWindow';
const skills = {
  LANGUAGES: ['Python', 'TypeScript', 'JavaScript', 'Java'],
  FRONTEND: ['React', 'Three.js', 'Tailwind'],
  BACKEND: ['Node.js', 'Express', 'REST'],
  AIML: ['TensorFlow', 'Keras', 'OpenCV', 'PyTorch'],
  DATA: ['MongoDB', 'MySQL', 'PostgreSQL'],
  CLOUD: ['AWS', 'GCP', 'Docker', 'Vercel']
};
function LivePing() {
  const [ping, setPing] = useState(42);
  useEffect(() => {
    const i = setInterval(
      () => setPing(30 + Math.floor(Math.random() * 30)),
      1200
    );
    return () => clearInterval(i);
  }, []);
  return <span className="text-cyber">{ping}ms</span>;
}
export function Bento() {
  return (
    <section id="about" className="py-24 px-6 max-w-[1600px] mx-auto relative">
      <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="text-cyber">[01]</span>
        <span className="text-text">about.system</span>
        <div className="flex-1 h-px bg-line" />
        <span className="text-mute">identity_profile</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[minmax(140px,auto)]">
        <TerminalWindow
          title="readme.md"
          className="md:col-span-4 md:row-span-2">
          
          <div className="p-6 md:p-8">
            <div className="font-mono text-[10px] text-cyber mb-4">
              <span className="text-mute">#</span> NARRATIVE
            </div>
            <p className="font-display text-2xl md:text-3xl leading-tight text-text mb-4">
              A motivated CSE graduate specialized in{' '}
              <span className="text-cyber">Artificial Intelligence</span> —
              building intelligent applications that blend MERN stack
              engineering with real-world ML.
            </p>
            <p className="font-mono text-xs text-mute leading-relaxed">
              Passionate about embedded AI, robotics, and real-time systems.
              Currently exploring <span className="text-text">Rust</span> and{' '}
              <span className="text-text">Go</span> to strengthen expertise in
              AI-driven embedded computing.
            </p>
          </div>
        </TerminalWindow>

        <TerminalWindow title="status.live" className="md:col-span-2">
          <div className="p-5 font-mono text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-mute">UPTIME</span>
              <span className="text-cyber">100%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-mute">LATENCY</span>
              <LivePing />
            </div>
            <div className="flex justify-between">
              <span className="text-mute">STATE</span>
              <span className="text-cyber flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
                ACTIVE
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-mute">MODE</span>
              <span className="text-text">HIRING</span>
            </div>
          </div>
        </TerminalWindow>

        <TerminalWindow title="edu.log" className="md:col-span-2">
          <div className="p-5 font-mono text-xs space-y-2">
            <div className="text-cyber mb-1">B.TECH / CSE-AI</div>
            <div className="text-text">Parul University</div>
            <div className="text-mute">CGPA 8.80 / 2022 to Now</div>
            <div className="pt-2 border-t border-line/60 text-mute text-[10px]">
              + INTER (CBSE) 70.0%
              <br />+ MATRIC (MHSE) 83.0%
            </div>
          </div>
        </TerminalWindow>

        <TerminalWindow
          title="learning.queue"
          accent="signal"
          className="md:col-span-4">
          
          <div className="p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-mute mb-3">
              currently_compiling
            </div>
            <div className="flex flex-wrap gap-3 font-display text-2xl md:text-3xl">
              {['Rust', 'Go', 'Embedded_AI', 'Robotics'].map((t, i) =>
              <motion.span
                key={t}
                initial={{
                  opacity: 0,
                  y: 10
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.1 * i
                }}
                className="text-text hover:text-cyber transition-colors cursor-default">
                
                  {t}
                  {i < 3 && <span className="text-cyber/50 ml-2">/</span>}
                </motion.span>
              )}
            </div>
          </div>
        </TerminalWindow>

        <TerminalWindow title="skills.matrix" className="md:col-span-6">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {Object.entries(skills).map(([category, items], idx) =>
              <motion.div
                key={category}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: idx * 0.06
                }}>
                
                  <div className="font-mono text-[10px] uppercase tracking-widest text-cyber mb-3 pb-2 border-b border-line">
                    {category}
                  </div>
                  <ul className="space-y-1.5">
                    {items.map((s) =>
                  <li
                    key={s}
                    className="font-mono text-xs text-text hover:text-cyber transition-colors cursor-default flex items-center gap-2">
                    
                        <span className="text-cyber/40">◆</span>
                        {s}
                      </li>
                  )}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>);

}
