import { useScrollFade } from '../hooks/useScrollFade'
import { ShieldCheck, Zap, AlertTriangle, Wifi } from 'lucide-react'

const items = [
  {
    icon: <ShieldCheck size={20} />,
    label: 'Règles PLU & urbanisme',
    details: ['Hauteur maximale autorisée', 'Emprise au sol (COS/CES)', 'Distances de recul (voirie, voisins)', 'Couleurs & matériaux imposés par secteur'],
    color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    icon: <AlertTriangle size={20} />,
    label: 'Risques naturels & pollutions',
    details: ['Zones inondables (PPRI, PPRL)', 'Mouvements de terrain', 'Pollution des sols (BASIAS, BASOL)', 'Nappes phréatiques superficielles'],
    color: 'bg-amber-50 text-amber-700 border-amber-100',
  },
  {
    icon: <Wifi size={20} />,
    label: 'Réseaux & raccordements',
    details: ['Eau potable et assainissement', 'Électricité et gaz', 'Télécom et fibre optique', 'Distances et coûts de raccordement estimés'],
    color: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    icon: <Zap size={20} />,
    label: 'Résultat en quelques minutes',
    details: ['Rapport synthétique généré automatiquement', 'Intégré directement au dossier projet', 'Mise à jour si la réglementation change', 'Gain estimé : 4 à 6h par projet'],
    color: 'bg-accent-50 text-accent-700 border-accent-100',
  },
]

export default function Regulatory() {
  const titleRef = useScrollFade()
  const gridRef = useScrollFade()

  return (
    <section className="py-28 bg-zinc-950 overflow-hidden relative">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div ref={titleRef} className="fade-up">
            <div className="text-xs text-accent-400 font-semibold uppercase tracking-widest mb-4">
              Analyse réglementaire & technique
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-white leading-tight mb-6">
              Fini les heures perdues
              <br />
              <span className="font-semibold text-accent-400">à éplucher les PLU</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Vous (ou votre équipe) saisissez une fois les données récupérées auprès de la commune —
              zone, COS, CUS, hauteur max, reculs. Archifollow structure ces infos dans une fiche parcelle
              propre, calcule automatiquement la surface constructible, l'emprise au sol max et les marges
              disponibles, puis génère un rapport de faisabilité PDF intégré directement au dossier.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-3 bg-accent-600 text-white text-sm font-semibold rounded-lg hover:bg-accent-500 transition-colors"
              >
                Voir la démo
              </a>
              <div className="flex items-center gap-2 px-5 py-3">
                <span className="text-2xl font-bold text-white">4–6h</span>
                <span className="text-sm text-zinc-400">économisées par projet sur l'analyse réglementaire</span>
              </div>
            </div>
          </div>

          {/* Right — cards */}
          <div ref={gridRef} className="fade-up grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <div
                key={item.label}
                className={`bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm`}
              >
                <div className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-semibold mb-4 ${item.color}`}>
                  {item.icon}
                  {item.label}
                </div>
                <ul className="space-y-2">
                  {item.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="w-1 h-1 rounded-full bg-zinc-500 mt-2 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
