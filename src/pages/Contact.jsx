import { useState } from 'react'
import { submitContactForm } from '../services/contactService.js'

const FIELDS = ['name', 'email', 'subject']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await submitContactForm(form)
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-[1126px] px-6 py-14 text-left">
      <p className="text-[13px] font-semibold tracking-wide text-[var(--accent)]">CONTACT</p>
      <h1 className="mt-2 text-[32px] font-medium text-[var(--text-h)]">Talk to the Secretariat</h1>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <form onSubmit={handleSubmit} className="space-y-4">
          {FIELDS.map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field[0].toUpperCase() + field.slice(1)}
              required={field !== 'subject'}
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-2.5 text-[14px] text-[var(--text-h)] outline-none focus-visible:border-[var(--accent)]"
            />
          ))}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Message"
            rows={5}
            required
            className="w-full rounded-lg border border-[var(--border)] bg-[var(--code-bg)] px-4 py-2.5 text-[14px] text-[var(--text-h)] outline-none focus-visible:border-[var(--accent)]"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-[14px] font-semibold text-white disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className="text-[13px] text-[var(--text)]">Message sent — thank you.</p>
          )}
          {status === 'error' && (
            <p className="text-[13px] text-red-500">Something went wrong. Please try again.</p>
          )}
        </form>

        <div>
          <h2 className="text-[15px] font-semibold text-[var(--text-h)]">Reach us directly</h2>
          <p className="mt-2 text-[13px] text-[var(--text)]">
            12 Freedom Way, Lekki Phase 1, Lagos, Nigeria
            <br />
            +234 800 000 0000
            <br />
            hello@greenwaypathways.org
          </p>
          <div
            className="mt-6 h-56 rounded-xl border border-dashed border-[var(--border)]"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  )
}
