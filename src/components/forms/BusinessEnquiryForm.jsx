import { useState } from 'react'
import { buildEnquiryMessage, openWhatsApp } from '../../utils/whatsapp'
import Button from '../common/Button'

const interests = [
  'Mineral Trading',
  'Iron Ore',
  'Mineral Supply',
  'Mining Project',
  'Strategic Partnership',
  'Infrastructure Opportunity',
  'Other',
]

const empty = {
  fullName: '',
  companyName: '',
  mobile: '',
  email: '',
  location: '',
  interestedIn: 'Mineral Trading',
  message: '',
}

export default function BusinessEnquiryForm() {
  const [form, setForm] = useState(empty)
  const [error, setError] = useState('')

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!form.fullName.trim() || !form.mobile.trim() || !form.message.trim()) {
      setError('Please provide your name, mobile number and a short message.')
      return
    }
    setError('')
    openWhatsApp(buildEnquiryMessage(form))
  }

  const fieldClass =
    'mt-2 w-full rounded-2xl border border-navy/15 bg-white px-4 py-3.5 text-ink outline-none focus:border-gold-dark'

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <label className="text-sm font-medium">
        Full Name
        <input name="fullName" value={form.fullName} onChange={update} className={fieldClass} required />
      </label>
      <label className="text-sm font-medium">
        Company Name
        <input name="companyName" value={form.companyName} onChange={update} className={fieldClass} />
      </label>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Mobile Number
          <input name="mobile" value={form.mobile} onChange={update} className={fieldClass} required />
        </label>
        <label className="text-sm font-medium">
          Email Address
          <input type="email" name="email" value={form.email} onChange={update} className={fieldClass} />
        </label>
      </div>
      <label className="text-sm font-medium">
        Location
        <input name="location" value={form.location} onChange={update} className={fieldClass} />
      </label>
      <label className="text-sm font-medium">
        Interested In
        <select name="interestedIn" value={form.interestedIn} onChange={update} className={fieldClass}>
          {interests.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </label>
      <label className="text-sm font-medium">
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={update}
          rows={5}
          className={fieldClass}
          required
        />
      </label>
      {error ? <p className="text-sm text-red-700">{error}</p> : null}
      <Button type="submit" variant="primary">
        Send Enquiry on WhatsApp
      </Button>
    </form>
  )
}
