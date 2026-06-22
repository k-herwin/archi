import { useScrollFade } from '../hooks/useScrollFade'
import { CheckCircle2, Clock, Circle, Camera, CreditCard, MessageSquare, TrendingUp } from 'lucide-react'

const phases = [
  { label: 'Cadrage & contrat', status: 'done', date: 'Janv. 2025' },
  { label: 'Analyse terrain', status: 'done', date: 'Fév. 2025' },
  { label: 'Programme & esquisses', status: 'done', date: 'Mars 2025' },
  { label: 'Permis de construire', status: 'active', date: 'En cours' },
  { label: 'Plans d\'exécution', status: 'pending', date: 'Juil. 2025' },
  { label: 'Suivi de chantier', status: 'pending', date: 'Sept. 2025' },
  { label: 'Livraison', status: 'pending', date: 'Déc. 2025' },
]

const photos = [
  { label: 'Terrassement terminé', date: '04 juin 2025' },
  { label: 'Fondations — semelles', date: '12 juin 2025' },
  { label: 'Dalle rez-de-chaussée', date: '18 juin 2025' },
  { label: 'Élévation murs nord', date: '25 juin 2025' },
]

const payments = [
  { label: 'Acompte à la signature', amount: '8 500 €', status: 'paid' },
  { label: 'Dépôt du permis', amount: '8 500 €', status: 'paid' },
  { label: 'Démarrage chantier', amount: '8 500 €', status: 'upcoming', date: '15 juil.' },
  { label: 'Clôture', amount: '8 500 €', status: 'future' },
]

const messages = [
  { text: 'Le dossier de permis de construire a été déposé en mairie ce matin. Délai d\'instruction estimé : 2 mois.', date: '10 juin' },
  { text: 'Coulage de la dalle du rez-de-chaussée prévu la semaine prochaine. Passage de l\'artisan plombier confirmé.', date: '18 juin' },
  { text: 'Photos de l\'élévation nord ajoutées dans la galerie. Très bon avancement — dans les délais.', date: '25 juin' },
]

function StatusIcon({ status }) {
  if (status === 'done') return <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
  if (status === 'active') return <Clock size={16} className="text-accent-500 shrink-0" />
  return <Circle size={16} className="text-zinc-300 shrink-0" />
}

export default function ClientPortal() {
  const titleRef = useScrollFade()
  const mockupRef = useScrollFade()

  return (
    <section id="client-portal" className="py-28 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — pitch */}
          <div ref={titleRef} className="fade-up lg:sticky lg:top-28">
            <div className="text-xs text-accent-600 font-semibold uppercase tracking-widest mb-4">
              Portail client
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light text-zinc-900 leading-tight mb-6">
              Offrez à vos clients
              <br />
              <span className="font-semibold">une expérience de suivi&nbsp;moderne</span>
            </h2>
            <p className="text-lg text-zinc-500 leading-relaxed mb-8">
              Chaque client accède à son espace personnel dédié — sans application à installer.
              Il voit l'avancement de son projet, les photos de chantier, ses paiements, et
              peut faire des retours directement en ligne. Vous réduisez les relances par mail
              et renforcez votre image professionnelle.
            </p>

            <div className="space-y-5 mb-10">
              {[
                { icon: <TrendingUp size={18} />, title: 'Avancement en temps réel', desc: 'Barre de progression globale et timeline des phases, mise à jour par l\'architecte.' },
                { icon: <Camera size={18} />, title: 'Galerie photos de chantier', desc: 'Photos datées publiées par l\'architecte — le client voit le chantier évoluer.' },
                { icon: <CreditCard size={18} />, title: 'Échéancier transparent', desc: 'Montants payés, restants et prochaines échéances, toujours visibles.' },
                { icon: <MessageSquare size={18} />, title: 'Mises à jour de l\'architecte', desc: 'Fil de messages de l\'agence — plus besoin que le client relance pour des nouvelles.' },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-9 h-9 shrink-0 bg-accent-50 rounded-lg flex items-center justify-center text-accent-600">
                    {f.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 mb-0.5">{f.title}</div>
                    <div className="text-sm text-zinc-500 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-900 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
            >
              Voir le portail en démo
            </a>
          </div>

          {/* Right — portal mockup */}
          <div ref={mockupRef} className="fade-up">
            <div className="bg-white rounded-2xl shadow-xl border border-zinc-200 overflow-hidden">
              {/* Portal header */}
              <div className="bg-zinc-900 px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-white font-semibold text-base">Villa Famille Benani</div>
                    <div className="text-zinc-400 text-xs mt-0.5">Dar Bouazza — Maroc</div>
                  </div>
                  <div className="text-xs text-zinc-400">Espace client</div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1.5">
                    <span>Avancement global</span>
                    <span className="text-accent-400 font-semibold">45%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-accent-500 rounded-full" />
                  </div>
                  <div className="text-xs text-zinc-500 mt-1.5">Votre projet est à 45% d'avancement</div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Timeline */}
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Étapes du projet</div>
                  <div className="space-y-2">
                    {phases.map((ph) => (
                      <div key={ph.label} className="flex items-center gap-3">
                        <StatusIcon status={ph.status} />
                        <div className={`flex-1 flex items-center justify-between text-sm ${
                          ph.status === 'done' ? 'text-zinc-400 line-through' :
                          ph.status === 'active' ? 'text-zinc-900 font-medium' : 'text-zinc-400'
                        }`}>
                          <span>{ph.label}</span>
                          <span className={`text-xs font-normal ${
                            ph.status === 'active' ? 'text-accent-500 no-underline' : ''
                          }`} style={{textDecoration: 'none'}}>{ph.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Photos */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs text-zinc-400 uppercase tracking-widest font-medium">Photos de chantier</div>
                    <span className="text-xs text-accent-600 font-medium">4 photos</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {photos.map((ph) => (
                      <div key={ph.label} className="rounded-xl overflow-hidden bg-zinc-100 aspect-video relative">
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                          <Camera size={18} className="text-zinc-400" />
                          <div className="text-[10px] text-zinc-400 text-center px-2">{ph.label}</div>
                        </div>
                        <div className="absolute bottom-1.5 right-1.5 bg-black/50 text-white text-[9px] rounded px-1 py-0.5">
                          {ph.date}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Payments */}
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Mes paiements</div>
                  <div className="space-y-2">
                    {payments.map((p) => (
                      <div key={p.label} className="flex items-center justify-between gap-3 py-2 border-b border-zinc-100 last:border-0">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`w-2 h-2 rounded-full shrink-0 ${
                            p.status === 'paid' ? 'bg-emerald-400' :
                            p.status === 'upcoming' ? 'bg-accent-500 animate-pulse' : 'bg-zinc-200'
                          }`} />
                          <span className="text-sm text-zinc-700 truncate">{p.label}</span>
                          {p.date && <span className="text-xs text-accent-600 font-medium shrink-0">{p.date}</span>}
                        </div>
                        <span className={`text-sm font-semibold shrink-0 ${
                          p.status === 'paid' ? 'text-zinc-400' :
                          p.status === 'upcoming' ? 'text-accent-600' : 'text-zinc-300'
                        }`}>{p.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-zinc-400">Total honoraires</span>
                    <span className="font-semibold text-zinc-900">34 000 €</span>
                  </div>
                </div>

                {/* Messages */}
                <div>
                  <div className="text-xs text-zinc-400 uppercase tracking-widest font-medium mb-3">Messages de l'agence</div>
                  <div className="space-y-3">
                    {messages.map((m) => (
                      <div key={m.text} className="flex gap-3 text-sm">
                        <div className="w-7 h-7 rounded-full bg-zinc-900 flex items-center justify-center text-white text-xs font-bold shrink-0">A</div>
                        <div className="bg-zinc-50 rounded-xl rounded-tl-none px-3 py-2.5 flex-1">
                          <div className="text-zinc-700 text-xs leading-relaxed">{m.text}</div>
                          <div className="text-zinc-400 text-[10px] mt-1.5">{m.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
