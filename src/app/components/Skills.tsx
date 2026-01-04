"use client";

import { easeInOut, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skillGroups } from "../lib/content";

const cardMotion = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: easeInOut },
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Stacks and strengths"
          description="Centered on fast UI, thoughtful product execution, and consistent, high‑quality frontend work."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.label}
              {...cardMotion}
              transition={{ ...cardMotion.transition, delay: 0.05 * index }}
              className="relative rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-lg shadow-slate-950/30 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-40 bg-[radial-gradient(90%_60%_at_20%_20%,rgba(59,130,246,0.12),transparent),radial-gradient(90%_60%_at_80%_0%,rgba(6,182,212,0.1),transparent)]"
                aria-hidden
              />
              <div className="relative flex items-center justify-between mb-4">
                <h3 className={`text-xl font-semibold ${group.accent}`}>
                  {group.label}
                </h3>
                <span className="h-1.5 w-12 rounded-full bg-gradient-to-r from-blue-400 to-emerald-300" />
              </div>
              <ul className="relative space-y-3 text-slate-200">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
