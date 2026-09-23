const FEATURES = [
  { mark: "TM", title: "Teams", desc: "Create, list, delete, and add players to named teams." },
  { mark: "KT", title: "Kits", desc: "Save and restore a full inventory, exact slot positions, armor included." },
  { mark: "FX", title: "Status effects", desc: "Apply an effect to a whole team at once, with a duration." },
  { mark: "GL", title: "Glow", desc: "Scoreboard glow toggle, per team." },
  { mark: "FZ", title: "Freeze", desc: "Lock a team in place — enforced client-side, not just on the server." },
  { mark: "RN", title: "Random names", desc: "Assign unique display names from a pool of a million, server-wide." },
  { mark: "RS", title: "Random skins", desc: "Randomized skin assignment per team member.", soon: true },
  { mark: "TP", title: "Teleport", desc: "Move a team to a player, a set of coordinates, or the nearest player." },
];

export function Features() {
  return (
    <section id="features" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
          What /xteam covers
        </h2>
        <p className="mt-2 max-w-md text-ink-dim">
          Eight capabilities, one command root.
        </p>

        <div className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-2">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="flex gap-4 border-b border-line px-1 py-6 sm:odd:pr-8 sm:even:pl-8"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line font-mono-cmd text-[11px] text-copper">
                {f.mark}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-medium text-ink">{f.title}</h3>
                  {f.soon && (
                    <span className="rounded-full border border-copper-dim px-2 py-0.5 text-[10px] text-copper">
                      Coming soon
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-dim">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
