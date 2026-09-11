import { Baby, HeartHandshake, Users, ShieldCheck, Building2 } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'

const AUDIENCES = [
  {
    icon: Baby,
    title: 'Children & Young People',
    description: 'Supporting education, protection, skills, and opportunities.',
  },
  {
    icon: HeartHandshake,
    title: 'Women & Girls',
    description: 'Promoting empowerment, participation, and economic opportunities.',
  },
  {
    icon: Users,
    title: 'Communities',
    description: 'Strengthening livelihoods, local capacity, and resilience.',
  },
  {
    icon: ShieldCheck,
    title: 'Vulnerable Populations',
    description: 'Supporting inclusion, dignity, and access to opportunities.',
  },
  {
    icon: Building2,
    title: 'Institutions & Organizations',
    description: 'Providing capacity development, technical assistance, and knowledge support.',
  },
]

export default function WhoWeServeSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section id="who-we-serve" className="bg-[var(--code-bg)] px-6 py-15 sm:py-20">
      <div className="md:mx-auto md:max-w-[85%]">
        <div ref={headingRef} className="relative flex flex-col items-center text-center">
          <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[40px]">
            WHO WE SERVE
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCES.map((item, i) => (
            <AudienceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AudienceCard({ item, index }) {
  const [ref, inView] = useInView()
  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-6 py-9 text-center transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-bg)]">
        <Icon size={22} className="text-[var(--accent)]" strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-[16px] font-semibold text-[var(--text-h)]">{item.title}</h3>
      <p className="mt-2 max-w-[90%] text-[14px] leading-relaxed text-[var(--text)]">
        {item.description}
      </p>
    </div>
  )
}