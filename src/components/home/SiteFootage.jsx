import { excavationSite } from '../../assets/images'
import siteOperationsOne from '../../assets/videos/site-operations-01.mp4'
import siteOperationsTwo from '../../assets/videos/site-operations-02.mp4'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

const footage = [
  { src: siteOperationsOne, label: 'Field footage 01', duration: '00:20' },
  { src: siteOperationsTwo, label: 'Field footage 02', duration: '00:27' },
]

export default function SiteFootage() {
  return (
    <section className="overflow-hidden bg-navy-deep py-20 text-white md:py-28">
      <PageContainer>
        <SectionHeader
          light
          eyebrow="From the Field"
          title="Site Operations in Motion"
          intro="Two short views from active field operations."
        />
        <div className="relative mt-12 grid gap-8 border-t border-gold/60 pt-8 md:grid-cols-2">
          {footage.map((item, index) => (
            <FadeIn key={item.src} delay={index * 0.08}>
              <figure className="group relative">
                <span
                  className="absolute -top-[2.28rem] left-0 size-2 rounded-full bg-gold ring-4 ring-navy-deep"
                  aria-hidden="true"
                />
                <div className="overflow-hidden rounded-[1.25rem] border border-white/10 bg-navy shadow-2xl shadow-black/20">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={excavationSite}
                    aria-label={item.label}
                    className="aspect-video w-full bg-black object-cover"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support embedded video.
                  </video>
                </div>
                <figcaption className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-silver">
                  <span>{item.label}</span>
                  <span className="text-gold">{item.duration}</span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}