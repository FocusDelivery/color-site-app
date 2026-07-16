function RainbowLogo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="rg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#ff4fa3" />
          <stop offset=".25" stopColor="#ff8a3d" />
          <stop offset=".5" stopColor="#ffcc33" />
          <stop offset=".75" stopColor="#34d399" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path d="M4 36 A28 28 0 0 1 60 36" stroke="url(#rg)" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M12 36 A20 20 0 0 1 52 36" stroke="#0b0420" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".35" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`flex items-center gap-2 group ${className}`}>
      <RainbowLogo className="w-9 h-6 transition-transform duration-500 group-hover:-rotate-6" />
      <span className="font-display text-xl md:text-2xl font-bold leading-none">
        <span className="text-white">Patolino</span>
        <span className="gold">Play</span>
      </span>
    </a>
  );
}