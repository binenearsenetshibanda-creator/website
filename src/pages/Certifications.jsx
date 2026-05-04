import {
  BadgeCheck,
  Briefcase,
  Cloud,
  Cpu,
  Globe2,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react'

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    description: 'En cours - certification attendue en mai 2026.',
    status: 'En cours',
    tags: ['Cloud', 'AWS'],
    icon: Cloud,
  },
  {
    title: 'Cisco CyberOps Associate',
    description: 'Compétences en opérations de cybersécurité, réponse aux incidents et défense réseau.',
    status: 'Validé',
    tags: ['Sécurité', 'Réseau'],
    icon: ShieldCheck,
  },
  {
    title: 'Intro to Splunk',
    description: 'Recherche, observabilité et analyse des logs avec Splunk.',
    status: 'Validé',
    tags: ['Observabilité', 'Logs'],
    icon: Search,
  },
  {
    title: 'Google Cybersecurity Professional Certificate',
    description: 'Parcours complet pour renforcer la défense des systèmes et des réseaux.',
    status: 'Validé',
    tags: ['Sécurité', 'Cloud'],
    icon: ShieldCheck,
  },
  {
    title: 'Google IT Support Professional Certificate',
    description: 'Support IT, dépannage et administration des systèmes.',
    status: 'Validé',
    tags: ['Support', 'Hardware'],
    icon: Cpu,
  },
  {
    title: 'Network Defense',
    description: 'Stratégies pour protéger les réseaux et contrer les attaques.',
    status: 'Validé',
    tags: ['Réseau', 'Sécurité'],
    icon: Server,
  },
  {
    title: 'Linux Essentials',
    description: 'Bases de l’administration Linux, shell et environnements serveurs.',
    status: 'Validé',
    tags: ['Linux', 'Terminal'],
    icon: Terminal,
  },
  {
    title: 'Networking Devices and Initial Configuration',
    description: 'Configuration d’équipements réseau et principes de connectivité.',
    status: 'Validé',
    tags: ['Réseau', 'Infrastructure'],
    icon: Server,
  },
  {
    title: 'HP LIFE — Effective Websites',
    description: 'Création de sites performants, accessibles et engageants.',
    status: 'Validé',
    tags: ['Web', 'UX'],
    icon: Globe2,
  },
  {
    title: 'AI Fluency for Students',
    description: 'Comprendre et utiliser l’IA de façon responsable en entreprise.',
    status: 'Validé',
    tags: ['IA', 'Transformation'],
    icon: Sparkles,
  },
  {
    title: 'Agile Project Management',
    description: 'Gestion de projet agile, collaboration et livraison continue.',
    status: 'Validé',
    tags: ['Agile', 'Projet'],
    icon: Briefcase,
  },
]

export default function Certifications() {
  return (
    <section className="space-y-8">
      <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-px shadow-xl">
        <div className="rounded-[32px] bg-white p-8 shadow-soft sm:p-10">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm uppercase tracking-[0.48em] text-[var(--color-royal)]">Certifications</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Badges professionnels et certifications</h1>
            <p className="mt-5 text-slate-600 leading-8">
              Un profil de certifications validées et en cours, démontrant une expertise en cybersécurité, cloud, support IT, administration réseau et gestion agile.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-royal)]">Total</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">11</p>
              <p className="mt-2 text-sm text-slate-600">certifications et badges</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-royal)]">En cours</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">1</p>
              <p className="mt-2 text-sm text-slate-600">formation AWS Cloud Practitioner</p>
            </div>
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-royal)]">Domaines</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">5</p>
              <p className="mt-2 text-sm text-slate-600">cybersécurité, cloud, réseau, IA, agile</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => {
              const Icon = cert.icon
              return (
                <div
                  key={cert.title}
                  className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--color-royal)] hover:bg-white hover:shadow-xl"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-royal)]/10 text-[var(--color-royal)] shadow-sm">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-royal)]">Certification</span>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        cert.status === 'Validé'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                  <h2 className="mt-6 text-2xl font-semibold text-slate-900 transition group-hover:text-[var(--color-royal)]">
                    {cert.title}
                  </h2>
                  <p className="mt-4 text-slate-600 leading-7">{cert.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[var(--color-royal)]/10 px-3 py-1 text-xs font-semibold text-[var(--color-royal)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-10 rounded-[28px] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Badge numérique</p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-white/10 text-white">
                    <BadgeCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h2 className="text-3xl font-semibold">Consultez mon profil Credly</h2>
                    <p className="mt-3 max-w-2xl text-slate-300 leading-7">
                      Accédez aux badges officiels, aux reconnaissances numériques et à la preuve de mes compétences professionnelles.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.credly.com/users/arsene-tshibanda-binene"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-royal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-royal)]/90"
              >
                Voir le profil Credly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
