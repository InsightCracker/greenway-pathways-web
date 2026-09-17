import { Ear, PenTool, Rocket, BarChart3, BookOpen, TrendingUp } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'

const STEPS = [
  {
    icon: Ear,
    title: 'Listen',
    description: 'We engage communities and stakeholders to understand needs, priorities, and opportunities.',
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'We develop inclusive, innovative, and context-responsive solutions.',
  },
  {
    icon: Rocket,
    title: 'Implement',
    description: 'We work with partners to deliver practical programs that create meaningful opportunities.',
  },
  {
    icon: BarChart3,
    title: 'Measure',
    description: 'We use data, monitoring, and evaluation to understand what works and where improvement is needed.',
  },
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'We share knowledge, adapt our approaches, and strengthen future interventions.',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'We build partnerships and sustainable models that can extend impact beyond individual projects.',
  },
]

export default function ApproachSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section id="our-approach" className="bg-[var(--code-bg)] px-6 py-12 md:py-15">
      <div className="mx-auto max-w-[900px]">
         <div ref={headingRef} className="relative flex flex-col items-center text-center">
          <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[40px]">
            OUR APPROACH
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

        <div className="relative mt-10">
          {/* The connecting pathway line */}
          <div
            className="absolute left-6 top-2 bottom-2 w-px bg-[var(--border)] sm:left-1/2 sm:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, i) => (
              <StepRow key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepRow({ step, index }) {
  const [ref, inView] = useInView()
  const Icon = step.icon
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-5 transition-all duration-600 sm:gap-0 ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
      style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
    >
      <div className={`flex-1 sm:px-10 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
        <h3 className="text-[20px] font-semibold text-[var(--text-h)]">{step.title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--text)]">
          {step.description}
        </p>
      </div>

      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] sm:mx-0">
        <Icon size={18} className="text-[var(--accent)]" strokeWidth={1.75} />
      </div>

      <div className="hidden flex-1 sm:block" aria-hidden="true" />
    </div>
  )
}