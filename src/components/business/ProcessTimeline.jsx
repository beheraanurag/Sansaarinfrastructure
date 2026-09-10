export default function ProcessTimeline({ steps, light = false }) {
  const cols = steps.length > 4 ? 'lg:grid-cols-3 xl:grid-cols-6' : 'lg:grid-cols-4'

  return (
    <ol className={`grid gap-4 sm:grid-cols-2 ${cols}`}>
      {steps.map((step) => (
        <li
          key={step.index}
          className={`rounded-2xl p-5 ${
            light ? 'card-hover-dark text-white' : 'card-hover bg-white'
          }`}
        >
          <p className="survey-number text-xs">{step.index}</p>
          <p className="mt-3 font-display text-lg">{step.title}</p>
          {step.text ? <p className="mt-2 text-sm opacity-80">{step.text}</p> : null}
        </li>
      ))}
    </ol>
  )
}
