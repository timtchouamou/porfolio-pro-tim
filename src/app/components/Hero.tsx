"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroStats, highlightTags } from "../lib/content";

type HeroProps = {
  onOpenContact?: () => void;
};

const Hero = ({ onOpenContact }: HeroProps) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-28 pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute top-0 right-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-[120px]"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-[-220px] h-[320px] bg-[radial-gradient(120%_60%_at_50%_50%,rgba(59,130,246,0.12),rgba(6,182,212,0.08),transparent)]"
          aria-hidden
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative grid gap-12 lg:grid-cols-[1.2fr,0.8fr] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200 shadow-lg shadow-blue-500/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Actively seeking remote developer roles.
          </div>
          {/* Bio */}
          <div className="space-y-5">
            <p className="uppercase tracking-[0.3em] text-xs text-slate-400">
              Frontend Developer
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-[1.05] text-white">
              Fast, efficient web applications crafted with Next.js, React, and TypeScript, 
              using a clean modern JavaScript stack.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">
              I create fast, resilient, and user-focused experiences with thoughtful design,
               ready to make an immediate impact in my first developer role.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {highlightTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm text-slate-200 shadow-inner shadow-blue-500/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="group relative overflow-hidden rounded-xl bg-linear-to-r from-blue-500 via-cyan-400 to-emerald-300 px-[1px] py-[1px]"
            >
              <span className="block rounded-[0.72rem] bg-slate-950 px-8 py-3 text-base font-semibold text-white transition group-hover:bg-slate-900">
                View projects
              </span>
            </Link>
            <button
              onClick={onOpenContact}
              className="rounded-xl border border-slate-800/80 px-8 py-3 text-base font-semibold text-slate-100 hover:border-cyan-400/80 transition bg-slate-900/60"
            >
              Let’s Connect
            </button>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-linear-to-r from-indigo-600 via-purple-600 to-fuchsia-600 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-purple-600/30 transition hover:scale-[1.02] hover:shadow-purple-500/40"
            >
              <span>More about me</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div
            className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-emerald-400/10 blur-3xl"
            aria-hidden
          />

          <div className="relative rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl shadow-blue-500/15 overflow-hidden">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.08),transparent_35%)]"
              aria-hidden
            />
            <div className="relative grid grid-cols-2 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800/70 bg-slate-950/70 p-4 shadow-inner shadow-slate-900/40"
                >
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="text-3xl font-bold text-blue-200">
                    {stat.value}
                  </p>
                  {stat.helper ? (
                    <p className="text-xs text-slate-500 mt-1">{stat.helper}</p>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/30 bg-linear-to-r from-blue-500/10 via-slate-900 to-cyan-400/10 p-6 flex flex-col gap-3">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">
                Built for fast moving teams
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Clean Code",
                  "Component Architecture",
                  "Automation",
                  "Figma To Code",
                  "Accessible UI",
                  "Linting & Formatting",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-sm text-slate-200 shadow-sm shadow-blue-500/10"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
