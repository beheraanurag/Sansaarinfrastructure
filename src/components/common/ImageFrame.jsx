export default function ImageFrame({
  src,
  alt,
  caption,
  className = '',
  imgClassName = '',
  eager = false,
  width,
  height,
}) {
  return (
    <figure className={`card-hover overflow-hidden rounded-[1.25rem] ${className}`}>
      <div className="overflow-hidden">
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-700 motion-safe:hover:scale-[1.03] ${imgClassName}`}
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-steel">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
