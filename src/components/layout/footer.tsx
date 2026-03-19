'use client'

import Image from 'next/image'
import { company, contactInfo } from '@/config/site.config'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

/**
 * Footer Component - Enhanced Glassmorphic Design
 * Futuristic footer with animated gradients and glass effects
 */
export function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.getElementById('footer')?.getBoundingClientRect()
      if (rect) {
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="relative bg-dark/50 backdrop-blur-xl border-t border-white/10 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-blue/20" />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-gradient-radial from-accent-cyan/30 to-transparent rounded-full blur-3xl"
          animate={{
            x: mousePosition.x - 300,
            y: mousePosition.y - 300,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 100 }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent, #00d4ff, #0066ff, #00d4ff, transparent)',
          backgroundSize: '200% 100%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '200% 0%']
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      <div className="container-custom py-12 relative z-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Company Info */}
          <motion.div
            className="group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <div className="flex items-center gap-4 mb-6 relative">
              {/* Glow effect on logo */}
              <motion.div
                className="absolute -left-4 -top-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              />
              <motion.div
                className="relative w-16 h-16 z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <Image
                  src={company.logo.src}
                  alt={company.logo.alt}
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.h3
                className="text-white text-2xl font-bold uppercase tracking-wide font-heading relative z-10"
                style={{
                  textShadow: '0 0 30px rgba(0, 212, 255, 0.5)'
                }}
              >
                {company.name}
              </motion.h3>
            </div>
            <p className="text-white/70 mb-4">
              {company.description}
            </p>
            <p className="text-white/60 text-sm">
              {company.tagline}
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4 font-heading relative inline-block">
              <span className="relative z-10">
                Services
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '60px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </h4>
            <ul className="space-y-2">
              {['Salesforce Implementation', 'AI & Agentforce', 'Enterprise Integration', 'Digital Transformation'].map((service, index) => (
                <motion.li
                  key={service}
                  className="text-white/70 hover:text-accent-cyan transition-colors cursor-pointer relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="relative z-10">{service}</span>
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4 font-heading relative inline-block">
              <span className="relative z-10">
                Get In Touch
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-cyan"
                initial={{ width: 0 }}
                whileInView={{ width: '80px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </h4>
            <div className="space-y-2">
              <motion.a
                href={`mailto:${contactInfo.email}`}
                className="block text-white/70 hover:text-accent-cyan transition-all duration-300 text-sm md:text-base break-all md:break-normal relative group"
                whileHover={{ scale: 1.05 }}
              >
                <span className="relative z-10">
                  {contactInfo.email}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-md opacity-0 group-hover:opacity-100 blur-md"
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
              {contactInfo.phone && (
                <motion.a
                  href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                  className="block text-white/70 hover:text-accent-cyan transition-all duration-300 text-sm md:text-base relative group"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="relative z-10">
                    {contactInfo.phone}
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-cyan/10 to-accent-blue/10 rounded-md opacity-0 group-hover:opacity-100 blur-md"
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              )}
              {contactInfo.socialLinks?.map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  className="block text-white/70 hover:text-accent-cyan transition-all duration-300 relative group"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <span className="relative z-10">{social.platform}</span>
                  <motion.div
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-accent-cyan rounded-full opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1.5 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Google Reviews */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4 font-heading relative inline-block">
              <span className="relative z-10">
                Google Reviews
              </span>
              <motion.div
                className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-accent-cyan to-accent-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </h4>

            {/* 5 Star Rating Display */}
            <div className="mb-3">
              <div className="flex gap-1 mb-2 justify-center md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-white/70 text-sm">5.0 Rating on Google</p>
            </div>

            {/* Review Button */}
            <motion.a
              href="https://g.page/r/CSOzOCCcr8LmEBM/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-dark-card border border-white/20 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-sm group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Write a Review</span>
              <motion.svg
                className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.a>

            {/* Business Badge */}
            <motion.div
              className="mt-4 text-xs text-white/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <p>Cedar Nest Web Studio</p>
              <p>Verified Business</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-white/10 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          {/* Animated border gradient */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
              backgroundSize: '200% 100%'
            }}
            animate={{
              backgroundPosition: ['200% 0%', '0% 0%']
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
          <motion.p
            className="text-center text-white/60 text-sm relative z-10"
            whileHover={{ scale: 1.02 }}
          >
            © {currentYear} {company.name}. All rights reserved.
          </motion.p>

          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-accent-cyan/50 rounded-full"
                initial={{
                  x: `${20 * (i + 1)}%`,
                  y: 100,
                  opacity: 0
                }}
                animate={{
                  y: -20,
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}