import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function AnimatedCounter({ end, duration = 1.5, suffix = '', prefix = '', decimals = 0 }: Props) {
  const { ref, inView } = useInView(0.5)
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = 0
    const startTime = performance.now()
    const durationMs = duration * 1000

    function animate(now: number) {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(start + (end - start) * eased)
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [inView, end, duration])

  return (
    <span ref={ref} className="tabular-nums font-bold">
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  )
}
