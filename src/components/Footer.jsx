import { Linkedin, Twitter, Mail } from 'lucide-react'

const links = {
  Produit: ['Fonctionnalités', 'Portail client', 'Tarifs', 'Changelog'],
  Ressources: ['Documentation', 'API', 'Blog', 'Webinaires'],
  Légal: ['Mentions légales', 'CGU', 'Politique de confidentialité', 'RGPD'],
  Entreprise: ['À propos', 'Carrières', 'Partenaires', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-14">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 bg-zinc-800 rounded flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                  <path d="M2 15L9 3L16 15" stroke="#C85A28" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.5 11H13.5" stroke="#C85A28" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-white font-semibold text-sm">Archifollow</span>
            </div>
            <p className="text-zinc-500 text-xs leading-relaxed mb-4">
              Le SaaS qui centralise l'intégralité du cycle de vie de vos projets d'architecture.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="LinkedIn" className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                <Linkedin size={14} />
              </a>
              <a href="#" aria-label="Twitter/X" className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                <Twitter size={14} />
              </a>
              <a href="mailto:contact@archiflow.app" aria-label="Email" className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors">
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([cat, items]) => (
            <div key={cat}>
              <div className="text-xs text-zinc-500 uppercase tracking-widest font-medium mb-4">{cat}</div>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Archifollow SAS. Tous droits réservés. Données hébergées en France.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-zinc-500">Système opérationnel</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
