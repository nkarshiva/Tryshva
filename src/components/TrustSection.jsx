import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { trustPoints } from "../data/siteContent";
import BenefitIcon from "./BenefitIcon";

export default function TrustSection() {
  return (
    <section id="trust" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Why Start With Us"
        title="You do not need a big agency history to get a thoughtful, high-quality online store."
        description="Instead of pretending we have client case studies already, we keep the pitch honest: clear execution, premium design thinking, and a strong focus on helping local businesses start selling online properly."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {trustPoints.map((point, index) => (
          <motion.article
            key={point.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, delay: index * 0.08 }}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <BenefitIcon type={point.icon} />
            </div>
            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">
              {point.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-white/60">
              {point.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
