import { ansuman, dhananjay } from '../../assets/images'
import { leaders } from '../../data/leadership'
import Button from '../common/Button'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

const photos = { dhananjay, ansuman }

export default function LeadershipPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <PageContainer>
        <SectionHeader
          eyebrow="Leadership"
          title="Driven by Vision. Built on Partnership."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {leaders.map((person, i) => (
            <FadeIn key={person.id} delay={i * 0.08} className="card-hover flex gap-6 rounded-[1.35rem] bg-paper p-5 md:p-6">
              <img
                src={photos[person.id]}
                alt={person.name}
                width={280}
                height={350}
                loading="lazy"
                className="h-36 w-28 shrink-0 rounded-[1.15rem] object-cover object-top md:h-48 md:w-36"
              />
              <div>
                <h3 className="text-2xl">{person.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-gold-dark">{person.role}</p>
                <p className="mt-4 text-ink/75">{person.preview}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12">
          <Button to="/leadership">Meet Our Leadership</Button>
        </div>
      </PageContainer>
    </section>
  )
}
