export default function HeroPreviewArt() {
  return (
    <svg
      viewBox="0 0 240 180"
      aria-hidden="true"
      className="h-40 w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hero-phone-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1d3154" />
          <stop offset="55%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#0a1120" />
        </linearGradient>
        <linearGradient id="hero-card-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>
      </defs>

      <rect width="240" height="180" rx="24" fill="url(#hero-phone-bg)" />
      <circle cx="186" cy="34" r="42" fill="rgba(125,211,252,0.16)" />
      <circle cx="56" cy="28" r="24" fill="rgba(255,255,255,0.06)" />

      <rect x="18" y="18" width="204" height="20" rx="10" fill="rgba(255,255,255,0.08)" />
      <circle cx="34" cy="28" r="3.5" fill="#bfdbfe" />
      <rect x="46" y="24" width="60" height="8" rx="4" fill="rgba(255,255,255,0.14)" />

      <rect x="18" y="48" width="92" height="114" rx="18" fill="rgba(255,255,255,0.05)" />
      <rect x="28" y="58" width="72" height="56" rx="14" fill="url(#hero-card-bg)" />
      <path
        d="M44 109c7-14 12-22 20-30 8 8 13 16 20 30"
        fill="none"
        stroke="#1e293b"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <circle cx="64" cy="74" r="9" fill="#f8fafc" />
      <rect x="34" y="122" width="50" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="34" y="136" width="36" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />

      <rect x="120" y="48" width="102" height="42" rx="18" fill="rgba(255,255,255,0.06)" />
      <rect x="132" y="62" width="48" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="132" y="75" width="62" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
      <rect x="188" y="60" width="22" height="18" rx="9" fill="#eff6ff" />

      <rect x="120" y="100" width="102" height="62" rx="18" fill="rgba(255,255,255,0.06)" />
      <rect x="132" y="112" width="78" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
      <rect x="132" y="126" width="52" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
      <rect x="132" y="142" width="58" height="12" rx="6" fill="#f8fafc" />
    </svg>
  );
}
