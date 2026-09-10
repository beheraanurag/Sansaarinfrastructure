import DocumentTitle from '../components/common/DocumentTitle'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import LeadershipCard from '../components/leadership/LeadershipCard'
import { leaders, leadershipPhilosophy } from '../data/leadership'
import CTASection from '../components/common/CTASection'
import { contactPanorama } from '../assets/images'

export default function Leadership() {
  return (
    <>
      <DocumentTitle title="Leadership" />
      <PageHero title="Leadership" subheading="Vision, Partnership and Responsible Growth" />
      <section className="bg-white py-16">
        <PageContainer>
          <p className="max-w-3xl text-lg text-ink/80">
            Behind Sansaar Infrastructure is a leadership approach focused on identifying
            opportunities, building relationships and developing the company for long-term growth.
          </p>
        </PageContainer>
      </section>
      <section className="space-y-24 bg-paper py-16 md:py-24">
        <PageContainer className="space-y-24">
          {leaders.map((person, i) => (
            <LeadershipCard key={person.id} person={person} reverse={i === 1} />
          ))}
        </PageContainer>
      </section>
      <section className="bg-navy py-20 text-white">
        <PageContainer>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Leadership Philosophy</p>
          <ul className="mt-10 grid gap-6 md:grid-cols-5">
            {leadershipPhilosophy.map((item) => (
              <li key={item} className="border-t border-gold/40 pt-5 font-display text-xl">
                {item}
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>
      <CTASection image={contactPanorama} />
    </>
  )
}
