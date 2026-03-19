import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://cedarnestweb.com'

export const seoConfig = {
  title: 'Cedar Nest Web - Website Development & IT Company in Darjeeling | Web Design, Salesforce, Digital Solutions',
  shortTitle: 'Cedar Nest Web',
  description: 'Leading website development and IT company in Darjeeling. Expert web designers creating stunning websites, Salesforce integration, e-commerce solutions, and digital transformation services. Top-rated website developers in Darjeeling with 5-star Google reviews.',
  keywords: [
    // Primary keywords
    'website developers in darjeeling',
    'website designers in darjeeling',
    'IT company in darjeeling',
    'web development darjeeling',
    'web design darjeeling',

    // Service keywords
    'salesforce integration darjeeling',
    'e-commerce website darjeeling',
    'digital marketing darjeeling',
    'website development company darjeeling',
    'professional website design',
    'custom website development',
    'responsive web design darjeeling',
    'mobile app development darjeeling',

    // Local SEO
    'best IT company darjeeling',
    'top website developers darjeeling',
    'darjeeling web designers',
    'darjeeling website company',
    'IT services darjeeling',
    'software company darjeeling',
    'digital solutions darjeeling',

    // Broader terms
    'website developers',
    'website designers',
    'web development company',
    'IT solutions provider',
    'digital transformation services',
    'salesforce consulting',
    'agentforce implementation'
  ],
  authors: [{ name: 'Cedar Nest Web Studio' }],
  creator: 'Cedar Nest Web Studio',
  publisher: 'Cedar Nest Web Studio',
  locale: 'en_IN',
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Cedar Nest Web - Leading Website Development & IT Company in Darjeeling',
    description: 'Expert website developers and designers in Darjeeling. Creating stunning websites, e-commerce solutions, and digital transformation services. 5-star rated IT company.',
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
    title: 'Cedar Nest Web - Website Development & IT Company in Darjeeling',
    description: 'Leading website developers and designers in Darjeeling. Expert in web development, Salesforce, and digital solutions.',
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
      'max-image-preview': 'large',
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

// Structured data for local business
export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
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
    'Salesforce Integration',
    'E-commerce Solutions',
    'Digital Marketing',
    'SEO Services',
    'Mobile App Development',
    'Cloud Solutions'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'IT Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Website Development',
          description: 'Custom website development services for businesses in Darjeeling'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Salesforce Integration',
          description: 'Expert Salesforce CRM implementation and integration services'
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
      name: 'What services does Cedar Nest Web provide in Darjeeling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar Nest Web provides comprehensive IT services including website development, web design, Salesforce integration, e-commerce solutions, digital marketing, and custom software development for businesses in Darjeeling and across India.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why choose Cedar Nest Web as your website developer in Darjeeling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cedar Nest Web is the top-rated IT company in Darjeeling with 5-star Google reviews, proven expertise in modern web technologies, competitive pricing, and a track record of delivering high-quality websites for local and international clients.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much does website development cost in Darjeeling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Website development costs vary based on requirements. Cedar Nest Web offers affordable packages starting from ₹15,000 for basic websites to custom enterprise solutions. Contact us for a free consultation and quote.'
      }
    }
  ]
}