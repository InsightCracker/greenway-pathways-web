const STATS = [
  { value: '12,400+', label: 'Lives reached' },
  { value: '38', label: 'Active programmes' },
  { value: '6', label: 'States of operation' },
  { value: '94%', label: 'Programme completion' },
]

export default function StatBar() {
  return (
    <div className="mx-auto grid max-w-[1126px] grid-cols-2 gap-6 rounded-2xl bg-[var(--text-h)] px-8 py-8 sm:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label} className="text-center">
          <p className="text-[22px] font-semibold text-white">{s.value}</p>
          <p className="mt-1 text-[12px] text-white/70">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
