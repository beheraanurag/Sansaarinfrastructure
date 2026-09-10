import AccentTitle from './AccentTitle'
import SectionEyebrow from './SectionEyebrow'

export default function SectionHeader({
  eyebrow,
  title,
  intro,
  light = false,
  align = 'left',
  className = '',
  singleLine = true,
}) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow ? (
        <div className={centered ? 'flex justify-center' : ''}>
          <SectionEyebrow light={light}>{eyebrow}</SectionEyebrow>
        </div>
      ) : null}
      <AccentTitle
        light={light}
        className={`text-[clamp(1.55rem,1.6vw+1rem,2.65rem)] ${
          singleLine ? 'leading-none max-md:whitespace-normal md:whitespace-nowrap' : 'leading-snug'
        }`}
      >
        {title}
      </AccentTitle>
      {intro ? (
        <p
          className={`mt-4 w-full text-base leading-[1.75] md:text-[17px] ${
            centered ? 'mx-auto max-w-4xl' : ''
          } ${light ? 'text-silver' : 'text-ink/75'}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  )
}
