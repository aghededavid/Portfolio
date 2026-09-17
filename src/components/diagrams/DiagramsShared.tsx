import type { ReactNode } from 'react'

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <figcaption className="mb-5 flex items-center gap-3">
      <span className="h-px w-6 bg-brass-600/70" aria-hidden="true" />
      <span className="label !text-[9.5px] !tracking-[0.26em]">{children}</span>
    </figcaption>
  )
}

export function MonoCap({ children }: { children: ReactNode }) {
  return <span className="label !text-[9px] !tracking-[0.22em]">{children}</span>
}

/** Vertical flow arrow; `center` centers it, `split` forks it in two. */
export function FlowArrow({ center = false, split = false }: { center?: boolean; split?: boolean }) {
  const line = 'bg-ivory-600/30'
  const head = 'border-ivory-600/40'
  return (
    <div className={`flex items-stretch justify-center ${center ? 'h-8' : 'h-full min-h-8'}`} aria-hidden="true">
      {split ? (
        <div className="relative flex w-40 justify-center">
          <span className={`absolute top-0 h-4 w-px ${line}`} style={{ left: '25%' }} />
          <span className={`absolute top-0 h-4 w-px ${line}`} style={{ left: '75%' }} />
          <span className={`absolute top-3 h-px w-1/2 ${line}`} style={{ left: '25%' }} />
          <span className={`absolute top-[15px] left-1/2 h-3 w-px ${line}`} />
          <span
            className={`absolute bottom-0 left-1/2 -ml-[3.5px] h-[7px] w-[7px] rotate-45 border-b border-r ${head}`}
          />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-0.5 py-1">
          <span className={`w-px flex-1 ${line}`} />
          <span className={`h-[6px] w-[6px] rotate-45 border-b border-r ${head}`} />
        </div>
      )}
    </div>
  )
}
