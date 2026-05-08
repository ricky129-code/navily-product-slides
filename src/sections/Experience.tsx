import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'

const steps = [
  {
    number: '01',
    title: '話すだけで、ゴールが見えてくる',
    desc: 'AIコーチとの対話で、ぼんやりした「こうなりたい」が明確なゴールに変わる。',
    placeholder: 'ヒアリング画面',
    color: 'from-primary/20 to-primary/5',
  },
  {
    number: '02',
    title: 'あなた専用の道筋ができる',
    desc: 'ゴールから逆算したロードマップを自動生成。何を、どの順で、どのくらい学ぶか。',
    placeholder: 'ロードマップ画面',
    color: 'from-primary/15 to-accent/10',
  },
  {
    number: '03',
    title: '今日やることが、もう決まっている',
    desc: '毎週のアクションが明確。教材も、チェックインも、伴走もここから。',
    placeholder: 'コーチホーム画面',
    color: 'from-accent/15 to-accent/5',
  },
]

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <SectionWrapper id="experience" noPadding fullHeight={false}>
      <div ref={containerRef} style={{ height: '300vh' }}>
        <div className="sticky top-0 h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto w-full">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-2xl md:text-3xl font-bold text-center mb-12"
            >
              3ステップで、変わり始める
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Phone mockup */}
              <div className="flex justify-center order-2 lg:order-1">
                <PhoneMockup progress={scrollYProgress} />
              </div>

              {/* Step descriptions */}
              <div className="space-y-6 order-1 lg:order-2">
                {steps.map((step, i) => (
                  <StepCard key={i} step={step} index={i} progress={scrollYProgress} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function StepCard({
  step,
  index,
  progress,
}: {
  step: (typeof steps)[number]
  index: number
  progress: ReturnType<typeof useScroll>['scrollYProgress']
}) {
  const opacity = useTransform(progress, [index * 0.33, index * 0.33 + 0.1, (index + 1) * 0.33], [0.3, 1, 1])
  const scale = useTransform(progress, [index * 0.33, index * 0.33 + 0.1], [0.95, 1])

  return (
    <motion.div
      style={{ opacity, scale }}
      className={`bg-gradient-to-br ${step.color} rounded-xl p-6 border border-gray-200/50`}
    >
      <span className="text-xs font-mono text-primary font-bold">STEP {step.number}</span>
      <h3 className="text-lg md:text-xl font-bold mt-1 mb-2">{step.title}</h3>
      <p className="text-sm text-text-muted">{step.desc}</p>
    </motion.div>
  )
}

function PhoneMockup({ progress }: { progress: ReturnType<typeof useScroll>['scrollYProgress'] }) {
  const activeStep = useTransform(progress, [0, 0.33, 0.66, 1], [0, 0, 1, 2])

  return (
    <div
      className="relative w-[280px] md:w-[320px] h-[560px] md:h-[640px] rounded-[3rem] border-[8px] border-gray-800 bg-white shadow-2xl overflow-hidden"
      style={{
        perspective: '1000px',
      }}
    >
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-2xl z-10" />

      {/* Screen content placeholder */}
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            style={{
              opacity: useTransform(activeStep, (v) => Math.abs(v - i) < 0.5 ? 1 : 0),
            }}
            className="absolute inset-8 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary">{step.number}</span>
            </div>
            <p className="text-sm font-medium text-text-dark">{step.placeholder}</p>
            <p className="text-xs text-text-muted mt-2">スクリーンショットをここに配置</p>
          </motion.div>
        ))}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
    </div>
  )
}
