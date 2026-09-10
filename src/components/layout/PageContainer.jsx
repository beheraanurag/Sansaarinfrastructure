export default function PageContainer({ children, className = '' }) {
  return <div className={`mx-auto max-w-6xl px-5 md:px-8 ${className}`}>{children}</div>
}
