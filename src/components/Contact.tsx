import { Fragment } from 'react'
import { Mail, Github, Linkedin, Phone, FileText, ArrowUp } from 'lucide-react'
import { profile } from '../content'
import { PrimaryButton, XIcon, MediumIcon } from './Primitives'

export function Contact({ onOpenCv }: { onOpenCv: () => void }) {
  const linkedinHref = profile.linkedin || undefined
  const phoneHref = `tel:${profile.phoneHref}`

  const socialRows = [
    {
      key: 'github',
      href: profile.github,
      icon: (
        <Github size={14} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />
      ),
      label: profile.githubHandle,
      action: 'Code',
    },
    {
      key: 'linkedin',
      href: linkedinHref as string,
      icon: <Linkedin size={14} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />,
      label: 'LinkedIn',
      action: 'Profile',
    },
    {
      key: 'x',
      href: profile.x,
      icon: <XIcon size={13} />,
      label: profile.xHandle,
      action: 'Follow',
    },
    {
      key: 'medium',
      href: profile.medium,
      icon: <MediumIcon size={13} />,
      label: profile.mediumHandle,
      action: 'Read',
    },
    {
      key: 'phone',
      href: phoneHref,
      icon: <Phone size={14} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />,
      label: profile.phone,
      action: 'Call',
    },
  ]

  return (
    <section id="contact" className="relative overflow-hidden border-t border-ivory-600/12">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(90% 80% at 50% 0%, rgba(65,55,43,0.35), transparent 60%), radial-gradient(60% 50% at 85% 100%, rgba(31,42,36,0.3), transparent 65%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-24 sm:px-8 sm:pt-32 lg:px-12">
        <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl" data-reveal>
            <p className="label label-brass">06 — Correspondence</p>
            <h2 className="font-display mt-6 text-[44px] font-medium leading-[1.05] tracking-[-0.01em] text-ivory-300 sm:text-[64px]">
              Let’s build something
              <br />
              <span className="italic text-ivory-400">worth securing.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[15px] leading-[1.85] text-ivory-500">
              Available for security engineering roles, research collaboration, and select
              technical engagements. Correspondence is answered personally.
            </p>
          </div>

          {/* correspondence card */}
          <div className="crosshair w-full max-w-sm border border-ivory-600/15 bg-espresso-850/70 p-7 backdrop-blur-sm lg:mb-2" data-reveal>
            <p className="label !text-[9.5px]">Direct channels</p>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={`mailto:${profile.email}`} className="group flex items-center justify-between gap-4">
                  <span className="flex items-center gap-3 text-[13.5px] text-ivory-400 transition-colors group-hover:text-brass-300">
                    <Mail size={14} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />
                    {profile.email}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory-600">Write</span>
                </a>
              </li>
              {socialRows.map((row) => (
                <Fragment key={row.key}>
                  <li className="h-px bg-ivory-600/10" aria-hidden="true" />
                  <li>
                    <a
                      href={row.href}
                      target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center justify-between gap-4"
                    >
                      <span className="flex items-center gap-3 text-[13.5px] text-ivory-400 transition-colors group-hover:text-brass-300">
                        {row.icon}
                        {row.label}
                      </span>
                      <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory-600">{row.action}</span>
                    </a>
                  </li>
                </Fragment>
              ))}
              <li className="h-px bg-ivory-600/10" aria-hidden="true" />
              <li>
                <button
                  type="button"
                  onClick={onOpenCv}
                  className="group flex w-full items-center justify-between gap-4"
                >
                  <span className="flex items-center gap-3 text-[13.5px] text-ivory-400 transition-colors group-hover:text-brass-300">
                    <FileText size={14} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />
                    Curriculum Vitae
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-ivory-600">View</span>
                </button>
              </li>
            </ul>
            <div className="mt-7">
              <PrimaryButton href={`mailto:${profile.email}`} className="w-full">
                Initiate Contact
              </PrimaryButton>
            </div>
          </div>
        </div>

        {/* footer */}
        <footer className="mt-24 border-t border-ivory-600/12 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-semibold tracking-[0.32em] text-ivory-400">AGHEDE</span>
              <span className="mt-1.5 font-sans text-[7.5px] font-semibold uppercase tracking-[0.4em] text-ivory-600">
                Security / Engineering
              </span>
            </div>
            <p className="mono-note max-w-sm sm:text-right">
              © {new Date().getFullYear()} {profile.name}. Set in Cormorant Garamond & Inter.
            </p>
            <a
              href="#top"
              className="group inline-flex items-center gap-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory-500 transition-colors hover:text-brass-300"
            >
              Return to top
              <ArrowUp size={12} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
