import Hero from '../components/Hero.jsx'
import StatBar from '../components/StatBar.jsx'
import DonateBanner from '../components/DonateBanner.jsx'
import PurposeSection from '../components/PurposeSection.jsx'
import ValuesCarousel from '../components/ValuesCarousel.jsx'
import ProgramSection from '../components/ProgramSection.jsx'
import NewsSection from '../components/NewsSection.jsx'
import WhoWeServeSection from '../components/Services.jsx'
import PartnershipSection from '../components/PartnershipSection.jsx'
import ApproachSection from '../components/Approach.jsx'

export default function Home() {
  return (
    <>
      <Hero />

      <PurposeSection />

      <ApproachSection />

      <ValuesCarousel />

      <ProgramSection />

      <WhoWeServeSection />

      <PartnershipSection />

      <div className="mx-auto px-6 lg:px-0 py-10">
        <StatBar />
      </div>

      <NewsSection />

      <section className="my-16 px-6 lg:px-0">
        <DonateBanner />
      </section>

      <style>{`
        .underline-path {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          transition: stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .underline-path.is-drawn {
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .underline-path { transition: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </>
  )
}