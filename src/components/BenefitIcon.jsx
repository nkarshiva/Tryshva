const icons = {
  bolt: (
    <path
      d="M20 6 10 18h6l-2 10 10-12h-6l2-10Z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
  ),
  mobile: (
    <>
      <rect
        x="9"
        y="4.5"
        width="14"
        height="23"
        rx="3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M14 8h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle cx="16" cy="23.5" r="1.2" fill="currentColor" />
    </>
  ),
  chart: (
    <>
      <path
        d="M7 24V13"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M16 24V9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M25 24V16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M6 11c4-4 8-6 11-6 3.5 0 5.5 1.5 9 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </>
  ),
  spark: (
    <>
      <path
        d="M16 5v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M16 21v6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M5 16h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M21 16h6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m9 9 4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m19 19 4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m23 9-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m13 19-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <circle
        cx="16"
        cy="16"
        r="3.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </>
  ),
  layers: (
    <>
      <path
        d="M16 5 6 10.5 16 16l10-5.5L16 5Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6 16.5 16 22l10-5.5"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M6 22 16 27l10-5"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </>
  ),
  chat: (
    <>
      <path
        d="M8 9.5h16a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H15l-6 4v-4H8a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M11 15.5h10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M11 19h7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  ),
  funnel: (
    <>
      <path
        d="M6 8h20l-8 9v7l-4 2v-9L6 8Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </>
  ),
  shield: (
    <>
      <path
        d="M16 4 25 8v7c0 6-4 9.5-9 12-5-2.5-9-6-9-12V8l9-4Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="m12.5 16 2.5 2.5 5-5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </>
  ),
  target: (
    <>
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
    </>
  ),
  wand: (
    <>
      <path
        d="m10 22 12-12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="m21.5 8.5 2-2"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M8 10V6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M6 8h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M22 18v4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
      <path
        d="M20 20h4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </>
  ),
  mail: (
    <>
      <rect
        x="5"
        y="8"
        width="22"
        height="16"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m7 11 9 7 9-7"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </>
  ),
};

export default function BenefitIcon({ type }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-5 w-5 text-sky-100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {icons[type] || icons.spark}
    </svg>
  );
}
