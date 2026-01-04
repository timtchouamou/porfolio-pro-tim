"use client";

import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ContactModal from "../components/ContactModal";
import { projects } from "../lib/content";
import { useRef, useState } from "react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";


export default function ProjectsPage() {
  const [contactOpen, setContactOpen] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const toastTimer = useRef<NodeJS.Timeout | null>(null);
  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);
  const notify = (type: "success" | "error", message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ type, message });
    toastTimer.current = setTimeout(() => setToast(null), 4000);
  };
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(14,165,233,0.1),transparent)]"
        aria-hidden
      />

      <Navigation onOpenContact={openContact} />

      <main className="flex-1 pt-24 relative z-10">
        <section
          id="all-projects"
          className="relative py-20 px-6 bg-slate-900/60 overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-60 bg-[radial-gradient(90%_60%_at_15%_20%,rgba(59,130,246,0.15),transparent),radial-gradient(90%_60%_at_85%_0%,rgba(6,182,212,0.12),transparent)]"
            aria-hidden
          />
          <div className="max-w-7xl mx-auto relative space-y-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <SectionHeading
                eyebrow="Showcase"
                title="All Projects"
                description="Browse the full set of featured builds"
              />
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-200 hover:text-white font-semibold"
              >
                Back to home
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl shadow-slate-950/40 hover:border-blue-400/60"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 via-cyan-500/8 to-emerald-400/10"
                    aria-hidden
                  />
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={1200}
                      height={675}
                      className="w-full h-auto transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="relative p-6 space-y-5 flex flex-col h-full">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <p className="text-sm text-amber-200/90">
                        {project.impact}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-slate-900/70 border border-slate-800 text-sm text-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <Link
                        href={project.live}
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 font-semibold text-slate-950 transition shadow-lg shadow-blue-500/25"
                      >
                        Live
                      </Link>
                      <Link
                        href={project.code}
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 hover:border-blue-400 px-4 py-2 font-semibold text-white transition"
                      >
                        Code
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer onOpenContact={openContact} />

      <ContactModal
        open={contactOpen}
        onCloseAction={closeContact}
      />

   

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: easeInOut }}
            className="fixed bottom-6 right-6 z-[3000] max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-xl shadow-blue-500/20"
          >
            <div className="flex items-start gap-3">
              <span
                className={`h-2.5 w-2.5 rounded-full mt-1.5 ${toast.type === "success" ? "bg-emerald-400" : "bg-amber-300"}`}
              />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-white">
                  {toast.type === "success" ? "Sent" : "Error"}
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {toast.message}
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
