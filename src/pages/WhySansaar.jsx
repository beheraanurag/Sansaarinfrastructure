import {
  industrialMarket,
  ironOre,
  mineralTransport,
  heroMine,
} from '../assets/images'
import { whyPageItems } from '../data/business'
import AccentTitle from '../components/common/AccentTitle'
import CTASection from '../components/common/CTASection'
import { contactPanorama } from '../assets/images'
import DocumentTitle from '../components/common/DocumentTitle'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/common/SectionHeader'

const chain = [
  { label: 'Mine', img: heroMine, alt: 'Open-cast mine landscape' },
  { label: 'Mineral', img: ironOre, alt: 'Iron ore stockpile' },
  { label: 'Logistics', img: mineralTransport, alt: 'Mineral transport on a haul road' },
  { label: 'Industry', img: industrialMarket, alt: 'Industrial steel facility' },
]

export default function WhySansaar() {
  return (
    <>
      <DocumentTitle title="Why Sansaar" />
      <PageHero
        title="Why Sansaar Infrastructure?"
        subheading="A Growing Partner in India’s Mineral Economy"
      />
      <section className="bg-navy-deep py-16 text-white">
        <PageContainer>
          <p className="text-xs uppercase tracking-[0.22em] text-gold">Value chain</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {chain.map((item, i) => (
              <figure key={item.label} className="card-hover-dark overflow-hidden rounded-[1.2rem]">
                <img
                  src={item.img}
                  alt={item.alt}
                  width={1400}
                  height={788}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="h-48 w-full object-cover"
                />
                <figcaption className="bg-navy px-4 py-3 text-sm uppercase tracking-[0.2em] text-gold">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </PageContainer>
      </section>
      <section className="bg-white py-20">
        <PageContainer className="space-y-16">
          {whyPageItems.map((item, i) => (
            <article key={item.title} className="grid gap-6 border-t border-gold/35 pt-10 md:grid-cols-[80px_1fr]">
              <p className="survey-number">0{i + 1}</p>
              <div>
                <AccentTitle className="text-3xl leading-snug">{item.title}</AccentTitle>
                <p className="mt-4 max-w-3xl text-ink/80">{item.text}</p>
              </div>
            </article>
          ))}
        </PageContainer>
      </section>
      <section className="bg-paper py-20">
        <PageContainer className="max-w-3xl">
          <SectionHeader title="More than transactions" />
          <p className="mt-6 text-lg text-ink/80">
            Sansaar Infrastructure is building more than transactions. We are building a platform for
            trusted mineral partnerships, responsible project development and sustainable business
            growth.
          </p>
        </PageContainer>
      </section>
      <CTASection image={contactPanorama} />
    </>
  )
}
