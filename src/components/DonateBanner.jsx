export default function DonateBanner() {
  return (
    <div className="mx-auto max-w-[1126px] rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-bg)] px-8 py-8 text-center">
      <h3 className="text-[20px] font-medium text-[var(--text-h)]">Your gift creates a pathway</h3>
      <p className="mt-2 text-[13px] text-[var(--text)]">
        ₦5,000 funds a month of tutoring for one learner.
      </p>
      <a
        href="/contact"
        className="mt-5 inline-block rounded-full bg-[var(--accent)] px-6 py-2.5 text-[14px] font-semibold text-white"
      >
        Donate now
      </a>
    </div>
  )
}
