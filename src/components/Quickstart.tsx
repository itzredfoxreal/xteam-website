import { quickstartSteps } from "@/lib/commands";
import { CopyButton } from "./CopyButton";

export function Quickstart() {
  return (
    <section id="quickstart" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
          One session, start to finish
        </h2>
        <p className="mt-2 max-w-md text-ink-dim">
          Create a team, gear them up, freeze them, randomize their names,
          bring them to you.
        </p>

        <div className="mt-8 rounded-xl border border-line bg-panel/60">
          <div className="border-b border-line px-4 py-2.5 font-mono-cmd text-xs text-ink-faint">
            quickstart — 7 steps
          </div>
          <ol className="divide-y divide-line/60">
            {quickstartSteps.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-4 px-4 py-3 font-mono-cmd text-sm"
              >
                <span className="w-5 text-ink-faint">{i + 1}</span>
                <span className="flex-1 text-ink">{step}</span>
                <CopyButton text={step} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
