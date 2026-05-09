"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, Send, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current);
      const data = {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      toast.success("Message sent successfully! I'll get back to you soon.", {
        duration: 5000,
        position: "bottom-right",
        style: {
          background: "#0F172A",
          color: "#fff",
          border: "1px solid #1E293B"
        }
      });
      formRef.current.reset();
    } catch (error) {
      console.error("Contact Error:", error);
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <Toaster />
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Let's build something together"
          subtitle="Have a question or want to work together? Feel free to reach out!"
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Contact Information
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:bhanushalideep24@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">Email</div>
                  <div className="text-slate-900 dark:text-slate-200 font-bold">bhanushalideep24@gmail.com</div>
                </div>
              </a>

              <a href="tel:+919359472291" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-violet-50 dark:bg-violet-900/20 flex items-center justify-center text-violet-600 dark:text-violet-400 group-hover:bg-violet-600 group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">Phone</div>
                  <div className="text-slate-900 dark:text-slate-200 font-bold">+91 93594 72291</div>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/deep-bhanushali-73307a341" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">LinkedIn</div>
                  <div className="text-slate-900 dark:text-slate-200 font-bold">Deep Bhanushali</div>
                </div>
              </a>

              <a href="https://github.com/Deep-Bhanushali" target="_blank" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all">
                  <FaGithub size={20} />
                </div>
                <div>
                  <div className="text-sm text-slate-500 dark:text-slate-500 font-medium">GitHub</div>
                  <div className="text-slate-900 dark:text-slate-200 font-bold">Deep-Bhanushali</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    required
                    name="user_email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  required
                  name="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
