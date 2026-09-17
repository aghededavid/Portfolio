import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Profile } from './components/Profile'
import { Experience } from './components/Experience'
import { CaseStudies } from './components/CaseStudies'
import { Practice } from './components/Practice'
import { Writing } from './components/Writing'
import { Repositories } from './components/Repositories'
import { Contact } from './components/Contact'
import { CurriculumVitae } from './components/CurriculumVitae'
import { attachReveals } from './lib/reveal'
import { attachAnchorScrolling } from './lib/smoothScroll'

export default function App() {
  const [cvOpen, setCvOpen] = useState(false)
  const openCv = () => setCvOpen(true)

  useEffect(() => attachReveals(document), [])
  useEffect(() => attachAnchorScrolling(document), [])

  return (
    <>
      <div id="site-content">
        <Header onOpenCv={openCv} />
        <main>
          <Hero onOpenCv={openCv} />
          <Profile />
          <Experience />
          <CaseStudies />
          <Practice />
          <Writing />
          <Repositories />
          <Contact onOpenCv={openCv} />
        </main>
      </div>
      <CurriculumVitae open={cvOpen} onClose={() => setCvOpen(false)} />
    </>
  )
}
