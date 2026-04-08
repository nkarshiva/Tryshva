import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { services } from "../data/siteContent";
import BenefitIcon from "./BenefitIcon";

const cardMotion = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24">
      <SectionHeading
        eyebrow="Services"
        title="Three focused offers designed to help local businesses sell online."
        description="Everything is built around one goal: helping your store look premium, feel easy to shop, and convert visitors into enquiries and orders."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardMotion}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
          >
            <div
              className={`absolute inset-x-6 top-0 h-24 rounded-b-full bg-gradient-to-b ${service.accent} blur-3xl transition duration-500 group-hover:opacity-100`}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                  <BenefitIcon type={service.icon} />
                </div>
                <span className="text-xs uppercase tracking-[0.22em] text-white/30">
                  {service.shortLabel}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.035em] text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/60">
                {service.shortDescription}
              </p>
              <p className="mt-6 border-t border-white/8 pt-6 text-sm leading-7 text-white/48">
                {service.longDescription}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
