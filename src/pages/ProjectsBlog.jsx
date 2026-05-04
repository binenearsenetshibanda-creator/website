const articles = [
  {
    icon: '🔒',
    title: "Rapport d'incident : Application du NIST Cybersecurity Framework face à une attaque SYN Flood",
    href: 'https://medium.com/@binenearsenetshibanda/rapport-dincident-application-du-nist-cybersecurity-framework-face-%C3%A0-une-attaque-syn-flood-4c66ea87d570',
    description: "Guide pratique sur l'application du NIST CSF lors d'une attaque SYN Flood, avec analyse complète de l'incident et mesures de mitigation.",
    tags: ['Cybersécurité', 'NIST', 'Incident Response'],
    readTime: '8 min',
  },
  {
    icon: '🌐',
    title: 'Internet en sécurité : Un défi collectif',
    href: 'https://medium.com/@binenearsenetshibanda/internet-en-s%C3%A9curit%C3%A9-un-d%C3%A9fi-collectif-bae7a6fb2a0b',
    description: "Analyse approfondie des enjeux et défis de sécurité dans le contexte moderne d'Internet, avec recommandations pratiques.",
    tags: ['Sécurité', 'Infrastructure', 'Bonnes pratiques'],
    readTime: '6 min',
  },
  {
    icon: '☁️',
    title: "Automatiser les mises à jour système sur Amazon EC2 : Mon parcours dans AWS re/Start",
    href: 'https://medium.com/@binenearsenetshibanda/automatiser-les-mises-%C3%A0-jour-syst%C3%A8me-sur-amazon-ec2-mon-parcours-dans-aws-re-start-cohorte-6-2e62c293a2df',
    description: "Tutoriel complet sur l'automatisation des mises à jour système EC2 avec retours d'expérience du programme AWS re/Start.",
    tags: ['AWS', 'DevOps', 'Automation'],
    readTime: '10 min',
  },
]

export default function ProjectsBlog() {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Projets & Blog</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Initiatives et publications</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Articles et projets orientés cybersécurité, cloud et surveillance d’infrastructure.
          </p>
        </div>

        <div className="grid gap-6">
          {articles.map((item) => (
            <article
              key={item.title}
              className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
            >
              <a href={item.href} target="_blank" rel="noreferrer" className="no-underline">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{item.icon}</span>
                      <span className="text-sm font-semibold text-[var(--color-royal)]">Medium ↗</span>
                    </div>
                    <h2 className="text-xl font-semibold text-slate-900 group-hover:text-[var(--color-royal)] transition">{item.title}</h2>
                  </div>
                </div>
                <p className="mt-4 text-slate-600">{item.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-[var(--color-royal)]/10 px-3 py-1 text-xs font-medium text-[var(--color-royal)]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-slate-500 font-medium">
                  📖 {item.readTime}
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
