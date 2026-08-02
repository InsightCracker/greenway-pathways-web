import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import Logo from '../components/Logo.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Programs', to: '/programs' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'News', to: '/news'}
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `nav-link relative text-[15px] font-medium transition-colors ${
      isActive ? 'text-[var(--text-h)] is-active' : 'text-[var(--text)] hover:text-[var(--text-h)]'
    }`

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-[var(--bg)]'
      }`}
    >
      <nav
        className={`mx-auto flex w-full items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-4'
        }`}
      >
        <NavLink to="/" className="shrink-0 transition-transform duration-300 hover:scale-[1.02]">
          <Logo />
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

        <div className="hidden items-center md:flex">
          <ThemeToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="relative inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--text-h)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] md:hidden"
        >
          <X
            size={20}
            className={`absolute transition-all duration-300 ${
              open ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
            }`}
          />
          <Menu
            size={20}
            className={`absolute transition-all duration-300 ${
              open ? '-rotate-90 opacity-0' : 'rotate-0 opacity-100'
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-[var(--border)] transition-all duration-300 ease-out md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 py-5">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.to}
              className={`transition-all duration-300 ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : '0ms' }}
            >
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
        <div className="flex items-center justify-between border-t border-[var(--border)] px-6 py-4">
          <span className="text-[13px] text-[var(--text)]">Theme</span>
          <ThemeToggle />
        </div>
      </div>

      <style>{`
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          height: 2px;
          width: 100%;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after,
        .nav-link.is-active::after {
          transform: scaleX(1);
        }
      `}</style>
    </header>
  )
}