import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { useInView } from '../hooks/useInView'

const painPoints = [
  'Udemy買ったけど、3日で開かなくなった。',
  'YouTube見たけど、自分の状況に当てはまらなかった。',
  'コーチに相談したいけど、月3万は払えない。',
]

export function Pain() {
  const { ref, inView } = useInView(0.3)

  return (
    <SectionWrapper id="pain" className="flex items-center">
      <div ref={ref} className="min-h-screen flex flex-col justify-center py-24">
        <div className="max-w-3xl mx-auto space-y-6 mb-16">
          {painPoints.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.4 }}
            >
              <p
                className={`
                  text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed
                  ${inView ? 'strike-through active' : ''}
                `}
                style={{ animationDelay: `${i * 0.4 + 1.2}s` }}
              >
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2.0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={3} suffix="-6%" />
              </div>
              <p className="text-sm text-text-muted">オンライン講座の完走率</p>
              <p className="text-xs text-text-muted/60 mt-1">MOOCリサーチ</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={53} suffix="%" />
              </div>
              <p className="text-sm text-text-muted">「コーチが欲しい」と回答</p>
              <p className="text-xs text-text-muted/60 mt-1">ICF Global Coaching Study 2025</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                <AnimatedCounter end={12} suffix="%" />
              </div>
              <p className="text-sm text-text-muted">実際にコーチを利用</p>
              <p className="text-xs text-text-muted/60 mt-1">41%が「欲しいけど届かない」</p>
            </div>
          </div>

          <p className="text-center text-lg md:text-xl text-text-dark font-medium">
            <span className="text-primary font-bold">41%</span>の人が、
            「コーチが欲しいけど手が届かない」まま放置されている。
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
