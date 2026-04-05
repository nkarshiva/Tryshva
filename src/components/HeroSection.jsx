import { motion } from "framer-motion";

const titleWords = ["Ship", "beautiful", "digital", "experiences"];

const stats = [
  { label: "Launch velocity", value: "3x faster" },
  { label: "Design consistency", value: "99.9%" },
  { label: "Motion polish", value: "Premium" },
];

export default function HeroSection() {
  return (
    <section className="grid min-h-[78vh] items-center gap-12 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:pt-16">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/70 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
          Crafted with React, Tailwind, and Framer Motion
        </motion.div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
          {titleWords.map((word, index) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 28, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.18 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.22em] inline-block"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.62 }}
            className="block bg-gradient-to-r from-white via-sky-100 to-white/70 bg-clip-text text-transparent"
          >
            that feel inevitable.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
        >
          We design focused interfaces, refined motion systems, and launch-ready
          product pages for teams that want a sharper brand presence without the
          enterprise drag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:scale-[1.01] hover:bg-sky-100"
          >
            Start a Project
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-medium text-white/75 backdrop-blur transition hover:border-white/25 hover:text-white"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.25 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-sky-400/20 to-transparent blur-2xl" />
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_120px_rgba(10,20,60,0.45)] backdrop-blur-xl">
          <div className="rounded-[1.6rem] border border-white/10 bg-[#0a1020]/90 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white/85">
                  Interface System
                </p>
                <p className="mt-1 text-sm text-white/45">
                  Built for clarity and speed
                </p>
              </div>
              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200">
                Live Preview
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-white/45">Conversion Lift</p>
                    <p className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-white">
                      +42%
                    </p>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-sky-400/30 to-cyan-300/10" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {stats.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.65 }}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      {item.label}
                    </p>
                    <p className="mt-3 text-lg font-medium text-white">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
