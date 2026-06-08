// Centralized company / brand information. Single source of truth for NAP
// (Name, Address, Phone) used across SEO schema, header, footer and contact.

export const company = {
  name: 'Apex Solar',
  legalName: 'Apex Solar Energy LLC',
  tagline: 'Premium Solar, Storage & EV Power for America',
  description:
    'Apex Solar designs, installs and services premium residential, commercial and industrial solar energy systems, battery storage and EV charging across the United States.',
  foundedYear: 2009,
  email: 'hello@apexsolar-usa.com',
  salesEmail: 'quotes@apexsolar-usa.com',
  supportEmail: 'support@apexsolar-usa.com',
  phone: '+1 (888) 555-7652',
  phoneHref: 'tel:+18885557652',
  hours: 'Mon–Sat: 7:00 AM – 8:00 PM EST',
  hoursShort: 'Mon–Sat 7a–8p',
  address: {
    street: '4200 Solar Vista Blvd, Suite 500',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    country: 'US',
  },
  geo: {
    latitude: 30.2672,
    longitude: -97.7431,
  },
  url: 'https://www.apexsolar-usa.com',
  logo: '/images/brand/apex-solar-logo.svg',
  ogImage: '/images/brand/apex-solar-og.jpg',
  priceRange: '$$',
  license: 'NABCEP Certified · Lic. #TX-SOLAR-44219',
  ratings: {
    value: 4.9,
    count: 2847,
  },
  certifications: [
    'NABCEP Certified Installers',
    'Tesla Certified Installer',
    'SunPower Elite Dealer',
    'BBB A+ Accredited',
    'EnergySage Approved',
  ],
} as const;

export type Company = typeof company;
