import { motion } from 'framer-motion'
import { SectionWrapper } from '../components/SectionWrapper'
import { CTAButton } from '../components/CTAButton'
import { useInView } from '../hooks/useInView'

const plans = [
  {
    name: 'Free',
    price: '¥0',
    period: '',
    highlight: false,
    features: [
      'AIチャット 3回/日',
      'AIチューター 10回/月',
      '教材の要約のみ',
      'ストリーク記録',
    ],
  },
  {
    name: 'Premium',
    price: '¥1,980',
    period: '/月',
    highlight: true,
    badge: 'おすすめ',
    annual: '年額 ¥14,800（38%OFF）',
    features: [
      'AIチャット 100回/月',
      'AIチューター 無制限',
      '全チャプター閲覧',
      'ストリーク保護 無制限',
      '音声対話',
      '高精度AIモデル',
    ],
  },
  {
    name: 'Lite',
    price: '¥980',
    period: '/月',
    highlight: false,
    features: [
      'AIチャット 50回/月',
      'AIチューター 30回/月',
      '全チャプター閲覧',
      'ストリーク保護 月1回',
    ],
  },
]

export function Pricing() {
  const { ref, inView } = useInView(0.2)

  return (
    <SectionWrapper id="pricing" className="flex items-center">
      <div ref={ref} className="min-h-screen flex flex-col justify-center py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4"
        >
          プラン
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-text-muted text-center mb-12"
        >
          まずは無料で、あなたのペースで始められます
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15 }}
              className={`
                relative rounded-2xl p-6 flex flex-col
                ${plan.highlight
                  ? 'bg-white border-2 border-primary shadow-lg -mt-2 md:-mt-4 mb-2 md:mb-4'
                  : 'bg-white border border-gray-200 shadow-sm'
                }
              `}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </span>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlight ? 'text-primary' : ''}`}>
                {plan.name}
              </h3>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm text-text-muted">{plan.period}</span>}
              </div>

              {plan.annual && (
                <p className="text-xs text-accent font-medium mb-3">{plan.annual}</p>
              )}

              <ul className="space-y-2 mt-4 flex-1">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 mt-0.5 text-primary shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-dark">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                {plan.highlight ? (
                  <CTAButton>無料で始める</CTAButton>
                ) : (
                  <a
                    href="https://navilyai.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-3 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    {plan.name === 'Free' ? '無料で始める' : '詳しく見る'}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
