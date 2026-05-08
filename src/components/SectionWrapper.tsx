import { type ReactNode } from 'react'

interface Props {
  id: string
  dark?: boolean
  className?: string
  children: ReactNode
  fullHeight?: boolean
  noPadding?: boolean
}

export function SectionWrapper({ id, dark, className = '', children, fullHeight = true, noPadding }: Props) {
  return (
    <section
      id={id}
      className={`
        relative w-full
        ${fullHeight ? 'min-h-screen' : ''}
        ${noPadding ? '' : 'px-6 md:px-12 lg:px-24'}
        ${dark ? 'bg-dark-bg text-text-light' : 'bg-light-bg text-text-dark'}
        ${className}
      `}
    >
      {dark && <div className="noise-bg absolute inset-0" />}
      <div className="relative z-10 mx-auto max-w-6xl w-full h-full">
        {children}
      </div>
    </section>
  )
}
