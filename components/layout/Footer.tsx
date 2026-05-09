"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#030712] border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-2">
              Deep Bhanushali
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
              Building intelligent, scalable web applications — from idea to deployment.
            </p>
          </div>

          <div className="flex gap-6">
            <Link href="https://github.com/Deep-Bhanushali" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaGithub size={20} />
            </Link>
            <Link href="https://www.linkedin.com/in/deep-bhanushali-73307a341" target="_blank" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FaLinkedin size={20} />
            </Link>
            <Link href="mailto:bhanushalideep24@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </Link>
          </div>

          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} Built by Deep Bhanushali.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/25 z-40 hover:bg-blue-700 transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}
