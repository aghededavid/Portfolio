import type { ReactNode } from 'react'
import { SectionHeading, MonoCap } from './DiagramsShared'

function GateNode({ children }: { children: ReactNode }) {
  return (
    <div className="relative border border-brass-600/45 bg-espresso-800/90 px-3 py-3 text-center">
      <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brass-300">
        {children}
      </span>
    </div>
  )
}

function PlainNode({ children }: { children: ReactNode }) {
  return (
    <div className="relative border border-ivory-600/22 bg-espresso-850/80 px-3 py-2.5 text-center">
      <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-ivory-400">
        {children}
      </span>
    </div>
  )
}

function DownChevron() {
  return (
    <div className="flex h-7 items-center justify-center" aria-hidden="true">
      <span className="flex flex-col items-center gap-0.5">
        <span className="h-3 w-px bg-ivory-600/30" />
        <span className="h-[6px] w-[6px] rotate-45 border-b border-r border-ivory-600/40" />
      </span>
    </div>
  )
}

export function AgenticDiagram() {
  return (
    <figure aria-label="Agentic Cinema architecture: agent requests pass through an MCP gatekeeper that consults contextual history in ClickHouse and writes to an audit log">
      <SectionHeading>Access Flow</SectionHeading>

      <PlainNode>AI Agent Request</PlainNode>
      <DownChevron />
      <GateNode>MCP Gatekeeper</GateNode>
      <DownChevron />

      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        <PlainNode>Read Path</PlainNode>
        <PlainNode>Write Path</PlainNode>
      </div>

      <DownChevron />

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        <GateNode>ClickHouse — Contextual History</GateNode>
        <GateNode>Security Audit Log</GateNode>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-4 border-t border-ivory-600/12 pt-5 sm:grid-cols-2">
        <div>
          <MonoCap>Decision inputs</MonoCap>
          <p className="mt-1.5 font-mono text-[10.5px] leading-[1.7] text-ivory-500">
            agent identity · action class · contextual security history
          </p>
        </div>
        <div>
          <MonoCap>Guarantees</MonoCap>
          <p className="mt-1.5 font-mono text-[10.5px] leading-[1.7] text-ivory-500">
            every decision logged · read/write separation · auditable by design
          </p>
        </div>
      </div>
    </figure>
  )
}
