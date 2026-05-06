import { motion } from "framer-motion";
import WordmarkLogo from "./WordmarkLogo";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Showcase", href: "#showcase" },
  { label: "Contact", href: "#contact" },
];

const brandExpansionFirstLine = "Technology Reimagined for Your Store's";
const brandExpansionSecondLine = "High-performance Visual Architecture";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
      <motion.a
        href="#top"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center"
      >
        <div className="flex flex-col items-start gap-1 text-left">
          <WordmarkLogo className="h-8 w-auto drop-shadow-[0_0_22px_rgba(96,165,250,0.16)]" />

          <p className="max-w-[14rem] text-[10px] uppercase leading-[1.45] tracking-[0.14em] text-white/42 sm:max-w-[18rem] lg:max-w-[26rem] lg:text-[12px] lg:tracking-[0.18em]">
            <span className="block">{brandExpansionFirstLine}</span>
            <span className="block">{brandExpansionSecondLine}</span>
          </p>
        </div>
      </motion.a>

      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="hidden items-center gap-7 rounded-full border border-white/10 bg-white/[0.045] px-5 py-3 text-sm text-white/62 backdrop-blur md:flex"
      >
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-white">
            {item.label}
          </a>
        ))}
      </motion.nav>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="hidden rounded-full border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-100 md:inline-flex"
      >
        Get Your Store Online
      </motion.a>
    </header>
  );
}
