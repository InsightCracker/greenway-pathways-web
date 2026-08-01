export default function ProgramCard({ title, description }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--code-bg)] p-5 text-left">
      <div
        className="mb-4 h-28 rounded-lg border border-dashed border-[var(--border)]"
        aria-hidden="true"
      />
      <h3 className="text-[15px] font-semibold text-[var(--text-h)]">{title}</h3>
      <p className="mt-2 text-[13px] text-[var(--text)]">{description}</p>
      <a href="/programs" className="mt-3 inline-block text-[13px] font-semibold text-[var(--accent)]">
        Learn more →
      </a>
    </div>
  )
}
