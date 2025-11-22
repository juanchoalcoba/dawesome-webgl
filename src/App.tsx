import "./App.css";

import { Navbar } from "./components/Navbar";
import PeachStyleShowcase from "./components/PeachComponent";
import PeachImageShowcase from "./components/PeachImages";
import { StunningDashboardStandalone } from "./components/Stunning";
import MegaCard from "./components/SuperCard";
import TextRevealClean from "./components/TextReveal";

export default function App() {
  return (
    <div className="w-full  min-h-screen bg-[#0b0b0f] text-white overflow-x-hidden">
      <Navbar />
      {/* ==== SECTION: HERO / ESTILOS ==== */}
      <section className="w-full py-32 flex justify-center">
        <div className="container max-w-7xl px-6">
          <PeachStyleShowcase />
        </div>
      </section>

      {/* ==== SECTION: PUZZLE IMAGES ==== */}
      <section className="w-full py-40 flex justify-center border-t border-white/10">
        <div className="container max-w-7xl px-6">
          <PeachImageShowcase />
        </div>
      </section>

      {/* ==== SECTION: TEXT REVEAL ==== */}
      <section className="w-full  flex justify-center border-t border-white/10">
        <div className="container max-w-8xl px-6">
          <TextRevealClean />
        </div>
      </section>

      {/* ==== SECTION: MEGACARD ==== */}
      <section className="w-full py-40 flex justify-center border-t border-white/10">
        <div className="container max-w-7xl px-6">
          <MegaCard />
        </div>
      </section>

      <section className="w-full py-40 flex justify-center border-t border-white/10">
        <div className="container max-w-7xl px-6">
          <StunningDashboardStandalone />
        </div>
      </section>

      {/* ==== SECTION: HORIZONTAL GALLERY ==== */}
      {/* <section className="w-full py-40 flex justify-center border-t border-white/10">
        <div className="container max-w-7xl px-6">
          <HorizontalScrollShowcase />
        </div>
      </section> */}

      {/* ==== FOOTER ESPACIO ==== */}
      <div className="h-32" />

      {/* ==== continuara==== */}
    </div>
  );
}
