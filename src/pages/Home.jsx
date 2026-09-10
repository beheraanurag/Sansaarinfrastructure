import { contactPanorama } from '../assets/images'
import CTASection from '../components/common/CTASection'
import DocumentTitle from '../components/common/DocumentTitle'
import AboutPreview from '../components/home/AboutPreview'
import BusinessGrid from '../components/home/BusinessGrid'
import CompanySnapshot from '../components/home/CompanySnapshot'
import Hero from '../components/home/Hero'
import IntegratedApproach from '../components/home/IntegratedApproach'
import IronOreJourney from '../components/home/IronOreJourney'
import LeadershipPreview from '../components/home/LeadershipPreview'
import ProjectsPreview from '../components/home/ProjectsPreview'
import ResponsibleOperations from '../components/home/ResponsibleOperations'
import WhySansaarPreview from '../components/home/WhySansaarPreview'

export default function Home() {
  return (
    <>
      <DocumentTitle />
      <Hero />
      <CompanySnapshot />
      <AboutPreview />
      <BusinessGrid />
      <IronOreJourney />
      <ProjectsPreview />
      <IntegratedApproach />
      <WhySansaarPreview />
      <ResponsibleOperations />
      <LeadershipPreview />
      <CTASection image={contactPanorama} />
    </>
  )
}
