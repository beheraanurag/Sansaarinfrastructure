import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-gold text-navy-deep hover:bg-gold-dark hover:text-white border border-gold',
  secondary:
    'bg-transparent text-navy border border-navy/25 hover:border-gold-dark hover:text-gold-dark',
  light:
    'bg-transparent text-white border border-white/35 hover:border-gold hover:text-gold',
  dark: 'bg-navy text-white hover:bg-teal border border-navy',
  teal: 'bg-teal text-white hover:bg-teal-deep border border-teal',
}

export default function Button({
  children,
  to,
  href,
  type = 'button',
  variant = 'primary',
  className = '',
  showArrow = true,
  onClick,
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-[13px] font-semibold tracking-[0.12em] uppercase transition-all duration-300 min-h-12 ${variants[variant]} ${className}`

  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      ) : null}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={`group ${classes}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={`group ${classes}`}>
      {content}
    </button>
  )
}
