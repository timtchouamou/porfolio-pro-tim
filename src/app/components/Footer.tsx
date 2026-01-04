"use client";

import { socials } from "../lib/content";

type FooterProps = {
  onOpenContact?: () => void;
};

const Footer = ({ onOpenContact }: FooterProps) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-lg font-semibold text-white">
            Available for remote developer roles
          </p>
          <p className="text-slate-400">
            Let’s build something fast, clean, and intentional.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((item) => {
            const isMail = item.label.toLowerCase() === "email";
            if (isMail && onOpenContact) {
              return (
                <button
                  key={item.label}
                  onClick={onOpenContact}
                  aria-label={item.label}
                  className="bg-slate-900 hover:bg-blue-600 p-3 rounded-full transition border border-slate-800"
                >
                  <item.icon className="w-5 h-5" />
                </button>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="bg-slate-900 hover:bg-blue-600 p-3 rounded-full transition border border-slate-800"
                target="_blank"
                rel="noreferrer"
              >
                <item.icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        <p className="text-slate-500 text-sm text-center md:text-right">
          © 2025 timothee D. TCHOUAMOU. Built with Next.js.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
