import { Boxes } from 'lucide-react'

export default function BusinessCard({ index, title, children, icon: Icon = Boxes }) {
  return (
    <article className="card-hover rounded-[1.35rem] bg-white p-8">
      <div className="flex items-center justify-between">
        <span className="survey-number text-sm">{index}</span>
        <Icon className="size-5 text-gold-dark" aria-hidden="true" />
      </div>
      <h2 className="mt-6 text-3xl">{title}</h2>
      <div className="mt-4 space-y-4 text-ink/75">{children}</div>
    </article>
  )
}
