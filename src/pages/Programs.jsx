import ProgramCard from '../components/ProgramCard.jsx'
import DonateBanner from '../components/DonateBanner.jsx'

const PROGRAMS = [
  { title: 'Education', description: 'Scholarships, tutoring, and school infrastructure support.' },
  { title: 'Youth development', description: 'Mentorship, leadership training, and vocational skills.' },
  { title: "Women & girls' empowerment", description: 'Economic independence and protection programmes.' },
  { title: 'Humanitarian assistance', description: 'Emergency response and relief for displaced communities.' },
  { title: 'Environmental sustainability', description: 'Community-led conservation and clean-energy projects.' },
  { title: 'Economic empowerment', description: 'Skills training, micro-grants, and livelihood support.' },
]

export default function Programs() {
  return (
    <div className="mx-auto max-w-[1126px] px-6 py-14 text-left">
      <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">PROGRAMMES</p>
      <h1 className="mt-2 text-[32px] font-medium text-[var(--text-h)]">What we do, and how</h1>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p) => (
          <ProgramCard key={p.title} {...p} />
        ))}
      </div>

      <div className="mt-14">
        <DonateBanner />
      </div>
    </div>
  )
}
