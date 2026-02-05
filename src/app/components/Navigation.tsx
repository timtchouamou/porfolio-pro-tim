"use client";

import Link from "next/link";
import { Code2 } from "lucide-react";
import { navLinks } from "../lib/content";


type NavigationProps = {
  onOpenContact?: () => void;
};


const Navigation = ({ onOpenContact }: NavigationProps) => {
  return (
    <header className="fixed top-0 z-1000 w-full backdrop-blur-lg bg-slate-950/70 border-b border-slate-800/70 shadow-[0_10px_60px_-35px_rgba(0,0,0,0.6)]">
      <div
        className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.25),transparent_35%)]"
        aria-hidden
      />
      <nav className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition"
        >
          <div className="grid place-items-center rounded-xl bg-linear-to-br from-blue-500 to-cyan-400 p-2.5 shadow-lg shadow-blue-500/25 border border-white/10">
            <Code2 className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <span className="text-xl font-semibold text-white leading-tight block">
              TIMOTHEE .D TCHOUAMOU
            </span>
            <span className="text-xs text-slate-400">
              Delivering clear, efficient solutions through code.
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-200">
          {navLinks.map((item) => {
            const isContact = item.href === "#contact";
            if (isContact && onOpenContact) {
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={onOpenContact}
                  className="group relative inline-flex items-center gap-1 px-2 py-1 rounded-lg transition text-slate-300 hover:text-white"
                >
                  <span className="absolute inset-x-2 bottom-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition" />
                  {item.label}
                </button>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                className="group relative inline-flex items-center gap-1 px-2 py-1 rounded-lg transition text-slate-300 hover:text-white"
              >
                <span className="absolute inset-x-2 bottom-0 h-px bg-linear-to-r from-transparent via-blue-400/70 to-transparent scale-x-0 group-hover:scale-x-100 origin-center transition" />
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/resume.pdf"
          target="blank"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 bg-linear-to-r from-blue-400 via-cyan-300 to-emerald-300 px-4 py-2 rounded-lg shadow-lg shadow-blue-500/25 border border-white/20"
        >
          Resume
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
