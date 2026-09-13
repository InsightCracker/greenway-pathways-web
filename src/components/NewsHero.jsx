export default function NewsHero() {
  return (
    <section className="relative flex h-[280px] items-center justify-center overflow-hidden text-center sm:h-[320px]">
      <img
        src="/images/IMG_5319.PNG"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--brand-green)]/80" />

      <div className="relative">
        <p className="font-display text-[36px] text-white sm:text-[44px] pb-5">Stories &amp; Updates </p>
        <p className="mt-3 text-[15px] font-medium tracking-wide text-white/80">
          Greenway Pathways Foundation
        </p>
      </div>
    </section>
  )
}