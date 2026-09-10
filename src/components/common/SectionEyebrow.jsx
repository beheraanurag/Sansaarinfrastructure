export default function SectionEyebrow({ children, light = false }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] ${
        light ? 'text-gold' : 'text-teal'
      }`}
    >
      <span className={`inline-block h-px w-8 shrink-0 ${light ? 'bg-gold' : 'bg-gold-dark'}`} aria-hidden="true" />
      {children}
    </p>
  )
}
