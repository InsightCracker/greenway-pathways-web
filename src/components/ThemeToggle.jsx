import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      aria-pressed={isDark}
      className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-[var(--border)] bg-[var(--code-bg)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
    >
      <Sun size={11} className="absolute left-[5px] text-[var(--text)]" aria-hidden="true" />
      <Moon size={11} className="absolute right-[5px] text-[var(--text)]" aria-hidden="true" />
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-[var(--accent)] transition-transform ${
          isDark ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </button>
  )
}
