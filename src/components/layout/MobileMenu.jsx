import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Phone, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { company, navLinks } from '../../data/navigation'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import { logo } from '../../assets/images'
import WhatsAppIcon from '../common/WhatsAppIcon'

export default function MobileMenu({ open, onClose }) {
  const reduce = useReducedMotion()

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-navy-deep text-white md:hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <img src={logo} alt="Sansaar Infrastructure" className="h-12 w-auto" />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-full border border-white/20 p-2"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={reduce ? false : { x: 24, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.04 }}
              >
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block border-b border-white/10 py-4 text-lg tracking-wide ${
                      isActive ? 'text-gold' : 'text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </nav>
          <div className="mt-auto grid grid-cols-2 gap-3 px-6">
            <a
              href={`tel:${company.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-2xl border border-gold/40 py-4 text-sm uppercase tracking-[0.14em]"
            >
              <Phone className="size-4" /> Call
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] py-4 text-sm uppercase tracking-[0.14em]"
            >
              <WhatsAppIcon className="size-4" /> WhatsApp
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
