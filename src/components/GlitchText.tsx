import React from 'react';
import { motion } from 'framer-motion';
interface GlitchTextProps {
  text: string;
  className?: string;
}
export function GlitchText({ text, className = '' }: GlitchTextProps) {
  return (
    <span
      className={`relative inline-block glitch ${className}`}
      aria-label={text}>
      
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="absolute inset-0 text-cyber opacity-0 hover:opacity-70 transition-opacity"
        style={{
          transform: 'translate(2px, 0)',
          mixBlendMode: 'screen'
        }}>
        
        {text}
      </span>
      <span
        aria-hidden
        className="absolute inset-0 text-signal opacity-0 hover:opacity-70 transition-opacity"
        style={{
          transform: 'translate(-2px, 0)',
          mixBlendMode: 'screen'
        }}>
        
        {text}
      </span>
    </span>);

}
export function Typewriter({
  text,
  className = '',
  delay = 0,
  speed = 40





}: {text: string;className?: string;delay?: number;speed?: number;}) {
  const chars = text.split('');
  return (
    <span className={className}>
      {chars.map((c, i) =>
      <motion.span
        key={i}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: delay + i * speed / 1000,
          duration: 0
        }}>
        
          {c}
        </motion.span>
      )}
    </span>);

}