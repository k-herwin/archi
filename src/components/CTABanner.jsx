import { useScrollFade } from '../hooks/useScrollFade'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  const ref = useScrollFade()
  return (
    <section id="contact" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="fade-up relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="text-xs text-accent-400 font-semibold uppercase tracking-widest mb-5">
          Prêt à simplifier votre pratique ?
        </div>
        <h2 className="text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
          Découvrez Archiflow
          <br />
          <span className="font-semibold text-accent-400">en 30 minutes chrono.</span>
        </h2>
        <p className="text-zinc-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Planifiez une démo personnalisée avec notre équipe — nous adaptons la présentation
          à la taille et à la spécialité de votre agence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:demo@archiflow.app"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-accent-600 text-white text-sm font-semibold rounded-xl hover:bg-accent-500 transition-colors group"
          >
            Demander une démo gratuite
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="mailto:contact@archiflow.app"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-zinc-700 text-zinc-300 text-sm font-medium rounded-xl hover:border-zinc-500 hover:text-white transition-colors"
          >
            Nous contacter par email
          </a>
        </div>
        <p className="text-zinc-600 text-xs mt-8">
          Essai 14 jours gratuit · Sans carte bancaire · Sans engagement
        </p>
      </div>
    </section>
  )
}
