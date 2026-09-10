import { logo } from '../../assets/images'
import { whyItems } from '../../data/business'
import Button from '../common/Button'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

export default function WhySansaarPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <PageContainer>
        <SectionHeader
          eyebrow="Why Sansaar"
          title="A Growing Partner in India’s Mineral Economy"
          className="mx-auto text-center"
          align="center"
        />
        <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div className="card-hover-dark order-first flex items-center justify-center rounded-[1.5rem] border-gold/30 bg-navy-deep p-10 md:col-span-2 lg:order-none lg:col-span-1 lg:col-start-2 lg:row-start-2">
            <div className="text-center">
              <img src={logo} alt="" className="mx-auto h-24 w-auto" />
              <p className="mt-4 font-display text-white">Sansaar Infrastructure</p>
            </div>
          </div>
          {whyItems.map((item, i) => (
            <FadeIn
              key={item.title}
              delay={i * 0.05}
              className="card-hover rounded-[1.25rem] bg-paper p-7"
            >
              <h3 className="text-xl text-navy-deep">{item.title}</h3>
              <p className="mt-3 text-sm text-ink/75">{item.text}</p>
            </FadeIn>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button to="/why-sansaar">Why Sansaar</Button>
        </div>
      </PageContainer>
    </section>
  )
}
