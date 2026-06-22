import { useScrollFade } from '../hooks/useScrollFade'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Indépendant',
    price: '89',
    desc: 'Pour l\'architecte qui travaille seul ou en micro-structure.',
    highlight: false,
    features: [
      'Jusqu\'à 10 projets actifs',
      'Toutes les phases de projet',
      'Analyse réglementaire (10 / mois)',
      'Génération dossier permis',
      'Portail client (inclus)',
      'Stockage 50 Go',
      'Support par email',
    ],
    cta: 'Commencer',
  },
  {
    name: 'Agence',
    price: '249',
    desc: 'Pour les agences de 2 à 10 architectes avec des projets simultanés.',
    highlight: true,
    features: [
      'Projets illimités',
      'Jusqu\'à 10 utilisateurs',
      'Toutes les phases de projet',
      'Analyse réglementaire illimitée',
      'Génération dossier permis',
      'Portail client multi-projets',
      'Stockage 500 Go',
      'Planning collaboratif',
      'Rapports & statistiques agence',
      'Support prioritaire (chat + email)',
    ],
    cta: 'Demander une démo',
    badge: 'Le plus populaire',
  },
  {
    name: 'Multi-agences',
    price: 'Sur mesure',
    desc: 'Pour les groupements, promoteurs ou cabinets de plus de 10 architectes.',
    highlight: false,
    features: [
      'Tout le plan Agence',
      'Utilisateurs illimités',
      'Multi-sites / filiales',
      'Onboarding dédié',
      'Intégration SSO / LDAP',
      'API & connecteurs BIM',
      'SLA garanti',
      'Compte manager dédié',
    ],
    cta: 'Nous contacter',
  },
]

function PlanCard({ plan, index }) {
  const ref = useScrollFade()
  return (
    <div
      ref={ref}
      className={`fade-up relative rounded-2xl p-8 flex flex-col ${
        plan.highlight
          ? 'bg-zinc-900 text-white border border-zinc-800 shadow-2xl scale-[1.02]'
          : 'bg-white border border-zinc-200'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center px-3 py-1 bg-accent-600 text-white text-xs font-semibold rounded-full">
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <div className={`text-xs font-semibold uppercase tracking-widest mb-2 ${plan.highlight ? 'text-accent-400' : 'text-zinc-400'}`}>
          {plan.name}
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          {plan.price === 'Sur mesure' ? (
            <span className="text-3xl font-bold">{plan.price}</span>
          ) : (
            <>
              <span className="text-4xl font-bold">{plan.price}€</span>
              <span className={`text-sm ${plan.highlight ? 'text-zinc-400' : 'text-zinc-400'}`}>/mois</span>
            </>
          )}
        </div>
        <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-zinc-400' : 'text-zinc-500'}`}>{plan.desc}</p>
      </div>

      <ul className="space-y-2.5 flex-1 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? 'text-accent-400' : 'text-emerald-500'}`} />
            <span className={plan.highlight ? 'text-zinc-300' : 'text-zinc-600'}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`inline-flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold rounded-lg transition-colors ${
          plan.highlight
            ? 'bg-accent-600 text-white hover:bg-accent-500'
            : 'border border-zinc-200 text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50'
        }`}
      >
        {plan.cta}
        <ArrowRight size={15} />
      </a>
    </div>
  )
}

export default function Pricing() {
  const titleRef = useScrollFade()
  return (
    <section id="pricing" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs text-accent-600 font-semibold uppercase tracking-widest mb-4">
            Tarifs
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 leading-tight mb-4">
            Un abonnement adapté
            <br />
            <span className="font-semibold">à la taille de votre agence</span>
          </h2>
          <p className="text-zinc-500 text-lg">
            Pas d'engagement annuel obligatoire. Essai 14 jours gratuit, sans carte bancaire.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        <p className="text-center text-xs text-zinc-400 mt-10">
          Tous les prix HT. Facturation mensuelle ou annuelle (−15%). Données hébergées en France.
        </p>
      </div>
    </section>
  )
}
