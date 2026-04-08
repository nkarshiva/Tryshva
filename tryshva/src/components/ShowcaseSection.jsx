import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { showcaseExamples } from "../data/siteContent";
import DemoVisual from "./DemoVisual";

export default function ShowcaseSection() {
  return (
    <section id="showcase" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Concept Previews"
        title="A look at the kind of online store experience Tryshva can build for local brands."
        description="These are concept previews, not client projects. They show how a boutique or furniture store could look and sell online with a mobile-first, WhatsApp-ready flow."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {showcaseExamples.map((example, index) => (
          <motion.article
            key={example.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75, delay: index * 0.08 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
          >
            <div
              className={`rounded-[1.7rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_34%),linear-gradient(180deg,#101011_0%,#0b0b0c_100%)] p-5 ${example.frameClass}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/92">
                    {example.title}
                  </p>
                  <p className="mt-1 text-sm text-white/45">{example.subtitle}</p>
                </div>
                <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/58">
                  {example.label}
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-[1.4rem] border border-white/10 bg-[#131315] p-4">
                  <div className="overflow-hidden rounded-[1.3rem] border border-white/8 bg-[#0e0e10]">
                    <DemoVisual type={example.visualType} />
                    <div className="space-y-3 p-4">
                      <p className="text-lg font-semibold text-white">
                        {example.previewTitle}
                      </p>
                      <p className="text-sm leading-6 text-white/56">
                        {example.previewCopy}
                      </p>
                      <div className="rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-slate-950">
                        Example CTA
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  {example.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-4 text-sm leading-7 text-white/62"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
