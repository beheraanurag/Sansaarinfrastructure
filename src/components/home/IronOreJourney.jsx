import {
  industrialMarket,
  ironOre,
  mineralLoading,
  mineralTransport,
} from '../../assets/images'
import { ironOreFocus, ironOreJourney } from '../../data/business'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

const images = [ironOre, mineralLoading, mineralTransport, industrialMarket]

export default function IronOreJourney() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <PageContainer>
        <SectionHeader
          light
          eyebrow="Iron Ore Trading"
          title="Creating Reliable Mineral-to-Market Connections"
          intro="Iron ore plays an important role in India’s industrial and infrastructure economy. Sansaar Infrastructure seeks to develop dependable mineral trading relationships by connecting suitable sources with appropriate domestic markets."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ironOreJourney.map((step, i) => (
            <FadeIn key={step.id} delay={i * 0.06}>
              <article className="card-hover-dark overflow-hidden rounded-[1.25rem] bg-navy-deep/40">
                <img
                  src={images[i]}
                  alt=""
                  width={1400}
                  height={788}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{step.title}</p>
                  <p className="mt-3 text-sm text-silver/90">{step.text}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm text-silver/80">
          {ironOreFocus.map((item) => (
            <span key={item} className="border-l border-gold/50 pl-3">
              {item}
            </span>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-lg text-silver">
          From mineral source to market connection, our focus is on creating dependable and
          commercially sustainable relationships.
        </p>
      </PageContainer>
    </section>
  )
}
