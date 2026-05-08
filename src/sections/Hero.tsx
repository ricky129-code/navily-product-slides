import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { CTAButton } from '../components/CTAButton'

const lines = [
  'やりたいことはある。',
  '何から始めればいいか、わからない。',
]
const tagline = 'その一歩を、一緒に踏み出す。'

export function Hero() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 600)
    const t2 = setTimeout(() => setPhase(2), 1400)
    const t3 = setTimeout(() => setPhase(3), 3400)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  return (
    <SectionWrapper id="hero" dark className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
        <div className="mb-12 space-y-3">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30, clipPath: 'inset(100% 0 0 0)' }}
              animate={phase > i
                ? { opacity: 1, y: 0, clipPath: 'inset(0 0 0 0)' }
                : {}
              }
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-text-light leading-tight"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0 }}
          className="text-lg md:text-2xl text-primary-light font-medium mb-12"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={phase >= 3 ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <img src="./images/navily-logo.png" alt="Navily" className="w-10 h-10 rounded-xl" />
            <span className="text-text-light text-xl font-semibold">Navily</span>
            <span className="text-text-muted text-sm">AIコーチ</span>
          </div>
          <CTAButton>無料で始める</CTAButton>
          <p className="text-text-muted text-sm">クレジットカード不要</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={phase >= 3 ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="animate-bounce-slow text-text-muted">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
