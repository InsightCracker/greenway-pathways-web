export default function Hero() {
  return (
    <section className="relative isolate flex h-[100dvh] min-h-[560px] w-full flex-col items-center justify-center overflow-hidden px-5 pt-16 text-center sm:px-6 sm:pt-0">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover"
          src="/videos/schoolyard-hero.mp4"
          poster="/images/schoolyard-hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-[var(--accent)] opacity-[0.12] mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4">
        <p className="reveal reveal-1 text-[11px] sm:text-[13px] font-semibold tracking-wide text-[var(--accent)]">
          CREATING OPPORTUNITIES, TRANSFORMING LIVES
        </p>
        <p className="reveal reveal-2 mt-2 text-[2.5rem] sm:text-[36px] md:text-[40px] font-medium leading-tight text-white sm:mt-3">
          Pathways to education, dignity &amp; opportunity
        </p>
        <p className="reveal reveal-3 mt-3 max-w-xs text-[14px] text-white/70 sm:mt-4 sm:max-w-md sm:text-[15px]">
          Greenway Pathways Foundation partners with communities across Nigeria to expand
          access to education, health, and economic opportunity.
        </p>
        <div className="reveal reveal-4 mt-5 flex w-full flex-col gap-3 sm:mt-6 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
          <a
            href="/contact"
            className="btn-pulse rounded-full bg-[var(--accent)] px-6 py-2.5 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Donate now
          </a>
          
          <a
            href="/programs"
            className="rounded-full border border-white px-6 py-2.5 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black/70"
          >
            See our programmes
          </a>
        </div>
      </div>

      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(16px);
          animation: reveal-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .reveal-1 { animation-delay: 0.05s; }
        .reveal-2 { animation-delay: 0.18s; }
        .reveal-3 { animation-delay: 0.32s; }
        .reveal-4 { animation-delay: 0.46s; }
        @keyframes reveal-up {
          to { opacity: 1; transform: translateY(0); }
        }

        .btn-pulse { position: relative; }
        .btn-pulse::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 1.5px solid var(--accent);
          animation: pulse-ring 2.4s ease-out infinite;
          pointer-events: none;
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.35); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal, .btn-pulse::after { animation: none !important; }
          .reveal { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  )
}