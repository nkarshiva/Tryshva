export default function WordmarkLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 220 36"
      role="img"
      aria-label="Tryshva"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="tryshva-wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#e8f3ff" />
          <stop offset="55%" stopColor="#8dd3ff" />
          <stop offset="100%" stopColor="#d7fbff" />
        </linearGradient>
      </defs>

      <text
        x="0"
        y="25"
        fill="url(#tryshva-wordmark)"
        fontFamily="Manrope, 'SF Pro Display', 'Segoe UI', sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="0.06em"
      >
        TRYSHVA
      </text>
    </svg>
  );
}
