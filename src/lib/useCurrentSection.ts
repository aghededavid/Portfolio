import { useEffect, useMemo, useState } from 'react'

/** Returns the id of the section currently occupying the middle of the viewport. */
export function useCurrentSection(ids: string[]): string {
  const [current, setCurrent] = useState('')
  const key = useMemo(() => ids.join('|'), [ids])

  useEffect(() => {
    const list = key.split('|')
    const handler = () => {
      const probe = window.innerHeight * 0.4
      let active = ''
      for (const id of list) {
        const el = document.getElementById(id)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= probe && r.bottom > probe) active = id
      }
      setCurrent((prev) => (prev === active ? prev : active))
    }
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
    return () => {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  }, [key])

  return current
}
