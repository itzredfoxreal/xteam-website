"use client";

/**
 * An original abstract circuit-trace graphic — evokes redstone wiring
 * without using any actual game assets. Sits as quiet background
 * texture, not a competing focal element.
 */
export function CircuitBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 800"
      className={className}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wireFade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D98B4F" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#D98B4F" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#wireFade)" strokeWidth="1.5" fill="none">
        <path d="M -20 620 L 180 620 L 220 580 L 420 580 L 460 540 L 700 540" />
        <path d="M -20 720 L 120 720 L 160 680 L 380 680 L 420 640 L 640 640 L 680 600 L 900 600" />
        <path d="M 1220 500 L 980 500 L 940 460 L 760 460 L 720 420 L 560 420" />
        <path d="M 1220 300 L 1020 300 L 980 260 L 800 260" />
        <path d="M 200 -20 L 200 140 L 240 180 L 240 320" />
        <path d="M 900 -20 L 900 100 L 940 140 L 940 260" />
      </g>
      <g fill="#F2A567">
        <circle cx="220" cy="580" r="3" opacity="0.7" />
        <circle cx="460" cy="540" r="3" opacity="0.7" />
        <circle cx="420" cy="640" r="3" opacity="0.5" />
        <circle cx="940" cy="460" r="3" opacity="0.6" />
        <circle cx="240" cy="320" r="3" opacity="0.5" />
        <circle cx="940" cy="260" r="3" opacity="0.5" />
      </g>
    </svg>
  );
}
