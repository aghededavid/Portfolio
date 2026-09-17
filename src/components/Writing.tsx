import { BookOpen } from 'lucide-react'
import { fieldNotes } from '../content'
import { SectionFrame, MicroLabel } from './Primitives'

export function Writing() {
  return (
    <SectionFrame
      id="writing"
      index="05"
      kicker="Security Writing"
      title="Field Notes"
      lead="Observations, experiments, and technical research in cybersecurity."
      paper
    >
      <div className="grid gap-x-14 gap-y-2 lg:grid-cols-12">
        {fieldNotes.map((note) => (
          <article
            key={note.index}
            className="group grid gap-1.5 border-t border-espresso-600/35 py-6 lg:col-span-12 lg:grid-cols-12 lg:items-baseline lg:gap-8"
            data-reveal
          >
            <div className="lg:col-span-1">
              <span className="font-mono text-[10px] text-brass-700">{note.index}</span>
            </div>
            <div className="lg:col-span-5">
              <h3 className="font-display text-[21px] font-medium leading-snug text-espresso-900 transition-colors duration-300 group-hover:text-brass-700">
                {note.title}
              </h3>
            </div>
            <p className="text-[13px] leading-[1.75] text-espresso-700 lg:col-span-4">
              {note.blurb}
            </p>
            <div className="flex items-center gap-3 lg:col-span-2 lg:justify-end">
              <span className="font-mono text-[10px] tracking-[0.08em] text-espresso-600">{note.date}</span>
              <span className="h-3 w-px bg-espresso-600/40" aria-hidden="true" />
              <span className="font-mono text-[10px] text-espresso-600">{note.readingTime}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex items-start gap-4 border-t border-espresso-600/35 pt-7" data-reveal>
        <BookOpen size={15} strokeWidth={1.5} aria-hidden="true" className="mt-0.5 text-brass-700" />
        <p className="max-w-2xl text-[13px] leading-[1.8] text-espresso-700">
          These essays are in preparation as part of ongoing research; entries are listed as standing
          commitments rather than published work. Published pieces will be linked here as they appear.
        </p>
      </div>
    </SectionFrame>
  )
}
