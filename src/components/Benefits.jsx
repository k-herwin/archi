import { useScrollFade } from '../hooks/useScrollFade'
import { Timer, FolderOpen, Users, TrendingUp, FileCheck, Layers } from 'lucide-react'

const items = [
  {
    icon: <Timer size={22} />,
    stat: '2×',
    label: 'plus vite',
    desc: 'Dossier de permis de construire monté et généré deux fois plus rapidement grâce à l\'automatisation.',
  },
  {
    icon: <FolderOpen size={22} />,
    stat: '0',
    label: 'information perdue',
    desc: 'Documents, échanges, plans, comptes-rendus — tout est centralisé, versionnés, accessibles en permanence.',
  },
  {
    icon: <Users size={22} />,
    stat: '−60%',
    label: 'de relances client',
    desc: 'Le portail client réduit drastiquement les appels et emails de demande de nouvelles en cours de projet.',
  },
  {
    icon: <TrendingUp size={22} />,
    stat: '18h',
    label: 'économisées / projet',
    desc: 'En temps administratif moyen — analyse réglementaire, génération de documents, coordination chantier.',
  },
  {
    icon: <FileCheck size={22} />,
    stat: '100%',
    label: 'des pièces vérifiées',
    desc: 'Le système contrôle l\'exhaustivité du dossier avant chaque dépôt ou envoi — fini les oublis de pièces.',
  },
  {
    icon: <Layers size={22} />,
    stat: '1',
    label: 'seul outil',
    desc: 'Remplace emails, Excel, Dropbox, WhatsApp, logiciels de facturation et outils de planning disparates.',
  },
]

function BenefitCard({ item, index }) {
  const ref = useScrollFade()
  return (
    <div
      ref={ref}
      className="fade-up p-8 rounded-2xl border border-zinc-100 hover:border-accent-200 hover:shadow-sm transition-all"
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="w-10 h-10 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center mb-5">
        {item.icon}
      </div>
      <div className="flex items-baseline gap-1.5 mb-1">
        <span className="text-4xl font-bold text-zinc-900">{item.stat}</span>
        <span className="text-lg text-accent-600 font-semibold">{item.label}</span>
      </div>
      <p className="text-sm text-zinc-500 leading-relaxed mt-3">{item.desc}</p>
    </div>
  )
}

export default function Benefits() {
  const titleRef = useScrollFade()
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs text-accent-600 font-semibold uppercase tracking-widest mb-4">
            Résultats mesurables
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-zinc-900 leading-tight mb-4">
            Des bénéfices{' '}
            <span className="font-semibold">concrets et chiffrés</span>
          </h2>
          <p className="text-zinc-500 text-lg leading-relaxed">
            Archifollow n'est pas un outil de plus à gérer — c'est le gain de temps et de sérénité
            que vous n'osiez plus espérer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <BenefitCard key={item.label} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
