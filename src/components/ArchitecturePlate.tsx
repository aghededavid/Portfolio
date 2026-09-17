/**
 * ArchitecturePlate — the hero's engraved visual: a classical triumphal arch
 * and colonnade drawn in fine hairlines, fused with a measured "signal graph"
 * of nodes and paths. Pure SVG, no motion beyond an imperceptible drift.
 */
export function ArchitecturePlate({ className = '' }: { className?: string }) {
  const stroke = '#b6ac9c'
  const brass = '#a9812e'
  const faint = 'rgba(182,172,156,0.28)'

  return (
    <svg
      viewBox="0 0 600 520"
      className={className}
      role="img"
      aria-label="Engraved architectural plate: a classical arch above a network of measured signal paths"
    >
      <defs>
        <linearGradient id="plate-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={stroke} stopOpacity="0.5" />
          <stop offset="0.72" stopColor={stroke} stopOpacity="0.22" />
          <stop offset="1" stopColor={stroke} stopOpacity="0.06" />
        </linearGradient>
        <linearGradient id="plate-brass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9a227" stopOpacity="0.8" />
          <stop offset="1" stopColor="#8a6a24" stopOpacity="0.5" />
        </linearGradient>
      </defs>

      <g stroke="url(#plate-fade)" fill="none" strokeWidth="1">
        {/* ── arch: outer and inner curves, springing line, impost blocks ── */}
        <path d="M150 268 V150 A150 150 0 0 1 450 150 V268" />
        <path d="M186 268 V162 A114 114 0 0 1 414 162 V268" opacity="0.75" />
        <path d="M150 150 H450" opacity="0.5" />
        <path d="M186 268 H414" opacity="0.4" />
        {/* keystone */}
        <path d="M291 22 L309 22 L313 52 L287 52 Z" stroke={brass} strokeOpacity="0.65" />
        <path d="M300 52 V96" stroke={brass} strokeOpacity="0.4" />
        {/* voussoir joints, outer ring */}
        <path d="M232 42 L240 66 M186 78 L199 97 M156 130 L172 141 M143 190 L161 191 M143 252 L161 245" opacity="0.55" />
        <path d="M368 42 L360 66 M414 78 L401 97 M444 130 L428 141 M457 190 L439 191 M457 252 L439 245" opacity="0.55" />

        {/* ── entablature ── */}
        <path d="M96 296 H504" />
        <path d="M104 316 H496" opacity="0.7" />
        {/* triglyph / guttae rhythm */}
        <path d="M136 296 V316 M184 296 V316 M232 296 V316 M280 296 V316 M328 296 V316 M376 296 V316 M424 296 V316 M472 296 V316" opacity="0.5" />
        <path d="M112 336 H488" opacity="0.85" />
        <path d="M120 356 H480" opacity="0.4" />

        {/* ── colonnade ── */}
        {[140, 244, 348, 452].map((x) => (
          <g key={x} opacity="0.8">
            <path d={`M${x - 13} 368 h26`} />
            <path d={`M${x - 10} 368 V452 M${x + 10} 368 V452`} />
            <path d={`M${x - 10} 384 h20 M${x - 10} 412 h20 M${x - 10} 440 h20`} opacity="0.45" />
            <path d={`M${x - 16} 452 h32 M${x - 19} 462 h38`} />
          </g>
        ))}
        {/* stylobate */}
        <path d="M104 462 H496 M92 476 H508" opacity="0.9" />
        <path d="M92 476 V488 H508 V476" opacity="0.5" />

        {/* ── signal graph beneath the plate ── */}
        <g strokeWidth="0.9">
          <path d="M170 508 H430" opacity="0.55" />
          <path d="M205 508 L255 492 L305 508 L355 492 L405 508" opacity="0.7" />
          <path d="M255 492 V476 M355 492 V476" opacity="0.5" />
        </g>
      </g>

      {/* ── measured nodes on the graph (brass, sparing) ── */}
      <g fill={brass}>
        <circle cx="205" cy="508" r="2" opacity="0.8" />
        <circle cx="305" cy="508" r="2.6" opacity="0.9" />
        <circle cx="405" cy="508" r="2" opacity="0.8" />
        <circle cx="300" cy="36" r="2.2" opacity="0.85" />
      </g>

      {/* ── marginal annotations, engraved-plate style ── */}
      <g fill={faint} fontFamily="'IBM Plex Mono', monospace" fontSize="8.5" letterSpacing="2">
        <text x="98" y="140" transform="rotate(-90 98 140)">FIG. I — TRUST, MEASURED</text>
        <text x="512" y="470" transform="rotate(-90 512 470)">PLATE Nº 1</text>
      </g>

      {/* corner register marks */}
      <g stroke={brass} strokeOpacity="0.5" strokeWidth="1" fill="none">
        <path d="M60 60 h14 M60 60 v14" />
        <path d="M540 60 h-14 M540 60 v14" />
        <path d="M60 460 h14 M60 460 v-14" />
        <path d="M540 460 h-14 M540 460 v-14" />
      </g>
    </svg>
  )
}
