"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) => {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: ["easeInOut"] }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400 shadow-lg shadow-blue-500/10">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-slate-300 text-base md:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
};

export default SectionHeading;
