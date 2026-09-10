import { restoration, safety } from '../../assets/images'
import { aboutLandscape } from '../../assets/images'
import { responsibilityItems } from '../../data/business'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

export default function ResponsibleOperations() {
  return (
    <section className="bg-warm py-20 md:py-28">
      <PageContainer>
        <SectionHeader
          eyebrow="Responsible Operations"
          title="Safety • Sustainability • Responsibility"
          intro="Mining and mineral development must create economic value while respecting people, land and the surrounding environment. Sansaar Infrastructure seeks to integrate responsible practices into its project-development philosophy."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            [safety, 'Mining professional in personal protective equipment overlooking an open-cast site'],
            [restoration, 'Young plantation on restored mineral land'],
            [aboutLandscape, 'Mining landscape illustrating responsible land context'],
          ].map(([src, alt]) => (
            <figure key={alt} className="card-hover overflow-hidden rounded-[1.25rem]">
              <img src={src} alt={alt} width={1400} height={900} loading="lazy" className="h-56 w-full object-cover md:h-64" />
            </figure>
          ))}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {responsibilityItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04} className="card-hover rounded-[1.25rem] bg-white p-7">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-3 text-ink/75">{item.text}</p>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
