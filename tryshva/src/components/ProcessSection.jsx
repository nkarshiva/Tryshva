import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/siteContent";
import BenefitIcon from "./BenefitIcon";

export default function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24">
      <SectionHeading
        eyebrow="How It Works"
        title="A simple three-step path from no online setup to daily enquiries and orders."
        description="We keep the process clear, fast, and manageable so you can focus on your business while we shape the online experience."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <motion.article
            key={step.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.72, delay: index * 0.08 }}
            className="rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-7 backdrop-blur"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                <BenefitIcon type={step.icon} />
              </div>
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs font-semibold tracking-[0.24em] text-white/30">
                0{index + 1}
              </span>
            </div>

            <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-white/58">
              {step.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
