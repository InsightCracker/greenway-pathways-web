import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'

export default function InitiativeCard({ program, index, linkTo }) {
  const [ref, inView] = useInView()

  const content = (
    <>
      <div className="h-50 sm:h-60 overflow-hidden">
        <img
          src={program.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <span className="inline-block rounded-full bg-[var(--accent-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--accent)]">
          {program.status}
        </span>
        <h3 className="mt-3 text-[16px] md:text-[18px] lg:text-[22px] font-semibold text-[var(--text-h)]">
          {program.title}
        </h3>
        <p className="mt-2 text-[14px] lg:text-[16px] leading-relaxed text-[var(--text)]">
          {program.summary}
        </p>
        {linkTo && (
          <span className="initiative-link mt-3 inline-block text-[14px] font-semibold text-[var(--accent)]">
            Explore Project
          </span>
        )}
      </div>
    </>
  )

  const className = `initiative-card group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-bg)] text-left transition-all duration-500 ${
    inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
  }`
  const style = { transitionDelay: `${(index % 3) * 100}ms` }

  return linkTo ? (
    <Link ref={ref} to={linkTo} className={`${className} block`} style={style}>
      {content}
      <style>{`
        .initiative-link { transition: transform 0.25s ease; }
        .initiative-card:hover .initiative-link { transform: translateX(4px); }
      `}</style>
    </Link>
  ) : (
    <div ref={ref} className={className} style={style}>
      {content}
    </div>
  )
}