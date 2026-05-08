import { useState, useEffect } from 'react'

const sections = [
  { id: 'hero', label: '' },
  { id: 'pain', label: 'Pain' },
  { id: 'vision', label: 'Vision' },
  { id: 'solution', label: 'Solution' },
  { id: 'experience', label: 'Experience' },
  { id: 'how-to-use', label: 'How to Use' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'cta', label: '' },
]

export function Navigation() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === entry.target.id)
            if (idx >= 0) setActive(idx)
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-2">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3 justify-end"
          aria-label={s.label || s.id}
        >
          {s.label && (
            <span className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
              {s.label}
            </span>
          )}
          <span
            className={`
              block rounded-full transition-all duration-300
              ${i === active
                ? 'w-3 h-3 bg-primary'
                : 'w-2 h-2 bg-text-muted/30 group-hover:bg-text-muted/60'
              }
            `}
          />
        </a>
      ))}
    </nav>
  )
}
