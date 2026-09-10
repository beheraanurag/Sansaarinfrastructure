export function splitHeading(title) {
  const text = String(title ?? '').trim()
  if (!text) return { lead: '', accent: '' }

  const sentence = text.match(/^(.*\.)\s+(.+)$/)
  if (sentence) {
    return { lead: `${sentence[1]} `, accent: sentence[2] }
  }

  if (text.includes(' • ')) {
    const parts = text.split(' • ')
    return {
      lead: `${parts.slice(0, -1).join(' • ')} • `,
      accent: parts.at(-1),
    }
  }

  const words = text.split(/\s+/)
  if (words.length >= 4) {
    return {
      lead: `${words.slice(0, -2).join(' ')} `,
      accent: words.slice(-2).join(' '),
    }
  }
  if (words.length === 3) {
    return { lead: `${words[0]} `, accent: words.slice(1).join(' ') }
  }

  return { lead: text, accent: '' }
}
