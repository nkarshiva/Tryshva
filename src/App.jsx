import { motion } from "framer-motion";
import GlowBackground from "./components/GlowBackground";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import CtaSection from "./components/CtaSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink text-white">
      <GlowBackground />

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-glow backdrop-blur">
              <div className="h-4 w-4 rounded-full bg-gradient-to-br from-sky-300 via-cyan-400 to-blue-500" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-white/90 uppercase">
                Tryshva
              </p>
              <p className="text-xs text-white/45">
                Product design and motion systems
              </p>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/65 backdrop-blur md:flex"
          >
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#cta" className="transition hover:text-white">
              Contact
            </a>
          </motion.nav>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-20 lg:px-10">
          <HeroSection />

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <ServicesSection />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <CtaSection />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
