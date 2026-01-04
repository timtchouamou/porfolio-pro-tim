"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

type ContactProps = {
  onOpenContact?: () => void;
};

const Contact = ({ onOpenContact }: ContactProps) => {
  return (
    <section id="contact" className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, ease: ["easeInOut"] }}
        className="max-w-6xl mx-auto rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-500/10 via-slate-900 to-cyan-500/10 p-10 shadow-xl shadow-blue-500/15"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
              Contact
            </p>
            <h3 className="text-3xl font-bold text-white">
             Let’s create meaningful solutions.
            </h3>
            <p className="text-slate-200">
             Open to new opportunities and motivated to grow and contribute.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="mailto:tim.tchouamou@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 px-5 py-3 font-semibold text-slate-950 transition shadow-lg shadow-blue-500/25"
            >
              <Mail className="w-4 h-4" /> Email
            </Link>
            <Link
              href="https://www.linkedin.com/in/timothee-djouokep-tchouamou-13a633bb/"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200/30 hover:border-white px-5 py-3 font-semibold text-white transition"
            >
              <Linkedin className="w-4 h-4" /> Connect
            </Link>
            <button
              onClick={onOpenContact}
              className="rounded-xl border border-slate-800/80 px-5 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-400/80 transition bg-slate-900/60"
            >
              Let’s Connect
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
