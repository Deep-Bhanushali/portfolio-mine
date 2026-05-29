import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const bootLines = [
'[ OK ] Initializing neural runtime...',
'[ OK ] Loading model weights: db_v2.6.bin',
'[ OK ] Establishing connection to /portfolio',
'[ OK ] Calibrating display @ 60Hz',
'[ OK ] System ready.'];

export function Splash() {
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (lineIndex < bootLines.length) {
      const t = setTimeout(() => setLineIndex((i) => i + 1), 220);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setDone(true), 500);
    return () => clearTimeout(t);
  }, [lineIndex]);
  return (
    <AnimatePresence>
      {!done &&
      <motion.div
        className="fixed inset-0 z-[99999] bg-void flex items-center justify-center"
        exit={{
          opacity: 0,
          transition: {
            duration: 0.4
          }
        }}>
        
          <div className="w-full max-w-2xl px-8 font-mono text-sm">
            <div className="text-cyber mb-4 text-glow">DB://SYSTEM_BOOT</div>
            {bootLines.slice(0, lineIndex).map((line, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              x: -10
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            className={i === lineIndex - 1 ? 'text-cyber' : 'text-mute'}>
            
                {line}
              </motion.div>
          )}
            {lineIndex < bootLines.length &&
          <span className="inline-block w-2 h-4 bg-cyber animate-blink ml-1 align-middle" />
          }
          </div>
        </motion.div>
      }
    </AnimatePresence>);

}