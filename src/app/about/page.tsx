"use client";

import Image from "next/image";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import { motion } from "framer-motion";
import ContactModal from "@/app/components/ContactModal";
import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

const AboutPage = () => {
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
  const skills = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TailwindCSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "GitHub",
      icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
    {
      name: "Linux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
    {
      name: "Ansible",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
    },
    {
      name: "Tomcat",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tomcat/tomcat-original.svg",
    },
  ];

  const education: Array<{
    title: string;
    institution: string;
    date: string;
    url?: string;
  }> = [
    {
      title: "Frontend Developer Bootcamp",
      institution: "David Brag / FES Institute",
      date: "2025",
      url: "/cert.pdf",
    },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(14,165,233,0.1),transparent)]"
        aria-hidden
      />

      <Navigation onOpenContact={openContact} />

      <main className="flex-1 pt-24 relative z-10">
        <section id="about-page" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center">
                More about Me
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                {/* Photo */}
                <div className="flex justify-center">
                  <div className="relative w-80 h-80 rounded-lg overflow-hidden border-2 border-blue-400/30 shadow-2xl shadow-blue-500/20">
                    <Image
                      src="/1.JPEG"
                      alt="Tim - Frontend Developer"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Bio & Skills */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-blue-400">
                      Frontend Developer
                    </h2>
                    <p className="text-lg text-slate-300 leading-relaxed">
                     “I create fast, intuitive, and accessible web applications 
                     with React and Next.js, transforming designs into clean, 
                     modern user interfaces. I focus on writing maintainable
                      code while continuously refining my skills.”
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
                      Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-4">
                      {skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="group relative flex items-center justify-center w-16 h-16 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/70 transition"
                          title={skill.name}
                        >
                          <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 object-contain transition group-hover:scale-110"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Extended Bio */}
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 space-y-4">
                <h2 className="text-2xl font-bold text-blue-400 mb-4">
                  My Journey
                </h2>
                <p className="text-slate-300 leading-relaxed">
                 “I began as a Linux System Administrator and transitioned 
                 into software development, bringing discipline and attention 
                 to detail. My experience with servers and automation helps me 
                 build clean, efficient frontend interfaces. I’ve completed a
                  frontend bootcamp and continuously strengthen my skills through 
                  resources like Cracking the Coding Interview and Eloquent JavaScript.”
                </p>
                <p className="text-slate-300 leading-relaxed">
               It’s clear, simple, and professional while highlighting both experience
                and learning.
                </p>
              </div>
              {/* Education */}
              <div className="mt-12 bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">
                  Education & Certifications
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {education.length > 0 ? (
                    education.map((item) => (
                      <div
                        key={`${item.title}-${item.institution}-${item.date}`}
                        className="group bg-slate-950/40 border border-slate-800 rounded-xl p-6 flex items-start justify-between hover:border-blue-500/40 hover:bg-slate-950/60 transition"
                      >
                        <div className="space-y-1">
                          <p className="text-lg font-semibold text-white">
                            {item.title}
                          </p>
                          <p className="text-slate-400">{item.institution}</p>
                          <p className="text-slate-500">{item.date}</p>
                        </div>
                        {item.url ? (
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline ml-6 whitespace-nowrap"
                          >
                            View
                          </a>
                        ) : null}
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400">
                      Add your education and certificates here.
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer onOpenContact={openContact} />

      <ContactModal
        open={contactOpen}
        onCloseAction={closeContact}
        onNotifyAction={notify}
      />

      <AnimatePresence>
        {toast ? (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-6 right-6 z-3000 max-w-sm rounded-2xl border border-slate-800 bg-slate-900/90 px-4 py-3 shadow-xl shadow-blue-500/20"
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
};

export default AboutPage;
