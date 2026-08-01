import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Programs', to: '/programs' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-[14px] transition-colors ${
      isActive
        ? 'font-semibold text-[var(--text-h)]'
        : 'font-medium text-[var(--text)] hover:text-[var(--text-h)]'
    }`

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg)]">
      <nav className="mx-auto flex w-full max-w-[1126px] items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex shrink-0 items-center gap-2.5">
          <span className="h-6 w-6 rounded-md bg-[var(--accent)]" aria-hidden="true" />
          <span className="text-[15px] font-semibold tracking-tight text-[var(--text-h)]">
            Greenway Pathways
          </span>
        </NavLink>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="rounded-full bg-[var(--accent)] px-5 py-2 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            style={{ boxShadow: 'var(--shadow)' }}
          >
            Donate
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--text-h)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={linkClass}
                  onClick={() => setOpen(false)}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center justify-between">
            <ThemeToggle />
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[var(--accent)] px-5 py-2 text-[14px] font-semibold text-white"
            >
              Donate
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
