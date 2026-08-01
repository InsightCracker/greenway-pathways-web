import StatBar from '../components/StatBar.jsx'
import ProgramCard from '../components/ProgramCard.jsx'
import DonateBanner from '../components/DonateBanner.jsx'

const FEATURED_PROGRAMS = [
  { title: 'Education', description: 'Scholarships, tutoring, and school infrastructure support.' },
  { title: 'Youth development', description: 'Mentorship, leadership training, and vocational skills.' },
  { title: 'Women & girls', description: 'Empowerment programmes for economic independence.' },
]

export default function Home() {
  return (
    <div className="mx-auto max-w-[1126px] px-6 py-14">
      <section className="grid items-center gap-10 md:grid-cols-2">
        <div className="text-left">
          <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">
            CREATING OPPORTUNITIES, TRANSFORMING LIVES
          </p>
          <h1 className="mt-3 text-[40px] font-medium leading-tight text-[var(--text-h)]">
            Pathways to education, dignity &amp; opportunity
          </h1>
          <p className="mt-4 max-w-md text-[15px] text-[var(--text)]">
            Greenway Pathways Foundation partners with communities across Nigeria to expand
            access to education, health, and economic opportunity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-[14px] font-semibold text-white"
            >
              Donate now
            </a>
            <a
              href="/programs"
              className="rounded-full border border-[var(--text-h)] px-6 py-2.5 text-[14px] font-semibold text-[var(--text-h)]"
            >
              See our programmes
            </a>
          </div>
        </div>
        <div
          className="h-72 rounded-2xl border border-dashed border-[var(--border)]"
          aria-hidden="true"
        />
      </section>

      <section className="mt-16">
        <StatBar />
      </section>

      <section className="mt-16 text-left">
        <h2 className="text-[24px] font-medium text-[var(--text-h)]">What we do</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {FEATURED_PROGRAMS.map((p) => (
            <ProgramCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <DonateBanner />
      </section>
    </div>
  )
}
