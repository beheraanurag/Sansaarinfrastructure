import FadeIn from '../common/FadeIn'
import { GoldGridPattern } from '../graphics/Patterns'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

const metrics = [
  { value: '2022', label: 'Established' },
  { value: 'Bhubaneswar, Odisha', label: 'Headquarters' },
  { value: 'Mineral Trading', label: 'Core Business Focus' },
  { value: 'Mining Projects', label: 'Strategic Growth Area' },
]

export default function CompanySnapshot() {
  return (
    <section id="glance" className="relative overflow-hidden bg-paper py-20 md:py-28">
      <GoldGridPattern className="pointer-events-none absolute inset-0 text-gold opacity-[0.07]" />
      <PageContainer className="relative z-10">
        <SectionHeader
          eyebrow="Sansaar at a Glance"
          title="Growing with Purpose. Building for the Long Term."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, i) => {
            const featured = i === 0
            return (
              <FadeIn key={item.label} delay={i * 0.08}>
                <article
                  className={`flex h-full min-h-[13.5rem] flex-col rounded-[1.35rem] p-7 md:p-8 ${
                    featured
                      ? 'card-hover-dark bg-navy text-white shadow-[0_18px_40px_-24px_rgba(15,42,56,0.7)]'
                      : 'card-hover bg-white'
                  }`}
                >
                  <p className={`font-display text-sm font-bold tracking-[0.18em] ${featured ? 'text-gold' : 'text-gold-dark'}`}>
                    0{i + 1}
                  </p>
                  <p
                    className={`mt-8 font-display text-[1.7rem] leading-snug font-bold md:text-[1.85rem] ${
                      featured ? 'text-white' : 'text-navy'
                    }`}
                  >
                    {item.value}
                  </p>
                  <p
                    className={`mt-auto pt-6 text-[11px] font-semibold uppercase tracking-[0.18em] ${
                      featured ? 'text-silver' : 'text-steel'
                    }`}
                  >
                    {item.label}
                  </p>
                </article>
              </FadeIn>
            )
          })}
        </div>
      </PageContainer>
    </section>
  )
}
