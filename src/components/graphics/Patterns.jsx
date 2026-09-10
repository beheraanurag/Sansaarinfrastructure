export function TopographicLines({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      aria-hidden="true"
    >
      {[80, 140, 210, 290, 380, 470].map((cy) => (
        <ellipse
          key={cy}
          cx="400"
          cy="300"
          rx={cy + 40}
          ry={cy * 0.62}
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  )
}

export function MiningContourPattern({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 400"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 260 C 120 180, 220 320, 340 240 C 460 160, 540 300, 680 220 C 820 140, 940 280, 1200 190"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M0 300 C 140 220, 260 340, 400 270 C 540 200, 660 330, 800 250 C 940 170, 1060 300, 1200 230"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M0 340 C 160 280, 280 360, 430 310 C 580 260, 720 360, 860 300 C 1000 240, 1100 330, 1200 280"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  )
}

export function GoldGridPattern({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <defs>
        <pattern id="sansaar-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#sansaar-grid)" />
    </svg>
  )
}

export function IndustrialLineArt({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 120"
      fill="none"
      aria-hidden="true"
    >
      <path d="M10 90 H390" stroke="currentColor" strokeWidth="1" />
      <rect x="40" y="40" width="28" height="50" stroke="currentColor" />
      <rect x="80" y="22" width="18" height="68" stroke="currentColor" />
      <path d="M140 90 V50 H190 V90" stroke="currentColor" />
      <circle cx="250" cy="70" r="18" stroke="currentColor" />
      <path d="M290 90 V35 H330 V90" stroke="currentColor" />
      <path d="M350 90 V55 L370 40 V90" stroke="currentColor" />
    </svg>
  )
}
