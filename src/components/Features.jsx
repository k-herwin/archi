import { useScrollFade } from '../hooks/useScrollFade'
import {
  Users, MapPin, FileText, Wrench, HardHat, Share2,
  ClipboardList, ScanLine, LayoutDashboard, BookOpen,
  Camera, CreditCard
} from 'lucide-react'

const phases = [
  {
    number: '01',
    title: 'Cadrage du projet',
    color: 'bg-zinc-900 text-white',
    accent: 'text-zinc-400',
    icon: <Users size={18} />,
    features: [
      'Qualification du client (particulier, entreprise, collectivité, promoteur)',
      'Recueil des besoins : espaces, usages, surfaces, contraintes spécifiques',
      'Définition des honoraires et délais dès la prise de mandat',
      'Génération automatique du contrat d\'honoraires',
    ],
  },
  {
    number: '02',
    title: 'Analyse terrain & réglementaire',
    color: 'bg-white text-zinc-900 border border-zinc-200',
    accent: 'text-zinc-400',
    icon: <MapPin size={18} />,
    features: [
      'Notes de terrain : photos, mesures, vidéos géolocalisées',
      'Analyse PLU assistée : hauteur max, emprise au sol, marges de recul',
      'Identification des risques : inondation, retrait-gonflement, PPRI',
      'Cartographie des réseaux : eau, électricité, assainissement, gaz, télécom',
    ],
  },
  {
    number: '03',
    title: 'Programme & esquisses',
    color: 'bg-white text-zinc-900 border border-zinc-200',
    accent: 'text-zinc-400',
    icon: <BookOpen size={18} />,
    features: [
      'Génération assistée du programme architectural de référence',
      'Espace dédié aux premières esquisses et croquis',
      'Résumé de projet automatique pour présentation client',
      'Estimation financière prévisionnelle par poste',
    ],
  },
  {
    number: '04',
    title: 'Administratif & permis',
    color: 'bg-accent-600 text-white',
    accent: 'text-accent-200',
    icon: <FileText size={18} />,
    features: [
      'Génération automatisée du dossier de permis de construire',
      'Vérification des pièces réglementaires requises',
      'Suivi de l\'instruction et des délais légaux',
      'Archivage sécurisé des arrêtés et autorisations',
    ],
  },
  {
    number: '05',
    title: 'Exécution & chantier',
    color: 'bg-white text-zinc-900 border border-zinc-200',
    accent: 'text-zinc-400',
    icon: <HardHat size={18} />,
    features: [
      'Plans d\'exécution détaillés (matériaux, étanchéité, menuiseries)',
      'Cahier des charges technique par lot entreprise',
      'Suivi de chantier : planning, réunions, comptes-rendus',
      'Gestion des réserves, réception et facturation',
    ],
  },
  {
    number: '06',
    title: 'Portail client collaboratif',
    color: 'bg-zinc-900 text-white',
    accent: 'text-zinc-400',
    icon: <Share2 size={18} />,
    features: [
      'Accès sécurisé au suivi d\'avancement en temps réel',
      'Galerie photos de chantier publiée par l\'architecte',
      'Validations de documents et commentaires en ligne',
      'Échéancier de paiements transparent',
    ],
  },
]

function PhaseCard({ phase, index }) {
  const ref = useScrollFade()
  return (
    <div
      ref={ref}
      className={`fade-up rounded-2xl p-8 ${phase.color} relative overflow-hidden`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-6">
        <div className={`text-5xl font-bold leading-none ${
          phase.color.includes('bg-accent') ? 'text-accent-400' :
          phase.color.includes('bg-zinc-900') ? 'text-zinc-700' : 'text-zinc-100'
        }`}>
          {phase.number}
        </div>
        <div className={`p-2 rounded-lg ${
          phase.color.includes('bg-white') ? 'bg-zinc-100' :
          phase.color.includes('bg-accent') ? 'bg-accent-500' : 'bg-zinc-800'
        }`}>
          {phase.icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold mb-5">{phase.title}</h3>
      <ul className="space-y-2.5">
        {phase.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed">
            <span className={`w-1 h-1 rounded-full mt-2 shrink-0 ${
              phase.color.includes('bg-white') ? 'bg-accent-500' : 'bg-current opacity-50'
            }`} />
            <span className={phase.color.includes('bg-white') ? 'text-zinc-600' : 'opacity-80'}>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Features() {
  const titleRef = useScrollFade()
  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up max-w-2xl mb-16">
          <div className="text-xs text-accent-600 font-semibold uppercase tracking-widest mb-4">
            Cycle de vie complet
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-zinc-900 leading-tight mb-5">
            Un seul outil,{' '}
            <span className="font-semibold">tout le cycle de&nbsp;vie</span> du projet
          </h2>
          <p className="text-lg text-zinc-500 leading-relaxed">
            Fini les informations dispersées entre emails, Excel, Dropbox et WhatsApp. Archifollow
            accompagne chaque phase de votre projet, de la prise de besoin jusqu'à la livraison.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {phases.map((phase, i) => (
            <PhaseCard key={phase.number} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
