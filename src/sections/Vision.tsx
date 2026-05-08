import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'

const phases = [
  {
    label: 'Coach',
    title: '対話でゴールを一緒に見つける',
    desc: 'ぼんやりした「こうなりたい」に、輪郭を与える。',
  },
  {
    label: 'Architect',
    title: 'ゴールから逆算した道筋を引く',
    desc: 'あなた専用のロードマップ。何を、どの順で、どのくらい。',
  },
  {
    label: 'Tutor',
    title: 'あなた専用の教材で一緒に学ぶ',
    desc: 'カスタマイズされた教材を生成。今のあなたにぴったりの内容。',
  },
  {
    label: 'Companion',
    title: '毎日、隣にいる',
    desc: 'チェックイン、進捗管理、軌道修正。ずっと伴走する。',
  },
]

export function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <SectionWrapper id="vision" dark noPadding fullHeight={false}>
      <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
        <div className="sticky top-0 h-screen flex items-center px-6 md:px-12 lg:px-24">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: visualization */}
            <div className="relative h-[50vh] lg:h-[70vh] flex items-center justify-center">
              <CoachingVisualization progress={scrollYProgress} />
            </div>

            {/* Right: Text */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-light leading-tight"
              >
                「このままでいいのかな」に、
                <br />
                毎日付き合う存在がいたら？
              </motion.h2>

              <div className="space-y-6">
                {phases.map((phase, i) => (
                  <PhaseCard key={phase.label} phase={phase} index={i} progress={scrollYProgress} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

function PhaseCard({
  phase,
  index,
  progress,
}: {
  phase: (typeof phases)[number]
  index: number
  progress: MotionValue<number>
}) {
  const activeIndex = useTransform(progress, [0, 0.25, 0.5, 0.75, 1], [0, 0, 1, 2, 3])
  const opacity = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1 : 0.3))
  const scale = useTransform(activeIndex, (v: number) => (Math.abs(v - index) < 0.5 ? 1 : 0.95))

  return (
    <motion.div
      style={{ opacity, scale }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
    >
      <div className="flex items-center gap-3 mb-2">
        <span className="text-xs font-mono text-primary-light bg-primary/20 px-2 py-0.5 rounded">
          {phase.label}
        </span>
        <h3 className="text-lg font-semibold text-text-light">{phase.title}</h3>
      </div>
      <p className="text-sm text-text-light/60">{phase.desc}</p>
    </motion.div>
  )
}

function CoachingVisualization({ progress }: { progress: MotionValue<number> }) {
  const circleScale = useTransform(progress, [0, 0.3, 0.6, 1], [0.3, 0.6, 0.85, 1])
  const pathLen = useTransform(progress, [0, 0.5, 1], [0, 0.5, 1])
  const glowOpacity = useTransform(progress, [0, 0.3, 0.7, 1], [0.2, 0.5, 0.8, 1])
  const rotation = useTransform(progress, [0, 1], [0, 180])
  const innerR = useTransform(progress, [0, 1], [20, 80])

  const node0Opacity = useTransform(progress, [0, 0.1], [0, 1])
  const node1Opacity = useTransform(progress, [0.25, 0.35], [0, 1])
  const node2Opacity = useTransform(progress, [0.5, 0.6], [0, 1])
  const node3Opacity = useTransform(progress, [0.75, 0.85], [0, 1])
  const nodeOpacities = [node0Opacity, node1Opacity, node2Opacity, node3Opacity]

  return (
    <motion.div
      style={{ scale: circleScale, rotate: rotation }}
      className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 relative"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            '0 0 60px rgba(61,107,79,0.3), inset 0 0 60px rgba(61,107,79,0.1)',
            '0 0 100px rgba(61,107,79,0.5), inset 0 0 80px rgba(61,107,79,0.2)',
            '0 0 60px rgba(61,107,79,0.3), inset 0 0 60px rgba(61,107,79,0.1)',
          ],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg viewBox="0 0 400 400" className="w-full h-full">
        <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(61,107,79,0.15)" strokeWidth="1" />
        <motion.circle cx="200" cy="200" r="150" fill="none" stroke="rgba(61,107,79,0.6)" strokeWidth="2" style={{ pathLength: pathLen }} />
        <motion.circle cx="200" cy="200" style={{ r: innerR }} fill="rgba(61,107,79,0.15)" />
        <circle cx="200" cy="200" r="6" fill="#3D6B4F" />

        {[0, 90, 180, 270].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          return (
            <motion.circle
              key={i}
              cx={200 + Math.cos(rad) * 120}
              cy={200 + Math.sin(rad) * 120}
              r="8"
              fill="#3D6B4F"
              style={{ opacity: nodeOpacities[i] }}
            />
          )
        })}
      </svg>
    </motion.div>
  )
}
