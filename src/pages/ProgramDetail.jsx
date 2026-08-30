import { useParams, Link, Navigate } from 'react-router-dom'
import { PROGRAMS } from '../data/programs.js'
import { ArrowLeft } from 'lucide-react'

export default function ProgramDetail() {
  const { slug } = useParams()
  const program = PROGRAMS.find((p) => p.slug === slug)

  if (!program) return <Navigate to="/programs" replace />

  const imgUrl = `https://images.pexels.com/photos/${program.image}/pexels-photo-${program.image}.jpeg?auto=compress&cs=tinysrgb&w=1200`

  return (
    <article className="text-left">
      <div className="relative h-[280px] overflow-hidden sm:h-[360px]">
        <img src={imgUrl} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--brand-green)]/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-display text-[36px] text-white sm:text-[44px] sm:text-[50px] pb-5">
            {program.title}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link
          to="/programs"
          className="back-link inline-flex items-center gap-2 text-[15px] font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)] mb-3"
        >
          <ArrowLeft size={15} />
          All programmes
        </Link>

        <div className="my-4 h-px bg-[var(--border)]" />

        <p className="text-[17px] leading-[1.8] text-[var(--text-h)]">{program.body}</p>

        <div className="mt-10 rounded-xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] px-6 py-8 text-center">
          <p className="text-[13px] text-[var(--text)]">
            As a newly established Foundation, specific activities under this object are still
            being designed. Check back as programmes launch.
          </p>
        </div>
      </div>
    </article>
  )
}