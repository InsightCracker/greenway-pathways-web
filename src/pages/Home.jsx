import Hero from '../components/Hero.jsx'
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
    <>
      {/* Full-bleed hero — outside the padded content wrapper */}
      <Hero />

      <div className="mx-auto px-6 py-14">
        <section>
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
    </>
  )
}