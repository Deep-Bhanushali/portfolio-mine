"use client";

import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/Badge";
import { Award, BookOpen, Briefcase, Code } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "5+", icon: Code, color: "text-blue-500" },
  { label: "CGPA", value: "8.63", icon: Award, color: "text-violet-500" },
  { label: "Internships", value: "1", icon: Briefcase, color: "text-emerald-500" },
  { label: "Languages Known", value: "4", icon: BookOpen, color: "text-amber-500" },
];

export function About() {
  return (
    <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="About Me" 
          subtitle="A brief introduction to my background and expertise." 
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Passion for Innovation & Scalability
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              A motivated Computer Science Engineering graduate specializing in Artificial Intelligence from Parul University. 
              Skilled in full-stack development, AI/ML model integration, and scalable software solutions.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Passionate about embedded AI, robotics, and real-time systems. Currently interning as a MERN Stack Developer at 
              EnactOn Technologies Pvt Ltd, where I contribute to building production-ready applications.
            </p>
            
            <div className="pt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Quick Learner</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-violet-500" />
                <span>Problem Solver</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Team Player</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <Card key={i} className="flex flex-col items-center justify-center text-center p-8">
                <div className={`p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm mb-4 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
