import React, { useEffect, useRef } from 'react';
interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({
    x: -1000,
    y: -1000
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    const nodes: Node[] = [];
    const NODE_COUNT = 60;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    window.addEventListener('mousemove', onMove);
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Update + draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        // Mouse attraction
        const dx = mouseRef.current.x - n.x;
        const dy = mouseRef.current.y - n.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          n.x += dx * 0.002;
          n.y += dy * 0.002;
        }
        ctx.fillStyle = 'rgba(52, 232, 220, 0.38)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const opacity = (1 - dist / 140) * 0.25;
            ctx.strokeStyle = `rgba(52, 232, 220, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
        // Mouse connection lines
        const mdx = mouseRef.current.x - nodes[i].x;
        const mdy = mouseRef.current.y - nodes[i].y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < 200) {
          const opacity = (1 - mdist / 200) * 0.42;
          ctx.strokeStyle = `rgba(52, 232, 220, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40" />);


}
