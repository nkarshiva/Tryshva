import { motion } from "framer-motion";
import { taglines } from "../data/siteContent";
import HeroPreviewArt from "./HeroPreviewArt";

const statCards = [
  {
    value: "Premium",
    label: "Design that feels polished, modern, and built to earn trust",
  },
  {
    value: "Mobile-first",
    label: "Every screen designed for Instagram and WhatsApp traffic",
  },
  {
    value: "More orders",
    label: "Built to turn browsing into enquiries, chats, and sales",
  },
];

const headlineWords = [
  "Turn",
  "your",
  "offline",
  "store",
  "into",
  "an",
  "online",
  "sales",
  "machine.",
];

export default function HeroSection() {
  return (
    <section className="grid min-h-[88vh] items-center gap-14 pt-10 lg:grid-cols-[1.08fr_0.92fr] lg:pt-16">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm text-white/70 backdrop-blur"
        >
          <span className="h-2 w-2 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(125,211,252,0.75)]" />
          Websites, WhatsApp commerce, and Instagram funnels for local brands
        </motion.div>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
          {headlineWords.map((word, index) => (
            <motion.span
              key={word + index}
              initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.72,
                delay: 0.14 + index * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mr-[0.22em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-white/62 sm:text-xl"
        >
          Tryshva helps local businesses build premium online stores that turn
          Instagram and WhatsApp traffic into real enquiries and orders. If your
          current website feels outdated or underwhelming, we can revamp it into
          something far more modern, premium, and conversion-focused.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.01] hover:bg-sky-100"
          >
            Get Your Store Online
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/78 backdrop-blur transition hover:border-white/20 hover:text-white"
          >
            View Demo Store
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-sm uppercase tracking-[0.24em] text-white/38"
        >
          {taglines[0]}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.68 }}
          className="mt-3 text-sm text-sky-100/72"
        >
          Already have a website? We can redesign and revamp it into something far
          more premium and conversion-focused.
        </motion.p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {statCards.map((card, index) => (
            <motion.div
              key={card.value}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.65 + index * 0.08 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur"
            >
              <p className="text-2xl font-semibold tracking-[-0.05em] text-white">
                {card.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/55">
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.85, delay: 0.3 }}
        className="relative"
      >
        <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(125,211,252,0.16),transparent_35%),radial-gradient(circle_at_70%_35%,rgba(255,255,255,0.1),transparent_42%)] blur-2xl" />

        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-4 shadow-[0_24px_140px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <div className="rounded-[1.8rem] border border-white/10 bg-[#0f0f11] p-4 sm:p-5">
            <div className="flex items-center justify-between rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-white/90">
                  Tryshva Demo Store
                </p>
                <p className="mt-1 text-xs text-white/45">
                  Premium storefront designed for mobile shoppers
                </p>
              </div>
              <div className="rounded-full border border-sky-300/20 bg-sky-300/10 px-3 py-1 text-xs text-sky-200">
                Mobile First
              </div>
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-[0.74fr_1fr]">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#151517] p-4">
                <div className="mx-auto w-full max-w-[220px] rounded-[1.8rem] border border-white/10 bg-[#0c0c0d] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
                  <div className="overflow-hidden rounded-[1.25rem] border border-white/8 bg-[#121214]">
                    <HeroPreviewArt />
                    <div className="space-y-3 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                          Featured Drop
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Summer Collection
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                        <p className="text-sm text-white/75">
                          New arrivals, size guide, one-tap WhatsApp checkout
                        </p>
                      </div>
                      <div className="rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-slate-950">
                        Shop on WhatsApp
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-white/35">
                        What the owner gets
                      </p>
                      <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                        A premium store that feels easy to buy from
                      </p>
                    </div>
                    <svg
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                      className="h-12 w-12 rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 text-sky-100"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 9c7 0 13 6 13 13s-6 13-13 13-13-6-13-13S17 9 24 9Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M24 15v7l5 3"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <svg
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        className="h-4 w-4 text-sky-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 24V13M16 24V9M25 24V16M6 11c4-4 8-6 11-6 3.5 0 5.5 1.5 9 5"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      Instagram Traffic
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/68">
                      Visitors land on a mobile page that feels premium and clear.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05]">
                      <svg
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                        className="h-4 w-4 text-sky-100"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 9.5h16a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H15l-6 4v-4H8a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3Z"
                          fill="none"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M11 15.5h10M11 19h7"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="1.8"
                        />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      WhatsApp Orders
                    </p>
                    <p className="mt-2 text-base leading-7 text-white/68">
                      Product questions and orders move into chat instantly.
                    </p>
                  </div>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5">
                  <p className="text-sm font-semibold text-white/90">
                    Made for boutiques, furniture studios, jewellery labels, and
                    growing local brands that need online sales without complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
