const COLUMNS = [
  { heading: 'Greenway Pathways', links: ['About us', 'Our programmes', 'Careers'] },
  { heading: 'Quick links', links: ['Home', 'Contact', 'Donate'] },
  { heading: 'Programmes', links: ['Education', 'Youth development', 'Women & girls'] },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--code-bg)] px-6 py-12">
      <div className="mx-auto grid max-w-[1126px] gap-10 text-left sm:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="text-[13px] font-semibold text-[var(--text-h)]">{col.heading}</p>
            <ul className="mt-3 space-y-2">
              {col.links.map((l) => (
                <li key={l} className="text-[13px] text-[var(--text)]">
                  {l}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-10 flex max-w-[1126px] flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-[12px] text-[var(--text)] sm:flex-row">
        <p>© {new Date().getFullYear()} Greenway Pathways Foundation</p>
        <p>Creating opportunities, transforming lives</p>
      </div>
    </footer>
  )
}
