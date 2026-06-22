import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { useScrollFade } from '../hooks/useScrollFade'

const faqs = [
  {
    q: 'Les données de mes projets et de mes clients sont-elles sécurisées ?',
    a: 'Oui. Toutes les données sont hébergées sur des serveurs certifiés ISO 27001 situés en France. Les données sont chiffrées en transit (TLS 1.3) et au repos (AES-256). Chaque agence dispose d\'un espace de données totalement isolé. Archifollow est conforme RGPD et vous restez propriétaire de vos données.',
  },
  {
    q: 'Archifollow est-il compatible avec mes logiciels de CAO/BIM existants (AutoCAD, Revit, ArchiCAD) ?',
    a: 'Archifollow ne remplace pas vos logiciels de dessin technique — il les complète. Vous pouvez importer et exporter des fichiers DWG, DXF, PDF, IFC et RVT. Le plan Multi-agences inclut une API et des connecteurs BIM pour une intégration avancée dans votre flux de travail existant.',
  },
  {
    q: 'Comment fonctionne le portail client ? Mon client doit-il installer une application ?',
    a: 'Non. Le portail client est accessible depuis un simple lien sécurisé envoyé par email — aucune installation requise. Le client se connecte avec son adresse email et un code à usage unique. Vous gardez le contrôle total sur ce qui est visible : vous publiez vous-même les photos, mises à jour et documents que vous souhaitez partager.',
  },
  {
    q: 'Combien de temps faut-il pour prendre en main Archifollow et migrer ses projets existants ?',
    a: 'La majorité des utilisateurs sont opérationnels en moins d\'une journée. L\'import de projets existants (documents, contacts, données) est assisté par notre équipe lors de l\'onboarding. Pour les agences multi-utilisateurs, nous proposons une session de formation en ligne incluse dans le plan Agence.',
  },
  {
    q: 'L\'analyse réglementaire automatisée couvre-t-elle tous les territoires ?',
    a: 'Archifollow couvre l\'intégralité du territoire français métropolitain, avec un accès aux PLU et cartes de risques des communes partenaires. La couverture s\'étend progressivement aux DOM-TOM et aux pays francophones. Pour les zones non encore couvertes, le module de saisie manuelle vous permet d\'intégrer les données réglementaires manuellement.',
  },
  {
    q: 'Que se passe-t-il si je souhaite arrêter mon abonnement ? Puis-je récupérer mes données ?',
    a: 'Vous pouvez exporter l\'intégralité de vos données (documents, plans, contacts, historiques) en un clic, à tout moment, au format standard (ZIP + CSV). Pas de données otage. Après résiliation, vos données sont conservées 90 jours puis supprimées définitivement selon la politique RGPD.',
  },
]

function FAQItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-zinc-200 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-zinc-900 leading-snug">{item.q}</span>
        <span className="shrink-0 mt-0.5 text-zinc-400">
          {open ? <Minus size={16} /> : <Plus size={16} />}
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm text-zinc-500 leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const titleRef = useScrollFade()
  const listRef = useScrollFade()

  return (
    <section className="py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div ref={titleRef} className="fade-up text-center mb-14">
          <div className="text-xs text-accent-600 font-semibold uppercase tracking-widest mb-4">FAQ</div>
          <h2 className="text-4xl font-light text-zinc-900">
            Questions fréquentes
          </h2>
        </div>
        <div ref={listRef} className="fade-up">
          {faqs.map((item) => (
            <FAQItem key={item.q} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
