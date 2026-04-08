export default function GlowBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.14),transparent_26%),linear-gradient(180deg,#040816_0%,#07101f_42%,#050913_100%)]" />
      <div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute left-[10%] top-[18%] h-80 w-80 rounded-full bg-blue-500/12 blur-3xl" />
      <div className="absolute bottom-[10%] right-[8%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-grid bg-[size:80px_80px] opacity-[0.09]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_16%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-b from-transparent to-[#050913]" />
    </div>
  );
}
