export default function DonateBanner() {
  const photos = [
  { src: '/images/IMG_5302.JPG.jpeg', className: 'top-0 left-6 h-32 w-32 sm:h-40 sm:w-40 rotate-[-6deg] z-30' },
  { src: '/images/IMG_5304.JPG.jpeg', className: 'top-10 left-32 h-28 w-28 sm:h-36 sm:w-36 rotate-[4deg] z-20' },
  { src: '/images/IMG_5316.JPG.jpeg', className: 'top-28 left-2 h-24 w-24 sm:h-32 sm:w-32 rotate-[8deg] z-10' },
  { src: '/images/IMG_5309.JPG.jpeg', className: 'top-32 left-40 h-32 w-32 sm:h-44 sm:w-44 rotate-[-3deg] z-20' },
]

  return (
    <div className="relative mx-auto lg:max-w-[1126px] overflow-hidden rounded-2xl bg-[var(--brand-green)] px-8 py-14 sm:px-14">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Text */}
        <div className="text-center lg:text-left">
          <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-[20px]">
            Creating opportunities, transforming lives
          </p>

          <h3 className="font-display my-3 text-[30px] leading-[1.1] text-white sm:text-[40px]">
            Help Us Create More Pathways
          </h3>

          <p className="mt-4 text-[15px] leading-relaxed text-white/70">
            Your support can help expand access to education, strengthen livelihoods, empower young people and women, support vulnerable communities, and advance sustainable development.
          </p>
          
          <a
            href="/donate"
            className="donate-cta mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3 text-[14px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            SUPPORT OUR WORK
          </a>
        </div>

        {/* Photo cluster */}
        <div className="relative hidden h-[280px] lg:block">
          {photos.map((p, i) => (
            <img
              key={p.src}
              src={p.src}
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