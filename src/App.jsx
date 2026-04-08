import GlowBackground from "./components/GlowBackground";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProcessSection from "./components/ProcessSection";
import ShowcaseSection from "./components/ShowcaseSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import TrustSection from "./components/TrustSection";
import CtaSection from "./components/CtaSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-ink text-white">
      <GlowBackground />

      <div className="relative z-10">
        <Header />

        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-24 lg:px-10">
          <HeroSection />
          <ServicesSection />
          <ProcessSection />
          <ShowcaseSection />
          <WhyChooseUsSection />
          <TrustSection />
          <CtaSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}
