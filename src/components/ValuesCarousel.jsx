import { useRef, useEffect, useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Slide from './Slide.jsx'

const VALUES = [
  { id: 28593044, value: 'Integrity', description: 'We conduct our affairs honestly, ethically, transparently, and accountably.' },
  { id: 28593048, value: 'Excellence', description: 'We pursue the highest standards of professionalism, quality, and continuous improvement.' },
  { id: 31152400, value: 'Compassion', description: 'We serve with empathy, respect, fairness, and commitment to human dignity.' },
  { id: 28646079, value: 'Inclusiveness', description: 'We embrace diversity and promote equal opportunities for all.' },
  { id: 33227881, value: 'Collaboration', description: 'We build mutually beneficial partnerships to maximise sustainable impact.' },
  { id: 29598045, value: 'Innovation', description: 'We encourage creativity, learning, research, and evidence-based solutions.' },
  { id: 36753412, value: 'Sustainability', description: 'We promote solutions that create lasting social, economic, and environmental value.' },
  { id: 28995440, value: 'Service', description: 'We remain committed to selfless service and responsible leadership.' },
]

export default function ValuesCarousel() {
  const trackRef = useRef(null)
  const [paused, setPaused] = useState(false)
  const scrollTimeout = useRef(null)
  const isResetting = useRef(false)

  const getStep = useCallback(() => {
    const track = trackRef.current
    const card = track?.querySelector('[data-slide]')
    return card ? card.offsetWidth + 16 : 300
  }, [])

  const scrollByCard = useCallback(
    (dir, smooth = true) => {
      const track = trackRef.current
      if (!track) return
      const step = getStep()
      const setWidth = step * VALUES.length

      if (dir === -1 && track.scrollLeft < step / 2) {
        isResetting.current = true
        track.scrollTo({ left: setWidth, behavior: 'auto' })
        requestAnimationFrame(() => {
          isResetting.current = false
          track.scrollBy({ left: -step, behavior: smooth ? 'smooth' : 'auto' })
        })
        return
      }

      track.scrollBy({ left: dir * step, behavior: smooth ? 'smooth' : 'auto' })
    },
    [getStep]
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onScroll = () => {
      if (isResetting.current) return

      clearTimeout(scrollTimeout.current)
      scrollTimeout.current = setTimeout(() => {
        const step = getStep()
        const setWidth = step * VALUES.length

        if (track.scrollLeft >= setWidth - 4) {
          isResetting.current = true
          track.scrollTo({ left: track.scrollLeft - setWidth, behavior: 'auto' })
          requestAnimationFrame(() => {
            isResetting.current = false
          })
        }
      }, 120)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', onScroll)
      clearTimeout(scrollTimeout.current)
    }
  }, [getStep])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => scrollByCard(1), 3200)
    return () => clearInterval(id)
  }, [paused, scrollByCard])

  return (
    <section className="relative border-y border-[var(--border)] py-3">
      <div
        className="group relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-4 py-3 [scrollbar-width:none] snap-x snap-mandatory [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {[...VALUES, ...VALUES].map((slide, i) => (
            <Slide key={`${slide.id}-${i}`} slide={slide} index={i} />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/40 group-hover:opacity-100"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white opacity-0 backdrop-blur-sm transition-all duration-300 hover:bg-white/40 group-hover:opacity-100"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}