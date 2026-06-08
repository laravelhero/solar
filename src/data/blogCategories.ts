// Blog taxonomy. Slugs here must match the `category` field in blog frontmatter.
export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const blogCategories: BlogCategory[] = [
  { slug: 'solar-basics', name: 'Solar Basics', description: 'Everything you need to know before going solar.', icon: 'sun' },
  { slug: 'savings-incentives', name: 'Savings & Incentives', description: 'Tax credits, rebates and financing explained.', icon: 'dollar' },
  { slug: 'battery-storage', name: 'Battery & Storage', description: 'Backup power and energy independence.', icon: 'battery' },
  { slug: 'commercial', name: 'Commercial Solar', description: 'Solar strategy for businesses and industry.', icon: 'building' },
  { slug: 'ev-charging', name: 'EV Charging', description: 'Powering electric vehicles with the sun.', icon: 'car' },
  { slug: 'maintenance', name: 'Maintenance & Care', description: 'Keeping your system at peak performance.', icon: 'wrench' },
];

export const getCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);
