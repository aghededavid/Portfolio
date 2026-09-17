/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  CONTENT — single factual source for the whole site and the printable CV.
 *
 *  Fields marked with `TODO:` were not supplied and are intentionally left as
 *  clearly-marked placeholders. Edit them here; every reference updates.
 *  Per the content rule: nothing is invented. If a field is empty, it is
 *  omitted from the UI rather than filled with fiction.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: 'Aghede David Eberechukwu',
  shortName: 'Aghede David E.',
  wordmark: 'AGHEDE',
  wordmarkSub: 'SECURITY / ENGINEERING',
  role: 'Cybersecurity Engineer / Security Researcher',
  // TODO: replace with the real email address.
  email: 'david@aghede.example',
  // TODO: replace with the real LinkedIn profile URL.
  linkedin: '',
  github: 'https://github.com/aghededavid',
  githubHandle: '@aghededavid',
  location: 'Nigeria · Remote-friendly',
  headline: ['Building systems', 'that make trust', 'measurable.'],
  heroCopy:
    'a cybersecurity engineer focused on threat detection, Zero Trust architecture, behavioral authentication, and security automation.',
  // TODO: drop the real CV PDF into /public and update CV_FILE below if you
  // prefer a direct download; the site currently opens a printable CV overlay.
  cvPath: '/cv-aguede-david.pdf',
} as const

// TODO: replace with the actual CV file in /public (e.g. '/cv-aghede-david.pdf').
// All CV buttons currently open a printable in-page CV overlay instead.
export const CV_FILE = '/cv-aguede-david.pdf'

export const about = {
  statements: [
    'Enterprise security is a discipline of evidence — not declarations.',
    'Access should be evaluated continuously, not granted once and forgotten.',
    'Good engineering makes the secure path the quiet, default one.',
  ],
  paragraphs: [
    'A cybersecurity undergraduate and technical builder with practical exposure to enterprise security operations — SOC monitoring, threat detection, network defense — and hands-on experience designing and building security-focused systems of his own.',
    'His work spans two directions. In operations: time spent inside an enterprise security stack — LogRhythm, Darktrace, Microsoft Defender for Endpoint, FortiGate — triaging alerts, watching network behavior, and learning how large organizations actually defend themselves. In engineering: designing Zero Trust access control, behavioral biometrics, and agentic security tooling — systems where trust is computed from evidence rather than assumed at login.',
    'He writes about what he builds, publishes what he can, and treats open source as part of the practice rather than an afterthought.',
  ],
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  kind: 'internship'
  summary: string
  detail: string[]
  stack: string[]
}

export const experience: ExperienceItem[] = [
  {
    role: 'Cybersecurity Intern',
    org: 'NNPC E&P Limited',
    period: 'Internship', // TODO: replace with exact dates, e.g. "Jun 2025 — Dec 2025"
    kind: 'internship',
    summary:
      'Enterprise security operations exposure across a production SOC stack — monitoring, threat detection, and network defense for an energy company.',
    detail: [
      'Worked with enterprise SIEM and detection tooling — LogRhythm — triaging alerts and following detections through investigation.',
      'Observed behavioral network analytics with Darktrace and endpoint defense with Microsoft Defender for Endpoint and Kaspersky.',
      'Supported network monitoring with PRTG Network Monitor and perimeter security with FortiGate and FortiClient.',
      'Gained working exposure to Active Directory and identity infrastructure in an enterprise Windows environment.',
      'Participated in SOC analysis: alert review, event correlation, and escalation of suspicious activity.',
    ],
    stack: [
      'LogRhythm',
      'Darktrace',
      'Microsoft Defender for Endpoint',
      'Kaspersky',
      'PRTG Network Monitor',
      'FortiGate',
      'FortiClient',
      'Active Directory',
    ],
  },
]

export interface Project {
  id: string
  index: string
  codename: string
  title: string
  status: string
  domain: string
  problem: string
  objective: string
  architecture: string[]
  implementation: string[]
  security: string[]
  state: string
  stack: string[]
  github?: string
  demo?: string
  diagram?: 'eccaac' | 'agentic'
}

export const projects: Project[] = [
  {
    id: 'eccaac',
    index: '01',
    codename: 'ECCAAC',
    title:
      'Zero-Touch Authentication: A Context-Aware Continuous Authentication Approach for Seamless Enterprise Access Control',
    status: 'Flagship · In active development',
    domain: 'Zero Trust · Behavioral Authentication',
    problem:
      'Enterprise access control still treats authentication as a moment — a credential check at the door, followed by an assumed-trust session that can last all day. If a session is hijacked, or a trusted device behaves strangely, nothing re-examines the decision that was already made.',
    objective:
      'Replace point-in-time login with continuous, context-aware authentication: a system that quietly scores behavioral and environmental evidence while work happens, and re-evaluates access as the evidence changes — without interrupting legitimate users.',
    architecture: [
      'A lightweight endpoint agent observes local behavior — typing dynamics, mouse dynamics, active process activity, device context — and streams observations over gRPC to the decision plane.',
      'Network context and session behavior join the stream server-side, where a behavioral risk scoring engine (machine-learning-based) converts raw signals into a live trust score per session.',
      'A policy decision engine evaluates the score against Zero Trust policy — least privilege, explicit verification, assume-breach — and issues access decisions that the endpoint enforces.',
      'Every observation, score, and decision lands in PostgreSQL / TimescaleDB as time-series telemetry, surfaced to a SIEM / analyst dashboard for visibility and later model feedback.',
    ],
    implementation: [
      'Agent services and control-plane components in Go; behavioral modeling and scoring pipelines in Python.',
      'gRPC for low-latency, strongly-typed streaming between endpoint and decision plane.',
      'PostgreSQL with TimescaleDB for high-granularity time-series storage of behavioral signals and decision history.',
      'Risk scoring designed around session-level behavioral baselines rather than static signatures.',
    ],
    security: [
      'Behavioral biometrics are processed as derived scores — raw keystroke content is not the product.',
      'Fail-closed posture: degraded or missing telemetry lowers confidence rather than defaulting to allow.',
      'Read/write separation between telemetry ingestion and policy evaluation paths.',
      'Designed to SIEM-friendly standards so decisions are auditable after the fact.',
    ],
    state: 'In active development as the flagship research and engineering effort — architecture, agent pipeline, and scoring plane under iterative construction.',
    stack: ['Go', 'Python', 'gRPC', 'PostgreSQL', 'TimescaleDB', 'Machine Learning', 'Zero Trust'],
    github: 'https://github.com/aghededavid',
    diagram: 'eccaac',
  },
  {
    id: 'agentic-cinema',
    index: '02',
    codename: 'AGENTIC CINEMA',
    title: 'Agentic Cinema — Studio Access Gatekeeper',
    status: 'Hackathon build · Deployed',
    domain: 'Agentic Security · Access Control',
    problem:
      'AI agents are starting to act on production systems — reading records, writing changes, triggering workflows. Access control built for humans doesn’t answer the question that matters: should this agent, in this context, be allowed to do this right now?',
    objective:
      'Build an access gatekeeper for agentic workflows: a gate that checks contextual security history before an agent action is permitted, and logs the decision so the whole flow stays auditable.',
    architecture: [
      'An agentic access layer sits between agent requests and studio resources — every read and write passes through the gatekeeper.',
      'Contextual security history is stored and queried in ClickHouse, giving the gate fast access to prior behavior when weighing a decision.',
      'The gatekeeper is exposed through MCP (Model Context Protocol), so agents request access through a defined, inspectable interface.',
      'Read and write paths are separated: reads and writes are evaluated and logged as distinct classes of action.',
    ],
    implementation: [
      'Built end-to-end during a hackathon — design, implementation, and deployment under time constraints.',
      'ClickHouse as the decision-history backbone; MCP as the agent-facing protocol.',
      'Access decisions and security logging implemented as first-class outputs, not afterthoughts.',
    ],
    security: [
      'Every decision is logged — an agent action without an audit trail is treated as a failure.',
      'Read/write separation limits blast radius of a compromised or misbehaving agent.',
      'Context-aware checks mean repeated suspicious requests surface in history before damage accumulates.',
    ],
    state: 'Built, deployed, and demoed at a hackathon. Scope is intentionally honest: it gates and logs agent access — it is not a full commercial IAM product.',
    stack: ['ClickHouse', 'MCP', 'Agentic Architecture', 'Access Control', 'Security Logging'],
    diagram: 'agentic',
  },
  {
    id: 'apksec',
    index: '03',
    codename: 'APKSEC',
    title: 'APKSec — Android Security Analysis',
    status: 'Open source',
    domain: 'Application Security · Android',
    problem:
      'Android applications ship with more attack surface than most reviews catch — exported components, weak permissions, embedded secrets, unsafe defaults — and manual review doesn’t scale.',
    objective:
      'A focused tool for Android APK security analysis: automate the first pass of static review so analysts spend their time on real findings, not unpacking.',
    architecture: [
      'Static analysis pipeline over APK files — manifest inspection, component exposure, and permission analysis.',
      'Findings organized by severity so triage starts at the top.',
      'Designed as a command-line workflow that slots into security automation.',
    ],
    implementation: [
      'Security automation first: repeatable runs, consistent output.',
      'Open source and extensible — new checks are additions, not forks.',
    ],
    security: [
      'Focused on the Android threat model: app-level misconfiguration and exposure.',
      'A starting point for deeper manual review, not a replacement for it.',
    ],
    state: 'Published and maintained as an open-source project.',
    stack: ['Android', 'Static Analysis', 'Python', 'Security Automation'],
    github: 'https://github.com/aghededavid/apksec',
  },
]

export interface ArsenalCategory {
  title: string
  note: string
  items: string[]
}

export const arsenal: ArsenalCategory[] = [
  {
    title: 'Security Operations',
    note: 'Detection & monitoring',
    items: ['LogRhythm', 'Darktrace', 'Microsoft Defender', 'Kaspersky', 'PRTG'],
  },
  {
    title: 'Network & Infrastructure Security',
    note: 'Perimeter & identity',
    items: ['FortiGate', 'FortiClient', 'Active Directory'],
  },
  {
    title: 'Programming',
    note: 'Implementation',
    items: ['Python', 'Go', 'JavaScript', 'HTML/CSS', 'PHP'],
  },
  {
    title: 'Security Engineering',
    note: 'Design disciplines',
    items: ['Zero Trust Architecture', 'Behavioral Biometrics', 'Risk Scoring', 'Threat Detection', 'Penetration Testing Fundamentals'],
  },
  {
    title: 'Engineering',
    note: 'Systems & tooling',
    items: ['gRPC', 'Git', 'API Integration', 'CI/CD', 'PostgreSQL', 'ClickHouse'],
  },
]

export interface FieldNote {
  index: string
  title: string
  blurb: string
  date: string
  readingTime: string
  tags: string[]
}

// Publication dates are placeholders in "Year — Vol" editorial style; the
// entries themselves describe intended research territory, not fake results.
export const fieldNotes: FieldNote[] = [
  {
    index: 'No. 01',
    title: 'The Case Against Login-Time Trust',
    blurb:
      'Why point-in-time authentication fails modern enterprises, and what a continuous evaluation model asks of identity architecture.',
    date: 'Forthcoming',
    readingTime: '6 min',
    tags: ['Zero Trust', 'Continuous Authentication'],
  },
  {
    index: 'No. 02',
    title: 'Reading a SIEM Like an Analyst',
    blurb:
      'Notes from enterprise SOC work — how alerts become investigations, and where detection engineering actually begins.',
    date: 'Forthcoming',
    readingTime: '8 min',
    tags: ['SIEM', 'SOC Operations'],
  },
  {
    index: 'No. 03',
    title: 'Behavioral Biometrics Without the Hype',
    blurb:
      'What typing dynamics and mouse dynamics can — and cannot — prove about identity, and how to score them honestly.',
    date: 'Forthcoming',
    readingTime: '7 min',
    tags: ['Behavioral Authentication', 'Risk Scoring'],
  },
  {
    index: 'No. 04',
    title: 'Android Attack Surface, Systematically',
    blurb:
      'A method for static APK review: exported components, permission hygiene, and the misconfigurations that repeat across apps.',
    date: 'Forthcoming',
    readingTime: '9 min',
    tags: ['Android Security', 'AppSec'],
  },
]

export interface Repo {
  name: string
  description: string
  tech: string[]
  domain: string
  url: string
}

export const repos: Repo[] = [
  {
    name: 'apksec',
    description: 'Android APK security analysis — static review automation for app-level exposure.',
    tech: ['Python', 'Android', 'Static Analysis'],
    domain: 'Application Security',
    url: 'https://github.com/aghededavid/apksec',
  },
  {
    name: 'agentic-cinema',
    description: 'Studio access gatekeeper for AI agents — contextual history, access decisions, audit logging.',
    tech: ['ClickHouse', 'MCP', 'Access Control'],
    domain: 'Agentic Security',
    url: 'https://github.com/aghededavid',
  },
  {
    name: 'eccaac',
    description: 'Zero-touch continuous authentication — behavioral biometrics and Zero Trust policy evaluation.',
    tech: ['Go', 'Python', 'gRPC', 'TimescaleDB'],
    domain: 'Zero Trust · Identity',
    url: 'https://github.com/aghededavid',
  },
]

export const navigation = [
  { label: 'Profile', href: '#profile', index: '01' },
  { label: 'Experience', href: '#experience', index: '02' },
  { label: 'Selected Work', href: '#work', index: '03' },
  { label: 'Practice', href: '#practice', index: '04' },
  { label: 'Field Notes', href: '#writing', index: '05' },
  { label: 'Contact', href: '#contact', index: '06' },
]
