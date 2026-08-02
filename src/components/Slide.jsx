import { useRef, useEffect, useState } from 'react'

const imgUrl = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900`

export default function Slide({ slide, index }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.6 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-slide
      className="slide-card relative h-[400px] w-[350px] shrink-0 snap-start overflow-hidden rounded-sm sm:h-[400px] sm:w-[400px]"
      style={{ transitionDelay: `${(index % 8) * 40}ms` }}
    >
      <img
        src={imgUrl(slide.id)}
        alt=""
        loading="lazy"
        className={`h-full w-full object-cover transition-transform duration-700 ${
          inView ? 'scale-100' : 'scale-110'
        }`}
      />
      
      {/* Palette-tinted overlay instead of plain black — same treatment as Hero.jsx */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1b4d3e]/90 via-[#1b4d3e]/40 to-transparent" />
      <div className="absolute inset-0 bg-[var(--accent)] opacity-[0.1] mix-blend-multiply" />

      <div
        className={`absolute inset-x-0 bottom-0 px-4 pb-6 text-center transition-all duration-500 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
        }`}
      >
        <p className="font-display text-[22px] font-semibold tracking-[0.14em] text-[var(--accent)]">
          {slide.value.toUpperCase()}
        </p>
        <p className="mt-1.5 text-[17px] leading-snug text-white/80">{slide.description}</p>
      </div>

      <style>{`
        .slide-card {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.08);
        }
        @media (prefers-reduced-motion: reduce) {
          .slide-card img, .slide-card > div { transition: none !important; transform: none !important; opacity: 1 !important; }
        }
      `}</style>
    </div>
  )
}