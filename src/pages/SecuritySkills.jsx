import { Cloud, ShieldCheck, Server, Terminal, Wrench } from 'lucide-react'

export default function SecuritySkills() {
  const skills = [
    {
      title: 'Administration Linux',
      details: 'Ubuntu, Kali, gestion des services, scripts shell et gestion des utilisateurs.',
      icon: Terminal,
    },
    {
      title: 'Cloud AWS',
      details: 'EC2, CloudWatch, IAM, surveillance des ressources et déploiement sécurisé.',
      icon: Cloud,
    },
    {
      title: 'Réseaux',
      details: 'TCP/IP, VLAN, VPN, diagnostic réseau et configuration d’infrastructure.',
      icon: Server,
    },
  ]

  const tools = ['Wireshark', 'Nmap', 'Snort', 'Analyse de logs', 'Bash', 'CloudWatch']

  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Compétences</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Cybersécurité & technologies</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Une expertise technique complète en sécurité, administration cloud et gestion des infrastructures réseau.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon
            return (
              <div key={skill.title} className="group rounded-[28px] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-royal)]/10 text-[var(--color-royal)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-royal)]">{skill.title}</p>
                </div>
                <p className="mt-5 text-slate-600 leading-7">{skill.details}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">Outils spécialisés</h2>
              <p className="mt-2 text-slate-600">
                Technologies et solutions utilisées pour l’analyse, la détection et la sécurisation des environnements.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-royal)]/10 px-3 py-2 text-sm font-semibold text-[var(--color-royal)]">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              SOC Focus
            </span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="rounded-2xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
