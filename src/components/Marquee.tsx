import React from 'react';
import { motion } from 'framer-motion';
interface MarqueeProps {
  text: string;
  speed?: number;
  variant?: 'primary' | 'secondary';
}
export function Marquee({
  text,
  speed = 30,
  variant = 'primary'
}: MarqueeProps) {
  const isPrimary = variant === 'primary';
  return (
    <div
      className={`relative w-full overflow-hidden border-y border-line py-2 ${isPrimary ? 'bg-panel/60' : 'bg-cyber/10'}`}>
      
      <motion.div
        className={`flex whitespace-nowrap font-mono text-xs md:text-sm uppercase tracking-[0.3em] ${isPrimary ? 'text-cyber' : 'text-cyber'}`}
        animate={{
          x: ['0%', '-50%']
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: speed
        }}>
        
        {Array.from({
          length: 6
        }).map((_, i) =>
        <span key={i} className="px-6 flex items-center gap-6">
            {text}
            <span className="text-mute">◆</span>
          </span>
        )}
      </motion.div>
    </div>);

}