'use client'

import dynamic from 'next/dynamic'

const Hyperspeed = dynamic(() => import('@/components/ui/hyperspeed'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
  )
})

/**
 * Hero Background - Client Component
 * Features the hyperspeed animation effect
 * Creates an immersive futuristic background
 */
export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient for fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />

      {/* Hyperspeed Effect */}
      <div className="absolute inset-0">
        <Hyperspeed />
      </div>

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/40 to-transparent pointer-events-none" />
    </div>
  )
}