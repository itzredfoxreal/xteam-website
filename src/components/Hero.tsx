"use client";

import { motion } from "framer-motion";
import { CircuitBackground } from "./CircuitBackground";
import { Terminal } from "./Terminal";

const BADGES = ["Fabric 26.2", "Java 25", "v1.1.0", "MIT License"];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24">
      <CircuitBackground className="pointer-events-none absolute inset-0 h-full w-full opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl"
          >
            Run your server
            <br />
            like a control room.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-ink-dim"
          >
            One command root manages every team on your Minecraft server —
            loadouts, effects, movement, identity. Built for event servers,
            minigames, and staff who need to move fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <motion.a
              id="download"
              href="/xteam-1.1.0.jar"
              download
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", bounce: 0, duration: 0.25 }}
              className="rounded-lg bg-copper px-5 py-3 text-sm font-semibold text-void shadow-[0_0_30px_-10px_rgba(217,139,79,0.6)]"
            >
              Download xteam-1.1.0.jar
            </motion.a>
            <motion.a
              href="#commands"
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", bounce: 0, duration: 0.25 }}
              className="rounded-lg border border-line px-5 py-3 text-sm font-medium text-ink-dim transition-colors hover:border-line-bright hover:text-ink"
            >
              View commands
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {BADGES.map((b) => (
              <span
                key={b}
                className="rounded-full border border-line px-3 py-1 font-mono-cmd text-xs text-ink-dim"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  );
}
