import { contactPanorama } from '../assets/images'
import CTASection from '../components/common/CTASection'
import DocumentTitle from '../components/common/DocumentTitle'
import AccentTitle from '../components/common/AccentTitle'
import Button from '../components/common/Button'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import SectionHeader from '../components/common/SectionHeader'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <>
      <DocumentTitle title="Projects" />
      <PageHero
        title="Strategic Mineral Opportunities"
        subheading="Developing a Diversified Project Portfolio"
      />
      <section className="bg-white py-16">
        <PageContainer>
          <p className="max-w-3xl text-lg text-ink/80">
            Sansaar Infrastructure is progressively identifying and developing mineral opportunities
            across multiple geographic locations.
          </p>
          <p className="mt-4 max-w-3xl text-sm text-steel">
            Project imagery is representative and does not depict verified Sansaar-owned mine
            photographs. Ownership and operating structures are described by the status of each
            opportunity.
          </p>
        </PageContainer>
      </section>
      <section className="bg-paper py-12 md:py-20">
        <PageContainer className="space-y-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} reversed={i === 1} />
          ))}
        </PageContainer>
      </section>
      <section className="bg-white py-20">
        <PageContainer>
          <SectionHeader
            eyebrow="Project Philosophy"
            title="Identifying Opportunities. Evaluating Potential. Building Partnerships."
            intro="Every project is approached individually based on its mineral potential, commercial feasibility, location, stakeholder requirements and long-term opportunity. Our objective is to develop commercially viable project structures while building sustainable relationships with relevant stakeholders."
          />
          <div className="mt-10">
            <AccentTitle as="h3" className="text-2xl leading-snug">
              Have a Mineral Project Opportunity?
            </AccentTitle>
            <Button to="/contact" className="mt-6">
              Partner With Sansaar
            </Button>
          </div>
        </PageContainer>
      </section>
      <CTASection image={contactPanorama} />
    </>
  )
}
