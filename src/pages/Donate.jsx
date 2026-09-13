import { useState } from 'react'
import { Check, Copy, GraduationCap, Users, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import DonateHero from '../components/DonateHero.jsx'
import { useInView } from '../hooks/useInView.js'

const WHY_GIVE = [
  'Greenway Pathways Foundation is a newly established, CAMA-registered non-profit committed to creating meaningful and sustainable opportunities for individuals and communities. As we begin this journey, we are focused on building programs that respond to real needs and create lasting impact.',

  'Our founding Constitution sets out 17 objectives, including education, youth development, women and girls’ empowerment, and community development. These objectives provide the foundation for our work, while your support helps us transform these commitments into practical programs, initiatives, and opportunities that can improve lives.',

  'As a new organization, we are intentionally operating lean and focusing our resources on a small number of impactful programs rather than spreading ourselves too thin. This means every contribution, regardless of size, plays an important role in helping us take our first steps, reach the people we serve, and build a strong foundation for sustainable growth.',

  'Your support today helps us turn our vision into action and gives us the opportunity to build programmes that can create meaningful change for years to come.'
]

const WHAT_IT_FUNDS = [
  {
    icon: GraduationCap,
    title: 'Education & Skills',
    description: 'Learning materials, and vocational training as our first education programs take shape.',
  },
  {
    icon: Users,
    title: 'Youth & Women\'s programs',
    description: 'Mentorship, leadership development, and economic empowerment initiatives for young people and women.',
  },
  {
    icon: HeartHandshake,
    title: 'Community & Operations',
    description: 'The core resources, dedicated personnel, materials, and partnerships required to establish and deliver our programmes effectively.',
  },
]

function CopyableRow({ label, value }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-0">
      <div>
        <p className="text-[11px] uppercase tracking-wide text-[var(--text)]">{label}</p>
        <p className="text-[15px] font-medium text-[var(--text-h)]">{value}</p>
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${label}`}
        className="rounded-lg p-2 text-[var(--text)] transition-colors hover:bg-[var(--code-bg)] hover:text-[var(--accent)]"
      >
        {copied ? <Check size={16} className="text-[var(--accent)]" /> : <Copy size={16} />}
      </button>
    </div>
  )
}

export default function Donate() {
  const [whyRef, whyInView] = useInView()
  const [fundsRef, fundsInView] = useInView()
  const [bankRef, bankInView] = useInView()

  return (
    <div className="text-left">
      <DonateHero />

      {/* Why give */}
      <section ref={whyRef} className="px-6 py-16 sm:py-20">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            whyInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <h3 className="font-display my-3 text-[25px] md:text-[40px] text-center leading-[1.1] text-[var(--text-h)] ">
          Why Your Support Matters
        </h3>
        <p className="mt-5 text-[15px] text-underline lg:text-[18px] text-center leading-relaxed text-[var(--text)]">
          Your gift builds a pathway from the ground up.
        </p>
        </div>

        <div className="mx-auto mt-7 max-w-2xl space-y-5">
          {WHY_GIVE.map((point, i) => (
            <div
              key={i}
              className={`text-justify text-[15px] leading-relaxed text-[var(--text)] transition-all duration-500 ${
                whyInView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: whyInView ? `${i * 120}ms` : '0ms' }}
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      {/* What it funds */}
      <section ref={fundsRef} className="bg-[var(--code-bg)] px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-[1126px]">
          <div
            className={`mx-auto max-w-xl text-center transition-all duration-700 ${
              fundsInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <h3 className="font-display mt-2 text-[25px] md:text-[40px] text-center leading-[1.1] text-[var(--accent)]">
              What Your Support Funds
            </h3>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {WHAT_IT_FUNDS.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-6 py-9 text-center transition-all duration-500 ${
                    fundsInView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  style={{ transitionDelay: fundsInView ? `${i * 120}ms` : '0ms' }}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                    <Icon size={22} className="text-[var(--accent)]" strokeWidth={1.75} />
                  </span>
                  <h3 className="mt-4 text-[16px] font-semibold text-[var(--text-h)]">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--text)]">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-center text-[13px] text-[var(--text)]">
            See the full picture of our work on the{' '}
            <Link to="/programs" className="font-semibold text-[var(--accent)]">
              Programs page
            </Link>
            .
          </div>
        </div>
      </section>

      {/* Bank details */}
      <section ref={bankRef} className="px-6 py-16 sm:py-20">
        <div
          className={`mx-auto max-w-md transition-all duration-700 ${
            bankInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="text-center">
            <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">
              BANK DETAILS
            </p>
            <h2 className="font-display mt-2 text-[24px] text-[var(--text-h)] sm:text-[30px]">
              Give by Bank Transfer
            </h2>
          </div>

          <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--code-bg)] px-6 py-5">
            <CopyableRow label="Bank Name" value="Sterling Bank" />
            <CopyableRow label="Account Name" value="Greenway Pathways Foundation" />
            <CopyableRow label="Account Number" value="0149642939" />
          </div>
        </div>
      </section>
    </div>
  )
}