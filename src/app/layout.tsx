import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import '@/styles/globals.css'
import { metadata as seoMetadata, structuredData, faqStructuredData } from '@/config/seo.config'
import Script from 'next/script'

// Font optimization with Next.js font loader
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

// SEO and metadata configuration from centralized config
export const metadata: Metadata = seoMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        {/* Structured Data for Local Business SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        {/* FAQ Structured Data */}
        <Script
          id="faq-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData)
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-dark text-white`}>
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}