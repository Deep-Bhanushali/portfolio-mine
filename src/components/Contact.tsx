import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MagneticLink } from './MagneticLink';
const socials = [
{
  name: 'LINKEDIN',
  url: 'https://www.linkedin.com/in/deep-bhanushali-73307a341',
  cmd: '--linkedin'
},
{
  name: 'GITHUB',
  url: 'https://github.com/Deep-Bhanushali',
  cmd: '--github'
},
{
  name: 'LEETCODE',
  url: 'https://leetcode.com/u/DeepBhanushali24/',
  cmd: '--leetcode'
}];

export function Contact() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () =>
    setTime(
      new Date().toLocaleTimeString('en-US', {
        hour12: false
      })
    );
    update();
    const i = setInterval(update, 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <section id="contact" className="py-24 px-6 min-h-screen flex flex-col">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="mb-10 flex items-center gap-3 font-mono text-xs uppercase tracking-widest">
          <span className="text-cyber">[04]</span>
          <span className="text-text">connect.exec</span>
          <div className="flex-1 h-px bg-line" />
          <span className="text-mute">{time} UTC</span>
        </div>

        <motion.div
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
          className="border border-line bg-panel/60 backdrop-blur-sm">
          
          <div className="flex items-center px-4 py-2 border-b border-line bg-panel2/80">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-signal/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-warn/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-cyber/60" />
            </div>
            <span className="font-mono text-[10px] text-mute ml-auto uppercase tracking-widest">
              /usr/bin/contact
            </span>
          </div>

          <div className="p-8 md:p-12">
            <div className="font-mono text-xs text-mute mb-3 flex items-center gap-2">
              <span className="text-cyber">deep@portfolio:~$</span>
              <span>ping --recipient bhanushalideep24</span>
              <span className="text-cyber animate-blink">_</span>
            </div>

            <MagneticLink
              href="mailto:bhanushalideep24@gmail.com"
              className="group block py-6 hover:text-cyber transition-colors">
              
              <div className="font-display font-bold text-[clamp(2rem,7vw,8rem)] leading-[0.9] tracking-tighter text-text group-hover:text-glow break-all">
                bhanushalideep24
                <motion.span
                  whileHover={{
                    rotate: 360
                  }}
                  transition={{
                    duration: 0.6
                  }}
                  className="inline-block text-cyber px-2">
                  
                  @
                </motion.span>
                gmail.com
              </div>
            </MagneticLink>

            <div className="font-mono text-xs text-mute mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-cyber">{'>'}</span>
              <span>response_time: &lt; 24h</span>
              <span className="text-mute">-</span>
              <span>timezone: IST (UTC+5:30)</span>
            </div>

            <div className="my-10 border-t border-dashed border-line" />

            <div className="space-y-2 font-mono text-sm">
              <div className="text-mute mb-3 text-xs">
                <span className="text-cyber">deep@portfolio:~$</span> ls
                ./channels --verbose
              </div>
              {socials.map((s, i) =>
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${s.name}`}
                initial={{
                  opacity: 0,
                  x: -10
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  delay: 0.1 * i
                }}
                className="group flex items-center gap-4 hover:text-cyber transition-colors py-1.5">
                
                  <span className="text-cyber/40 group-hover:text-cyber">
                    +-
                  </span>
                  <span className="text-cyber min-w-[120px]">{s.cmd}</span>
                  <span className="text-text group-hover:text-cyber">
                    {s.name}
                  </span>
                  <span className="text-mute text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    -&gt; open
                  </span>
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1600px] mx-auto w-full mt-12 pt-6 border-t border-line flex flex-col md:flex-row justify-between gap-4 font-mono text-[10px] uppercase tracking-widest text-mute">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="w-1.5 h-1.5 rounded-full bg-cyber animate-pulse" />
          <span>SYSTEM_ONLINE</span>
          <span className="text-cyber">-</span>
          <span>(c) {new Date().getFullYear()} D.BHANUSHALI</span>
        </div>
        <div className="flex gap-4 flex-wrap">
          <span>BUILD: v2.6.0</span>
          <span className="text-cyber">-</span>
          <span>RUNTIME: REACT_18</span>
        </div>
      </div>
    </section>);

}
