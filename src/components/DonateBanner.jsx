export default function DonateBanner() {
  const photos = [
    { id: 28593044, className: 'top-0 left-6 h-32 w-32 sm:h-40 sm:w-40 rotate-[-6deg] z-30' },
    { id: 8382227, className: 'top-10 left-32 h-28 w-28 sm:h-36 sm:w-36 rotate-[4deg] z-20' },
    { id: 3869652, className: 'top-28 left-2 h-24 w-24 sm:h-32 sm:w-32 rotate-[8deg] z-10' },
    { id: 36753412, className: 'top-32 left-40 h-32 w-32 sm:h-44 sm:w-44 rotate-[-3deg] z-20' },
  ]

  return (
    <div className="relative mx-auto max-w-[1126px] overflow-hidden rounded-2xl bg-[var(--brand-green)] px-8 py-14 sm:px-14">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-[20px]">
            Creating opportunities, transforming lives
          </p>

          <h3 className="font-display my-3 text-[30px] leading-[1.1] text-white sm:text-[40px]">
            Every gift opens a pathway forward
          </h3>

          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            Greenway Pathways Foundation is just getting started, and your support helps us build our first programs in education, youth development, and women's empowerment from the ground up.
          </p>
          
          <a
            href="/contact"
            className="donate-cta mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            DONATE NOW
          </a>
        </div>

        {/* Photo cluster */}
        <div className="relative hidden h-[280px] lg:block">
          {photos.map((p, i) => (
            <img
              key={p.id}
              src={`https://images.pexels.com/photos/${p.id}/pexels-photo-${p.id}.jpeg?auto=compress&cs=tinysrgb&w=400`}
              alt=""
              loading="lazy"
              className={`photo-float absolute rounded-2xl object-cover shadow-lg ring-4 ring-[var(--brand-green)] ${p.className}`}
              style={{ animationDelay: `${i * 0.4}s` }}
            />
          ))}
        </div>
      </div>

      {/* Faint pathway lines, consistent with Footer/Hero motif */}
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

      <style>{`
        .donate-cta {
          box-shadow: 0 8px 24px -8px rgba(0,0,0,0.35);
        }

        .photo-float {
          animation: float 5s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-10px) rotate(var(--r, 0deg)); }
        }

        @media (prefers-reduced-motion: reduce) {
          .photo-float { animation: none !important; }
        }
      `}</style>
    </div>
  )
}