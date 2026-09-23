"use client";

import { useMemo, useState } from "react";
import { commandCategories } from "@/lib/commands";
import { CopyButton } from "./CopyButton";

export function CommandReference() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commandCategories;
    return commandCategories
      .map((cat) => ({
        ...cat,
        commands: cat.commands.filter(
          (c) =>
            c.syntax.toLowerCase().includes(q) ||
            c.description.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.commands.length > 0);
  }, [query]);

  const total = commandCategories.reduce((n, c) => n + c.commands.length, 0);
  const shown = filtered.reduce((n, c) => n + c.commands.length, 0);

  return (
    <section id="commands" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
          Every command
        </h2>
        <p className="mt-2 max-w-md text-ink-dim">
          Filter by name or description. Nothing leaves this page — search
          runs entirely in your browser.
        </p>

        <div className="mt-8 flex items-center gap-3 rounded-lg border border-line bg-panel px-4 py-3">
          <span className="font-mono-cmd text-ink-faint">/</span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="freeze, kit, tp…"
            className="w-full bg-transparent font-mono-cmd text-sm text-ink placeholder:text-ink-faint focus:outline-none"
          />
          <span className="shrink-0 font-mono-cmd text-xs text-ink-faint">
            {shown}/{total}
          </span>
        </div>

        <div className="mt-4">
          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-ink-dim">
              No commands match &ldquo;{query}&rdquo;.
            </p>
          )}
          {filtered.map((cat) => (
            <div key={cat.name} className="border-t border-line py-5">
              <h3 className="mb-3 text-sm font-medium text-ink-dim">
                {cat.name}
              </h3>
              <div className="flex flex-col">
                {cat.commands.map((cmd) => (
                  <div
                    key={cmd.syntax}
                    className="flex flex-col gap-2 border-t border-line/60 py-3.5 first:border-t-0 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <code className="font-mono-cmd shrink-0 text-sm text-copper-bright sm:w-[19rem]">
                      {cmd.syntax}
                    </code>
                    <p className="flex-1 text-sm text-ink-dim">
                      {cmd.description}
                    </p>
                    <CopyButton text={cmd.syntax} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
