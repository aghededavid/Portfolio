import type { ReactNode } from 'react'
import { SectionHeading, MonoCap, FlowArrow } from './DiagramsShared'

function Node({ children }: { children: ReactNode }) {
  return (
    <div className="relative border border-ivory-600/22 bg-espresso-850/80 px-3 py-2.5 text-center sm:px-4">
      <span className="font-mono text-[9.5px] font-medium uppercase tracking-[0.14em] text-ivory-400">{children}</span>
    </div>
  )
}

function NodeTitle({ children }: { children: ReactNode }) {
  return (
    <div className="relative border border-brass-600/45 bg-espresso-800/90 px-3 py-3 text-center sm:px-5">
      <span className="font-sans text-[10.5px] font-semibold uppercase tracking-[0.18em] text-brass-300">{children}</span>
    </div>
  )
}

export function EccaacDiagram() {
  return (
    <figure aria-label="ECCAAC architecture: endpoint signals flow through an agent over gRPC into the decision plane, producing access decisions and SIEM telemetry">
      <SectionHeading>System Architecture</SectionHeading>

      {/* ── flow: endpoint to agent to decision plane ── */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 sm:gap-3">
        <div className="flex flex-col gap-2 sm:gap-3">
          <NodeTitle>Endpoint</NodeTitle>
          <Node>Agent</Node>
        </div>
        <div className="flex flex-col justify-center" aria-hidden="true">
          <FlowArrow />
        </div>
        <div className="flex flex-col gap-2 sm:gap-3">
          <NodeTitle>Policy Decision Engine</NodeTitle>
          <Node>Risk Scoring Engine</Node>
        </div>
      </div>

      <FlowArrow center />

      {/* ── decision plane: policy evaluation → access decision ── */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 sm:gap-3">
        <NodeTitle>Policy Evaluation</NodeTitle>
        <div className="flex flex-col justify-center" aria-hidden="true">
          <FlowArrow />
        </div>
        <NodeTitle>Access Decision</NodeTitle>
      </div>

      <FlowArrow center split />

      {/* ── terminus: SIEM / dashboard ── */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        <Node>SIEM</Node>
        <Node>Analyst Dashboard</Node>
      </div>

      {/* ── channel annotations ── */}
      <div className="mt-8 grid gap-x-8 gap-y-4 border-t border-ivory-600/12 pt-6 sm:grid-cols-3">
        <div>
          <MonoCap>Signal plane</MonoCap>
          <p className="mt-1.5 font-mono text-[10.5px] leading-[1.7] text-ivory-500">
            typing dynamics · mouse dynamics · device context · process activity · network context · session behavior
          </p>
        </div>
        <div>
          <MonoCap>Transport</MonoCap>
          <p className="mt-1.5 font-mono text-[10.5px] leading-[1.7] text-ivory-500">
            gRPC streaming · strongly-typed telemetry
          </p>
        </div>
        <div>
          <MonoCap>Evidence store</MonoCap>
          <p className="mt-1.5 font-mono text-[10.5px] leading-[1.7] text-ivory-500">
            PostgreSQL / TimescaleDB · time-series decisions
          </p>
        </div>
      </div>
    </figure>
  )
}
