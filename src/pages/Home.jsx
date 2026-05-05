import { Cloud, Download, MessageCircle, ShieldCheck, Terminal } from 'lucide-react'

export default function Home() {
  return (
    <section className="space-y-8">
      <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft p-8 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-royal)]/10 px-4 py-2 text-sm font-semibold text-[var(--color-royal)]">
              Junior SOC Analyst & Cloud Specialist
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                ARSENE BINENE
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-700">
                Technicien IT orienté support, réseaux et systèmes cloud avec une expertise affirmée en cybersécurité. Diplômé AWS re/Start, je combine administration Linux, environnements AWS et analyse de logs pour sécuriser les infrastructures.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/243894012312"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-royal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-royal-light)] active:bg-[var(--color-royal-light)]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Me contacter
              </a>
              <a
                href="/ARSENE_BINENE_CV.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-[var(--color-royal)] hover:text-[var(--color-royal)] active:border-[var(--color-royal)] active:bg-slate-50"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Télécharger le CV
              </a>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm text-slate-700">
                <Terminal className="h-4 w-4 text-slate-500" aria-hidden="true" />
                Ubuntu / Kali
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm text-slate-700">
                <Cloud className="h-4 w-4 text-[var(--color-royal)]" aria-hidden="true" />
                EC2 / CloudWatch
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-3 text-sm text-slate-700">
                <ShieldCheck className="h-4 w-4 text-[var(--color-royal)]" aria-hidden="true" />
                Sécurité continue
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-72 overflow-hidden rounded-[36px] border border-slate-200 shadow-soft">
              <img
                src="/arsene-photo.jpg.jpeg"
                alt="Arsene Binene - Photo de profil"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-royal)]/10 text-[var(--color-royal)]">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--color-royal)]">Mission</p>
          <h2 className="mt-4 text-xl font-semibold text-slate-900">Support IT & Cloud</h2>
          <p className="mt-3 text-slate-600">Aider les équipes à stabiliser l’infrastructure tout en sécurisant les services AWS.</p>
        </article>
        <article className="rounded-[28px] border border-[rgba(29,78,216,0.16)] bg-white p-6 shadow-[0_20px_60px_rgba(29,78,216,0.12)] transition hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-royal)]/10 text-[var(--color-royal)]">
            <Cloud className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--color-royal)]">Valeur</p>
          <h2 className="mt-4 text-xl font-semibold text-slate-900">Pragmatique</h2>
          <p className="mt-3 text-slate-600">Résolution rapide des incidents, documentation claire et collaboration avec les équipes réseau.</p>
        </article>
        <article className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg active:-translate-y-1 active:shadow-lg">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-[var(--color-royal)]/10 text-[var(--color-royal)]">
            <Terminal className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-4 text-sm uppercase tracking-[0.24em] text-[var(--color-royal)]">Savoir-faire</p>
          <h2 className="mt-4 text-xl font-semibold text-slate-900">Analyse de logs</h2>
          <p className="mt-3 text-slate-600">Collecte, tri et interprétation des journaux pour détecter les anomalies et améliorer la surveillance.</p>
        </article>
      </div>
    </section>
  )
}
