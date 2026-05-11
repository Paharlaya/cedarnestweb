import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cedarnestweb.com'

export const seoConfig = {
  title: 'Cedar Nest Web - Best Website Developers & Designers in India | Premium Web Development Company',
  shortTitle: 'Cedar Nest Web',
  description: 'India\'s premium website development company delivering enterprise-quality websites at hyperspeed. Best website designers creating stunning, high-performance websites, e-commerce solutions, and digital growth services. Based in Darjeeling, serving clients globally with 5-star rated services.',
  keywords: [
    // National/International priority
    'best website developers india',
    'best website designers india',
    'premium web development company',
    'enterprise website development',
    'top web development agency india',
    'professional website design india',
    'best quality websites india',

    // Quality & Speed focused
    'hyperspeed web development',
    'enterprise quality websites',
    'premium website design',
    'high performance websites',
    'fastest website delivery',

    // Service excellence
    'custom website development',
    'e-commerce website development',
    'responsive web design india',
    'seo optimized websites',
    'digital growth services',

    // Local + National
    'website developers darjeeling',
    'IT company darjeeling india',

    // Competitive positioning
    'best website development company',
    'top rated web developers',
    '5 star website designers',
    'award winning web design'
  ],
  authors: [{ name: 'Cedar Nest Web Studio' }],
  creator: 'Cedar Nest Web Studio',
  publisher: 'Cedar Nest Web Studio',
  locale: 'en_IN',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Cedar Nest Web - Best Website Developers & Designers in India',
    description: 'India\'s premium website development company. Enterprise-quality websites delivered at hyperspeed. Best designers creating stunning, high-performance solutions. 5-star rated.',
    url: baseUrl,
    siteName: 'Cedar Nest Web',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Cedar Nest Web - Website Development Company in Darjeeling',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cedar Nest Web - Best Website Developers in India',
    description: 'India\'s premium web development company. Enterprise-quality websites at hyperspeed. Best designers, 5-star rated services.',
    images: [`${baseUrl}/twitter-image.jpg`],
    creator: '@cedarnestweb',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.shortTitle}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: seoConfig.authors,
  creator: seoConfig.creator,
  publisher: seoConfig.publisher,
  openGraph: seoConfig.openGraph,
  twitter: seoConfig.twitter,
  robots: seoConfig.robots,
  verification: seoConfig.verification,
  alternates: seoConfig.alternates,
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.png', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
}

// Structured data for organization with national/international scope
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': baseUrl,
  name: 'Cedar Nest Web Studio',
  description: seoConfig.description,
  url: baseUrl,
  telephone: '+91 6294399916',
  email: 'cedarnestwebstudio@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Darjeeling',
    addressRegion: 'West Bengal',
    addressCountry: 'IN',
    postalCode: '734101'
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'India'
    },
    {
      '@type': 'Place',
      name: 'Global'
    }
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 27.0410,
    longitude: 88.2663
  },
  image: `${baseUrl}/cedar-nest-logo.png`,
  priceRange: '₹₹',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00'
    }
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '15',
    bestRating: '5',
    worstRating: '1'
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Pranay Sharma'
      },
      datePublished: '2024-01-15',
      reviewBody: 'Paharlaya Bhai who runs CedarNest is our go-to for all website and IT services. Highly knowledgeable and efficient.',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5'
      }
    }
  ],
  sameAs: [
    'https://www.instagram.com/cedarnestweb',
    'https://g.page/r/CSOzOCCcr8LmEBM'
  ],
  knowsAbout: [
    'Website Development',
    'Web Design',
    'E-commerce Solutions',
    'Digital Marketing',
    'SEO Services',
    'Performance Optimization',
    'Responsive Web Design',
    'UI/UX Design'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Design',
          description: 'Custom website design services for businesses in Darjeeling'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Development',
          description: 'Professional website development with modern technologies'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'E-commerce Solutions',
          description: 'Complete e-commerce website development and management'
        }
      }
    ]
  }
}

// FAQ structured data for better SEO
export const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Cedar Nest Web the best website development company in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar Nest Web delivers enterprise-quality websites at hyperspeed, combining premium design with blazing-fast development. With 5-star Google reviews and expertise in modern web technologies, we provide the best quality websites in India with global standards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why choose Cedar Nest Web over other website developers in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar Nest Web stands out with our unique hyperspeed development process that delivers enterprise-quality websites 3x faster than competitors. Our 100% quality score, 5-star ratings, and expertise in cutting-edge technologies make us India\'s premier choice for businesses seeking the best website development.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does premium website development cost with Cedar Nest Web?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar Nest Web offers premium website development with packages ranging from ₹15,000 for starter websites to enterprise solutions. Despite delivering the best quality in India, our hyperspeed process keeps costs competitive. Get enterprise-quality websites at startup-friendly prices.'
      }
    }
  ]
}