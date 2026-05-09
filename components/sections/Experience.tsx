"use client";

import { motion } from "framer-motion";
import { timelineData } from "@/data/experience";
import { SectionHeader } from "@/components/ui/Badge";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Experience & Education" 
          subtitle="My professional journey and academic background." 
        />

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 dark:border-blue-400 -translate-x-1/2 z-10 flex items-center justify-center shadow-lg">
                  {item.type === "experience" ? (
                    <Briefcase size={14} className="text-blue-600 dark:text-blue-400" />
                  ) : (
                    <GraduationCap size={14} className="text-blue-600 dark:text-blue-400" />
                  )}
                </div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-[45%] bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group-hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                      {item.type}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar size={14} /> {item.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-blue-600 dark:text-blue-400 font-medium mb-3 flex items-center gap-2">
                    {item.organization}
                    {item.location && (
                      <span className="text-slate-400 dark:text-slate-600 text-sm flex items-center gap-1">
                        • <MapPin size={12} /> {item.location}
                      </span>
                    )}
                  </div>

                  {item.grade && (
                    <div className="mb-4 inline-block px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300">
                      {item.grade}
                    </div>
                  )}

                  <ul className="space-y-2">
                    {item.description.map((desc, index) => (
                      <li key={index} className="text-slate-600 dark:text-slate-400 text-sm flex gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
