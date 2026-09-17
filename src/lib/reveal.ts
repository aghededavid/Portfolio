/** Attaches a shared IntersectionObserver that flips [data-reveal] to 'in'. */
export function attachReveals(root: ParentNode): () => void {
  if (typeof IntersectionObserver === 'undefined') {
    root.querySelectorAll('[data-reveal]').forEach((el) => el.setAttribute('data-reveal', 'in'))
    return () => {}
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          ;(entry.target as HTMLElement).setAttribute('data-reveal', 'in')
          observer.unobserve(entry.target)
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  )

  root.querySelectorAll('[data-reveal]').forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}
