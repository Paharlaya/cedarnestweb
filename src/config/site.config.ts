import type { CompanyInfo, Service, ProcessStep, ContactInfo, Testimonial, ClientLogo } from '@/types'

/**
 * Centralized site configuration
 * Single source of truth for all site content
 * Makes it easy to update content without touching components
 */

export const company: CompanyInfo = {
  name: 'Cedar Nest Web',
  tagline: 'Premium Website Design & Development Experts',
  logo: {
    src: '/cedar-nest-logo.png',
    alt: 'Cedar Nest',
  },
  description: 'Full-service website design and development agency. We build stunning, high-performance websites and e-commerce solutions that drive growth and deliver real results.',
}

export const services: Service[] = [
  {
    id: 'web-design',
    title: 'Website Design',
    description: 'Stunning, modern websites crafted to represent your brand',
    features: [
      'Custom UI/UX Design',
      'Mobile-First Responsive',
      'Brand Identity Integration',
      'Landing Page Design',
      'Conversion-Focused Layouts',
    ],
    isFeatured: true,
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Modern, responsive websites that drive conversions',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Progressive Web Apps',
      'Performance Optimization',
      'SEO & Analytics',
    ],
    isFeatured: true,
  },
  {
    id: 'digital-growth',
    title: 'Digital Growth',
    description: 'Grow your online presence and reach more customers',
    features: [
      'Search Engine Optimization',
      'Speed & Performance Tuning',
      'Content Management Systems',
      'Analytics & Reporting',
      'Ongoing Maintenance',
    ],
    isFeatured: false,
  },
]

export const processSteps: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your business goals and technical requirements',
    details: ['Requirements gathering', 'Technical assessment', 'ROI analysis'],
  },
  {
    id: 'strategy',
    number: '02',
    title: 'Strategy',
    description: 'Architecting the optimal solution for your needs',
    details: ['Solution design', 'Technology stack', 'Implementation roadmap'],
  },
  {
    id: 'development',
    number: '03',
    title: 'Development',
    description: 'Building with best practices and security in mind',
    details: ['Agile development', 'Regular updates', 'Quality assurance'],
  },
  {
    id: 'testing',
    number: '04',
    title: 'Testing',
    description: 'Rigorous testing to ensure reliability and performance',
    details: ['Unit testing', 'Integration testing', 'User acceptance testing'],
  },
  {
    id: 'deployment',
    number: '05',
    title: 'Deployment',
    description: 'Smooth rollout with minimal disruption',
    details: ['Staged deployment', 'Data migration', 'Go-live support'],
  },
  {
    id: 'support',
    number: '06',
    title: 'Support',
    description: 'Ongoing optimization and expert assistance',
    details: ['24/7 monitoring', 'Performance optimization', 'Feature updates'],
  },
]

export const contactInfo: ContactInfo = {
  email: 'cedarnestwebstudio@gmail.com',
  phone: '+91 6294399916',
  socialLinks: [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/cedarnestweb?igsh=ems3NTJnNG5vejM4&utm_source=qr',
    },
  ],
}

export const testimonials: Testimonial[] = [
  {
    id: 'tribridge',
    name: 'Bhawana Subba',
    role: 'Owner',
    company: 'Tribridge Pvt Ltd',
    content: 'Cedar Nest transformed our online presence completely. The website they built increased our conversions by 200% within the first month. Their attention to detail and understanding of our business needs was exceptional.',
    rating: 5,
  },
  {
    id: 'depemblin',
    name: 'Pranay Sharma',
    role: 'Owner',
    company: "De'Pemblin Tours & Travels",
    content: 'Paharlaya Bhai who runs CedarNest is our go-to for all website and IT services. He\'s proactive, highly knowledgeable, trustworthy and efficient. Thank you bhai for such an amazing website - you\'ve surpassed all our expectations with this level of quality!',
    rating: 5,
  },
  {
    id: 'bethel',
    name: 'Nehal Rai',
    role: 'Owner',
    company: 'Bethel Breeze',
    content: 'The team at Cedar Nest delivered beyond our expectations. They built a modern, responsive website that perfectly represents our brand. Their support and professionalism throughout the project was outstanding.',
    rating: 5,
  },
  {
    id: 'chhyajalo',
    name: 'Srijana',
    role: 'Owner',
    company: 'Chhyajalo',
    content: "I'm amazed by the quality of work Cedar Nest delivered. They understood our vision and created a website that not only looks great but also performs excellently. Highly recommend their services!",
    rating: 5,
  },
  {
    id: 'darjeeling-tnt',
    name: 'Passang Tamang',
    role: 'Owner',
    company: 'Darjeeling Tours & Travels',
    content: 'Cedar Nest helped us establish a strong digital presence. Their expertise in web development and design is evident in every aspect of our new website. The results speak for themselves!',
    rating: 5,
  },
]

export const clientLogos: ClientLogo[] = [
  {
    id: 'tribridge',
    name: 'Tribridge Pvt Ltd',
    logo: '/clients/tribridge.png',
  },
  {
    id: 'depemblin',
    name: "De'Pemblin Tours & Travels",
    logo: '/clients/depemblin.png',
  },
  {
    id: 'bethel',
    name: 'Bethel Breeze',
    logo: '/clients/bethel-breeze.png',
  },
  {
    id: 'chhyajalo',
    name: 'Chhyajalo',
    logo: '/clients/chhyajalo.png',
  },
  {
    id: 'darjeeling-tnt',
    name: 'Darjeeling Tours & Travels',
    logo: '/clients/darjeeling-tnt.png',
  },
]

export const siteConfig = {
  company,
  services,
  processSteps,
  contactInfo,
}