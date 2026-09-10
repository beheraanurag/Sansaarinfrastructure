import AccentTitle from '../common/AccentTitle'
import Breadcrumb from '../common/Breadcrumb'
import Button from '../common/Button'
import { MiningContourPattern } from '../graphics/Patterns'

export default function PageHero({ title, subheading, crumbs }) {
  return (
    <section className="relative overflow-hidden bg-navy-deep pt-32 pb-20 text-white md:pt-40 md:pb-24">
      <MiningContourPattern className="absolute inset-x-0 bottom-0 h-40 w-full text-gold opacity-[0.08]" />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        {crumbs ? <Breadcrumb items={crumbs} /> : null}
        <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
          <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
          Sansaar Infrastructure
        </p>
        <AccentTitle
          as="h1"
          light
          className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.25rem)] leading-[1.12]"
        >
          {title}
        </AccentTitle>
        {subheading ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver md:text-xl">{subheading}</p>
        ) : null}
        <div className="mt-8">
          <Button to="/contact" variant="primary">
            Business Enquiry
          </Button>
        </div>
      </div>
    </section>
  )
}
