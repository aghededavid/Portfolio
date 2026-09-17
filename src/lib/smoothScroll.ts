/**
 * rAF-driven smooth scrolling for in-page anchors.
 * Used instead of CSS scroll-behavior so easing is consistent everywhere
 * (some embedded webviews never start compositor smooth scrolls).
 */

const HEADER_OFFSET = 84

let activeToken = 0

function cancelOnUserInput(token: number) {
  const abort = () => {
    if (token === activeToken) activeToken++
  }
  window.addEventListener('wheel', abort, { passive: true, once: true })
  window.addEventListener('touchstart', abort, { passive: true, once: true })
}

export function smoothScrollTo(targetY: number) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const max = document.documentElement.scrollHeight - window.innerHeight
  const y = Math.max(0, Math.min(targetY, max))

  if (reduced) {
    window.scrollTo(0, y)
    return
  }

  const token = ++activeToken
  const startY = window.scrollY
  const delta = y - startY
  if (Math.abs(delta) < 2) return

  const duration = Math.min(950, Math.max(450, Math.abs(delta) * 0.32))
  const start = performance.now()

  const ease = (t: number) => 1 - Math.pow(1 - t, 4) // easeOutQuart
  const step = (now: number) => {
    if (token !== activeToken) return
    const t = Math.min(1, (now - start) / duration)
    window.scrollTo(0, startY + delta * ease(t))
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
  cancelOnUserInput(token)
}

export function scrollToElement(el: Element) {
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  smoothScrollTo(top)
}

/** Delegate clicks on same-page anchors; returns a cleanup fn. */
export function attachAnchorScrolling(root: Document): () => void {
  const handler = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
    const anchor = (e.target as HTMLElement).closest?.('a[href^="#"]') as HTMLAnchorElement | null
    if (!anchor) return
    const hash = anchor.getAttribute('href')
    if (!hash || hash === '#') return
    const target = document.getElementById(hash.slice(1))
    if (!target) return

    e.preventDefault()
    scrollToElement(target)
    history.pushState(null, '', hash)
    // move focus for keyboard/screen-reader users without visual jump
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
  }
  root.addEventListener('click', handler)
  return () => root.removeEventListener('click', handler)
}
