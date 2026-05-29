import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
const projects = [
{
  id: 'MODEL_001',
  title: 'ArchaeoLearn',
  type: 'MERN + AI/ML',
  description:
  'Interactive archaeology and history learning platform with AI-powered artifact identification, chatbot assistance, world-map exploration, and gamified quizzes.',
  stack: ['React', 'Node.js', 'MongoDB', 'TensorFlow.js', 'Socket.IO', 'AWS'],
  metrics: {
    accuracy: '94.2%',
    latency: '120ms',
    uptime: '99.8%'
  },
  link: '#'
},
{
  id: 'MODEL_002',
  title: 'FarmMart',
  type: 'E-COMMERCE',
  description:
  'Marketplace connecting local farmers to customers. Real-time inventory tracking, Stripe payments, role-based dashboards, and complete order lifecycle.',
  stack: ['Next.js 14', 'TypeScript', 'MongoDB', 'Stripe', 'Liveblocks'],
  metrics: {
    accuracy: '—',
    latency: '88ms',
    uptime: '99.9%'
  },
  link: '#'
},
{
  id: 'MODEL_003',
  title: 'Rentify',
  type: 'RENTAL MARKETPLACE',
  description:
  'Rental platform with request management, secure payments, real-time notifications, and automated invoice generation. Full rental lifecycle managed end-to-end.',
  stack: ['Next.js', 'PostgreSQL', 'Prisma', 'Stripe', 'Nodemailer'],
  metrics: {
    accuracy: '—',
    latency: '95ms',
    uptime: '99.7%'
  },
  link: '#'
}];

export function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];
  return (
    <section id="work" className="py-24 px-6 max-w-[1600px] mx-auto">
      <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
        <span className="text-cyber">[03]</span>
        <span className="text-text">deployments</span>
        <div className="flex-1 h-px bg-line" />
        <span className="text-mute">{projects.length} models active</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-4 flex flex-col gap-3">
          {projects.map((proj, i) =>
          <button
            key={proj.id}
            onClick={() => setActive(i)}
            className={`text-left group relative border transition-all duration-300 ${active === i ? 'border-cyber bg-panel/80 border-glow' : 'border-line bg-panel/40 hover:border-cyber/40'}`}>
            
              <div className="flex items-center justify-between px-4 py-3 border-b border-line/60 bg-panel2/60">
                <span
                className={`font-mono text-[10px] uppercase tracking-widest ${active === i ? 'text-cyber' : 'text-mute'}`}>
                
                  {proj.id}
                </span>
                {active === i &&
              <motion.span
                layoutId="active-dot"
                className="w-2 h-2 rounded-full bg-cyber animate-pulse" />

              }
              </div>
              <div className="p-4">
                <div className="font-display text-2xl text-text leading-tight">
                  {proj.title}
                </div>
                <div className="font-mono text-[10px] text-mute uppercase tracking-widest mt-1">
                  {proj.type}
                </div>
              </div>
            </button>
          )}
        </div>

        <div className="lg:col-span-8 relative border border-cyber/30 bg-panel/60 backdrop-blur-sm border-glow min-h-[500px]">
          <div className="flex items-center justify-between px-4 py-2 border-b border-line bg-panel2/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-signal/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-warn/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-cyber/60" />
            </div>
            <span className="font-mono text-[10px] tracking-widest uppercase text-mute">
              {p.id}.inspect
            </span>
            <span className="font-mono text-[10px] text-cyber">DEPLOYED</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -20
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="p-8 md:p-10">
              
              <div className="font-mono text-[10px] text-cyber mb-2 uppercase tracking-widest">
                {p.type}
              </div>
              <h3 className="font-display text-5xl md:text-7xl text-text leading-[0.95] tracking-tighter mb-6">
                {p.title}
              </h3>

              <p className="font-mono text-sm text-mute leading-relaxed max-w-2xl mb-8 border-l-2 border-cyber pl-4">
                {p.description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-8">
                {Object.entries(p.metrics).map(([k, v]) =>
                <div key={k} className="border border-line p-3 bg-panel/60">
                    <div className="font-mono text-[10px] text-mute uppercase tracking-widest">
                      {k}
                    </div>
                    <div className="font-display text-xl text-cyber mt-1">
                      {v}
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <div className="font-mono text-[10px] text-mute uppercase tracking-widest mb-3">
                  stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) =>
                  <span
                    key={t}
                    className="font-mono text-[11px] text-text px-3 py-1 border border-line hover:border-cyber hover:text-cyber transition-colors">
                    
                      {t}
                    </span>
                  )}
                </div>
              </div>

              <a
                href={p.link}
                className="group inline-flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-cyber border border-cyber/60 px-5 py-3 hover:bg-cyber hover:text-void transition-colors">
                
                <span className="text-cyber group-hover:text-void">{'>'}</span>
                inspect_live
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>);

}