"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#install", label: "Install" },
  { href: "#features", label: "Features" },
  { href: "#commands", label: "Commands" },
  { href: "#quickstart", label: "Quickstart" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        solid ? "bg-void/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono-cmd text-sm text-ink">
          /xteam
        </a>
        <ul className="hidden items-center gap-7 text-sm text-ink-dim sm:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-ink">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <motion.a
          href="#download"
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", bounce: 0, duration: 0.25 }}
          className="rounded-md bg-copper px-3.5 py-1.5 text-sm font-medium text-void"
        >
          Download
        </motion.a>
      </nav>
    </header>
  );
}
