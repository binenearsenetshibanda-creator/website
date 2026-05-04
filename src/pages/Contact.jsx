import { useState } from 'react'
import { Send, Loader } from 'lucide-react'

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'binenearsenetshibanda@gmail.com',
    href: 'mailto:binenearsenetshibanda@gmail.com',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'arsene-binene',
    href: 'https://www.linkedin.com/in/arsene-binene',
  },
  {
    icon: '📝',
    label: 'Medium',
    value: '@binenearsenetshibanda',
    href: 'https://medium.com/@binenearsenetshibanda',
  },
  {
    icon: '📍',
    label: 'Localisation',
    value: 'Kinshasa, Lingwala — RDC',
    href: null,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess(false)

    if (!formData.email || !formData.subject || !formData.message) {
      setError('Tous les champs sont obligatoires.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Veuillez entrer une adresse email valide.')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xeengqvy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ email: '', subject: '', message: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError("Erreur lors de l'envoi. Veuillez réessayer.")
      }
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Me contacter</h1>
          <p className="mt-3 mx-auto max-w-2xl text-slate-600">
            Vous avez un projet, une question ou envie de discuter IT, cloud et cybersécurité ? Je suis disponible pour échanger sur vos besoins professionnels.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 mb-12">
          {contacts.map((contact) => (
            <div
              key={contact.label}
              className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.label !== 'Email' ? '_blank' : undefined}
                  rel={contact.label !== 'Email' ? 'noreferrer' : undefined}
                  className="no-underline"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{contact.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-royal)]">
                        {contact.label}
                      </p>
                      <p className="mt-2 text-slate-900 font-medium group-hover:text-[var(--color-royal)] transition">
                        {contact.value}
                      </p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{contact.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-royal)]">
                      {contact.label}
                    </p>
                    <p className="mt-2 text-slate-900 font-medium">
                      {contact.value}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-[28px] border border-[rgba(29,78,216,0.16)] bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_20px_60px_rgba(29,78,216,0.12)]">
          <h2 className="text-2xl font-semibold text-slate-900 mb-6">Envoyez-moi un message</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Votre email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vous@example.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-[var(--color-royal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-royal)]/20 transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                Objet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Sujet de votre message"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-[var(--color-royal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-royal)]/20 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message..."
                rows="6"
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder-slate-500 focus:border-[var(--color-royal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-royal)]/20 transition resize-none"
              />
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
                ❌ {error}
              </div>
            )}

            {success && (
              <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-sm text-green-700">
                ✅ Message envoyé avec succès ! Je vous répondrai dans les 24h.
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-royal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-royal-light)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader className="h-4 w-4 animate-spin" aria-hidden="true" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Envoyer le message
                </>
              )}
            </button>
          </form>

          <p className="mt-6 text-sm text-slate-600 text-center border-t border-slate-200 pt-6">
            Je fais de mon mieux pour répondre à tous les messages dans les 24 heures.
          </p>
        </div>
      </div>
    </section>
  )
}
