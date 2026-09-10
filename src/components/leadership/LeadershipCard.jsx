import { ansuman, dhananjay } from '../../assets/images'

const photos = { dhananjay, ansuman }

export default function LeadershipCard({ person, reverse = false }) {
  return (
    <article className={`card-hover grid items-center gap-10 rounded-[1.6rem] bg-white p-4 lg:grid-cols-2 lg:p-6 ${reverse ? 'lg:[&>img]:order-2' : ''}`}>
      <img
        src={photos[person.id]}
        alt={person.name}
        width={640}
        height={800}
        className="h-[28rem] w-full rounded-[1.5rem] object-cover object-top"
      />
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-gold-dark">{person.role}</p>
        <h2 className="mt-3 text-4xl">{person.name}</h2>
        <div className="mt-6 space-y-4 text-ink/80">
          {person.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </article>
  )
}
