import { HandCoins, Handshake, Lightbulb, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView.js'

const WAYS_TO_PARTNER = [
  {
    icon: HandCoins,
    title: 'Fund',
    description: 'Support programmes and initiatives that create opportunities.',
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    description: 'Co-design and implement development interventions with us.',
  },
  {
    icon: Lightbulb,
    title: 'Share Expertise',
    description: 'Contribute technical knowledge, research, training, or professional expertise.',
  },
]

export default function PartnershipSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section id='partnership' className="relative overflow-hidden bg-[var(--brand-green)] px-6 py-12 sm:py-18">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -100 420 C 250 360, 500 300, 620 200 S 950 60, 1300 -40"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="md:mx-auto md:max-w-[85%]">
        <div
          ref={headingRef}
          className={`text-center transition-all duration-700 ${
            headingInView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
          }`}
        >        
          <h4 className="mb-6 font-display text-[30px] md:text-[40px] leading-[1.15] text-white">
            We believe in the Power of Partnership
          </h4>

          <p className="text-[15px] lg:text[16px] leading-relaxed text-white/70 md:text-[18px]">
            Sustainable development cannot be achieved alone. Greenway Pathways Foundation
            works to build meaningful partnerships with governments, development agencies,
            educational institutions, businesses, civil society organizations, communities,
            traditional institutions, and international partners.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WAYS_TO_PARTNER.map((item, i) => (
            <PartnerCard key={item.title} item={item} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Partner With Us
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function PartnerCard({ item, index }) {
  const [ref, inView] = useInView()
  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 px-6 py-8 text-center backdrop-blur-sm transition-all duration-500 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
      style={{ transitionDelay: inView ? `${index * 100}ms` : '0ms' }}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
        <Icon size={22} className="text-[var(--accent)]" strokeWidth={1.75} />
      </span>
      <h3 className="mt-4 text-[16px] font-semibold text-white">{item.title}</h3>
      <p className="mt-2 max-w-[90%] text-[14px] leading-relaxed text-white/70">
        {item.description}
      </p>
    </div>
  )
}