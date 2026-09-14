import { useState } from 'react'
import { GraduationCap, Rocket, HeartHandshake, Home, HeartPulse, Leaf, FlaskConical, CheckCircle2, Copy } from 'lucide-react'
import { Link } from 'react-router-dom'
import DonateHero from '../components/DonateHero.jsx'
import { useInView } from '../hooks/useInView.js'

const WHY_GIVE = [
  `Greenway Pathways Foundation is a CAMA-registered non-profit organisation committed to creating meaningful and sustainable opportunities for individuals and communities. We develop practical programmes and initiatives that respond to real needs, strengthen communities, and create pathways to a better future.`,

  `Our founding Constitution provides a clear framework for our work, with 17 objectives spanning education, youth development, women and girls’ empowerment, community development, health and well-being, environmental sustainability, humanitarian support, economic empowerment, inclusion, innovation, good governance, and other areas of sustainable development.`,

  `Your support helps us translate these commitments into practical programmes, community initiatives, and opportunities that improve lives.`,

  `As we develop and expand our programme portfolio, we are taking a focused and responsible approach, prioritising initiatives where available resources can contribute to meaningful and sustainable outcomes. Every contribution, regardless of size, can help us reach more people, strengthen our programmes, and build the partnerships needed to create lasting impact.`
]

const WHAT_IT_FUNDS = [
  { icon: GraduationCap, text: 'Expand access to education and learning opportunities' },
  { icon: Rocket, text: 'Support youth skills, innovation, and employability' },
  { icon: HeartHandshake, text: 'Empower women and girls' },
  { icon: Home, text: 'Strengthen communities and livelihoods' },
  { icon: HeartPulse, text: 'Promote health, well-being, and inclusion' },
  { icon: Leaf, text: 'Advance environmental sustainability' },
  { icon: FlaskConical, text: 'Support research, knowledge, and evidence-based solutions' },
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
          Your support helps turn opportunities into lasting impact.
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

          <div className="mt-12 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {WHAT_IT_FUNDS.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.text}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  fundsInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{ transitionDelay: fundsInView ? `${i * 80}ms` : '0ms' }}
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                  <Icon size={16} className="text-[var(--accent)]" strokeWidth={1.75} />
                </span>
                <p className="text-[15px] leading-relaxed text-[var(--text-h)]">{item.text}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-center">
          <CheckCircle2 size={20} className="text-[var(--accent)]" />
          <p className="font-display text-[20px] text-[var(--text-h)] sm:text-[24px]">
            Together, we can create lasting change
          </p>
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
            <h2 className="font-display mt-2 text-[24px] text-[var(--text-h)] sm:text-[30px]">
              DONATE TODAY
            </h2>

            <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">
              BANK DETAILS
            </p>
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