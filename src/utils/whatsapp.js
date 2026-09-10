import { company } from '../data/navigation'

const WHATSAPP_BASE = `https://wa.me/${company.whatsapp}`

export const defaultWhatsAppMessage =
  'Hello Sansaar Infrastructure, I would like to discuss a business opportunity.'

export function buildWhatsAppUrl(text = defaultWhatsAppMessage) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(text) {
  window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
}

export function buildEnquiryMessage(fields) {
  return `Hello Sansaar Infrastructure,

Name:
${fields.fullName}

Company:
${fields.companyName}

Mobile:
${fields.mobile}

Email:
${fields.email}

Location:
${fields.location}

Interested In:
${fields.interestedIn}

Message:
${fields.message}

I would like to discuss this business opportunity.`
}
