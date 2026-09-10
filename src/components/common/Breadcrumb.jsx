import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-silver/80">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {i > 0 ? <span aria-hidden="true">/</span> : null}
            {item.to ? (
              <Link to={item.to} className="hover:text-gold">
                {item.label}
              </Link>
            ) : (
              <span className="text-gold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
