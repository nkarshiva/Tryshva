import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { benefits } from "../data/siteContent";
import BenefitIcon from "./BenefitIcon";

export default function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Built for local businesses that need results, not complexity."
        description="Tryshva blends premium visual design with practical sales thinking, so your store feels more trustworthy and more ready to sell from day one."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit, index) => (
          <motion.article
            key={benefit.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.68, delay: index * 0.07 }}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
              <BenefitIcon type={benefit.icon} />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-white">
              {benefit.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-white/56">
              {benefit.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
