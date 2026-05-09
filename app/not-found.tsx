"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#030712] px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Page Not Found</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-10">
            Oops! The page you are looking for doesn&apos;t exist or has been moved. 
            Let&apos;s get you back on track.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/">
            <Button variant="primary" size="lg">
              <Home size={18} /> Back to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} /> Go Back
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
