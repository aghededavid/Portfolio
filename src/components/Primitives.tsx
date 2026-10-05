import type { ReactNode } from 'react'

/* ── Section frame: numbered label, rule, heading ─────────────────────────── */

export function SectionFrame({
  index,
  kicker,
  title,
  lead,
  children,
  paper = false,
  id,
}: {
  index: string
  kicker: string
  title: string
  lead?: string
  children: ReactNode
  paper?: boolean
  id?: string
}) {
  return (
    <section id={id} className={paper ? 'paper relative' : 'relative'}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
        <header className="mb-12 sm:mb-16" data-reveal>
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span className="mono-note !text-brass-600">{index}</span>
            <span className="label">{kicker}</span>
            <span className="hidden h-px flex-1 bg-ivory-600/20 sm:block" aria-hidden="true" />
          </div>
          <h2
            className={`font-display mt-5 text-4xl sm:text-5xl leading-[1.04] font-medium tracking-[-0.01em] ${
              paper ? 'text-espresso-900' : 'text-ivory-300'
            }`}
          >
            {title}
          </h2>
          {lead && (
            <p
              className={`mt-4 max-w-2xl text-[15px] leading-relaxed ${
                paper ? 'text-espresso-700' : 'text-ivory-500'
              }`}
            >
              {lead}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  )
}

/* ── Buttons ──────────────────────────────────────────────────────────────── */

export function PrimaryButton({
  href,
  onClick,
  children,
  className = '',
  type,
}: {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  type?: 'button' | 'submit'
}) {
  const cls = `group inline-flex min-h-11 items-center justify-center gap-2.5 border border-brass-600/55 bg-brass-600/12 px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-brass-300 transition-all duration-300 hover:bg-brass-600/22 hover:border-brass-500/80 ${className}`
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }
  return (
    <button type={type ?? 'button'} onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

export function GhostButton({
  href,
  onClick,
  children,
  className = '',
  target,
  rel,
}: {
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  target?: string
  rel?: string
}) {
  const cls = `group inline-flex min-h-11 items-center justify-center gap-2.5 border border-ivory-600/25 bg-ivory-300/[0.02] px-6 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory-400 transition-all duration-300 hover:border-brass-600/50 hover:text-brass-300 ${className}`
  if (href) {
    return (
    <a href={href} className={cls} target={target} rel={rel}>
      {children}
    </a>
    )
  }
  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}

/* ── Small icon link (GitHub / LinkedIn) ──────────────────────────────────── */

export function IconLink({ href, label, children }: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
      aria-label={label}
      title={label}
      className="inline-flex h-10 w-10 items-center justify-center border border-ivory-600/25 text-ivory-500 transition-all duration-300 hover:border-brass-600/60 hover:text-brass-300"
    >
      {children}
    </a>
  )
}

/* ── Brand icons for platforms lucide doesn't cover (X, Medium) ──────────── */

export function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function MediumIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M13.54 12A6.8 6.8 0 1 1 6.75 5.2 6.77 6.77 0 0 1 13.54 12m7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42S20.96 8.46 20.96 12M24 12c0 3.17-.53 5.75-1.19 5.75s-1.19-2.58-1.19-5.75.53-5.75 1.19-5.75S24 8.83 24 12" />
    </svg>
  )
}

/* ── Tag row ──────────────────────────────────────────────────────────────── */

export function TagRow({ items, paper = false }: { items: string[]; paper?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-1 gap-y-2">
      {items.map((t, i) => (
        <span key={t} className="inline-flex items-center">
          {i > 0 && (
            <span className={`mx-2 text-[10px] ${paper ? 'text-espresso-600/60' : 'text-brass-600/50'}`} aria-hidden="true">
              ·
            </span>
          )}
          <span
            className={`font-mono text-[10.5px] tracking-[0.06em] uppercase ${
              paper ? 'text-espresso-600' : 'text-ivory-500'
            }`}
          >
            {t}
          </span>
        </span>
      ))}
    </div>
  )
}

/* ── Sub-caps label with brass tick ──────────────────────────────────────── */

export function MicroLabel({ children, paper = false }: { children: ReactNode; paper?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-px w-5 bg-brass-600/60" aria-hidden="true" />
      <span className={`label ${paper ? '!text-espresso-600' : ''}`}>{children}</span>
    </div>
  )
}
