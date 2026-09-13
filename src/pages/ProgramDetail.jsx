import { useParams, Link, Navigate } from 'react-router-dom'
import { usePrograms } from '../context/ProgramsContext.jsx'
import { ArrowLeft } from 'lucide-react'

export default function ProgramDetail() {
  const { slug } = useParams()
  const { programs, loading, error } = usePrograms()

  if (loading) {
    return <p className="px-6 py-16 text-[13px] text-[var(--text)]">Loading…</p>
  }

  if (error) {
    return <p className="px-6 py-16 text-[13px] text-[var(--danger)]">{error}</p>
  }

  const program = programs.find((p) => p.slug === slug)

  if (!program) return <Navigate to="/programs" replace />

  return (
    <article className="text-left">
      <div className="relative h-[280px] overflow-hidden sm:h-[360px]">
        <img src={program.image} alt="" className="h-full w-full object-cover" />

        <div className="absolute inset-0 bg-[var(--brand-green)]/70" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="font-display pt-4 text-[36px] leading-[1] text-white sm:text-[44px]">
            {program.title}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link
          to="/programs"
          className="back-link mb-3 inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
        >
          <ArrowLeft size={15} />
          All programs
        </Link>

        <div className="my-4 h-px bg-[var(--border)]" />

        <p className="text-justify text-[17px] leading-[1.8] text-[var(--text-h)]">{program.body}</p>

        <div className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
          <p className="text-[13px] text-[var(--text)]">
            Our work under this object is focused on creating meaningful opportunities and sustainable solutions that address the needs of individuals and communities.
          </p>
        </div>

        <style>{`
          .back-link svg { transition: transform 0.25s ease; }
          .back-link:hover svg { transform: translateX(-3px); }
        `}</style>
      </div>
    </article>
  )
}