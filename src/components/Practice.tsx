import { arsenal } from '../content'
import { SectionFrame, MicroLabel } from './Primitives'

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII']

export function Practice() {
  return (
    <SectionFrame
      id="practice"
      index="04"
      kicker="Security Practice"
      title="The technical register."
      lead="Tools and disciplines, kept in the manner of an instrument inventory — what is used, and to what end."
    >
      <div className="grid gap-x-14 gap-y-11 sm:grid-cols-2">
        {arsenal.map((cat, i) => (
          <div key={cat.title} className="border-t border-ivory-600/14 pt-5" data-reveal>
            <div className="flex items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-3.5">
                <span className="font-display text-[15px] italic text-brass-600/90">{ROMAN[i]}</span>
                <h3 className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-ivory-300">
                  {cat.title}
                </h3>
              </div>
              <span className="hidden font-mono text-[9px] tracking-[0.1em] text-ivory-600 sm:block">{cat.note}</span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {cat.items.map((item) => (
                <li key={item} className="group flex items-baseline gap-3 text-[13.5px] text-ivory-500">
                  <span className="h-px w-0 bg-brass-600/70 transition-all duration-500 group-hover:w-4" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionFrame>
  )
}