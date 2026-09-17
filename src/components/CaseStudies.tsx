import { useState } from 'react'
import { Github, ArrowUpRight, Lock } from 'lucide-react'
import { projects, type Project } from '../content'
import { SectionFrame, TagRow, GhostButton } from './Primitives'
import { EccaacDiagram } from './diagrams/EccaacDiagram'
import { AgenticDiagram } from './diagrams/AgenticDiagram'

function DossierBlock({
  n,
  title,
  children,
  wide = false,
}: {
  n: string
  title: string
  children: React.ReactNode
  wide?: boolean
}) {
  return (
    <div className={wide ? 'md:col-span-2' : ''}>
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-[10px] text-brass-600">{n}</span>
        <span className="label !text-[9.5px] !tracking-[0.24em]">{title}</span>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  )
}

function CaseStudy({ project, defaultOpen }: { project: Project; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  const panelId = `${project.id}-dossier`

  return (
    <article id={project.id} className="scroll-mt-24 border-t border-ivory-600/12" data-reveal>
      {/* ── ledger row / dossier head ── */}
      <div className="grid gap-5 py-9 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-1">
          <span className="font-display text-[30px] font-medium italic leading-none text-brass-600/90">
            {project.index}
          </span>
        </div>

        <div className="md:col-span-7">
          <p className="label label-brass !text-[9.5px]">{project.codename}</p>
          <h3 className="font-display mt-2.5 max-w-xl text-[27px] font-medium leading-[1.14] text-ivory-300 sm:text-[31px]">
            {project.title}
          </h3>
          <p className="mt-3 font-mono text-[10.5px] tracking-[0.08em] text-ivory-600">
            {project.domain} — {project.status}
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:col-span-4 md:items-end">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group inline-flex min-h-11 items-center gap-3 border border-ivory-600/25 px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory-400 transition-all duration-300 hover:border-brass-600/60 hover:text-brass-300"
          >
            {open ? 'Close Dossier' : 'Open Dossier'}
            <span
              aria-hidden="true"
              className="font-mono text-[10px] text-brass-600 transition-transform duration-300 group-hover:scale-110"
            >
              {open ? '—' : '+'}
            </span>
          </button>
          <TagRow items={project.stack.slice(0, 4)} />
        </div>
      </div>

      {/* ── dossier panel ── */}
      {open && (
        <div id={panelId} className="border-t border-ivory-600/10 pb-12 pt-9">
          <div className="grid gap-x-12 gap-y-9 md:grid-cols-2">
            <DossierBlock n="§1" title="Problem">
              <p className="text-[14.5px] leading-[1.85] text-ivory-500">{project.problem}</p>
            </DossierBlock>
            <DossierBlock n="§2" title="Objective">
              <p className="text-[14.5px] leading-[1.85] text-ivory-500">{project.objective}</p>
            </DossierBlock>

            {project.diagram && (
              <div className="md:col-span-2">
                {project.diagram === 'eccaac' ? <EccaacDiagram /> : <AgenticDiagram />}
              </div>
            )}

            <DossierBlock n="§3" title="Architecture" wide>
              <ul className="space-y-3">
                {project.architecture.map((a, i) => (
                  <li key={i} className="flex gap-3 text-[14px] leading-[1.8] text-ivory-500">
                    <span className="mt-[10px] h-px w-3.5 shrink-0 bg-brass-600/60" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </DossierBlock>

            <DossierBlock n="§4" title="Technical Implementation">
              <ul className="space-y-3">
                {project.implementation.map((a, i) => (
                  <li key={i} className="flex gap-3 text-[13.5px] leading-[1.75] text-ivory-500">
                    <span className="mt-[10px] h-px w-3.5 shrink-0 bg-ivory-600/40" aria-hidden="true" />
                    {a}
                  </li>
                ))}
              </ul>
            </DossierBlock>

            <DossierBlock n="§5" title="Security Considerations">
              <ul className="space-y-3">
                {project.security.map((a, i) => (
                  <li key={i} className="flex gap-3 text-[13.5px] leading-[1.75] text-ivory-500">
                    <Lock size={11} strokeWidth={1.5} aria-hidden="true" className="mt-1 shrink-0 text-brass-600/80" />
                    {a}
                  </li>
                ))}
              </ul>
            </DossierBlock>

            <DossierBlock n="§6" title="Current State" wide>
              <p className="border-l border-brass-600/40 pl-4 font-display text-[17.5px] italic leading-[1.6] text-ivory-400">
                {project.state}
              </p>
            </DossierBlock>

            <DossierBlock n="§7" title="Technologies" wide>
              <TagRow items={project.stack} />
            </DossierBlock>
          </div>

          {(project.github || project.demo) && (
            <div className="mt-10 flex flex-wrap gap-3 border-t border-ivory-600/10 pt-7">
              {project.github && (
                <GhostButton href={project.github} target="_blank" rel="noreferrer">
                  <Github size={13} strokeWidth={1.5} aria-hidden="true" />
                  View Repository
                  <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden="true" />
                </GhostButton>
              )}
              {project.demo && (
                <GhostButton href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                  <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden="true" />
                </GhostButton>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  )
}

export function CaseStudies() {
  return (
    <SectionFrame
      id="work"
      index="03"
      kicker="Selected Work"
      title="Dossiers from the practice."
      lead="Case studies, not screenshots — problem, architecture, implementation, and the security reasoning behind each system."
    >
      <div className="border-b border-ivory-600/12">
        {projects.map((p, i) => (
          <CaseStudy key={p.id} project={p} defaultOpen={i === 0} />
        ))}
      </div>
      <p className="mono-note mt-6">Further work and experiments are registered on GitHub.</p>
    </SectionFrame>
  )
}
