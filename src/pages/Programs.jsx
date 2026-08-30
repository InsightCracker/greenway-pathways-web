import ProgramCard from '../components/ProgramCard.jsx'
import ProgramsHero from '../components/ProgramsHero.jsx'
import DonateBanner from '../components/DonateBanner.jsx'
import { PROGRAMS } from '../data/programs.js'

export default function Programs() {
  return (
    <div className="text-left">
      <ProgramsHero />

      <div className="mx-auto max-w-85% px-6 py-16 sm:py-20">
        <h2 className="font-display mt-3 text-[2.5rem] text-center leading-[1.1] text-[var(--text-h)] ">
          Our Focus Areas
        </h2>
        <p className="mt-5 text-[15px] lg:text-[18px] text-center leading-relaxed text-[var(--text)]">
          Discover the key areas where we're creating opportunities and driving meaningful change.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program, i) => (
            <ProgramCard key={program.slug} program={program} index={i} />
          ))}
        </div>

        <div className="mt-30">
          <DonateBanner />
        </div>
      </div>
    </div>
  )
}