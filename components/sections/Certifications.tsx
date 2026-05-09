"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/Badge";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Python Full Stack Development",
    issuer: "GeeksforGeeks",
    date: "2024",
    link: "#",
  },
  {
    title: "Python Basic Development",
    issuer: "HackerRank",
    date: "2023",
    link: "#",
  },
  {
    title: "Computer Networks",
    issuer: "NPTEL",
    date: "2023",
    link: "#",
  },
  {
    title: "Cyber Physical Systems",
    issuer: "NPTEL",
    date: "2023",
    link: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Certifications" 
          subtitle="Continuous learning and professional validation." 
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center text-center group transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Award size={32} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-500 text-sm mb-4">
                {cert.issuer} • {cert.date}
              </p>
              <motion.a
                href={cert.link}
                target="_blank"
                whileHover={{ gap: "8px" }}
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
