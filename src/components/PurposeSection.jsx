import { useEffect, useRef, useState } from 'react'
import { Flag, Eye, Compass } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const PURPOSE = [
  {
    icon: Flag,
    title: 'Aim',
    body: 'To improve the quality of life of individuals and communities by promoting education, empowerment, sustainable development, and inclusive opportunities that enable people to reach their full potential.',
  },
  ,
  {
    icon: Compass,
    title: 'Mission',
    body: 'To design and implement innovative, inclusive, and sustainable programmes that expand access to education, strengthen livelihoods, promote social inclusion, build resilient communities, and improve lives through strategic partnerships and evidence-based solutions.',
    featured: true,
  },
  {
    icon: Eye,
    title: 'Vision',
    body: 'To be a leading non-profit organisation creating pathways to opportunities that empower individuals, transform communities, and advance sustainable development across Africa and beyond.',
  }
]

export default function PurposeSection() {
  const [headingRef, headingInView] = useInView()

  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto">
        <div ref={headingRef} className="relative flex flex-col items-center text-center">
          <p className="font-display text-[28px] font-semibold text-[var(--text-h)] sm:text-[45px]">
            Our Purpose
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

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {PURPOSE.map((item, i) => (
            <PurposeCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .underline-path {
          stroke-dasharray: 260;
          stroke-dashoffset: 260;
          transition: stroke-dashoffset 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .underline-path.is-drawn {
          stroke-dashoffset: 0;
        }

        @media (prefers-reduced-motion: reduce) {
          .underline-path { transition: none; stroke-dashoffset: 0; }
        }
      `}</style>
    </section>
  )
}

function PurposeCard({ item, index }) {
  const [ref, inView] = useInView()
  const Icon = item.icon

  return (
    <div
      ref={ref}
      className={`purpose-card group relative flex flex-col items-center rounded-2xl border border-[var(--border)] px-7 py-10 text-center transition-all duration-500 ${
        item.featured ? 'bg-[var(--accent-bg)] sm:-translate-y-3' : 'bg-[var(--code-bg)]'
      } ${inView ? 'is-in' : ''}`}
      style={{ transitionDelay: inView ? `${index * 120}ms` : '0ms' }}
    >
      <span className="icon-ring relative flex h-16 w-16 mb-6 items-center justify-center rounded-full bg-[var(--bg)] shadow-sm transition-transform duration-500 group-hover:-translate-y-1">
        <Icon size={28} className="text-[var(--text-h)]" strokeWidth={1.75} />
        <span className="icon-pulse absolute inset-0 rounded-full border border-[var(--accent)]" />
      </span>

      <h3 className="mt-5 mb-2 text-[30px] font-semibold text-[var(--text-h)]">{item.title}</h3>

      <p className="mt-5 text-[20px] leading-relaxed text-[var(--text)]">
        {item.body}
      </p>

      <span className="accent-bar absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[var(--accent)]" />

      <style>{`
        .purpose-card {
          opacity: 0;
          transform: translateY(28px);
        }
        .purpose-card.is-in {
          opacity: 1;
          transform: translateY(${item.featured ? '-12px' : '0'});
        }
        .purpose-card:hover {
          transform: translateY(${item.featured ? '-16px' : '-4px'});
          box-shadow: var(--shadow);
        }

        .icon-pulse {
          opacity: 0;
          transform: scale(1);
        }
        .purpose-card.is-in .icon-pulse {
          animation: icon-pulse-ring 2.2s ease-out ${index * 0.15 + 0.6}s infinite;
        }
        @keyframes icon-pulse-ring {
          0% { opacity: 0.5; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.35); }
        }

        .accent-bar {
          width: 28%;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .purpose-card:hover .accent-bar {
          width: 60%;
        }

        @media (prefers-reduced-motion: reduce) {
          .purpose-card, .icon-pulse { animation: none !important; transition: none !important; opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  )
}