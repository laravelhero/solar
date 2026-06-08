// Headline statistics / trust metrics rendered on the homepage & about page.
export interface Stat {
  value: string;
  label: string;
  sublabel?: string;
}

export const stats: Stat[] = [
  { value: '18,400+', label: 'Systems Installed', sublabel: 'Across 8 states' },
  { value: '412 MW', label: 'Clean Energy Deployed', sublabel: 'Residential + commercial' },
  { value: '$94M', label: 'Customer Savings', sublabel: 'Lifetime utility savings' },
  { value: '4.9★', label: 'Average Rating', sublabel: '2,800+ verified reviews' },
];

export const impactStats: Stat[] = [
  { value: '511,000', label: 'Tons of CO₂ Avoided' },
  { value: '25-Year', label: 'Production Warranty' },
  { value: '< 90 Days', label: 'Average Install Timeline' },
  { value: '98%', label: 'Permit Approval Rate' },
];
