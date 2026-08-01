import { NavLink } from 'react-router-dom'
import Logo from './Logo.jsx'

const COLUMNS = [
  {
    heading: 'Greenway Pathways',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'Our programmes', to: '/programs' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  {
    heading: 'Quick links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Contact', to: '/contact' },
      { label: 'Donate', to: '/contact' },
    ],
  },
  {
    heading: 'Programmes',
    links: [
      { label: 'Education', to: '/programs#education' },
      { label: 'Youth development', to: '/programs#youth' },
      { label: 'Women & girls', to: '/programs#women' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--code-bg)] px-6 py-12 sm:py-14">
      <div className="mx-auto">
        <div className="grid gap-10 text-left sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed text-[var(--text)]">
              Creating pathways. Empowering people. Transforming lives.
            </p>
          </div>

          {COLUMNS.slice(1).map((col) => (
            <div key={col.heading}>
              <p className="text-[13px] font-semibold text-[var(--text-h)]">{col.heading}</p>
              <ul className="mt-3 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      className="footer-link text-[13px] text-[var(--text)] transition-colors hover:text-[var(--text-h)]"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-[12px] text-[var(--text)] sm:flex-row">
          <p>© {new Date().getFullYear()} Greenway Pathways Foundation</p>
          <p>Creating opportunities, transforming lives</p>
        </div>
      </div>

      <style>{`
        .footer-link {
          position: relative;
        }
        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -2px;
          height: 1px;
          width: 100%;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }
        .footer-link:hover::after {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  )
}