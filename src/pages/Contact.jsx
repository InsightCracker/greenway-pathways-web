import { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { submitContactForm } from '../services/contactService.js'
import ContactHero from '../components/ContactHero.jsx'

const FIELDS = [
  { name: 'name', placeholder: 'Your name', required: true },
  { name: 'email', placeholder: 'Email address', required: true },
  { name: 'phone', placeholder: 'Phone number', required: false },
  { name: 'subject', placeholder: 'Subject', required: false },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitContactForm(form)
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="text-left">
      <ContactHero />

      <div className="mx-auto max-w-[1126px] px-6 py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-[0.9fr_1.3fr] sm:items-start">
          {/* Left: intro + socials */}
          <div>
            <h2 className="font-display mt-3 text-[40px] leading-[1.1] text-[var(--text-h)] sm:text-[45px]">
              Get in Touch!
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--text)]">
              Have a question, feedback, or an idea for collaboration? We'd love to connect with you. Send us a message, and our team will get back to you as soon as possible.
            </p>

            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: FaFacebook, href: 'https://facebook.com' },
                { Icon: FaInstagram, href: 'https://instagram.com' },
                { Icon: FaLinkedinIn, href: 'https://youtube.com' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--code-bg)] text-[var(--text-h)] transition-colors hover:bg-[var(--accent)] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((field) => (
                <input
                  key={field.name}
                  type={field.name === 'email' ? 'email' : 'text'}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                  className="w-full rounded-lg border-none bg-[var(--code-bg)] px-4 py-3 text-[14px] text-[var(--text-h)] outline-none placeholder:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                />
              ))}
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write a comment"
              rows={6}
              required
              className="w-full rounded-lg border-none bg-[var(--code-bg)] px-4 py-3 text-[14px] text-[var(--text-h)] outline-none placeholder:text-[var(--text)] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-full bg-[var(--accent)] px-7 py-3 text-[13px] font-semibold uppercase tracking-wide text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 cursor-pointer"
            >
              {status === 'sending' ? 'Sending…' : 'Send us a message'}
            </button>
            {status === 'sent' && (
              <p className="text-[13px] text-[var(--text)]">Message sent. Thank you.</p>
            )}
            {status === 'error' && (
              <p className="text-[13px] text-red-500">Something went wrong. Please try again.</p>
            )}
          </form>
        </div>

        {/* Info cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl bg-[var(--brand-green)] p-7">
            <h3 className="text-[22px] mb-3 font-semibold text-white">Reach out</h3>
            <p className="text-[15px] leading-relaxed text-white/75">
              We're available. Don't hesitate to contact us and follow us on social media.
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-[var(--border)] bg-[var(--code-bg)] p-7">
            <h3 className="text-[22px] mb-3 font-semibold text-[var(--text-h)]">Office address</h3>
            <p className="text-[15px] leading-relaxed text-[var(--text)]">
              To be added once our registered office is confirmed.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}