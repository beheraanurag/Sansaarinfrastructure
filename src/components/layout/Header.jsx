import { Menu, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { logo } from '../../assets/images'
import { company, navLinks } from '../../data/navigation'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Button from '../common/Button'
import WhatsAppIcon from '../common/WhatsAppIcon'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHero = pathname === '/' && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          onHero
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-navy/10 bg-white/90 shadow-sm backdrop-blur-md'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-8">
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Sansaar Infrastructure"
              width={80}
              height={80}
              className={`h-16 w-auto md:h-20 ${onHero ? 'brightness-110' : ''}`}
            />
          </Link>
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-3 py-2 font-display text-[12px] font-semibold uppercase tracking-[0.14em] transition ${
                    onHero ? 'text-white/90 hover:text-gold' : 'text-navy/80 hover:text-navy'
                  } ${isActive ? (onHero ? 'text-gold' : 'text-navy') : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-3 -bottom-0.5 h-px bg-gold transition ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${company.phoneTel}`}
              aria-label="Call Sansaar Infrastructure"
              className={`flex size-10 items-center justify-center rounded-full border transition ${
                onHero
                  ? 'border-white/30 text-white hover:border-gold hover:text-gold'
                  : 'border-navy/15 text-navy hover:border-gold-dark hover:text-gold-dark'
              }`}
            >
              <Phone className="size-4" />
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex size-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:scale-105"
            >
              <WhatsAppIcon className="size-5" />
            </a>
            <div className="hidden lg:block">
              <Button to="/contact" variant={onHero ? 'primary' : 'teal'} className="px-5 py-3 text-[11px]">
                Business Enquiry
              </Button>
            </div>
            <button
              type="button"
              className={`rounded-xl border p-2 lg:hidden ${
                onHero ? 'border-white/30 text-white' : 'border-navy/15 text-navy'
              }`}
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
