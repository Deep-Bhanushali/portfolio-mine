import React from 'react';
import { motion } from 'framer-motion';
interface NeuralGraphProps {
  className?: string;
}
// A small animated neural-network graph (3 layers)
export function NeuralGraph({ className = '' }: NeuralGraphProps) {
  const layers = [
  [0.2, 0.5, 0.8],
  [0.15, 0.35, 0.55, 0.75, 0.95],
  [0.25, 0.5, 0.75]];

  const W = 400;
  const H = 240;
  const colX = [80, W / 2, W - 80];
  const nodes = layers.flatMap((layer, lIdx) =>
  layer.map((y, nIdx) => ({
    x: colX[lIdx],
    y: y * H,
    layer: lIdx,
    idx: nIdx
  }))
  );
  const edges: {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  }[] = [];
  for (let l = 0; l < layers.length - 1; l++) {
    const left = nodes.filter((n) => n.layer === l);
    const right = nodes.filter((n) => n.layer === l + 1);
    left.forEach((a) =>
    right.forEach((b) =>
    edges.push({
      x1: a.x,
      y1: a.y,
      x2: b.x,
      y2: b.y
    })
    )
    );
  }
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      preserveAspectRatio="xMidYMid meet">
      
      {/* Edges */}
      {edges.map((e, i) =>
      <motion.line
        key={i}
        x1={e.x1}
        y1={e.y1}
        x2={e.x2}
        y2={e.y2}
        stroke="#34e8dc"
        strokeWidth="0.5"
        initial={{
          pathLength: 0,
          opacity: 0
        }}
        animate={{
          pathLength: 1,
          opacity: [0, 0.4, 0.15]
        }}
        transition={{
          duration: 1.2,
          delay: 0.02 * i,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2 + Math.random() * 3
        }} />

      )}
      {/* Nodes */}
      {nodes.map((n, i) =>
      <motion.g key={i}>
          <motion.circle
          cx={n.x}
          cy={n.y}
          r={5}
          fill="#050510"
          stroke="#34e8dc"
          strokeWidth="1"
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            delay: 0.05 * i,
            type: 'spring',
            stiffness: 200,
            damping: 15
          }} />
        
          <motion.circle
          cx={n.x}
          cy={n.y}
          r={5}
          fill="#34e8dc"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: [0, 0.8, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.3 * i,
            repeatDelay: 1 + Math.random() * 2
          }} />
        
        </motion.g>
      )}
    </svg>);

}
