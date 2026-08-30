import { ChevronDown } from 'lucide-react'
import { useInView } from '../hooks/useInView.js'
import { useAccordion } from '../hooks/useAccordion.js'
import AboutHero from '../components/AboutHero.jsx'

const OBJECTS = [
  {
    title: 'Education',
    body: 'Promote equitable access to quality, inclusive, and lifelong education through scholarships, educational support, literacy programmes, teacher development, school improvement initiatives, digital learning, curriculum development, and educational research.',
  },
  {
    title: 'Youth Development',
    body: 'Empower young people through leadership development, entrepreneurship, mentorship, innovation, vocational education, employability skills, civic engagement, digital skills, and life skills programmes.',
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

export default function About() {
  const [visionRef, visionInView] = useInView()
  const [missionRef, missionInView] = useInView()
  const [headingRef, headingInView] = useInView()
  const { openId, toggle } = useAccordion()

  return (
    <div className="text-left">
      <AboutHero />
      
      {/* Mission */}
      <section
        ref={missionRef}
        className="mx-auto flex max-w-[1126px] flex-col items-center justify-center px-6 py-8 text-center sm:py-24"
      >
        <div
          className={`transition-all duration-700 ${
            missionInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div ref={headingRef} className="relative flex flex-col items-center text-center mb-6">
            <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[45px]">
              Mission
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

          <p className="mx-auto font-bold mt-6 max-w-2.5xl text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[22px]">
            To design and implement innovative, inclusive, and sustainable programmes
            that expand access to education, strengthen livelihoods, promote social
            inclusion, build resilient communities, and improve lives through strategic
            partnerships and evidence-based solutions.
          </p>

          <p className="mx-auto max-w-2.5xl text-[14px] leading-relaxed text-[var(--text)] sm:text-[16px] lg:text-[20px]">
            Our aim is to improve the quality of life of individuals and communities by
            promoting education, empowerment, sustainable development, and inclusive
            opportunities that enable people to reach their full potential.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section
        ref={visionRef}
        className="mx-auto flex max-w-[1126px] flex-col items-center justify-center px-6 py-16 text-center sm:py-24"
      >
        <div
          className={`transition-all duration-700 ${
            visionInView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div ref={headingRef} className="relative flex flex-col items-center text-center mb-6">
            <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[45px]">
              Vision
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

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[22px]">
            To be a leading non-profit organisation creating pathways to opportunities that
            empower individuals, transform communities, and advance sustainable development
            across Africa and beyond.
          </p>
        </div>
      </section>

      {/* Objects accordion */}
      <section className="bg-[var(--code-bg)] px-6 py-16 sm:py-20">
        <div className="mx-auto grid max-w-[1126px] gap-10 sm:grid-cols-[1fr_1.4fr] sm:items-start">
          <div>
            <div ref={headingRef} className="relative flex flex-col items-center text-center sm:items-left sm:text-left mb-6">
              <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[40px]">
                Objectives
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
            
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px] lg:text-[20px]">
              Six of the seventeen commitments set out in our founding Constitution, guiding
              every programme we build as we grow.
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
                  <span className="text-[15px] font-medium text-[var(--text-h)] sm:text-[18px] lg:text-[22px]">{obj.title}</span>
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
                    <p className="text-[15px] leading-relaxed text-[var(--text)] sm:text-[18px]">{obj.body}</p>
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
          Per Article 18 of our Constitution, the Board consists of five to eleven Trustees
          providing strategic leadership and governance oversight. Our founding Board is currently being constituted.
        </p>
        
        <div className="coming-soon relative mt-8 overflow-hidden rounded-xl border-2 border-dashed border-[var(--accent)] bg-[var(--code-bg)] px-6 py-10 text-center">
          <div className="flex justify-center gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="avatar-pulse flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[var(--accent)] mb-4"
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
          <p className="mt-1 text-[15px] text-[var(--text)] sm:text-[18px]">
            Check back as our founding Board is appointed and announced.
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