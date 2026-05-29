import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function Nav() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString('en-US', {
          hour12: false
        })
      );
    };
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <motion.header
      initial={{
        y: -100
      }}
      animate={{
        y: 0
      }}
      transition={{
        delay: 1.5,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}
      className="fixed top-0 left-0 w-full z-50 border-b border-line bg-void/80 backdrop-blur-md">
      
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-6 py-3 font-mono text-xs uppercase tracking-widest">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-cyber animate-pulse" />
          <span className="text-cyber text-glow">DEEP_B.SYS</span>
          <span className="text-mute hidden md:inline">v2.6.0</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {['ABOUT', 'WORK', 'EXP', 'CONTACT'].map((item, i) =>
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="group relative px-3 py-1.5 text-mute hover:text-cyber transition-colors">
            
              <span className="text-cyber/40 mr-1">0{i + 1}</span>
              {item}
              <span className="absolute bottom-0 left-3 right-3 h-px bg-cyber scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          )}
        </nav>

        <div className="flex items-center gap-4 text-mute">
          <span className="hidden md:inline">{time} UTC</span>
          <span className="w-2 h-2 rounded-full bg-cyber" />
        </div>
      </div>
    </motion.header>);

}