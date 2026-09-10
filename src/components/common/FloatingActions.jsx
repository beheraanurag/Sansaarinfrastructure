import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'
import { ArrowUp, Phone } from 'lucide-react'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { company } from '../../data/navigation'
import WhatsAppIcon from './WhatsAppIcon'

export default function WhatsAppButton({ className = '' }) {
  const reduce = useReducedMotion()

  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`group relative flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-navy-deep/25 transition hover:scale-105 ${className}`}
    >
      {!reduce ? (
        <motion.span
          className="absolute inset-0 rounded-full bg-[#25D366]"
          animate={{ scale: [1, 1.35, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 4 }}
        />
      ) : null}
      <WhatsAppIcon className="relative size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy px-3 py-1.5 text-xs text-white opacity-0 shadow-md transition group-hover:opacity-100 md:block">
        Chat on WhatsApp
      </span>
    </a>
  )
}

export function CallButton({ className = '' }) {
  return (
    <a
      href={`tel:${company.phoneTel}`}
      aria-label="Call Sansaar Infrastructure"
      className={`flex size-12 items-center justify-center rounded-full border border-gold/40 bg-navy text-gold shadow-lg transition hover:bg-teal hover:text-white ${className}`}
    >
      <Phone className="size-5" />
    </a>
  )
}

function ScrollTopButton({ visible }) {
  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="flex size-11 items-center justify-center rounded-full border border-navy/15 bg-white text-navy shadow-lg transition hover:border-gold-dark hover:text-gold-dark"
    >
      <ArrowUp className="size-5" />
    </button>
  )
}

export function FloatingActions() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 320)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 z-50 flex flex-col items-center gap-3 max-md:bottom-20 md:right-6 md:bottom-8">
      <ScrollTopButton visible={scrolled} />
      <div className="hidden flex-col items-center gap-3 md:flex">
        <CallButton />
        <WhatsAppButton />
      </div>
    </div>
  )
}

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
      <a
        href={`tel:${company.phoneTel}`}
        className="flex min-h-14 items-center justify-center gap-2 border-r border-navy/10 text-sm font-semibold uppercase tracking-[0.14em] text-navy"
      >
        <Phone className="size-4" />
        Call Now
      </a>
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-14 items-center justify-center gap-2 bg-[#25D366] text-sm font-semibold uppercase tracking-[0.14em] text-white"
      >
        <WhatsAppIcon className="size-4" />
        WhatsApp
      </a>
    </div>
  )
}
