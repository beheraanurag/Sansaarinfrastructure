import { excavationSite } from '../../assets/images'
import Button from '../common/Button'
import FadeIn from '../common/FadeIn'
import ImageFrame from '../common/ImageFrame'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

export default function AboutPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <PageContainer className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <SectionHeader
            eyebrow="About Sansaar"
            title="Building a Responsible Mineral Enterprise"
          />
          <div className="mt-8 space-y-5 text-[17px] leading-relaxed text-ink/80">
            <p>
              Sansaar Infrastructure was established with a vision to build a dependable and
              progressive enterprise within India’s mineral, mining and infrastructure ecosystem.
            </p>
            <p>
              Operating from Bhubaneswar, Odisha, the company is building capabilities in mineral
              trading while simultaneously evaluating and developing strategic opportunities in
              mining projects.
            </p>
            <p>
              Our business philosophy is centred on responsible growth, commercially viable
              partnerships, disciplined execution and long-term value creation.
            </p>
            <p>
              As Sansaar Infrastructure expands, our focus remains on developing sustainable
              business relationships and pursuing opportunities that can create value for our
              partners, customers and stakeholders.
            </p>
          </div>
          <div className="mt-8">
            <Button to="/about-us">Discover Sansaar</Button>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <ImageFrame
            src={excavationSite}
            alt="Excavator working at a laterite mining site"
            width={960}
            height={1280}
            className="lg:-mr-8 lg:min-h-[28rem]"
            imgClassName="min-h-[22rem] object-[center_35%] lg:min-h-[28rem]"
          />
        </FadeIn>
      </PageContainer>
    </section>
  )
}
