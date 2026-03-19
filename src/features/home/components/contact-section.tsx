import { contactInfo } from '@/config/site.config'

/**
 * Contact Section - Server Component
 * Simple, focused contact section with clear CTA
 */
export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-dark-lighter">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Your Dream Website
          </h2>
          <p className="text-xl text-white/70 mb-12 text-balance">
            Ready to bring your business to life with a stunning global presence?
          </p>

          <div className="space-y-8">
            {/* Email Contact */}
            <div>
              <div className="flex items-center justify-center gap-2 text-white/60 mb-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>Email</span>
              </div>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-3xl md:text-4xl text-accent-cyan hover:text-accent-blue transition-colors font-semibold"
              >
                {contactInfo.email}
              </a>
            </div>

            {/* CTA Button */}
            <a
              href="tel:+916294399916"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-accent-cyan to-accent-blue text-white hover:opacity-90 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now & Get Started
            </a>

            <p className="text-white/50 text-sm">
              Free 30-minute consultation to discuss your project
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}