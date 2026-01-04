"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./ContactModal.css";

type ContactModalProps = {
  open: boolean;
  onCloseAction: () => void;
  onNotifyAction?: (type: "success" | "error", message: string) => void;
};

export default function ContactModal({
  open,
  onCloseAction,
  onNotifyAction
}: ContactModalProps) {
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);

  /* ESC + Autofocus */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && onCloseAction();

    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }

    return () => document.removeEventListener("keydown", onKey);
  }, [open, onCloseAction]);

  /* EmailJS submit */
  const contact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loading = document.querySelector<HTMLDivElement>(
      ".modal__overlay--loading"
    );
    const success = document.querySelector<HTMLDivElement>(
      ".modal__overlay--success"
    );

    loading?.classList.add("modal__overlay--visible");

    emailjs
      .sendForm(
        "service_g0nlx76",
        "template_yt3u68q",
        event.currentTarget,
        "VOaeM_EyQEysq2e7y"
      )
      .then(() => {
        loading?.classList.remove("modal__overlay--visible");
        success?.classList.add("modal__overlay--visible");
        event.currentTarget.reset();
      })
      .catch(() => {
        loading?.classList.remove("modal__overlay--visible");
        // alert(
        //   "The email service is temporarily unavailable. Please contact me directly at tim.tchouamou@gmail.com"
        // );
      });
  };

  /* Auto-grow textarea */
  const autoGrow = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onMouseDown={(e) =>
            e.target === e.currentTarget && onCloseAction()
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-purple-900 to-black/80 flex justify-center items-center"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-2xl p-8 w-full max-w-lg relative border border-blue-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block bg-blue-700 rounded-full p-2">
                <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5M21 10.5l-9-7-9 7M21 10.5l-9 7-9-7" /></svg>
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight">Contact Me</h2>
            </div>

            <form onSubmit={contact} className="space-y-5">
              <input
                ref={firstFieldRef}
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-gray-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />

              <textarea
                ref={messageRef}
                name="message"
                rows={4}
                placeholder="Your Message"
                onInput={autoGrow}
                className="w-full p-3 rounded-lg bg-gray-800 border border-blue-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onCloseAction}
                  className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition font-semibold shadow"
                >
                  Send
                </button>
              </div>
            </form>

            {/* Loading overlay */}
            <motion.div
              className="modal__overlay modal__overlay--loading flex items-center justify-center absolute inset-0 bg-black/70 rounded-2xl z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <motion.i
              className="fas fa-spinner fa-spin text-3xl text-blue-400"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </motion.div>

            {/* Success overlay */}
            <div className="modal__overlay modal__overlay--success flex flex-col items-center justify-center absolute inset-0 bg-black/80 rounded-2xl z-10 text-center px-6">
              <svg width="48" height="48" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" className="mb-2"><path d="M5 13l4 4L19 7" /></svg>
              <span className="text-lg font-semibold">Thanks for the message! Looking forward to connecting.</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


