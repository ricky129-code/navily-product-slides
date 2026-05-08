import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { useInView } from '../hooks/useInView'

export function Solution() {
  const { ref, inView } = useInView(0.2)

  return (
    <SectionWrapper id="solution" className="flex items-center">
      <div ref={ref} className="min-h-screen flex flex-col justify-center py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16 leading-tight"
        >
          構造的な空白を、埋める。
        </motion.h2>

        {/* Market gap visualization */}
        <div className="max-w-2xl mx-auto w-full space-y-4 mb-16">
          {/* Top tier */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gray-100 rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-lg font-semibold text-text-muted">有料コーチ</span>
              <span className="text-xl font-bold text-text-muted">¥30,000-50,000<span className="text-sm font-normal">/月</span></span>
            </div>
            <p className="text-sm text-text-muted">効くけど、多くの人に届かない。</p>
            <p className="text-xs text-text-muted/60 mt-1">ICF認定コーチ 日本わずか1,100人（ICF 2024）</p>
          </motion.div>

          {/* Navily - center highlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="bg-primary/5 rounded-xl p-6 border-2 border-primary relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light" />
            <div className="flex items-baseline justify-between mb-2">
              <div className="flex items-center gap-2">
                <img src="./images/navily-logo.png" alt="" className="w-6 h-6 rounded" />
                <span className="text-lg font-bold text-primary">Navily</span>
              </div>
              <span className="text-xl font-bold text-primary">¥980-1,980<span className="text-sm font-normal">/月</span></span>
            </div>
            <p className="text-sm text-text-dark font-medium mb-3">
              コーチの80%をAIが毎日やる。教材カスタマイズと学習追跡を一気通貫で。
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ゴール明確化</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">ロードマップ生成</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">教材カスタマイズ</span>
              <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">毎日の伴走</span>
            </div>
          </motion.div>

          {/* Bottom tier */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="bg-gray-100 rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-baseline justify-between mb-2">
              <span className="text-lg font-semibold text-text-muted">自己啓発・YouTube</span>
              <span className="text-xl font-bold text-text-muted">¥0-1,500</span>
            </div>
            <p className="text-sm text-text-muted">情報はあるけど、自分用に翻訳できない。</p>
            <p className="text-xs text-text-muted/60 mt-1">完走率3-6%（MOOCリサーチ）</p>
          </motion.div>
        </div>

        {/* Market data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0 }}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center"
        >
          <div className="p-4">
            <div className="text-2xl font-bold text-primary">
              $<AnimatedCounter end={6.69} decimals={2} />B
            </div>
            <p className="text-sm text-text-muted">AIコーチング市場（2026）</p>
            <p className="text-xs text-text-muted/60">→ $14.82B by 2030</p>
            <p className="text-xs text-text-muted/40">GlobeNewsWire, CAGR 22.3%</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-primary">
              <AnimatedCounter end={0} suffix="社" />
            </div>
            <p className="text-sm text-text-muted">日本語AIコーチング競合</p>
            <p className="text-xs text-text-muted/60">2026年時点</p>
          </div>
          <div className="p-4">
            <div className="text-2xl font-bold text-primary">
              <AnimatedCounter end={91} suffix="%" />
            </div>
            <p className="text-sm text-text-muted">AI伴走時の完走率</p>
            <p className="text-xs text-text-muted/60">vs 従来型72%</p>
            <p className="text-xs text-text-muted/40">PRD v1.1 専門家検証</p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
