import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'

function Item({ faq, index }) {
  const [open, setOpen] = useState(index === 0)
  const reduce = useReducedMotion()
  const panelId = useId()
  const buttonId = useId()

  return (
    <div className="card-hover mb-3 rounded-[1.15rem] bg-white px-4">
      <h2>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className="font-display text-lg text-navy-deep md:text-xl">{faq.q}</span>
          <ChevronDown
            className={`size-5 shrink-0 text-gold-dark transition ${open ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </button>
      </h2>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-ink/75">{faq.a}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default function FAQAccordion({ items }) {
  return (
    <div>
      {items.map((faq, i) => (
        <Item key={faq.q} faq={faq} index={i} />
      ))}
    </div>
  )
}
