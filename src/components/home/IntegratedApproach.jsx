import { integratedApproach } from '../../data/business'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

export default function IntegratedApproach() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <PageContainer>
        <SectionHeader
          eyebrow="From Opportunity to Market"
          title="Our Integrated Approach"
          intro="Sansaar Infrastructure follows a structured approach to identifying and developing mineral opportunities."
        />
        <div className="mt-14 hidden lg:grid lg:grid-cols-7 lg:gap-3">
          {integratedApproach.map((step, i) => (
            <FadeIn key={step.index} delay={i * 0.04} className="relative">
              <div className="card-hover h-full rounded-[1.15rem] bg-white p-5">
                <p className="survey-number text-xs">{step.index}</p>
                <h3 className="mt-4 text-base leading-snug text-navy-deep">{step.title}</h3>
                <p className="mt-3 text-sm text-ink/70">{step.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <ol className="relative mt-12 space-y-8 border-l border-gold/50 pl-8 lg:hidden">
          {integratedApproach.map((step) => (
            <li key={step.index} className="relative">
              <span className="absolute -left-[39px] top-1 size-3 rounded-full bg-gold" />
              <p className="survey-number text-xs">{step.index}</p>
              <h3 className="mt-2 text-xl">{step.title}</h3>
              <p className="mt-2 text-ink/75">{step.text}</p>
            </li>
          ))}
        </ol>
      </PageContainer>
    </section>
  )
}
