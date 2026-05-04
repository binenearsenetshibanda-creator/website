import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Accueil', to: '/' },
  { label: 'Parcours', to: '/parcours' },
  { label: 'Cybersécurité', to: '/cyber-securite' },
  { label: 'Projets', to: '/projets' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Contact', to: '/contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div>
          <NavLink to="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-900">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-royal)] text-sm font-semibold text-white shadow-soft">
              A.
            </span>
            <span className="text-[var(--color-royal)]">Binene</span>
          </NavLink>
          <p className="text-sm text-slate-500">IT support | SOC Analyst Junior | AWS Cloud practitioner</p>
        </div>

        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[var(--color-royal)] hover:text-[var(--color-royal)] focus:outline-none focus:ring-2 focus:ring-[var(--color-royal)]/50 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
        >
          <span>{open ? 'Fermer' : 'Menu'}</span>
          <span className="text-[var(--color-royal)]">≡</span>
        </button>

        <nav
          className={`items-center gap-4 md:flex ${open ? 'block' : 'hidden'}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-[var(--color-royal)] text-white shadow-soft'
                    : 'text-slate-600 hover:text-[var(--color-royal)]'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-[var(--color-royal)]"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
