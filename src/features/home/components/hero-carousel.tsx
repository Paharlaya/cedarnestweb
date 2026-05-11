'use client'

import { motion } from 'framer-motion'

export function HeroCarousel() {
  return (
    <div className="text-center space-y-6 max-w-5xl mx-auto min-h-[500px] flex flex-col justify-center pb-24">
      {/* Title */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-heading px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        Premium Websites &
        <span className="block bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent pb-2">
          Built for Results
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto text-balance px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
      >
        We design and develop stunning, high-performance websites that represent your brand and drive real growth. Fast delivery, exceptional quality, 5-star results.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="flex gap-3 justify-center flex-wrap px-4 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        <a
          href="#contact"
          className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          Start Your Project
        </a>
        <a
          href="#testimonials"
          className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold rounded-xl bg-dark-card border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
        >
          View Our Work
        </a>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-3 gap-2 sm:gap-8 max-w-md mx-auto pt-6 px-2 sm:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
      >
        {[
          { value: '3x Faster', label: 'Delivery Speed' },
          { value: '100%', label: 'Quality Score' },
          { value: '5 Stars', label: 'Client Rating' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-accent-cyan to-accent-blue bg-clip-text text-transparent">
              {stat.value}
            </div>
            <div className="text-white/70 text-[10px] sm:text-xs">{stat.label}</div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
