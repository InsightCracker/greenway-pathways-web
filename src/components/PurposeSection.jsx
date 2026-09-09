import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'

export default function PurposeSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section className="px-6 py-15 sm:py-28">
      <div className="mx-auto flex max-w-[100%] lg:max-w-[80%] flex-col items-center text-center">
        <div ref={headingRef} className="relative flex flex-col items-center text-center">
          <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[40px]">
            WHO WE ARE
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

        <div
          className={`mt-6 flex flex-col justify-center gap-5 text-[16px] leading-relaxed text-[var(--text)] transition-all delay-150 duration-700 md:text-[20px] ${
            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <p>
            Greenway Pathways Foundation works to improve the quality of life of individuals
            and communities by promoting education, empowerment, sustainable development, and
            inclusive opportunities that enable people to reach their full potential.
          </p>
          <p>
            Through innovative programs, strategic partnerships, and evidence-based
            solutions, we work across areas including education, youth development, women's
            empowerment, community development, health, humanitarian assistance, and
            environmental sustainability.
          </p>
        </div>

        <Link
          to="/about"
          className="learn-more group mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--accent)]"
        >
          Learn About Greenway
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

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
    </section>
  )
}