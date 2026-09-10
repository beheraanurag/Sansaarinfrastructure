import { ChevronDown } from 'lucide-react'
import { heroMine } from '../../assets/images'
import AccentTitle from '../common/AccentTitle'
import Button from '../common/Button'
import { MiningContourPattern, TopographicLines } from '../graphics/Patterns'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-navy-deep text-white">
      <img
        src={heroMine}
        alt="Open-cast mining landscape with excavator, haul truck and terraced benches"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy/45" />
      <TopographicLines className="absolute -right-20 top-24 h-[28rem] w-[28rem] text-gold opacity-[0.08]" />
      <MiningContourPattern className="absolute inset-x-0 bottom-10 h-48 w-full text-gold opacity-[0.12]" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-24 pt-32 md:px-8 lg:px-10">
        <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
          <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
          Sansaar Infrastructure
        </p>
        <AccentTitle
          as="h1"
          light
          className="mt-5 max-w-4xl text-[clamp(2.5rem,6.4vw,4.5rem)] leading-[1.12]"
        >
          Building Opportunities Across India’s Mineral Sector
        </AccentTitle>
        <p className="mt-5 text-sm uppercase tracking-[0.18em] text-silver md:text-base">
          Mineral Trading • Mining Project Development • Infrastructure Opportunities
        </p>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-silver/95 md:text-lg">
          Sansaar Infrastructure is a Bhubaneswar-based enterprise focused on mineral trading,
          strategic mining opportunities and related infrastructure development.
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-silver/90 md:text-lg">
          We work towards creating dependable connections between mineral opportunities, project
          partners and commercial markets through responsible business practices, careful project
          evaluation and long-term partnerships.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/our-business" variant="primary">
            Explore Our Business
          </Button>
          <Button to="/projects" variant="light">
            View Projects
          </Button>
          <Button to="/contact" variant="light" className="border-transparent px-4">
            Business Enquiry
          </Button>
        </div>
      </div>
      <a
        href="#glance"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.28em] text-gold md:flex"
      >
        Scroll
        <ChevronDown className="size-4" />
      </a>
    </section>
  )
}
