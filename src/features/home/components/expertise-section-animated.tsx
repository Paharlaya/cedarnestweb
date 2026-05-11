'use client'

import { motion } from 'framer-motion'
import { services } from '@/config/site.config'
import { cn } from '@/lib/utils/cn'
import { ScrollReveal, StaggerReveal, fadeInUp, fadeInScale } from '@/components/animations/scroll-animations'

const ServiceIcons = {
  'web-design': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4" y="8" width="32" height="22" rx="3" stroke="#00D4FF" strokeWidth="2" fill="none"/>
      <line x1="4" y1="14" x2="36" y2="14" stroke="#00D4FF" strokeWidth="2"/>
      <circle cx="8" cy="11" r="1.5" fill="#00D4FF"/>
      <circle cx="13" cy="11" r="1.5" fill="#00D4FF"/>
      <line x1="13" y1="30" x2="27" y2="30" stroke="#00D4FF" strokeWidth="2"/>
    </svg>
  ),
  'web-development': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline points="13,16 7,20 13,24" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="27,16 33,20 27,24" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="23" y1="12" x2="17" y2="28" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  'digital-growth': (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <polyline points="6,28 14,18 22,22 34,10" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <polyline points="28,10 34,10 34,16" stroke="#00D4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
}

// Card animation with hover effects
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
}

export function ExpertiseSectionAnimated() {
  return (
    <section id="expertise" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-pulse animation-delay-400" />
      </div>

      <div className="container-custom relative">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
            What We Build For You
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance">
            We don't just build websites. We craft digital experiences that grow your business.
          </p>
        </ScrollReveal>

        <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.03,
                rotateY: 5,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className={cn(
                'glass rounded-2xl p-8 transition-all duration-300 cursor-pointer relative group',
                service.isFeatured && 'ring-2 ring-accent-cyan shadow-2xl shadow-accent-cyan/20'
              )}
            >
              {/* Glowing border effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-cyan via-accent-blue to-accent-cyan animate-gradient-x opacity-50 blur-sm" />
              </div>

              {/* Card content */}
              <div className="relative z-10">
                {/* Animated Icon */}
                <motion.div
                  className="mb-6"
                  animate={{
                    rotate: [0, 0, 360, 360],
                    scale: [1, 1.1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 5,
                    times: [0, 0.1, 0.2, 1],
                  }}
                >
                  {ServiceIcons[service.id as keyof typeof ServiceIcons]}
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-cyan transition-colors font-heading">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 group-hover:text-white/90 transition-colors">
                  {service.description}
                </p>

                {/* Features List with staggered animation */}
                <ul className="space-y-2" role="list">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.1 + featureIndex * 0.05,
                        duration: 0.4,
                      }}
                      className="flex items-center gap-3 text-white/80 group-hover:text-white transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-accent-cyan flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover particle effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-accent-cyan/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-ping" />
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-accent-blue/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animation-delay-200 group-hover:animate-ping" />
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}