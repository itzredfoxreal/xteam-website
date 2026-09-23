"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard API unavailable — fail silently, button still gives feedback
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.93 }}
      transition={{ type: "spring", bounce: 0, duration: 0.25 }}
      className={`shrink-0 rounded-md border px-2.5 py-1 text-xs font-mono-cmd transition-colors ${
        copied
          ? "border-good/40 text-good"
          : "border-line text-ink-dim hover:border-line-bright hover:text-ink"
      }`}
      aria-label={copied ? "Copied" : `Copy ${text}`}
    >
      {copied ? "copied" : "copy"}
    </motion.button>
  );
}
