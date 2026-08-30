import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import Logo from './Logo.jsx'

const QUICK_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Our Programs', to: '/programs' },
  { label: 'Contact Us', to: '/contact' },
]

const PROGRAMMES = [
  { label: 'Education', to: '/programs#education' },
  { label: 'Youth development', to: '/programs#youth' },
  { label: 'Women & girls', to: '/programs#women' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <footer className="relative overflow-hidden bg-[var(--brand-green)] px-6 pt-16">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M -100 420 C 250 360, 500 300, 620 200 S 950 60, 1300 -40"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
        <path
          d="M -100 500 C 300 460, 480 380, 620 260 S 900 120, 1300 100"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      <div className="relative mx-auto">
        <div className="grid gap-12 sm:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-[220px] text-[13px] leading-relaxed text-white/70">
              Creating Opportunities, Transforming Lives.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
              >
                <FaFacebook size={25} />
              </a>
              
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
              >
                <FaInstagram size={25} />
              </a>
              
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="social-icon flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70"
              >
                <FaLinkedinIn size={25} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-[18px]">
              Quick links
            </p>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="footer-link text-[14px] text-white/75 sm:text-[15px]">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-[18px]">
              Programmes
            </p>
            <ul className="mt-4 space-y-2.5">
              {PROGRAMMES.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="footer-link text-[14px] text-white/75 sm:text-[15px]">
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Stay updated */}
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[var(--accent)] sm:text-[18px]">
              Stay updated
            </p>
            <p className="mt-4 text-[14px] leading-relaxed text-white/70 sm:text-[15px]">
              Be first to know as our programmes launch.
            </p>
            {submitted ? (
              <p className="mt-4 text-[13px] font-medium text-[var(--accent)]">
                Thanks — you're on the list.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="w-full border border-white/20 bg-white/5 px-4 py-2 text-[15px] text-white placeholder:text-white/40 outline-none transition-colors focus:border-[var(--accent)]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex w-[42px] shrink-0 items-center justify-center bg-[var(--accent)] text-white transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <FiArrowRight size={20} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12px] text-white/50">
            © {new Date().getFullYear()} Greenway Pathways Foundation. All rights reserved.
          </p>
          <p className="text-[12px] text-white/50">
            Incorporated Trustee, registered under CAMA 2020 · Federal Republic of Nigeria
          </p>
        </div>
      </div>

      <style>{`
        .social-icon {
          transition: border-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
        }
        .social-icon:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .footer-link {
          position: relative;
          transition: color 0.25s ease;
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
        .footer-link:hover {
          color: white;
        }
        .footer-link:hover::after {
          transform: scaleX(1);
        }

        @media (prefers-reduced-motion: reduce) {
          .social-icon, .footer-link, .footer-link::after { transition: none !important; }
        }
      `}</style>
    </footer>
  )
}