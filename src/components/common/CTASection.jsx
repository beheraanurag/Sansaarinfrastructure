import AccentTitle from './AccentTitle'
import Button from './Button'

export default function CTASection({
  eyebrow = 'Business Enquiry',
  title = 'Let’s Build the Future Together',
  body = 'Whether you are a mineral owner, project stakeholder, industrial buyer or business partner, Sansaar Infrastructure welcomes commercially viable opportunities for collaboration.',
  image,
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      {image ? (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
          width={1600}
          height={900}
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-teal/40" />
      <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <p className="flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.22em] text-gold">
          <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
          {eyebrow}
        </p>
        <AccentTitle light className="mt-4 max-w-4xl text-[clamp(2rem,5vw,3.4rem)] leading-snug">
          {title}
        </AccentTitle>
        <p className="mt-6 max-w-2xl text-lg text-silver/90">{body}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Button to="/contact" variant="primary">
            Business Enquiry
          </Button>
          <Button to="/contact" variant="light">
            Contact Sansaar
          </Button>
          <Button
            href="https://wa.me/919437015437?text=Hello%20Sansaar%20Infrastructure%2C%20I%20would%20like%20to%20discuss%20a%20business%20opportunity."
            variant="light"
          >
            WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
