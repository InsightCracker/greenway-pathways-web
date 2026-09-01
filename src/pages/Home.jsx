import Hero from '../components/Hero.jsx'
import StatBar from '../components/StatBar.jsx'
import DonateBanner from '../components/DonateBanner.jsx'
import PurposeSection from '../components/PurposeSection.jsx'
import ValuesCarousel from '../components/ValuesCarousel.jsx'
import ProgramSection from '../components/ProgramSection.jsx'
import NewsSection from '../components/NewsSection.jsx'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Hero />

      <PurposeSection />

      <div className="mx-auto px-6 pb-25">
        <StatBar />
      </div>

      <ValuesCarousel />

      <ProgramSection />

      <section className="mt-16">
        <DonateBanner />
      </section>

      <NewsSection />

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