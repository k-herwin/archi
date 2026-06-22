import { ArrowRight, CheckCircle2 } from 'lucide-react'

const highlights = [
  'Tout centralisé — un seul outil pour l\'intégralité du projet',
  'Administratif automatisé — permis de construire, analyse réglementaire',
  'Portail client collaboratif — validations et suivi en ligne',
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden bg-white">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#18181b 1px, transparent 1px), linear-gradient(90deg, #18181b 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Accent gradient blob */}
      <div className="absolute top-32 right-0 w-[600px] h-[600px] rounded-full bg-accent-50 opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-zinc-50 opacity-80 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent-50 border border-accent-100 rounded-full text-xs font-semibold text-accent-600 mb-6 tracking-wide uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-500 inline-block" />
            Gestion de projets d'architecture
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-zinc-900 leading-[1.1] tracking-tight mb-5">
            Tout votre cycle de projet,{' '}
            <span className="font-semibold italic text-accent-600">
              une seule&nbsp;interface.
            </span>
          </h1>

          {/* Sub */}
          <p className="text-base sm:text-lg text-zinc-500 leading-relaxed mb-8 max-w-2xl">
            Du premier rendez-vous client à la livraison du chantier — Archifollow centralise chaque étape : dossiers,
            plans, permis, planning, facturation et portail client collaboratif.
          </p>

          {/* Highlights */}
          <ul className="space-y-2.5 mb-10">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-sm text-zinc-600">
                <CheckCircle2 size={16} className="text-accent-500 mt-0.5 shrink-0" />
                {h}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors group"
            >
              Demander une démo gratuite
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg hover:border-zinc-300 hover:bg-zinc-50 transition-colors"
            >
              Voir les fonctionnalités
            </a>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-b from-white via-transparent to-white pointer-events-none z-10" />
          <div className="relative bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 max-w-5xl">
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">
              <span className="w-3 h-3 rounded-full bg-zinc-700 shrink-0" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 shrink-0" />
              <span className="w-3 h-3 rounded-full bg-zinc-700 shrink-0" />
              <span className="ml-3 text-xs text-zinc-500 font-mono truncate">
                archifollow.app / projets / villa-dupont
              </span>
            </div>

            {/* App layout */}
            <div className="flex min-h-[360px] sm:min-h-[440px]">
              {/* Sidebar — masquée sur mobile */}
              <div className="hidden md:flex flex-col w-48 lg:w-52 shrink-0 border-r border-zinc-800 p-4 space-y-1">
                <div className="text-xs text-zinc-500 uppercase tracking-widest px-3 py-2 font-medium">Projets</div>
                {['Villa Dupont', 'Résidence Azur', 'Bureaux Central', 'Immeuble Atlas'].map((p, i) => (
                  <div
                    key={p}
                    className={`px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${
                      i === 0 ? 'bg-zinc-800 text-white' : 'text-zinc-500'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${i === 0 ? 'bg-accent-500' : 'bg-zinc-700'}`} />
                    <span className="truncate">{p}</span>
                  </div>
                ))}
                <div className="pt-4">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest px-3 py-2 font-medium">Outils</div>
                  {['Documents', 'Planning', 'Chantier', 'Facturation'].map((t) => (
                    <div key={t} className="px-3 py-2 text-sm text-zinc-500 rounded-lg cursor-default">{t}</div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 min-w-0 p-4 sm:p-6 space-y-4 sm:space-y-5">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-white font-semibold text-sm sm:text-base lg:text-lg truncate">
                      Villa Dupont — Aix-en-Provence
                    </div>
                    <div className="text-zinc-400 text-xs mt-0.5 truncate">
                      Phase 4 · Permis de construire · Déposé le 12 mars 2025
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-accent-600/20 rounded-full shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse" />
                    <span className="text-xs text-accent-400 font-medium hidden sm:inline">En cours</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs text-zinc-500 mb-1.5">
                    <span>Avancement global</span><span>62%</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[62%] bg-accent-500 rounded-full" />
                  </div>
                </div>

                {/* Phase timeline */}
                <div className="grid grid-cols-6 gap-1">
                  {['Cadrage', 'Terrain', 'Prog.', 'Permis', 'Exec.', 'Livraison'].map((ph, i) => (
                    <div key={ph} className="text-center">
                      <div
                        className={`h-1.5 rounded-full mb-1 ${
                          i < 3 ? 'bg-emerald-500' : i === 3 ? 'bg-accent-500' : 'bg-zinc-700'
                        }`}
                      />
                      <div className="text-[9px] sm:text-[10px] text-zinc-500 truncate">{ph}</div>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: 'Documents', val: '47', unit: 'fichiers' },
                    { label: 'Prochaine', val: '18 juil.', unit: 'Réunion' },
                    { label: 'Budget', val: '284k€', unit: 'sur 310k€' },
                  ].map((s) => (
                    <div key={s.label} className="bg-zinc-800/60 rounded-xl p-2 sm:p-3">
                      <div className="text-zinc-500 text-[10px] sm:text-xs mb-1 truncate">{s.label}</div>
                      <div className="text-white text-sm sm:text-base font-semibold">{s.val}</div>
                      <div className="text-zinc-500 text-[10px] sm:text-xs truncate">{s.unit}</div>
                    </div>
                  ))}
                </div>

                {/* Recent activity */}
                <div className="space-y-2">
                  <div className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Activité récente</div>
                  {[
                    { text: 'Dossier permis de construire généré automatiquement', time: 'Aujourd\'hui', dot: 'bg-accent-500' },
                    { text: 'Compte-rendu de chantier du 15/06 ajouté', time: 'Hier', dot: 'bg-emerald-500' },
                    { text: 'Client Dupont a validé les plans d\'exécution', time: 'il y a 3j', dot: 'bg-emerald-500' },
                  ].map((a) => (
                    <div key={a.text} className="flex items-start gap-2.5 py-2 border-b border-zinc-800/60 last:border-0">
                      <span className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${a.dot}`} />
                      <div className="flex-1 min-w-0">
                        <div className="text-zinc-300 text-xs leading-relaxed">{a.text}</div>
                      </div>
                      <div className="text-zinc-600 text-xs shrink-0 ml-2">{a.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
