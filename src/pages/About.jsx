import { aboutLandscape } from '../assets/images'
import AccentTitle from '../components/common/AccentTitle'
import DocumentTitle from '../components/common/DocumentTitle'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import { contactPanorama } from '../assets/images'

const snapshot = [
  ['Company Name', 'Sansaar Infrastructure'],
  ['Established', '2022'],
  ['Headquarters', 'Bhubaneswar, Odisha'],
]

const focus = [
  'Mineral Trading',
  'Iron Ore Trading',
  'Mining Project Development',
  'Strategic Mineral Opportunities',
  'Mineral Supply Coordination',
  'Mining & Infrastructure Opportunities',
]

const mission = [
  'Build a strong and dependable mineral trading business.',
  'Identify commercially viable mining and mineral opportunities.',
  'Develop sustainable relationships with mineral owners, industries and stakeholders.',
  'Maintain transparency and discipline across business transactions.',
  'Expand responsibly across mineral-rich regions of India.',
  'Create long-term value through strategic project development.',
]

const values = ['Integrity', 'Reliability', 'Responsibility', 'Partnership', 'Commercial Discipline', 'Progress']

export default function About() {
  return (
    <>
      <DocumentTitle title="About Us" />
      <PageHero
        title="About Sansaar Infrastructure"
        subheading="Building a Dependable Presence in India’s Mineral Economy"
      />
      <section className="bg-white py-20 md:py-28">
        <PageContainer>
          <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="flex flex-col justify-center lg:col-span-7">
              <SectionHeader
                eyebrow="Who We Are"
                title="A progressive mineral enterprise, built from Odisha"
                singleLine={false}
              />
              <span className="mt-7 mb-8 block h-px w-16 bg-gold" aria-hidden="true" />
              <div className="space-y-5 text-[17px] leading-relaxed text-ink/80">
                <p>
                  Sansaar Infrastructure was established with the vision of creating a dependable and
                  progressive enterprise within India’s mineral and mining ecosystem.
                </p>
                <p>
                  Based in Bhubaneswar, Odisha, the company is building its presence through mineral
                  trading, strategic project participation and long-term commercial partnerships.
                </p>
                <p>
                  Our approach combines opportunity identification, commercial assessment, partnership
                  development and market linkage to create sustainable business value.
                </p>
                <p>
                  We believe growth in the mineral sector requires more than identifying resources. It
                  requires strong relationships, disciplined execution, commercial understanding and a
                  long-term perspective.
                </p>
              </div>
            </div>
            <figure className="card-hover relative min-h-[18rem] overflow-hidden rounded-[1.35rem] lg:col-span-5 lg:min-h-full">
              <img
                src={aboutLandscape}
                alt="Wide mineral landscape"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="h-full min-h-[18rem] w-full object-cover lg:absolute lg:inset-0 lg:min-h-full"
              />
            </figure>
          </div>
        </PageContainer>
      </section>
      <section className="bg-paper py-20">
        <PageContainer>
          <SectionHeader eyebrow="Company Snapshot" title="Facts that define the organisation" />
          <dl className="mt-10 grid gap-6 md:grid-cols-3">
            {snapshot.map(([k, v]) => (
              <div key={k} className="border-t border-gold/40 pt-5">
                <dt className="text-xs uppercase tracking-[0.18em] text-steel">{k}</dt>
                <dd className="mt-2 font-display text-2xl">{v}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-14 text-xl">Business Focus</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {focus.map((item) => (
              <li key={item} className="border-l border-gold pl-4">
                {item}
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>
      <section className="bg-white py-20">
        <PageContainer className="max-w-3xl">
          <SectionHeader eyebrow="Our Story" title="From Opportunity to Long-Term Value" />
          <div className="mt-8 space-y-5 text-ink/80">
            <p>
              Sansaar Infrastructure was established in 2022 in Bhubaneswar with a clear purpose: to
              participate in India’s mineral economy through dependable trading relationships and
              carefully evaluated project opportunities.
            </p>
            <p>
              From this base, the company has focused on mineral trading—including iron ore—while
              assessing mining and laterite-related opportunities that can be developed through
              appropriate commercial and operating structures.
            </p>
            <p>
              The story of Sansaar is still being written through partnerships. Growth is pursued
              with commercial discipline, documented processes and a long-term view of value for
              mineral owners, buyers and stakeholders.
            </p>
          </div>
        </PageContainer>
      </section>
      <section className="bg-navy py-20 text-white">
        <PageContainer className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
              Vision
            </p>
            <AccentTitle light className="mt-4 text-3xl leading-snug md:text-4xl">
              Building a Trusted Mineral Enterprise
            </AccentTitle>
            <p className="mt-6 text-silver/90">
              To develop Sansaar Infrastructure into a trusted and responsible enterprise within
              India’s mineral and infrastructure sector, recognised for strategic partnerships,
              transparent business practices and sustainable value creation.
            </p>
          </div>
          <div>
            <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
              <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
              Mission
            </p>
            <ol className="mt-6 space-y-4">
              {mission.map((item, i) => (
                <li key={item} className="flex gap-4">
                  <span className="survey-number text-xs">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </PageContainer>
      </section>
      <section className="bg-warm py-20">
        <PageContainer>
          <SectionHeader eyebrow="Core Values" title="Integrity. Reliability. Progress." />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => (
              <li key={v} className="card-hover rounded-[1.3rem] bg-white px-8 py-10 font-display text-2xl">
                {v}
              </li>
            ))}
          </ul>
          <p className="mt-12 font-display text-2xl text-navy">
            Responsible Growth. Commercial Discipline. Sustainable Value.
          </p>
        </PageContainer>
      </section>
      <CTASection image={contactPanorama} />
    </>
  )
}
