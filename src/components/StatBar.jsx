const STATS = [
  { value: '2026', label: 'Founded' },
  { value: '17', label: 'Focus areas' },
  { value: '8', label: 'Core values' },
  { value: '5-11', label: 'Board of Trustees' },
]

export default function StatBar() {
  return (
    <div className="mx-auto grid max-w-[1126px] grid-cols-2 gap-6 rounded-2xl bg-[var(--brand-green)] px-8 py-8 sm:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-[25px] font-semibold text-white">{s.value}</p>
          <p className="mt-1 text-[15px] text-white/70">{s.label}</p>
        </div>
      ))}
    </div>
  )
}