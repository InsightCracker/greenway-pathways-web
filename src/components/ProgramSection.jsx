import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProgramCard from './ProgramCard.jsx'
import { usePrograms } from '../context/ProgramsContext.jsx'

// Number of programmes to show on the homepage teaser before "See all".
const FEATURED_COUNT = 3

export default function ProgramSection() {
  const headingRef = useRef(null)
  const [headingInView, setHeadingInView] = useState(false)

  const { programs, loading, error } = usePrograms()
  const featuredPrograms = programs.slice(0, FEATURED_COUNT)

  useEffect(() => {
    const node = headingRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeadingInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto px-6 py-14">
      <section className="mt-16 text-left">
        <div ref={headingRef} className="relative flex flex-col items-center text-center">
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

        {loading && (
          <p className="mt-10 text-center text-[var(--text)]">Loading programmes…</p>
        )}

        {error && (
          <p className="mt-10 text-center text-red-500">
            Couldn't load programmes: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPrograms.map((program, i) => (
              <ProgramCard key={program._id} program={program} index={i} />
            ))}
          </div>
        )}

        <div className="mt-8 flex justify-center">
          <Link
            to="/programs"
            className="see-all group inline-flex items-center gap-1.5 text-[15px] font-semibold text-[var(--accent)]"
          >
            See all Programs
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}