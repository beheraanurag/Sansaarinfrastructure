import { Mail, MessageCircle, Phone } from 'lucide-react'
import DocumentTitle from '../components/common/DocumentTitle'
import BusinessEnquiryForm from '../components/forms/BusinessEnquiryForm'
import PageContainer from '../components/layout/PageContainer'
import PageHero from '../components/layout/PageHero'
import { company } from '../data/navigation'
import { leaders } from '../data/leadership'
import { buildWhatsAppUrl } from '../utils/whatsapp'

export default function Contact() {
  return (
    <>
      <DocumentTitle title="Contact" />
      <PageHero
        title="Let’s Build the Future Together"
        subheading="Mineral Trading • Mining Projects • Infrastructure Opportunities"
      />
      <section className="bg-white py-16 md:py-24">
        <PageContainer className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-lg text-ink/80">
              Sansaar Infrastructure welcomes conversations with mineral owners, project
              stakeholders, industrial buyers and strategic business partners.
            </p>
            <p className="mt-4 text-ink/75">
              Whether you have a mineral requirement, project opportunity or partnership proposal,
              connect with our team.
            </p>
            <div className="mt-10">
              <h2 className="text-2xl">Corporate Office</h2>
              <p className="mt-3 font-medium">{company.name}</p>
              <address className="mt-2 not-italic text-ink/75">
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className="mt-10 space-y-3">
              <h2 className="text-2xl">Contact</h2>
              <p>
                Mobile:{' '}
                <a className="text-teal hover:text-gold-dark" href={`tel:${company.phoneTel}`}>
                  {company.phoneDisplay}
                </a>
              </p>
              <p>
                Email:{' '}
                <a className="text-teal hover:text-gold-dark" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
            </div>
            <div className="mt-10">
              <h2 className="text-2xl">Leadership</h2>
              <ul className="mt-3 space-y-2">
                {leaders.map((p) => (
                  <li key={p.id}>
                    <span className="font-medium">{p.name}</span>
                    <span className="text-steel"> — {p.role}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={`tel:${company.phoneTel}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-navy/15 px-5 py-3 text-sm uppercase tracking-[0.12em]"
              >
                <Phone className="size-4" /> Call Us
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3 text-sm uppercase tracking-[0.12em] text-white"
              >
                <MessageCircle className="size-4" /> WhatsApp Us
              </a>
              <a
                href={`mailto:${company.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-navy/15 px-5 py-3 text-sm uppercase tracking-[0.12em]"
              >
                <Mail className="size-4" /> Send an Email
              </a>
            </div>
          </div>
          <div className="card-hover rounded-[1.5rem] bg-paper p-6 md:p-10">
            <h2 className="mb-8 text-3xl">Business Enquiry</h2>
            <BusinessEnquiryForm />
          </div>
        </PageContainer>
      </section>
    </>
  )
}
