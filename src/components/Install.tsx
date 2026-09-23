const STEPS = [
  {
    text: (
      <>
        Drop <code className="font-mono-cmd text-copper-bright">xteam-1.x.x.jar</code> into
        your server&apos;s <code className="font-mono-cmd text-ink">mods/</code> folder
      </>
    ),
  },
  { text: <>Install Fabric API for 1.21+/26.2</> },
  { text: <>Restart the server</> },
];

export function Install() {
  return (
    <section id="install" className="border-t border-line py-20">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink">
          Three steps onto the server
        </h2>
        <p className="mt-2 max-w-md text-ink-dim">
          No config file required for the first run.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="font-mono-cmd text-sm text-copper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-ink-dim">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
