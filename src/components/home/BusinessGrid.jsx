import {
  Boxes,
  Compass,
  Landmark,
  Link2,
  Mountain,
  Truck,
} from 'lucide-react'
import { businessAreas } from '../../data/business'
import Button from '../common/Button'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'

const icons = [Boxes, Mountain, Compass, Landmark, Link2, Truck]

export default function BusinessGrid() {
  return (
    <section className="relative bg-warm py-20 md:py-28">
      <PageContainer>
        <SectionHeader
          eyebrow="What We Do"
          title="Integrated Mineral & Project Development Capabilities"
          intro="Sansaar Infrastructure is developing an integrated business model connecting mineral opportunities, project development and commercial markets."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {businessAreas.map((area, i) => {
            const Icon = icons[i]
            return (
              <FadeIn
                key={area.id}
                delay={(i % 2) * 0.08}
                className={`${i % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''} card-hover rounded-[1.35rem] bg-white p-8 shadow-[0_12px_40px_-28px_rgba(15,42,56,0.45)]`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="survey-number text-sm">{area.index}</span>
                  <Icon className="size-5 text-gold-dark" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-2xl text-navy-deep">{area.title}</h3>
                <p className="mt-4 text-ink/75">{area.summary}</p>
              </FadeIn>
            )
          })}
        </div>
        <div className="mt-12">
          <Button to="/our-business">Explore Our Business</Button>
        </div>
      </PageContainer>
    </section>
  )
}
