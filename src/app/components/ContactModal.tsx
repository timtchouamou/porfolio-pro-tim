"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ContactModalProps = {
  open: boolean;
  onCloseAction: () => void;
  onNotifyAction?: (type: "success" | "error", message: string) => void;
};

export default function ContactModal({ open, onCloseAction, onNotifyAction }: ContactModalProps) {
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
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        form.reset();
        onNotifyAction?.("success", "Message sent successfully!");
        onCloseAction();
      } else {
        onNotifyAction?.("error", json.error || "Something went wrong");
      }
    } catch {
      onNotifyAction?.("error", "Network error");
    } finally {
      setSubmitting(false);
    }
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
            className="bg-gray-900 text-white rounded-lg p-6 w-full max-w-lg"
          >
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <form onSubmit={submit} className="space-y-4">
              <input
                ref={firstFieldRef}
                name="name"
                required
                placeholder="Your Name"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700"
              />
              <textarea
                ref={messageRef}
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                onInput={autoGrow}
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 resize-none"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onCloseAction}
                  className="px-4 py-2 rounded bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 rounded bg-blue-600"
                >
                  {submitting ? "Sending..." : "Send"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
