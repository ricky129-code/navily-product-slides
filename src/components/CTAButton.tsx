import { motion } from 'framer-motion'

interface Props {
  href?: string
  children: React.ReactNode
  large?: boolean
  glow?: boolean
}

export function CTAButton({ href = 'https://navilyai.com', children, large, glow }: Props) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`
        inline-flex items-center justify-center
        bg-accent hover:bg-accent-light
        text-white font-semibold
        rounded-full transition-colors
        ${large ? 'px-12 py-4 text-lg md:text-xl' : 'px-8 py-3 text-base'}
        ${glow ? 'glow-cta' : ''}
      `}
    >
      {children}
    </motion.a>
  )
}
