import DocumentTitle from '../components/common/DocumentTitle'
import FAQAccordion from '../components/faq/FAQAccordion'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import { faqs } from '../data/faq'
import CTASection from '../components/common/CTASection'
import { contactPanorama } from '../assets/images'

export default function FAQ() {
  return (
    <>
      <DocumentTitle title="FAQ" />
      <PageHero title="Frequently Asked Questions" subheading="Clear answers for partners, owners and buyers" />
      <section className="bg-white py-16 md:py-24">
        <PageContainer className="max-w-3xl">
          <FAQAccordion items={faqs} />
        </PageContainer>
      </section>
      <CTASection image={contactPanorama} />
    </>
  )
}
