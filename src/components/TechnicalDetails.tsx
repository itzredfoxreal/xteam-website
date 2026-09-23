"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NOTES = [
  { t: "Permission gate", d: "Requires Permissions.COMMANDS_GAMEMASTER (op level 2+)." },
  { t: "Data storage", d: "world/data/team_mod/ — teams.json, kits.json, usernames.txt." },
  { t: "Random names list", d: "~60–80MB RAM while loaded, extracted to usernames.txt on first run." },
  { t: "Fabric API", d: "Required on the server — uses CommandRegistrationCallback." },
  { t: "Tab-completion", d: "Supported on teams, kits, players, effects, times, and tp targets." },
  { t: "Kit behavior", d: "Persists exact armor slot layout; armor auto-equips on givekit." },
  { t: "Freeze behavior", d: "Stores a block-aligned position; any movement packet triggers a server-side correction that snaps the player back." },
];

export function TechnicalDetails() {
  const [open, setOpen] = useState(false);

  return (
    <section className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between text-left"
        >
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
              Implementation notes
            </h2>
            <p className="mt-2 max-w-md text-ink-dim">
              Reference material for server admins.
            </p>
          </div>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
            className="text-2xl text-ink-dim"
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: "spring", bounce: 0, duration: 0.35 }}
              className="overflow-hidden"
            >
              <dl className="mt-8 divide-y divide-line/60 border-t border-line">
                {NOTES.map((n) => (
                  <div key={n.t} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                    <dt className="shrink-0 text-sm font-medium text-ink sm:w-44">
                      {n.t}
                    </dt>
                    <dd className="text-sm text-ink-dim">{n.d}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
