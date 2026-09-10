import { karnatakaLaterite, maharashtraLaterite } from '../../assets/images'
import { projects } from '../../data/projects'
import Button from '../common/Button'
import FadeIn from '../common/FadeIn'
import PageContainer from '../layout/PageContainer'
import SectionHeader from '../common/SectionHeader'
import ProjectStatus from '../projects/ProjectStatus'

const images = {
  maharashtra: maharashtraLaterite,
  karnataka: karnatakaLaterite,
}

export default function ProjectsPreview() {
  return (
    <section className="bg-white py-20 md:py-28">
      <PageContainer>
        <SectionHeader
          eyebrow="Strategic Projects"
          title="Developing Mineral Opportunities Across India"
          intro="Sansaar Infrastructure is progressively developing a portfolio of mineral opportunities across different geographic regions. Our approach is based on evaluating projects carefully and developing suitable commercial and operating structures with relevant stakeholders."
        />
        <div className="mt-16 space-y-16">
          {projects.map((project, i) => (
            <FadeIn key={project.id}>
              <article
                className={`card-hover grid items-center gap-8 overflow-hidden rounded-[1.5rem] bg-white lg:grid-cols-2 ${
                  i % 2 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative min-h-[18rem]">
                  <img
                    src={images[project.id]}
                    alt={`Representative laterite landscape for the ${project.state} opportunity`}
                    width={1600}
                    height={900}
                    loading="lazy"
                    className="h-full min-h-[18rem] w-full object-cover lg:min-h-[26rem]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-navy">
                    Representative Image
                  </span>
                </div>
                <div className="p-6 md:p-10">
                  <p className="survey-number text-sm">Project {project.number}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.22em] text-mist">{project.state}</p>
                  <h3 className="mt-3 text-3xl text-navy-deep">{project.title}</h3>
                  <p className="mt-2 text-steel">{project.place}</p>
                  <ProjectStatus status={project.status} className="mt-5" />
                  <p className="mt-5 text-ink/75">{project.description}</p>
                  <div className="mt-6">
                    <Button to={`/projects#${project.id}`} variant="secondary">
                      View Project
                    </Button>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
