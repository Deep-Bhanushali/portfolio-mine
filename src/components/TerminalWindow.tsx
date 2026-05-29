import React from 'react';
import { motion } from 'framer-motion';
interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  accent?: 'cyber' | 'signal' | 'warn';
}
export function TerminalWindow({
  title,
  children,
  className = '',
  accent = 'cyber'
}: TerminalWindowProps) {
  const accentColor =
  accent === 'cyber' ? '#34e8dc' : accent === 'signal' ? '#ff3366' : '#ffb800';
  return (
    <motion.div
      className={`relative bg-panel/90 backdrop-blur-sm border border-line ${className}`}
      initial={{
        opacity: 0,
        y: 30
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-80px'
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }}>
      
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-line bg-panel2/80">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-signal/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warn/60" />
          <div
            className="w-2.5 h-2.5 rounded-full"
            style={{
              backgroundColor: `${accentColor}99`
            }} />
          
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-mute">
          {title}
        </span>
        <span className="font-mono text-[10px] text-mute">[ ]</span>
      </div>
      {/* Content */}
      <div className="relative">{children}</div>
    </motion.div>);

}
