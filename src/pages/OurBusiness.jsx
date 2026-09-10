import {
  industrialMarket,
  ironOre,
  mineralLoading,
  mineralTransport,
} from '../assets/images'
import { businessAreas, ironOreJourney, projectDevelopmentProcess } from '../data/business'
import AccentTitle from '../components/common/AccentTitle'
import ProcessTimeline from '../components/business/ProcessTimeline'
import Button from '../components/common/Button'
import DocumentTitle from '../components/common/DocumentTitle'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import CTASection from '../components/common/CTASection'
import { contactPanorama } from '../assets/images'

const extras = {
  'mineral-trading':
    'Trading activity is built around legitimate sourcing, commercial coordination and relationships that can be sustained over time.',
  'iron-ore-trading':
    'Iron ore remains an important part of India’s industrial demand. Sansaar works to connect suitable sources with domestic market requirements.',
  'mining-project-development':
    'Each opportunity is considered on location, mineral potential, feasibility and market prospects before a development path is defined.',
  'strategic-project-participation':
    'Participation may take the form of commercial transactions, operating arrangements, partnerships or other appropriate structures.',
  'mineral-supply-coordination':
    'The objective is structured sourcing and supply coordination between mineral sources and industrial or commercial markets.',
  'mining-infrastructure':
    'Supporting opportunities in mineral movement and infrastructure are explored where they complement the core mineral business.',
}

const flowImages = [ironOre, mineralLoading, mineralTransport, industrialMarket]

export default function OurBusiness() {
  return (
    <>
      <DocumentTitle title="Our Business" />
      <PageHero
        title="What We Do"
        subheading="Integrated Mineral & Project Development Capabilities"
      />
      <section className="bg-white py-20">
        <PageContainer className="space-y-20">
          {businessAreas.map((area) => (
            <article key={area.id} id={area.id} className="scroll-mt-28 grid gap-6 border-t border-gold/30 pt-10 lg:grid-cols-[140px_1fr]">
              <p className="survey-number text-2xl">{area.index}</p>
              <div>
                <AccentTitle className="text-3xl leading-snug md:text-4xl">{area.title}</AccentTitle>
                <p className="mt-4 max-w-3xl text-ink/80">{area.summary}</p>
                <p className="mt-4 max-w-3xl text-ink/70">{extras[area.id]}</p>
              </div>
            </article>
          ))}
        </PageContainer>
      </section>
      <section className="bg-paper py-20">
        <PageContainer>
          <SectionHeader
            title="From mineral source to market"
            intro="Mineral Sources → Commercial Coordination → Mineral Movement → Buyers. A practical sequence for connecting mineral availability with market demand."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ironOreJourney.map((step, i) => (
              <figure key={step.id} className="card-hover overflow-hidden rounded-[1.25rem] bg-white">
                <img
                  src={flowImages[i]}
                  alt=""
                  width={1400}
                  height={788}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <figcaption className="p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-dark">{step.title}</p>
                  <p className="mt-2 text-sm text-ink/75">{step.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </PageContainer>
      </section>
      <section className="bg-navy py-20 text-white">
        <PageContainer>
          <SectionHeader light title="Project development process" />
          <div className="mt-10">
            <ProcessTimeline steps={projectDevelopmentProcess} light />
          </div>
        </PageContainer>
      </section>
      <section className="bg-white py-20">
        <PageContainer className="text-center">
          <AccentTitle className="text-4xl leading-snug">Have a Mineral or Mining Opportunity?</AccentTitle>
          <div className="mt-8 flex justify-center">
            <Button to="/contact">Discuss With Sansaar</Button>
          </div>
        </PageContainer>
      </section>
      <CTASection image={contactPanorama} />
    </>
  )
}
