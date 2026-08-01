const API_BASE = import.meta.env.VITE_API_BASE_URL ?? '/api'

// Swap this out for your provider of choice (Paystack, Flutterwave, Stripe).
// This just defines the shape the rest of the app expects.
export async function initiateDonation({ amount, email, name }) {
  const res = await fetch(`${API_BASE}/donations/initiate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount, email, name }),
  })
  if (!res.ok) throw new Error('Failed to initiate donation')
  return res.json()
}
