import { NEWS } from '../data/news.js'
import NewsCard from './NewsCard.jsx'
import { useInView } from '../hooks/useInView.js'

export default function NewsSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="mx-auto">
        <div ref={headingRef} className="relative flex flex-col items-center text-center">
          <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[45px]">
            Recent News
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

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {NEWS.slice(0, 4).map((post, i) => (
            <NewsCard key={post.slug} post={post} index={i} />
          ))}
        </div>
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