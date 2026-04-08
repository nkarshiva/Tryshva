import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-8 py-10 shadow-[0_24px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(245,217,166,0.14),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.1),transparent_35%)]" />

        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/42">
              Let’s Build
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
              Let’s build your online store and turn attention into actual sales.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              If you already have products, photos, or an Instagram page, that’s
              enough to get started. We’ll shape the store, the funnel, and the
              sales journey around your business.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-sky-100"
            >
              Get Your Store Online
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/78 transition hover:border-white/20 hover:text-white"
            >
              See How It Works
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
