import { Fragment, useEffect } from 'react'
import { X } from 'lucide-react'
import { profile, about, experience, arsenal, projects } from '../content'
import { useLockBody } from '../lib/useLockBody'

export function CurriculumVitae({ open, onClose }: { open: boolean; onClose: () => void }) {
  useLockBody(open)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const cvContactItems = [
    { label: 'github.com/aghededavid', href: profile.github },
    { label: 'linkedin.com/in/aghede-david-58a626273', href: profile.linkedin },
    { label: profile.xHandle, href: profile.x },
    { label: `medium ${profile.mediumHandle}`, href: profile.medium },
    { label: profile.phone, href: `tel:${profile.phoneHref}` },
  ]

  return (
    <div
      className="fixed inset-0 z-[70] overflow-y-auto bg-espresso-950/90 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae"
    >
      <div className="cv-sheet-wrap mx-auto max-w-3xl px-4 py-8 sm:py-12">
        {/* action bar */}
        <div className="mb-5 flex items-center justify-between print:hidden">
          <span className="mono-note">Curriculum Vitae — {profile.name}</span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-10 items-center gap-2 border border-brass-600/55 bg-brass-600/15 px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brass-300 transition-colors hover:bg-brass-600/25"
            >
              Print / Save as PDF
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close curriculum vitae"
              className="inline-flex h-10 w-10 items-center justify-center border border-ivory-600/30 text-ivory-400 transition-colors hover:border-brass-600/60 hover:text-brass-300"
            >
              <X size={16} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* the document */}
        <article className="paper px-8 py-10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:px-14 sm:py-14">
          <header>
            <p className="font-sans text-[9.5px] font-semibold uppercase tracking-[0.4em] text-espresso-600">
              Curriculum Vitae
            </p>
            <h1 className="font-display mt-3 text-[38px] font-medium leading-[1.05] text-espresso-900 sm:text-[44px]">
              {profile.name}
            </h1>
            <p className="mt-2 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-espresso-700">
              {profile.role}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[10.5px] text-espresso-600">
              <span>{profile.email}</span>
              {cvContactItems.map((item, i) => (
                <Fragment key={item.label}>
                  <span aria-hidden="true">·</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="transition-colors hover:text-brass-700"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </Fragment>
              ))}
              <span aria-hidden="true">·</span>
              <span>{profile.location}</span>
            </div>
            <div className="mt-6 h-px bg-espresso-600/40" />
          </header>

          {/* summary */}
          <section className="mt-8">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-700">Profile</h2>
            <p className="mt-3 text-[13.5px] leading-[1.8] text-espresso-700">{about.paragraphs[0]}</p>
          </section>

          {/* experience */}
          <section className="mt-8">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-700">Experience</h2>
            {experience.map((e) => (
              <div key={e.org} className="mt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[20px] font-semibold text-espresso-900">{e.role}</h3>
                  <span className="font-mono text-[10.5px] text-espresso-600">{e.period}</span>
                </div>
                <p className="mt-0.5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-espresso-700">
                  {e.org}
                </p>
                <ul className="mt-3 space-y-1.5">
                  {e.detail.map((d, i) => (
                    <li key={i} className="flex gap-2.5 text-[12.5px] leading-[1.7] text-espresso-700">
                      <span className="mt-[9px] h-px w-2.5 shrink-0 bg-brass-700/60" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[10px] leading-[1.7] text-espresso-600">
                  Systems: {e.stack.join(' · ')}
                </p>
              </div>
            ))}
          </section>

          {/* projects */}
          <section className="mt-8">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-700">Selected Projects</h2>
            {projects.map((p) => (
              <div key={p.id} className="mt-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-[18px] font-semibold text-espresso-900">{p.title}</h3>
                  <span className="font-mono text-[10px] text-espresso-600">{p.status}</span>
                </div>
                <p className="mt-0.5 font-mono text-[9.5px] font-medium uppercase tracking-[0.2em] text-brass-700">
                  {p.codename}
                </p>
                <p className="mt-1.5 text-[12.5px] leading-[1.7] text-espresso-700">{p.objective}</p>
                <p className="mt-1.5 font-mono text-[10px] leading-[1.7] text-espresso-600">{p.stack.join(' · ')}</p>
              </div>
            ))}
          </section>

          {/* arsenal */}
          <section className="mt-8">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-700">Technical Skills</h2>
            <dl className="mt-3 space-y-2.5">
              {arsenal.map((c) => (
                <div key={c.title} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                  <dt className="w-56 shrink-0 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-espresso-700">
                    {c.title}
                  </dt>
                  <dd className="text-[12.5px] leading-[1.65] text-espresso-700">{c.items.join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* education */}
          <section className="mt-8">
            <h2 className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-brass-700">Education</h2>
            <p className="mt-3 text-[13px] text-espresso-700">
              B.Sc. Cybersecurity — Undergraduate
            </p>
          </section>

          <footer className="mt-10 border-t border-espresso-600/40 pt-4">
            <p className="font-mono text-[9.5px] tracking-[0.08em] text-espresso-600">
              References and further detail available on request · {new Date().getFullYear()}
            </p>
          </footer>
        </article>
      </div>
    </div>
  )
}
