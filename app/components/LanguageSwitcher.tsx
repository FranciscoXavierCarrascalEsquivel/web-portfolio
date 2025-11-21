"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Lang = "en" | "es" | "cat" | "de";

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "/flags/en.svg" },
  { code: "es", label: "Español", flag: "/flags/es.svg" },
  { code: "cat", label: "Català", flag: "/flags/cat.svg" },
  { code: "de", label: "Deutsch", flag: "/flags/de.svg" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const current = LANGS[0];

  const go = (code: Lang) => {
    setOpen(false);
    router.push(`/${code}`);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Image src={current.flag} alt="" width={18} height={18} className="rounded-sm" />
        <span>{current.label}</span>
        <svg className="h-4 w-4 opacity-80" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="listbox"
            className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/95 shadow-xl backdrop-blur"
          >
            {LANGS.map(l => (
              <li key={l.code}>
                <button
                  onClick={() => go(l.code)}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-white/10 focus:bg-white/10"
                  role="option"
                >
                  <Image src={l.flag} alt="" width={18} height={18} className="rounded-sm" />
                  <span>{l.label}</span>
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
