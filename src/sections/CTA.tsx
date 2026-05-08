import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { CTAButton } from '../components/CTAButton'
import { useInView } from '../hooks/useInView'

export function CTA() {
  const { ref, inView } = useInView(0.3)

  return (
    <SectionWrapper id="cta" dark className="flex items-center justify-center">
      <div ref={ref} className="min-h-screen flex flex-col items-center justify-center py-24 text-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-lg md:text-xl text-primary-light font-medium mb-4 tracking-wider"
        >
          Your vision can take shape.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-light mb-12 leading-tight"
        >
          あなたのビジョンは、
          <br />
          形にできる。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <CTAButton large glow>無料で始める</CTAButton>
          <p className="text-text-muted text-sm">
            クレジットカード不要 · AIチャット 3回/日 無料
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 flex items-center gap-3"
        >
          <img src="./images/navily-logo.png" alt="Navily" className="w-8 h-8 rounded-lg" />
          <span className="text-text-light/40 text-sm">Navily — AIコーチ</span>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
