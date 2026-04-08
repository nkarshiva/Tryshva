import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-3xl"
    >
      <p className="text-sm font-medium uppercase tracking-[0.24em] text-white/42">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-white/58">{description}</p>
    </motion.div>
  );
}
