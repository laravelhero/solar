// Customer testimonials / reviews. Feed the slider, testimonials page and
// Review schema.
export interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  quote: string;
  service: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Marcus Bennett',
    role: 'Homeowner',
    location: 'Austin, TX',
    rating: 5,
    service: 'Residential Solar',
    quote:
      'Our July electric bill went from $340 to $11. Apex handled the permits, the install and the utility paperwork — all I did was sign. The crew was in and out in a day and left the roof spotless.',
    image: '/images/team/review-marcus-bennett.jpg',
  },
  {
    name: 'Priya Nair',
    role: 'Operations Director',
    location: 'Phoenix, AZ',
    rating: 5,
    service: 'Commercial Solar',
    quote:
      'The ROI model Apex built was conservative — we’re actually beating it. Our demand charges dropped dramatically once we paired the array with storage. Genuinely a strategic win for the business.',
    image: '/images/team/review-priya-nair.jpg',
  },
  {
    name: 'Dale & Susan Carver',
    role: 'Homeowners',
    location: 'Fort Myers, FL',
    rating: 5,
    service: 'Battery Storage',
    quote:
      'When Hurricane season hit and the neighborhood went dark for two days, our house never flickered. The Apex battery system paid for its peace of mind in one storm.',
    image: '/images/team/review-carver.jpg',
  },
  {
    name: 'Tom Reyes',
    role: 'Rancher',
    location: 'Bakersfield, CA',
    rating: 5,
    service: 'Agricultural Solar',
    quote:
      'They handled our entire USDA REAP grant and the irrigation pumps now run on sunshine. Cut our operating costs more than I expected and added a real revenue line to the ranch.',
    image: '/images/team/review-tom-reyes.jpg',
  },
  {
    name: 'Jennifer Walsh',
    role: 'Homeowner',
    location: 'Denver, CO',
    rating: 5,
    service: 'Solar + EV Charging',
    quote:
      'Solar plus the EV charger means I’m driving on sunshine. My monthly loan payment is less than my old electric bill, and I haven’t paid for gas in eight months.',
    image: '/images/team/review-jennifer-walsh.jpg',
  },
  {
    name: 'Raymond Okafor',
    role: 'Facilities Manager',
    location: 'Charlotte, NC',
    rating: 5,
    service: 'Warehouse Solar',
    quote:
      'Apex turned 90,000 square feet of unused roof into our cheapest source of power. The project came in on schedule and on budget, and the monitoring dashboard makes reporting effortless.',
    image: '/images/team/review-raymond-okafor.jpg',
  },
];
