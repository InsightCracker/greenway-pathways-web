export default function Logo({ variant = 'full', className = '' }) {
  const mark = (
    <img
      src="/logo.png"
      alt="Greenway Pathways Foundation"
      className="h-9 w-9 shrink-0 object-contain"
    />
  )

  if (variant === 'mark') return <div className={className}>{mark}</div>

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-[var(--accent)]">
          Greenway
        </span>
        <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--text-h)]">
          PATHWAYS FOUNDATION
        </span>
      </span>
    </div>
  )
}