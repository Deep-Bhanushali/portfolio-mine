"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/ui/Badge";

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Technical Skills" 
          subtitle="My toolbox of languages, frameworks, and technologies." 
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900/50 rounded-2xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group/card"
            >
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-x-4 gap-y-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center gap-2 group/skill"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 dark:bg-slate-800 group-hover/skill:bg-blue-50 dark:group-hover/skill:bg-blue-900/30 transition-colors">
                      {typeof skill.icon === "string" ? (
                        <i className={`${skill.icon} text-2xl text-slate-600 dark:text-slate-400 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400`} />
                      ) : (
                        <skill.icon className="text-2xl text-slate-600 dark:text-slate-400 group-hover/skill:text-blue-600 dark:group-hover/skill:text-blue-400" />
                      )}
                    </div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 group-hover/skill:text-slate-900 dark:group-hover/skill:text-slate-100 transition-colors text-center max-w-[80px]">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
