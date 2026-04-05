import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section id="cta" className="scroll-mt-24 pb-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-8 py-10 shadow-[0_24px_120px_rgba(8,14,30,0.45)] backdrop-blur-xl sm:px-10 sm:py-12 lg:px-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(125,211,252,0.16),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.14),transparent_35%)]" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/70">
              Ready to Launch
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
              Make your next product page feel like the product is already ahead.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/58">
              Bring the concept, the deck, or even just a rough idea. We’ll turn
              it into a sharper story with premium interface detail and motion.
            </p>
          </div>

          <a
            href="mailto:hello@tryshva.com"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-slate-950 transition hover:scale-[1.01] hover:bg-sky-100"
          >
            hello@tryshva.com
          </a>
        </div>
      </motion.div>
    </section>
  );
}
