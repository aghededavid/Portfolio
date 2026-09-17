import { Github, Star, ArrowUpRight } from 'lucide-react'
import { repos, profile } from '../content'
import { SectionFrame } from './Primitives'

export function Repositories() {
  return (
    <SectionFrame
      id="repositories"
      index="—"
      kicker="Open Source"
      title="Selected repositories."
      lead="A short register of public work. Statistics are deliberately omitted; the repositories speak for themselves."
    >
      <div className="border-t border-ivory-600/14">
        <div className="hidden grid-cols-12 gap-6 py-3.5 md:grid" aria-hidden="true">
          <span className="label col-span-3 !text-[9px]">Repository</span>
          <span className="label col-span-5 !text-[9px]">Description</span>
          <span className="label col-span-3 !text-[9px]">Domain</span>
          <span className="label col-span-1 !text-[9px] text-right">Link</span>
        </div>

        {repos.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-2 border-t border-ivory-600/10 py-6 transition-colors duration-300 hover:bg-ivory-300/[0.02] md:grid-cols-12 md:items-baseline md:gap-6"
            data-reveal
          >
            <div className="md:col-span-3">
              <span className="inline-flex items-center gap-2.5">
                <Github size={14} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />
                <span className="font-mono text-[13.5px] font-medium text-ivory-300 transition-colors duration-300 group-hover:text-brass-300">
                  {profile.githubHandle}/{repo.name}
                </span>
              </span>
            </div>
            <p className="max-w-xl text-[13.5px] leading-[1.7] text-ivory-500 md:col-span-5">{repo.description}</p>
            <div className="md:col-span-3">
              <span className="font-mono text-[10.5px] tracking-[0.05em] text-ivory-500">{repo.tech.join(' · ')}</span>
              <span className="ml-3 border border-ivory-600/25 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-ivory-600">
                {repo.domain}
              </span>
            </div>
            <div className="md:col-span-1 md:text-right">
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
                className="inline text-ivory-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass-300"
              />
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3" data-reveal>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2.5 border border-ivory-600/25 px-5 py-2.5 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-ivory-400 transition-all duration-300 hover:border-brass-600/60 hover:text-brass-300"
        >
          <Star size={12} strokeWidth={1.5} aria-hidden="true" />
          All repositories
          <ArrowUpRight size={12} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <span className="mono-note">github.com/aghededavid</span>
      </div>
    </SectionFrame>
  )
}
