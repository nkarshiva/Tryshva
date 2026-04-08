function BoutiqueVisual() {
  return (
    <svg
      viewBox="0 0 320 180"
      aria-hidden="true"
      className="h-40 w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="boutique-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e2a44" />
          <stop offset="50%" stopColor="#111827" />
          <stop offset="100%" stopColor="#0b1220" />
        </linearGradient>
        <linearGradient id="boutique-card" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dbeafe" />
          <stop offset="100%" stopColor="#93c5fd" />
        </linearGradient>
      </defs>

      <rect width="320" height="180" rx="24" fill="url(#boutique-bg)" />
      <circle cx="252" cy="34" r="48" fill="rgba(125,211,252,0.14)" />
      <circle cx="58" cy="24" r="36" fill="rgba(255,255,255,0.06)" />

      <rect x="22" y="22" width="276" height="22" rx="11" fill="rgba(255,255,255,0.08)" />
      <circle cx="40" cy="33" r="4" fill="#bfdbfe" />
      <rect x="56" y="28" width="74" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
      <rect x="236" y="28" width="42" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />

      <rect x="22" y="58" width="122" height="100" rx="18" fill="rgba(255,255,255,0.05)" />
      <rect x="32" y="68" width="102" height="58" rx="14" fill="url(#boutique-card)" />
      <path
        d="M57 121c8-16 14-25 26-34 12 9 18 18 26 34"
        fill="none"
        stroke="#1e293b"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="83" cy="83" r="10" fill="#f8fafc" />
      <rect x="47" y="133" width="66" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="47" y="145" width="42" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />

      <rect x="156" y="58" width="142" height="44" rx="18" fill="rgba(255,255,255,0.06)" />
      <rect x="170" y="72" width="62" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="170" y="86" width="92" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
      <rect x="250" y="70" width="34" height="20" rx="10" fill="#eff6ff" />

      <rect x="156" y="112" width="66" height="46" rx="16" fill="rgba(255,255,255,0.06)" />
      <rect x="168" y="124" width="42" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
      <rect x="168" y="138" width="28" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />

      <rect x="232" y="112" width="66" height="46" rx="16" fill="rgba(255,255,255,0.06)" />
      <rect x="244" y="124" width="42" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
      <rect x="244" y="138" width="28" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

function FurnitureVisual() {
  return (
    <svg
      viewBox="0 0 320 180"
      aria-hidden="true"
      className="h-40 w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="furniture-bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#172033" />
          <stop offset="45%" stopColor="#101827" />
          <stop offset="100%" stopColor="#0a101a" />
        </linearGradient>
        <linearGradient id="furniture-wood" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e2c29a" />
          <stop offset="100%" stopColor="#b08968" />
        </linearGradient>
      </defs>

      <rect width="320" height="180" rx="24" fill="url(#furniture-bg)" />
      <circle cx="274" cy="36" r="50" fill="rgba(125,211,252,0.12)" />

      <rect x="22" y="22" width="276" height="22" rx="11" fill="rgba(255,255,255,0.08)" />
      <rect x="36" y="28" width="82" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />
      <rect x="236" y="28" width="42" height="9" rx="4.5" fill="rgba(255,255,255,0.14)" />

      <rect x="22" y="58" width="176" height="100" rx="20" fill="rgba(255,255,255,0.05)" />
      <rect x="41" y="110" width="104" height="28" rx="12" fill="#d7e8ff" />
      <rect x="49" y="92" width="88" height="24" rx="12" fill="#edf5ff" />
      <rect x="56" y="138" width="8" height="14" rx="4" fill="url(#furniture-wood)" />
      <rect x="123" y="138" width="8" height="14" rx="4" fill="url(#furniture-wood)" />
      <rect x="41" y="88" width="104" height="6" rx="3" fill="#adc6e8" />
      <rect x="150" y="82" width="28" height="56" rx="14" fill="url(#furniture-wood)" />
      <circle cx="164" cy="72" r="12" fill="#f8fafc" />

      <rect x="208" y="58" width="90" height="48" rx="18" fill="rgba(255,255,255,0.06)" />
      <rect x="222" y="72" width="52" height="8" rx="4" fill="rgba(255,255,255,0.18)" />
      <rect x="222" y="86" width="62" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />

      <rect x="208" y="116" width="90" height="42" rx="18" fill="rgba(255,255,255,0.06)" />
      <rect x="222" y="128" width="48" height="8" rx="4" fill="rgba(255,255,255,0.16)" />
      <rect x="222" y="141" width="36" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

export default function DemoVisual({ type }) {
  if (type === "furniture") {
    return <FurnitureVisual />;
  }

  return <BoutiqueVisual />;
}
