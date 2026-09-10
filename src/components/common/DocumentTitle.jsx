import { useEffect } from 'react'

export default function DocumentTitle({ title }) {
  useEffect(() => {
    document.title = title
      ? `${title} | Sansaar Infrastructure`
      : 'Sansaar Infrastructure | Mineral Trading & Mining Projects'
  }, [title])

  return null
}
