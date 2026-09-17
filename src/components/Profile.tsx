import { profile, about } from '../content'
import { SectionFrame, MicroLabel } from './Primitives'

export function Profile() {
  return (
    <SectionFrame
      id="profile"
      index="01"
      kicker="Profile"
      title="A practice built on evidence."
      paper
    >
      <div className="grid gap-14 lg:grid-cols-12">
        {/* left: credentials plate */}
        <div className="lg:col-span-4">
          <div className="crosshair border border-espresso-600/40 bg-[#efe8da] p-7 shadow-[0_1px_0_rgba(34,28,22,0.06),0_18px_40px_-24px_rgba(16,12,8,0.35)]" data-reveal>
            <MicroLabel paper>The Register</MicroLabel>
            <p className="font-display mt-5 text-[26px] font-medium leading-tight text-espresso-900">
              {profile.name}
            </p>
            <p className="mt-1 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-espresso-600">
              {profile.role}
            </p>
            <div className="my-6 h-px bg-espresso-600/30" />
            <dl className="space-y-3.5 font-sans text-[12.5px] leading-relaxed text-espresso-700">
              <div className="flex justify-between gap-4">
                <dt className="uppercase tracking-[0.14em] text-[10px] font-semibold text-espresso-600 pt-0.5">Discipline</dt>
                <dd className="text-right">Cybersecurity Engineering</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="uppercase tracking-[0.14em] text-[10px] font-semibold text-espresso-600 pt-0.5">Standing</dt>
                <dd className="text-right">Undergraduate, Cybersecurity</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="uppercase tracking-[0.14em] text-[10px] font-semibold text-espresso-600 pt-0.5">Operations</dt>
                <dd className="text-right">Enterprise SOC exposure</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="uppercase tracking-[0.14em] text-[10px] font-semibold text-espresso-600 pt-0.5">Open work</dt>
                <dd className="text-right">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline">
                    {profile.githubHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <p className="mono-note mt-6 !text-espresso-600" data-reveal>
            Filed under: security engineering, continuous authentication, detection.
          </p>
        </div>

        {/* right: editorial biography */}
        <div className="lg:col-span-7 lg:col-start-6">
          <div className="space-y-7" data-reveal>
            {about.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'font-display text-[23px] sm:text-[26px] leading-[1.42] text-espresso-900'
                    : 'text-[15px] leading-[1.9] text-espresso-700'
                }
              >
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 border-t border-espresso-600/30 pt-8" data-reveal>
            <MicroLabel paper>Working Principles</MicroLabel>
            <ul className="mt-5 space-y-4">
              {about.statements.map((s, i) => (
                <li key={i} className="flex items-baseline gap-4">
                  <span className="font-mono text-[10px] text-brass-700">0{i + 1}</span>
                  <span className="font-display text-[19px] italic leading-snug text-espresso-800">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionFrame>
  )
}
