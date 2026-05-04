export default function Education() {
  return (
    <section className="space-y-8">
      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft sm:p-10">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Parcours Académique</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">Formation et étapes clés</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Un chemin académique axé sur les réseaux, la cybersécurité et les systèmes d’information.
          </p>
        </div>

        <div className="relative space-y-10">
          <div className="absolute left-5 top-6 h-full w-px bg-slate-200" />
          
          <div className="relative flex gap-6 sm:gap-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-royal)] text-white text-xs font-semibold">2025</div>
            <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Licence (Bac+5)</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Réseaux Informatiques</h2>
                  <p className="text-slate-600">HEC-KIN — Kinshasa</p>
                  <p className="mt-2 text-slate-600">Consolidation des compétences en administration réseau, protocoles TCP/IP, sécurité des systèmes et cloud AWS.</p>
                </div>
                <img src="/publichec-kin-logo.jpg" alt="HEC-KIN logo" className="h-16 w-16 object-contain flex-shrink-0 rounded-lg bg-white p-2" />
              </div>
            </div>
          </div>

          <div className="relative flex gap-6 sm:gap-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-royal)] text-white text-xs font-semibold">2023</div>
            <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8 flex-1">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Graduat (Bac+3)</p>
                <h2 className="text-2xl font-semibold text-slate-900">Math-Info</h2>
                <p className="text-slate-600">ISS/KIN — Kinshasa</p>
                <p className="mt-2 text-slate-600">Fondamentaux en mathématiques informatiques, algorithmique, structures de données et administration de systèmes.</p>
              </div>
            </div>
          </div>

          <div className="relative flex gap-6 sm:gap-8">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-royal)] text-white text-xs font-semibold">2021</div>
            <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8 flex-1">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <p className="text-sm uppercase tracking-[0.28em] text-[var(--color-royal)]">Diplôme d'État</p>
                  <h2 className="text-2xl font-semibold text-slate-900">Biologie-Chimie</h2>
                  <p className="text-slate-600">Lycée Notre Dame de Fatima — Kinshasa</p>
                  <p className="mt-2 text-slate-600">Formation générale avec spécialisation en sciences naturelles et expériences pratiques en laboratoire.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
