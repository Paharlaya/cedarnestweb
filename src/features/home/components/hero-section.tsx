'use client'

import { HeroBackground } from './hero-background'
import { HeroCarousel } from './hero-carousel'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      <HeroBackground />
      <div className="container-custom relative z-10 pt-20">
        <HeroCarousel />
      </div>
    </section>
  )
}
