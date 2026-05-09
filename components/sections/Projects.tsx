"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { SectionHeader, Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "MERN Stack", "AI/ML", "Next.js"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter((project) => 
    filter === "All" || project.tags.includes(filter)
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my recent work, ranging from full-stack applications to AI models." 
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full flex flex-col p-0 overflow-hidden group">
                  {/* Project Image */}
                  <div className="relative h-48 w-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-violet-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                        <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-600 font-bold text-lg opacity-20 group-hover:opacity-40 transition-opacity">
                          {project.title}
                        </div>
                      </>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant={tag === "AI/ML" ? "violet" : "blue"}>
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="text-[10px] font-bold text-slate-500 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-3 mt-auto">
                      <Link href={project.liveDemo} target="_blank" className="flex-grow">
                        <Button variant="primary" size="sm" className="w-full">
                          Live Demo <ExternalLink size={14} />
                        </Button>
                      </Link>
                      <Link href={project.github} target="_blank" className="flex-grow">
                        <Button variant="outline" size="sm" className="w-full">
                          Code <FaGithub size={14} />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
