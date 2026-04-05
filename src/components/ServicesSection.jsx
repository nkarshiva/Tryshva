import { motion } from "framer-motion";

const services = [
  {
    title: "Product Positioning",
    description:
      "Narrative-driven landing pages that clarify value, sharpen differentiation, and increase confidence at first glance.",
    accent: "from-sky-400/25 to-cyan-300/5",
  },
  {
    title: "Interface Design",
    description:
      "Premium UI systems with deliberate spacing, typography, and visual rhythm inspired by the best modern product teams.",
    accent: "from-blue-400/25 to-indigo-300/5",
  },
  {
    title: "Motion Direction",
    description:
      "Refined animation that guides attention without noise, creating a fast and polished experience across the full funnel.",
    accent: "from-white/20 to-white/5",
  },
];

const cardMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.24em] text-cyan-200/70">
          Services
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
          Built for teams who want the first impression to feel premium.
        </h2>
        <p className="mt-5 text-lg leading-8 text-white/58">
          Every section is designed to communicate confidence, focus, and
          product maturity without leaning on clutter or template energy.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            custom={index}
            variants={cardMotion}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl"
          >
            <div
              className={`absolute inset-x-6 top-0 h-24 rounded-b-full bg-gradient-to-b ${service.accent} blur-2xl transition duration-500 group-hover:opacity-100`}
            />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-semibold text-white/88">
                0{index + 1}
              </div>
              <h3 className="mt-8 text-2xl font-medium tracking-[-0.03em] text-white">
                {service.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-white/58">
                {service.description}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
