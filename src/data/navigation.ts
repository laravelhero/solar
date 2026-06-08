// Primary navigation + mega-menu structure. The Services mega-menu is built
// from the service catalogue so it never drifts out of sync.
import { serviceCategories, servicesByCategory, type ServiceCategory } from './services';

export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' }, // rendered with mega-menu
  { label: 'Projects', href: '/projects' },
  { label: 'Financing', href: '/financing' },
  { label: 'Locations', href: '/locations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Five columns mirror the five service categories.
const categoryOrder: ServiceCategory[] = [
  'residential',
  'commercial',
  'storage',
  'specialty',
  'support',
];

export const megaMenu = categoryOrder.map((cat) => ({
  category: cat,
  ...serviceCategories[cat],
  links: servicesByCategory(cat).map((s) => ({
    label: s.menuTitle,
    href: `/services/${s.slug}`,
    description: s.tagline,
    icon: s.icon,
  })),
}));

export const megaMenuFeatured = {
  eyebrow: 'Free Solar Estimate',
  title: 'See your savings in 60 seconds',
  description: 'Get a custom system design and 25-year savings forecast — no obligation.',
  cta: { label: 'Get Free Quote', href: '/quote' },
  image: '/images/services/mega-menu-feature.jpg',
};

// Footer navigation columns.
export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Services',
    links: [
      { label: 'Residential Solar', href: '/services/residential-solar' },
      { label: 'Commercial Solar', href: '/services/commercial-solar' },
      { label: 'Industrial Solar', href: '/services/industrial-solar' },
      { label: 'Battery Storage', href: '/services/solar-battery-storage' },
      { label: 'EV Charging', href: '/services/ev-charging' },
      { label: 'Solar Roofing', href: '/services/solar-roofing' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Projects', href: '/projects' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Financing Options', href: '/financing' },
      { label: 'Solar Incentives', href: '/incentives' },
      { label: 'Solar Tax Credits', href: '/tax-credits' },
      { label: 'Savings Calculator', href: '/#calculator' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Service Areas', href: '/locations' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Sitemap', href: '/sitemap' },
      { label: 'Contact', href: '/contact' },
      { label: 'Get Free Quote', href: '/quote' },
    ],
  },
];
