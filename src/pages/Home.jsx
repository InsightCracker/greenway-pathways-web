import Hero from '../components/Hero.jsx'
import StatBar from '../components/StatBar.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import DonateBanner from '../components/DonateBanner.jsx'
import PurposeSection from '../components/PurposeSection.jsx'
import ValuesCarousel from '../components/ValuesCarousel.jsx'
import { useInView } from '../hooks/useInView.js'
import NewsSection from '../components/NewsSection.jsx'

const FEATURED_PROGRAMS = [
  {
    title: 'Education',
    description: 'Equitable access to quality, inclusive education by providing scholarships, promoting literacy, supporting teacher development, and improving schools.',
    imageId: 28593044,
  },
  {
    title: 'Youth Development',
    description: 'Leadership, entrepreneurship, mentorship, and vocational and digital skills for young people.',
    imageId: 8382227,
  },
  {
    title: 'Women & Girls',
    description: 'Social, educational, and economic advancement of women and girls through advocacy, skills, and enterprise development.',
    imageId: 3869652,
  },
]

export default function Home() {
  const [headingRef, headingInView] = useInView()

  return (
    <>
      <Hero />

      <PurposeSection />

      <div className="mx-auto px-6 pb-25">
        <StatBar />
      </div>

      <ValuesCarousel />

      <div className="mx-auto px-6 py-14">
        <section className="mt-16 text-left">
          <div ref={headingRef} className="font-display relative flex flex-col items-center text-center">
            <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[45px]">
              What We Do
            </p>
            <svg
              viewBox="0 0 220 20"
              className="mt-2 h-4 w-[180px] sm:w-[220px]"
              aria-hidden="true"
            >
              <path
                d="M6 14C50 2 160 2 214 12"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="4"
                strokeLinecap="round"
                className={`underline-path ${headingInView ? 'is-drawn' : ''}`}
              />
            </svg>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {FEATURED_PROGRAMS.map((p) => (
              <ProgramCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <DonateBanner />
        </section>
      </div>

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