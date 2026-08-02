import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'

export default function ProgramCard({ program, index }) {
  const [ref, inView] = useInView()
  const imgUrl = `https://images.pexels.com/photos/${program.image}/pexels-photo-${program.image}.jpeg?auto=compress&cs=tinysrgb&w=600`

  return (
    <Link
      ref={ref}
      to={`/programs/${program.slug}`}
      className={`program-card group block overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-bg)] text-left transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="h-50 sm:h-60 overflow-hidden">
        <img
          src={imgUrl}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mt-1 text-[16px] sm:text-[22px] font-semibold text-[var(--text-h)]">{program.title}</h3>
        <p className="mt-2 text-[14px] sm:text-[16px] leading-relaxed text-[var(--text)]">{program.summary}</p>
        <span className="program-link mt-3 inline-block text-[14px] font-semibold text-[var(--accent)]">
          Read more
        </span>
      </div>

      <style>{`
        .program-link {
          transition: transform 0.25s ease;
        }
        .program-card:hover .program-link {
          transform: translateX(4px);
        }
      `}</style>
    </Link>
  )
}