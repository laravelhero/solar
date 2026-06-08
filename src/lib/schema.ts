// Structured-data (JSON-LD) builders. Centralizes schema generation so every
// page emits consistent, valid schema.org markup.
import { company } from '../data/company';

const SITE = company.url;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: company.name,
  legalName: company.legalName,
  url: SITE,
  logo: `${SITE}${company.logo}`,
  description: company.description,
  foundingDate: String(company.foundedYear),
  telephone: company.phone,
  email: company.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: company.address.country,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: company.ratings.value,
    reviewCount: company.ratings.count,
  },
  sameAs: [
    'https://facebook.com/apexsolarusa',
    'https://instagram.com/apexsolarusa',
    'https://linkedin.com/company/apexsolarusa',
    'https://youtube.com/@apexsolarusa',
    'https://x.com/apexsolarusa',
  ],
});

export const localBusinessSchema = (opts?: {
  name?: string;
  areaServed?: string;
  geo?: { latitude: number; longitude: number };
}) => ({
  '@context': 'https://schema.org',
  '@type': 'SolarEnergyContractor',
  '@id': `${SITE}/#localbusiness`,
  name: opts?.name ?? company.name,
  image: `${SITE}${company.ogImage}`,
  url: SITE,
  telephone: company.phone,
  priceRange: company.priceRange,
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.city,
    addressRegion: company.address.state,
    postalCode: company.address.zip,
    addressCountry: company.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: opts?.geo?.latitude ?? company.geo.latitude,
    longitude: opts?.geo?.longitude ?? company.geo.longitude,
  },
  areaServed: opts?.areaServed ?? 'United States',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '07:00',
    closes: '20:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: company.ratings.value,
    reviewCount: company.ratings.count,
  },
});

export const breadcrumbSchema = (crumbs: { name: string; href: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: `${SITE}${c.href}`,
  })),
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
});

export const serviceSchema = (s: {
  name: string;
  description: string;
  url: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: s.name,
  name: s.name,
  description: s.description,
  url: `${SITE}${s.url}`,
  provider: { '@id': `${SITE}/#organization` },
  areaServed: 'United States',
});

export const articleSchema = (a: {
  title: string;
  description: string;
  url: string;
  image: string;
  author: string;
  published: Date;
  modified?: Date;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: a.title,
  description: a.description,
  image: `${SITE}${a.image}`,
  author: { '@type': 'Person', name: a.author },
  publisher: { '@id': `${SITE}/#organization` },
  datePublished: a.published.toISOString(),
  dateModified: (a.modified ?? a.published).toISOString(),
  mainEntityOfPage: `${SITE}${a.url}`,
});

export const projectSchema = (p: {
  name: string;
  description: string;
  url: string;
  image: string;
  location: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: p.name,
  description: p.description,
  image: `${SITE}${p.image}`,
  url: `${SITE}${p.url}`,
  creator: { '@id': `${SITE}/#organization` },
  locationCreated: p.location,
});
