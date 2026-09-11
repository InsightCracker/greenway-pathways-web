import { ChevronDown } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import { useAccordion } from '../hooks/useAccordion.js'
import AboutHero from '../components/AboutHero.jsx'

const OBJECTS = [
  {
    title: 'Education & Learning',
    body: 'Promote equitable access to quality, inclusive, and lifelong education through scholarships, educational support, literacy programmes, teacher development, school improvement initiatives, digital learning, curriculum development, and educational research.',
  },
  {
    title: 'Youth Development',
    body: 'Empower young people through leadership development, entrepreneurship, mentorship, innovation, vocational education, employability skills, digital skills, and life skills programmes.'
  },
  {
    title: "Women and Girls' Empowerment",
    body: 'Promote the social, educational, economic, and leadership advancement of women and girls through advocacy, education, skills development, financial inclusion, enterprise development, and equal opportunity initiatives.',
  },
  {
    title: 'Community Development',
    body: 'Promote sustainable community development by supporting initiatives that enhance livelihoods, strengthen local institutions, foster community participation, and promote social cohesion.',
  },
  {
    title: 'Health and Well-being',
    body: 'Promote public health, mental health, nutrition, sanitation, hygiene, disease prevention, maternal and child health, health education, and access to quality healthcare through awareness campaigns, partnerships, and community-based interventions.',
  },
  {
    title: 'Environmental Sustainability',
    body: 'Promote environmental protection, climate resilience, biodiversity conservation, renewable energy, sustainable agriculture, afforestation, waste management, environmental education, and responsible stewardship of natural resources.',
  },
]

/** Heading with the hand-drawn underline used across About sections. */
function SectionHeading({ title, inView, align = 'center' }) {
  const alignClass = align === 'left' ? 'items-center sm:items-start sm:text-left' : 'items-center text-center'

  return (
    <div className={`relative mb-6 flex flex-col ${alignClass}`}>
      <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[40px]">
        {title}
      </p>
      <svg viewBox="0 0 220 20" className="mt-2 h-4 w-[180px] sm:w-[220px]" aria-hidden="true">
        <path
          d="M6 14C50 2 160 2 214 12"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="4"
          strokeLinecap="round"
          className={`underline-path ${inView ? 'is-drawn' : ''}`}
        />
      </svg>
    </div>
  )
}

export default function About() {
  const [aimRef, aimInView] = useInView()
  const [aimHeadingRef, aimHeadingInView] = useInView()

  const [visionMissionRef, visionMissionInView] = useInView()

  const [objectivesHeadingRef, objectivesHeadingInView] = useInView()

  const { openId, toggle } = useAccordion()

  return (
    <div className="text-left">
      <AboutHero />

      {/* Who We Are */}
      <section
  ref={aimRef}
  className="mx-auto w-[100%] flex flex-col items-center justify-center px-6 py-16 text-center md:py-24"
>
  <div
    className={`w-full space-y-6 transition-all duration-700 ${
      aimInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
    }`}
  >
    <div ref={aimHeadingRef}>
      <SectionHeading title="WHO WE ARE" inView={aimHeadingInView} />
    </div>

    <div className="mx-auto max-w-[85%] text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[22px]">
      Greenway Pathways Foundation is a non-profit organisation committed to improving the quality of life of individuals and communities by promoting education, empowerment, sustainable development and inclusive opportunities.
    </div>

    <div className="mx-auto max-w-[85%] text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[22px]">
      We design and implement innovative, inclusive and sustainable programmes that expand access to education, strengthen livelihoods, promote social inclusion, build resilient communities and improve lives.
    </div>

    <div className="mx-auto max-w-[85%] text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[22px]">
      Our work is guided by strategic partnerships, community participation and evidence-based solutions, with a commitment to creating opportunities that enable individuals and communities to reach their full potential.
    </div>
  </div>
</section>

      {/* Aim */}
      <section
        ref={aimRef}
        className="bg-[var(--code-bg)] mx-auto flex flex-col items-center justify-center px-6 py-16 text-center md:py-24"
      >
        <div
          className={`transition-all duration-700 ${
            aimInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div ref={aimHeadingRef}>
            <SectionHeading title="AIM" inView={aimHeadingInView} />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[22px]">
            Our aim is to improve the quality of life of individuals and communities by
            promoting education, empowerment, sustainable development, and inclusive
            opportunities that enable people to reach their full potential.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section ref={visionMissionRef} className="px-6 py-16 sm:py-24">
        <div
          className={`mx-auto max-w-[1126px] transition-all duration-700 ${
            visionMissionInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-0">

            {/* Vision — the horizon */}
            <div className="flex flex-col justify-center rounded-2xl border border-[var(--text-h)]/15 px-8 py-10 sm:px-10 sm:py-12">
              <h4 className="font-display text-[24px] font-semibold text-[var(--text-h)] sm:text-[30px] mb-3">
                Vision
              </h4>
              <p className="text-[15px] leading-relaxed text-[var(--text)] sm:text-[16px] md:text-[18px]">
                To be a leading non-profit organisation creating pathways to opportunities
                that empower individuals, transform communities, and advance sustainable
                development across Africa and beyond.
              </p>
            </div>

            {/* Connecting path */}
            <div className="relative flex items-center justify-center py-2 lg:w-[100px] md:py-0 md:px-2">
              {/* desktop: horizontal */}
              <svg viewBox="0 0 100 40" className="hidden h-10 w-[100px] lg:block" aria-hidden="true">
                <circle cx="6" cy="20" r="4" fill="var(--text-h)" opacity="0.4" />
                <path
                  d="M12 20 H88"
                  fill="none"
                  stroke="var(--text-h)"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
                <circle
                  cx="6"
                  cy="20"
                  r="3.5"
                  fill="var(--accent)"
                  className={`journey-dot ${visionMissionInView ? 'is-traveling' : ''}`}
                />
                <path
                  d="M84 15 L92 20 L84 25"
                  fill="none"
                  stroke="var(--text-h)"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* mobile: vertical */}
              <svg viewBox="0 0 40 60" className="h-14 w-10 lg:hidden" aria-hidden="true">
                <circle cx="20" cy="6" r="4" fill="var(--text-h)" opacity="0.4" />
                <path
                  d="M20 12 V48"
                  fill="none"
                  stroke="var(--text-h)"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                  strokeDasharray="1 7"
                  strokeLinecap="round"
                />
                <circle
                  cx="20"
                  cy="6"
                  r="3.5"
                  fill="var(--accent)"
                  className={`journey-dot-v ${visionMissionInView ? 'is-traveling' : ''}`}
                />
                <path
                  d="M15 44 L20 52 L25 44"
                  fill="none"
                  stroke="var(--text-h)"
                  strokeOpacity="0.4"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Mission */}
            <div
              className="bg-[var(--code-bg)] flex flex-col justify-center rounded-2xl px-8 py-10 sm:px-10 sm:py-12"
            >
              <h4 className="font-display text-[24px] font-semibold text-[var(--text-h)] sm:text-[30px] mb-3">
                Mission
              </h4>
              <p className="text-[15px] leading-relaxed text-[var(--text)] sm:text-[16px] md:text-[18px]">
                To design and implement innovative, inclusive, and sustainable programmes
                that expand access to education, strengthen livelihoods, promote social
                inclusion, build resilient communities, and improve lives through
                strategic partnerships and evidence-based solutions.
              </p>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes travel-x {
            from { transform: translateX(0); }
            to { transform: translateX(76px); }
          }
          @keyframes travel-y {
            from { transform: translateY(0); }
            to { transform: translateY(38px); }
          }
          .journey-dot.is-traveling {
            animation: travel-x 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
          }
          .journey-dot-v.is-traveling {
            animation: travel-y 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
          }
          @media (prefers-reduced-motion: reduce) {
            .journey-dot.is-traveling,
            .journey-dot-v.is-traveling {
              animation: none;
            }
          }
        `}</style>
      </section>

      {/* Objectives */}
      <section className="bg-[var(--code-bg)] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1126px] gap-10 sm:grid-cols-[1fr_1.4fr] sm:items-start">
          <div>
            <div ref={objectivesHeadingRef}>
              <SectionHeading title="Objectives" inView={objectivesHeadingInView} align="left" />
            </div>

            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text)] text-center sm:text-left sm:text-[18px] lg:text-[20px]">
              Our constitutional objects guide focused programmes that address interconnected development challenges and create meaningful, sustainable opportunities.
            </p>
          </div>

          <div>
            {OBJECTS.map((obj, i) => (
              <div key={obj.title} className="border-b border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-[15px] font-medium text-[var(--text-h)] sm:text-[18px] lg:text-[22px]">
                    {obj.title}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[var(--accent)] transition-transform duration-300 ${
                      openId === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openId === i ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px]">
                      {obj.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="mx-auto max-w-[1126px] px-6 py-16 sm:py-20">
        <h2 className="font-display text-[28px] text-[var(--text-h)] sm:text-[34px]">
          Board of Trustees
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px]">
          Profiles will be published following the formal constitution and announcement of the Foundation's Board of Trustees.
        </p>

        <div className="coming-soon relative mt-8 overflow-hidden rounded-xl border-2 border-dashed border-[var(--accent)] bg-[var(--code-bg)] px-6 py-10 text-center">
          <div className="flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="avatar-pulse mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--accent)]"
                style={{ animationDelay: `${i * 0.3}s` }}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--accent)]" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
                </svg>
              </div>
            ))}
          </div>

          <p className="shimmer-text mt-5 text-[15px] font-medium text-[var(--text-h)] sm:text-[18px]">
            Trustee profiles coming soon
          </p>

          <style>{`
            .coming-soon {
              animation: border-travel 2.5s linear infinite;
            }
            @keyframes border-travel {
              to { border-color: var(--accent); background-position: 100% 0; }
            }

            .avatar-pulse {
              animation: avatar-pulse 2s ease-in-out infinite;
            }
            @keyframes avatar-pulse {
              0%, 100% { transform: scale(1); opacity: 0.6; }
              50% { transform: scale(1.08); opacity: 1; }
            }

            .shimmer-text {
              background: linear-gradient(
                90deg,
                var(--text-h) 0%,
                var(--text-h) 40%,
                var(--accent) 50%,
                var(--text-h) 60%,
                var(--text-h) 100%
              );
              background-size: 200% 100%;
              -webkit-background-clip: text;
              background-clip: text;
              color: transparent;
              animation: shimmer 3s ease-in-out infinite;
            }
            @keyframes shimmer {
              0% { background-position: 200% 0; }
              100% { background-position: -200% 0; }
            }

            @media (prefers-reduced-motion: reduce) {
              .coming-soon, .avatar-pulse, .shimmer-text {
                animation: none !important;
              }
              .shimmer-text {
                background: none;
                -webkit-text-fill-color: unset;
                color: var(--text-h);
              }
            }
          `}</style>
        </div>
      </section>
    </div>
  )
}