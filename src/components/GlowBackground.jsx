export default function GlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_30%),linear-gradient(180deg,_#050816_0%,_#02040b_100%)]" />
      <div className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="absolute left-[12%] top-[18%] h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute inset-0 bg-grid bg-[size:72px_72px] opacity-[0.12]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_18%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#02040b]" />
    </div>
  );
}
