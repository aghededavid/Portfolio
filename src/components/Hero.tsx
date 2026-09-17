import { FileDown, ArrowDown, Github, Linkedin, ArrowUpRight } from 'lucide-react'
import { profile } from '../content'
import { ArchitecturePlate } from './ArchitecturePlate'
import { PrimaryButton, GhostButton, IconLink } from './Primitives'

export function Hero({ onOpenCv }: { onOpenCv: () => void }) {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
      {/* deep wash + slow architectural drift plate */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(120% 90% at 78% 8%, rgba(65,55,43,0.5), transparent 55%), radial-gradient(80% 60% at 8% 100%, rgba(31,42,36,0.35), transparent 60%)',
        }}
      />
      <div className="arch-drift pointer-events-none absolute -right-24 top-16 hidden w-[560px] opacity-[0.5] lg:block xl:right-0" aria-hidden="true">
        <ArchitecturePlate className="h-auto w-full" />
      </div>
      <div className="grain-dark pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col px-5 sm:px-8 lg:px-12">
        {/* masthead rule */}
        <div className="flex h-[72px] items-center justify-between border-b border-ivory-600/10" data-reveal>
          <span className="label">Portfolio — Vol. I</span>
          <span className="mono-note hidden sm:block">Est. practice · cybersecurity</span>
          <span className="mono-note hidden md:block">{profile.location}</span>
        </div>

        <div className="flex flex-1 flex-col justify-center py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="label label-brass" data-reveal>
              {profile.role}
            </p>

            <h1 className="font-display mt-7 text-[52px] font-medium leading-[1.02] tracking-[-0.015em] text-ivory-300 sm:text-[72px] lg:text-[84px]" data-reveal style={{ ['--reveal-delay' as string]: '80ms' }}>
              {profile.headline[0]}
              <br />
              <span className="italic text-ivory-400">{profile.headline[1]}</span>
              <br />
              {profile.headline[2]}
            </h1>

            <div className="brass-rule mt-9 w-24" data-reveal style={{ ['--reveal-delay' as string]: '160ms' }} />

            <p className="mt-8 max-w-xl text-[15px] leading-[1.85] text-ivory-500 sm:text-base" data-reveal style={{ ['--reveal-delay' as string]: '220ms' }}>
              {profile.name} is {profile.heroCopy}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3.5" data-reveal style={{ ['--reveal-delay' as string]: '300ms' }}>
              <PrimaryButton href="#work">
                View Selected Work
                <ArrowUpRight size={13} strokeWidth={1.75} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </PrimaryButton>
              <GhostButton onClick={onOpenCv}>
                <FileDown size={13} strokeWidth={1.75} aria-hidden="true" />
                Download CV
              </GhostButton>
            </div>

            <div className="mt-8 flex items-center gap-3" data-reveal style={{ ['--reveal-delay' as string]: '360ms' }}>
              <IconLink href={profile.github} label="GitHub — aghededavid">
                <Github size={16} strokeWidth={1.5} aria-hidden="true" />
              </IconLink>
              {profile.linkedin && (
                <IconLink href={profile.linkedin} label="LinkedIn">
                  <Linkedin size={16} strokeWidth={1.5} aria-hidden="true" />
                </IconLink>
              )}
              <span className="ml-1 font-mono text-[10.5px] tracking-[0.08em] text-ivory-600">{profile.githubHandle}</span>
            </div>
          </div>
        </div>

        {/* footer strip of the hero */}
        <div className="flex items-center justify-between border-t border-ivory-600/10 py-6" data-reveal>
          <a href="#profile" className="group flex items-center gap-3 text-ivory-500 transition-colors hover:text-brass-300">
            <ArrowDown size={13} strokeWidth={1.5} aria-hidden="true" className="transition-transform duration-500 group-hover:translate-y-0.5" />
            <span className="label !tracking-[0.28em]">01 — Profile</span>
          </a>
          <span className="mono-note hidden sm:block">Threat detection · Zero Trust · Behavioral authentication · Automation</span>
        </div>
      </div>
    </section>
  )
}
