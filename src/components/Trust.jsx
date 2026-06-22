const stats = [
  { value: '1 200+', label: 'projets gérés' },
  { value: '340', label: 'agences équipées' },
  { value: '18h', label: 'administratives économisées par projet' },
  { value: '98%', label: 'de satisfaction client' },
]

const agencies = [
  'Atelier Marin', 'Groupe Architectes Sud', 'Studio Ligne', 'AB&A Architectes',
  'Forma Architecture', 'Dupont & Associés',
]

export default function Trust() {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50/60 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-zinc-900 mb-1">{s.value}</div>
              <div className="text-sm text-zinc-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Agency logos (text placeholders) */}
        <div className="text-center mb-6">
          <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
            Adopté par des agences indépendantes et des groupements
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {agencies.map((a) => (
            <span
              key={a}
              className="text-sm font-semibold text-zinc-300 tracking-wide uppercase"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
