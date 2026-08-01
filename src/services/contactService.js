const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api'

export async function submitContactForm(payload) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  if (!res.ok) throw new Error('Failed to submit contact form')
  return res.json()
}
