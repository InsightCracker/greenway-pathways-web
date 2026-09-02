const WEB3FORMS_ACCESS_KEY = '4b678000-59bd-4e35-a52e-9f953342aac0'

export async function submitContactForm(form) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: form.subject ? `New contact form: ${form.subject}` : 'New contact form submission',
      from_name: 'Greenway Pathways website',
      name: form.name,
      email: form.email,
      phone: form.phone || 'Not provided',
      message: form.message,
    }),
  })

  const data = await res.json()
  if (!data.success) {
    throw new Error(data.message || 'Submission failed')
  }
  return data
}

