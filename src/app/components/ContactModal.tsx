"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

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
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onCloseAction();
    if (open) {
      document.addEventListener("keydown", onKey);
      setTimeout(() => firstFieldRef.current?.focus(), 50);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onCloseAction]);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
        e.currentTarget,
        "VOaeM_EyQEysq2e7y"
      )
      .then(() => {
        loading?.classList.remove("modal__overlay--visible");
        success?.classList.add("modal__overlay--visible");
        onNotifyAction?.("success", "Message sent successfully!");
        onCloseAction();
      })
      .catch(() => {
        loading?.classList.remove("modal__overlay--visible");
        onNotifyAction?.(
          "error",
          "The email service is temporarily unavailable. Please contact me directly at dvdhyelee@gmail.com"
        );
      });
  };

  const autoGrow = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const ta = e.currentTarget;
    ta.style.height = "auto";
    ta.style.height = `${ta.scrollHeight}px`;
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          onMouseDown={(e) => e.target === e.currentTarget && onCloseAction()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 flex justify-center items-center"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white text-gray-900 rounded-lg p-6 w-full max-w-lg"
          >
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={submit} className="space-y-4">
              <input
                ref={firstFieldRef}
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-2 rounded border border-gray-300"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-2 rounded border border-gray-300"
              />
              <textarea
                ref={messageRef}
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                onInput={autoGrow}
                className="w-full p-2 rounded border border-gray-300 resize-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onCloseAction}
                  className="px-4 py-2 rounded bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white"
                >
                  Send
                </button>
              </div>
            </form>
            <div className="modal__overlay modal__overlay--loading">
              <i className="fas fa-spinner" />
            </div>
            <div className="modal__overlay modal__overlay--success">
              Thanks for the message! Looking forward to connecting.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
