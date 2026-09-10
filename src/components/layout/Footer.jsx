import { Link } from 'react-router-dom'
import { logo } from '../../assets/images'
import { company, footerColumns } from '../../data/navigation'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-silver">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-2 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={logo} alt="Sansaar Infrastructure" className="h-16 w-auto" />
          <p className="mt-5 font-display text-lg text-white">
            Trusted Partnerships. Responsible Growth. Stronger Foundations.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-silver/80">
            Sansaar Infrastructure is building opportunities across mineral trading, strategic mining
            projects and related infrastructure through long-term commercial partnerships.
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerColumns.company.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Our Business</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerColumns.business.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Projects</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {footerColumns.projects.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`tel:${company.phoneTel}`} className="hover:text-gold">
                {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-gold">
                {company.email}
              </a>
            </li>
            <li>Bhubaneswar, Odisha</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-steel md:px-8">
          <p>© 2026 Sansaar Infrastructure. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
