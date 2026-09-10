import { ArrowRight } from 'lucide-react'
import { karnatakaLaterite, maharashtraLaterite } from '../../assets/images'
import Button from '../common/Button'
import ProjectStatus from './ProjectStatus'

const images = {
  maharashtra: maharashtraLaterite,
  karnataka: karnatakaLaterite,
}

export default function ProjectCard({ project, reversed = false }) {
  const facts = [
    ['Mineral', project.mineral],
    ['Location', project.location],
    ['Area', project.area],
    project.landReference ? ['Land Reference', project.landReference] : ['Survey Number', project.surveyNumber],
  ]

  return (
    <article
      id={project.id}
      className="card-hover scroll-mt-28 overflow-hidden rounded-[1.6rem] bg-white transition duration-500"
    >
      <div className={`grid lg:grid-cols-2 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="group relative overflow-hidden">
          <img
            src={images[project.id]}
            alt={`Representative image for ${project.title}`}
            width={1600}
            height={900}
            loading="lazy"
            className="h-full min-h-[22rem] w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-navy-deep/10 transition group-hover:bg-navy-deep/5" />
          <span className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-navy">
            Representative Image
          </span>
        </div>
        <div className="p-7 md:p-12">
          <p className="survey-number text-sm">Project {project.number}</p>
          <p className="mt-3 text-xs uppercase tracking-[0.22em] text-mist">{project.state}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">{project.title}</h2>
          <p className="mt-2 text-steel">{project.place}</p>
          <ProjectStatus status={project.status} className="mt-5" />
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            {facts.map(([label, value]) => (
              <div key={label} className="border-t border-gold/30 pt-3">
                <dt className="text-[11px] uppercase tracking-[0.16em] text-steel">{label}</dt>
                <dd className="mt-1 text-navy">{value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 text-ink/75">{project.description}</p>
          <Button to="/contact" className="mt-8" variant="secondary">
            Discuss this opportunity
            <span className="sr-only"> {project.title}</span>
          </Button>
        </div>
      </div>
    </article>
  )
}

export function ProjectMini({ project }) {
  return (
    <a
      href={`#${project.id}`}
      className="card-hover group flex items-center justify-between rounded-2xl bg-white px-5 py-4"
    >
      <span>
        {project.state} — {project.title}
      </span>
      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
    </a>
  )
}
