import { splitHeading } from '../../utils/heading'

export default function AccentTitle({
  as: Tag = 'h2',
  children,
  light = false,
  className = '',
}) {
  const { lead, accent } = splitHeading(children)

  return (
    <Tag className={`font-display font-extrabold tracking-tight ${className}`}>
      <span className={light ? 'text-white' : 'text-navy'}>{lead}</span>
      {accent ? (
        <span className={light ? 'text-mist' : 'text-teal'}>{accent}</span>
      ) : null}
    </Tag>
  )
}
