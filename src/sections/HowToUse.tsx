import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { useInView } from '../hooks/useInView'

const enjoyments = [
  {
    icon: '🗺️',
    title: '体系的に学ぶ',
    desc: 'AIとの対話でロードマップを作り、ゴールから逆算して体系的に学ぶ',
  },
  {
    icon: '⚡',
    title: 'ピンポイントで学ぶ',
    desc: '単発テーマで教材を生成、必要なことだけすぐ学ぶ',
  },
  {
    icon: '🌳',
    title: '学びを見える化する',
    desc: 'スキルツリーで知識のつながりを俯瞰、学習記録を残す',
  },
]

const tips = [
  {
    title: 'ペンリーに話しかける',
    desc: 'AIコーチ「ペンリー」にいつでも相談できます。学習の悩み、キャリアの方向性、何でもOK。',
  },
  {
    title: '週1のアクション報告',
    desc: '毎週のアクションを報告すると、AIが学習プランを最適化します。',
  },
  {
    title: 'フィードバック',
    desc: 'プロダクトへのご意見・ご要望は、ペンリーとの対話中にいつでもお伝えください。',
  },
]

export function HowToUse() {
  const { ref, inView } = useInView(0.2)

  return (
    <SectionWrapper id="how-to-use" className="flex items-center">
      <div ref={ref} className="min-h-screen flex flex-col justify-center py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4"
        >
          3つの楽しみ方
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-center mb-12"
        >
          あなたのスタイルに合わせて使えます
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {enjoyments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-xl font-bold text-center mb-8"
        >
          使い方のコツ
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tips.map((tip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0 + i * 0.1 }}
              className="bg-primary/5 rounded-xl p-5 border border-primary/10"
            >
              <h4 className="text-sm font-bold text-primary mb-1">{tip.title}</h4>
              <p className="text-xs text-text-muted">{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
