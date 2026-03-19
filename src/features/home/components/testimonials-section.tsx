'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials, clientLogos } from '@/config/site.config'
import { ScrollReveal } from '@/components/animations/scroll-animations'
import Image from 'next/image'

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPaused])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-20 bg-dark-lighter relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 102, 255, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="container-custom relative">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
              Client Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Hear what our clients say about their transformation journey with us
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div
            className="relative min-h-[300px]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-dark-card/50 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative"
              >
                {/* Quote Icon */}
                <motion.div
                  className="absolute -top-4 left-8 text-6xl text-accent-cyan/20"
                  initial={{ rotate: -10 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  "
                </motion.div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      className="w-5 h-5 text-accent-cyan"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial Content */}
                <motion.p
                  className="text-white/80 text-lg leading-relaxed mb-6 text-center italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  "{currentTestimonial.content}"
                </motion.p>

                {/* Author Info */}
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-white font-semibold text-lg">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-white/60 text-sm">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                </motion.div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 rounded-b-2xl overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent-cyan to-accent-blue"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{
                      duration: 5,
                      ease: 'linear',
                      repeat: Infinity,
                    }}
                    style={{
                      animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-accent-cyan to-accent-blue'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logo Banner */}
        <ScrollReveal delay={0.3}>
          <div className="relative">
            <p className="text-center text-white/60 text-sm mb-6">
              Trusted by Our Growing Community
            </p>

            {/* Logo Marquee Container */}
            <div className="relative overflow-hidden py-8">
              {/* Gradient Masks */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-lighter to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-lighter to-transparent z-10" />

              {/* Double Row for Seamless Loop */}
              <div className="flex gap-16">
                <motion.div
                  className="flex gap-16 items-center"
                  animate={{
                    x: [0, -100 * clientLogos.length],
                  }}
                  transition={{
                    x: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {/* First set of logos */}
                  {[...clientLogos, ...clientLogos].map((client, index) => (
                    <motion.div
                      key={`${client.id}-${index}`}
                      className="flex-shrink-0 group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative w-32 h-16 opacity-80 group-hover:opacity-100 transition-all duration-300">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Second Row Moving Opposite Direction */}
            <div className="relative overflow-hidden py-8">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-lighter to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-lighter to-transparent z-10" />

              <div className="flex gap-16">
                <motion.div
                  className="flex gap-16 items-center"
                  animate={{
                    x: [-100 * clientLogos.length, 0],
                  }}
                  transition={{
                    x: {
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                  }}
                >
                  {[...clientLogos, ...clientLogos].map((client, index) => (
                    <motion.div
                      key={`reverse-${client.id}-${index}`}
                      className="flex-shrink-0 group cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="relative w-32 h-16 opacity-80 group-hover:opacity-100 transition-all duration-300">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}