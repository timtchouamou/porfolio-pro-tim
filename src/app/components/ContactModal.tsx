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
  onNotifyAction,
}: ContactModalProps) {
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

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
        onNotifyAction?.("success", "Message sent successfully!");
      })
      .catch(() => {
        loading?.classList.remove("modal__overlay--visible");
        onNotifyAction?.(
          "error",
          "Email service unavailable. Please try again later."
        );
      });
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            className="relative w-full max-w-lg rounded-2xl border border-blue-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 text-white shadow-2xl"
          >
            {/* Header */}
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full bg-blue-700 p-2">
                ✉️
              </span>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Contact Me
              </h2>
            </div>

            {/* Form */}
            <form
              ref={formRef}
              onSubmit={contact}
              className="space-y-5"
            >
              <input
                ref={firstFieldRef}
                name="user_name"
                required
                placeholder="Your Name"
                className="w-full rounded-lg border border-blue-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your Email"
                className="w-full rounded-lg border border-blue-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-blue-700 bg-gray-800 p-3 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={onCloseAction}
                  className="rounded-lg bg-gray-700 px-5 py-2 font-semibold hover:bg-gray-600"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 font-semibold shadow hover:from-blue-700 hover:to-purple-700"
                >
                  Send
                </button>
              </div>
            </form>

            {/* Loading Overlay */}
            <div className="modal__overlay modal__overlay--loading absolute inset-0 z-10 hidden items-center justify-center rounded-2xl bg-black/80">
              <i className="fas fa-spinner fa-spin text-4xl text-blue-400" />
            </div>

            {/* Success Overlay */}
            <div className="modal__overlay modal__overlay--success absolute inset-0 z-10 hidden flex-col items-center justify-center rounded-2xl bg-green-900/90 text-center text-lg font-semibold">
              ✅ Message sent successfully!
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
