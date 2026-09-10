export default function ProjectStatus({ status, className = '' }) {
  return (
    <p
      className={`inline-flex rounded-full border border-gold/50 bg-gold/10 px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-gold-dark ${className}`}
    >
      {status}
    </p>
  )
}
