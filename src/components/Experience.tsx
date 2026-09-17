import { experience } from '../content'
import { SectionFrame } from './Primitives'
import { ShieldCheck } from 'lucide-react'

export function Experience() {
  return (
    <SectionFrame
      id="experience"
      index="02"
      kicker="Experience"
      title="Inside the enterprise stack."
      lead="Exposure to a production security operations environment — the tools, the alerts, the discipline."
    >
      <ol className="relative space-y-12">
        {experience.map((item) => (
          <li key={item.org} className="relative pl-8 sm:pl-12" data-reveal>
            {/* timeline spine */}
            <span
              className="absolute left-[5px] top-2 h-full w-px bg-ivory-600/20"
              aria-hidden="true"
            />
            <span
              className="absolute left-0 top-2 h-[11px] w-[11px] rounded-full border border-brass-600 bg-espresso-900"
              aria-hidden="true"
            />

            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-[11px] tracking-[0.14em] text-brass-600">{item.period}</p>
                <h3 className="font-display mt-2 text-[27px] font-medium leading-tight text-ivory-300">
                  {item.role}
                </h3>
                <p className="mt-1.5 font-sans text-[12px] font-semibold uppercase tracking-[0.18em] text-ivory-500">
                  {item.org}
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="max-w-2xl text-[14.5px] leading-[1.8] text-ivory-400">{item.summary}</p>
                <ul className="mt-5 max-w-3xl space-y-2.5">
                  {item.detail.map((d, i) => (
                    <li key={i} className="flex gap-3 text-[13.5px] leading-relaxed text-ivory-500">
                      <span className="mt-[7px] h-px w-3 shrink-0 bg-brass-600/60" aria-hidden="true" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 crosshair border border-ivory-600/12 bg-espresso-850/60 p-5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={13} strokeWidth={1.5} aria-hidden="true" className="text-brass-600" />
                    <span className="label !text-[9.5px]">Systems worked with</span>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3">
                    {item.stack.map((s) => (
                      <span key={s} className="font-mono text-[10.5px] tracking-[0.05em] text-ivory-500">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
        <li aria-hidden="true" className="absolute left-[5px] top-0 h-full w-px overflow-hidden">
          <span className="block h-full w-px bg-ivory-600/10" />
        </li>
      </ol>
    </SectionFrame>
  )
}
