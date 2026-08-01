const VALUES = [
  { label: 'Aim', text: 'To expand access to education, health, and dignified livelihoods.' },
  { label: 'Vision', text: 'A Nigeria where every community has a pathway to opportunity.' },
  { label: 'Mission', text: 'Deliver sustainable, community-led development programmes.' },
]

const TRUSTEES = ['Name Surname', 'Name Surname', 'Name Surname', 'Name Surname']

export default function About() {
  return (
    <div className="mx-auto max-w-[1126px] px-6 py-14 text-left">
      <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">ABOUT US</p>
      <h1 className="mt-2 text-[32px] font-medium text-[var(--text-h)]">Our story &amp; purpose</h1>

      <div className="mt-10 grid gap-5 sm:grid-cols-3">
        {VALUES.map((v) => (
          <div key={v.label} className="rounded-xl border border-[var(--border)] bg-[var(--code-bg)] p-5">
            <h3 className="text-[14px] font-semibold text-[var(--text-h)]">{v.label}</h3>
            <p className="mt-2 text-[13px] text-[var(--text)]">{v.text}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-14 text-[20px] font-medium text-[var(--text-h)]">Board of trustees</h2>
      <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4">
        {TRUSTEES.map((name, i) => (
          <div key={i} className="text-center">
            <div className="mx-auto h-16 w-16 rounded-full border border-[var(--border)] bg-[var(--code-bg)]" />
            <p className="mt-2 text-[13px] font-semibold text-[var(--text-h)]">{name}</p>
            <p className="text-[12px] text-[var(--text)]">Trustee</p>
          </div>
        ))}
      </div>
    </div>
  )
}
