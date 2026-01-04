"use client";

import { useState } from "react";
import ContactModal from "@/app/components/ContactModal";
import Navigation from "./components/Navigation";
import React from "react";

// Temporary Modal definition (replace with your actual Modal import if available)
type ModalProps = {
  open: boolean;
  contact: (e: React.FormEvent<HTMLFormElement>) => void;
  closeModal: () => void;
};
const Modal: React.FC<ModalProps> = ({ open, contact, closeModal }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        className="bg-white text-black p-6 rounded shadow-lg"
        onSubmit={contact}
      >
        <h2 className="text-lg font-bold mb-4">Contact Form</h2>
        {/* Add your form fields here */}
        <button type="submit" className="mr-2 px-4 py-2 bg-blue-600 text-white rounded">Send</button>
        <button type="button" onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded">Close</button>
      </form>
    </div>
  );
};
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Clock from "./gallery/Clock";



export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);
   const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const openContact = () => setContactOpen(true);
  const closeContact = () => setContactOpen(false);

  const notify = (type: "success" | "error", message: string) => {
    alert(`${type.toUpperCase()}: ${message}`);
  };

  return (
   <div className="relative min-h-screen flex flex-col bg-green-950 text-white overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(59,130,246,0.12),rgba(14,165,233,0.1),transparent)]"
        aria-hidden
      />

      <Navigation onOpenContact={openContact} />
    


 <main className="flex justify-center items-center pt-30 pb-none">
         <Clock />       
      </main>

      <main className="flex-1 relative z-10">
        <Hero onOpenContact={openContact} />
        <Projects />
        <Skills />
        <Contact onOpenContact={openContact} />
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
            transition={{ duration: 0.2, ease: "easeOut" }}
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
