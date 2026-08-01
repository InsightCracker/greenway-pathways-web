export default function Logo({ variant = 'full', className = '' }) {
  const mark = (
    <svg
      viewBox="0 0 120 120"
      className="h-9 w-9 shrink-0"
      aria-hidden="true"
    >
      {/* Outer G ring */}
      <path
        d="M78 22c-9-6-20-8-31-4C25 24 14 40 14 60s11 36 33 42c17 5 34 0 44-12"
        fill="none"
        stroke="var(--text-h)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      {/* Inner P stem + bowl */}
      <path
        d="M50 34v58M50 34c14 0 22 5 22 16s-8 16-22 16"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="8"
        strokeLinecap="round"
      />
      {/* Rising path / figure */}
      <path
        d="M40 66c10-4 18 2 28-4s10-14 18-20"
        fill="none"
        stroke="var(--text-h)"
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="86" cy="40" r="4.5" fill="var(--text-h)" />
      {/* Leaf */}
      <path
        d="M96 46c6 2 11 7 12 14-7-1-13-4-16-10-1-2-1-3 4-4z"
        fill="var(--accent)"
        opacity="0.9"
      />
      {/* Star */}
      <path
        d="M99 14l2.5 7 7 2.5-7 2.5-2.5 7-2.5-7-7-2.5 7-2.5z"
        fill="var(--accent)"
      />
    </svg>
  )

  if (variant === 'mark') return <div className={className}>{mark}</div>

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {mark}
      <span className="flex flex-col leading-none">
        <span className="text-[15px] font-semibold tracking-tight text-[var(--text-h)]">
          Greenway
        </span>
        <span className="text-[10px] font-semibold tracking-[0.12em] text-[var(--accent)]">
          PATHWAYS FOUNDATION
        </span>
      </span>
    </div>
  )
}