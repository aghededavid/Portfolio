import { useEffect, useState } from 'react'
import { Menu, X, FileDown } from 'lucide-react'
import { navigation, profile } from '../content'
import { useCurrentSection } from '../lib/useCurrentSection'
import { useLockBody } from '../lib/useLockBody'

function Wordmark({ onClick }: { onClick: () => void }) {
  return (
    <a
      href="#top"
      onClick={onClick}
      className="group flex flex-col leading-none"
      aria-label="Aghede — back to top"
    >
      <span className="font-display text-[22px] font-semibold tracking-[0.34em] text-ivory-300 transition-colors duration-300 group-hover:text-brass-300">
        AGHEDE
      </span>
      <span className="mt-1.5 font-sans text-[8px] font-semibold uppercase tracking-[0.42em] text-ivory-600">
        Security / Engineering
      </span>
    </a>
  )
}

export function Header({ onOpenCv }: { onOpenCv: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const current = useCurrentSection(navigation.map((n) => n.href.slice(1)))
  useLockBody(open)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? 'border-ivory-600/12 bg-espresso-950/88 backdrop-blur-md'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <Wordmark onClick={() => setOpen(false)} />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navigation.map((item) => {
              const active = current === item.href.slice(1)
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'true' : undefined}
                  className={`group flex items-baseline gap-1.5 font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active ? 'text-brass-300' : 'text-ivory-500 hover:text-ivory-300'
                  }`}
                >
                  <span className="font-mono text-[8.5px] text-brass-600/80">{item.index}</span>
                  {item.label}
                </a>
              )
            })}
            <button
              type="button"
              onClick={onOpenCv}
              className="ml-2 inline-flex items-center gap-2 border border-ivory-600/25 px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-ivory-400 transition-all duration-300 hover:border-brass-600/60 hover:text-brass-300"
            >
              <FileDown size={12} strokeWidth={1.75} aria-hidden="true" />
              CV
            </button>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ivory-600/25 text-ivory-400 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={17} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={17} strokeWidth={1.5} aria-hidden="true" />}
          </button>
        </div>
      </header>

      {/* Mobile menu — full-screen register */}
      {open && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-espresso-950/[0.985] backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div className="grain-dark pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
          <div className="relative flex h-full flex-col justify-between px-6 pb-10 pt-28">
            <nav aria-label="Mobile">
              <ul className="space-y-1">
                {navigation.map((item, i) => (
                  <li key={item.href} style={{ ['--reveal-delay' as string]: `${i * 45}ms` }} data-reveal="in" className="animate-none">
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-4 border-b border-ivory-600/10 py-4"
                    >
                      <span className="font-mono text-[10px] text-brass-600">{item.index}</span>
                      <span className="font-display text-[30px] font-medium text-ivory-300 transition-colors group-hover:text-brass-300">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  onOpenCv()
                }}
                className="mt-7 inline-flex items-center gap-2.5 border border-brass-600/50 bg-brass-600/10 px-5 py-3 font-sans text-[10.5px] font-semibold uppercase tracking-[0.22em] text-brass-300"
              >
                <FileDown size={13} strokeWidth={1.75} aria-hidden="true" />
                Download Curriculum Vitae
              </button>
            </nav>
            <div className="flex items-center justify-between border-t border-ivory-600/12 pt-6">
              <span className="mono-note">{profile.githubHandle}</span>
              <a
                href={`mailto:${profile.email}`}
                className="mono-note !text-brass-600 link-underline"
              >
                {profile.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
