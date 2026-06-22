import { useScrollFade } from '../hooks/useScrollFade'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Avant Archifollow, je jonglais entre 6 outils différents pour gérer un seul projet. Aujourd\'hui tout est au même endroit — le dossier de permis, les échanges client, le suivi chantier. J\'ai gagné facilement 2 jours par mois sur l\'administratif.',
    name: 'Sophie Mariani',
    role: 'Architecte indépendante',
    agency: 'Atelier Mariani, Lyon',
    size: '1 architecte, 12 projets / an',
    initials: 'SM',
  },
  {
    quote:
      'Le portail client a changé notre relation avec nos maîtres d\'ouvrage. Ils voient l\'avancement, les photos de chantier, leurs paiements. On a quasiment éliminé les emails de demande de nouvelles — et nos clients nous recommandent davantage grâce à cette transparence.',
    name: 'Karim Benali',
    role: 'Associé gérant',
    agency: 'KB & Associés Architectes, Paris',
    size: '8 architectes, 35 projets actifs',
    initials: 'KB',
  },
  {
    quote:
      'L\'analyse réglementaire automatisée est bluffante. Sur un projet récent en zone protégée, Archifollow a identifié des contraintes PLU qu\'on avait manquées — ça nous a évité un dossier de permis refusé. Retour sur investissement immédiat.',
    name: 'Isabelle Vernet',
    role: 'Directrice de projets',
    agency: 'Groupe Archi Sud, Montpellier',
    size: '14 architectes, 3 agences',
    initials: 'IV',
  },
]

function TestiCard({ t, index }) {
  const ref = useScrollFade()
  return (
    <div
      ref={ref}
      className="fade-up bg-white rounded-2xl p-8 border border-zinc-100 flex flex-col"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote size={20} className="text-accent-300 mb-5 shrink-0" />
      <p className="text-zinc-700 text-sm leading-relaxed flex-1 mb-8">{t.quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white text-sm font-bold shrink-0">
          {t.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-zinc-900">{t.name}</div>
          <div className="text-xs text-zinc-500">{t.role} · {t.agency}</div>
          <div className="text-xs text-zinc-400 mt-0.5">{t.size}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const titleRef = useScrollFade()
  return (
    <section id="testimonials" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs text-accent-600 font-semibold uppercase tracking-widest mb-4">
            Témoignages
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-zinc-900 leading-tight">
            Ce que disent{' '}
            <span className="font-semibold">les agences qui l'utilisent</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestiCard key={t.name} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
