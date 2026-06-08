// Service-area location data. Drives /locations and the dynamic
// /locations/[slug] pages plus LocalBusiness schema.
export interface Location {
  slug: string;
  state: string;
  stateCode: string;
  /** primary metros served */
  cities: string[];
  headline: string;
  intro: string;
  /** local hooks: incentives, climate, utility context */
  localContent: string[];
  avgBill: string;
  avgSavings: string;
  sunHours: string;
  incentives: string[];
  faqIds: string[];
  testimonialLocation: string;
  geo: { latitude: number; longitude: number };
  image: string;
  imageAlt: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const locations: Location[] = [
  {
    slug: 'texas',
    state: 'Texas',
    stateCode: 'TX',
    cities: ['Austin', 'Houston', 'Dallas', 'San Antonio', 'Fort Worth'],
    headline: 'Solar Installation Across Texas',
    intro:
      'Texas leads the nation in solar potential — and Apex Solar is on the ground from Austin to Houston. With deregulated power markets, soaring summer demand and abundant sun, Texas homes and businesses are saving big by generating their own electricity.',
    localContent: [
      'Texas’ deregulated grid (ERCOT) means volatile rates — solar locks in your cost and protects against summer price spikes.',
      'Property-tax exemption: Texas exempts the added home value from solar, so you save without a higher tax bill.',
      'Pair solar with battery storage to ride through ERCOT grid emergencies and rolling outages.',
    ],
    avgBill: '$165/mo',
    avgSavings: '$48,000',
    sunHours: '5.3 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'Texas Property-Tax Exemption', 'Local utility & co-op rebates', 'Net metering (select utilities)'],
    faqIds: ['cost', 'financing', 'battery-backup', 'tax-credit'],
    testimonialLocation: 'Austin, TX',
    geo: { latitude: 30.2672, longitude: -97.7431 },
    image: '/images/locations/solar-installation-texas.jpg',
    imageAlt: 'Residential solar installation on a Texas home with clear blue sky',
    seo: {
      metaTitle: 'Solar Installation Texas | Home & Commercial Solar | Apex Solar',
      metaDescription:
        'Premium solar installation across Texas — Austin, Houston, Dallas & San Antonio. Beat ERCOT rate spikes, claim the 30% tax credit and add battery backup. Free quote.',
      keywords: ['solar installation texas', 'texas solar company', 'austin solar', 'houston solar panels'],
    },
  },
  {
    slug: 'california',
    state: 'California',
    stateCode: 'CA',
    cities: ['Los Angeles', 'San Diego', 'San Jose', 'Sacramento', 'Fresno'],
    headline: 'California Solar & Battery Experts',
    intro:
      'With the highest electricity rates in the continental U.S. and NEM 3.0 reshaping the market, California is where solar-plus-storage shines brightest. Apex Solar designs systems optimized for California’s new net-billing rules to maximize your return.',
    localContent: [
      'Under NEM 3.0, battery storage is essential to capture full value from your solar — we design every California system storage-first.',
      'California’s SGIP program offers rebates on battery storage, stacking with the federal tax credit.',
      'High Title 24 energy standards and frequent Public Safety Power Shutoffs make backup storage especially valuable.',
    ],
    avgBill: '$210/mo',
    avgSavings: '$62,000',
    sunHours: '5.5 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'SGIP Storage Rebate', 'NEM 3.0 Net Billing', 'Local utility rebates'],
    faqIds: ['cost', 'battery-backup', 'battery-cost', 'tax-credit'],
    testimonialLocation: 'Bakersfield, CA',
    geo: { latitude: 36.7783, longitude: -119.4179 },
    image: '/images/locations/solar-installation-california.jpg',
    imageAlt: 'Solar panels with battery storage on a California home',
    seo: {
      metaTitle: 'California Solar & Battery Installation | NEM 3.0 Experts | Apex Solar',
      metaDescription:
        'California solar-plus-storage designed for NEM 3.0. Capture maximum value, claim SGIP & federal incentives, and stay powered through PSPS outages. Free quote.',
      keywords: ['california solar', 'nem 3.0 solar', 'california battery storage', 'los angeles solar installation'],
    },
  },
  {
    slug: 'florida',
    state: 'Florida',
    stateCode: 'FL',
    cities: ['Miami', 'Tampa', 'Orlando', 'Jacksonville', 'Fort Myers'],
    headline: 'Sunshine State Solar & Hurricane Backup',
    intro:
      'It’s called the Sunshine State for a reason. Florida’s abundant sun and rising utility rates make solar a clear win — and with hurricane season a yearly reality, battery backup keeps your family safe when the grid fails.',
    localContent: [
      'Florida exempts solar from both sales tax and added property tax — your savings aren’t taxed away.',
      'Hurricane resilience: battery backup keeps your home powered for days when storms knock out the grid.',
      'Strong 1:1 net metering with major Florida utilities maximizes the value of every kilowatt you export.',
    ],
    avgBill: '$155/mo',
    avgSavings: '$44,000',
    sunHours: '5.4 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'Solar Sales-Tax Exemption', 'Property-Tax Exemption', '1:1 Net Metering'],
    faqIds: ['cost', 'battery-backup', 'financing', 'tax-credit'],
    testimonialLocation: 'Fort Myers, FL',
    geo: { latitude: 27.6648, longitude: -81.5158 },
    image: '/images/locations/solar-installation-florida.jpg',
    imageAlt: 'Hurricane-rated solar installation on a Florida home',
    seo: {
      metaTitle: 'Florida Solar Installation & Hurricane Backup | Apex Solar',
      metaDescription:
        'Florida solar with hurricane-ready battery backup. Tax-exempt savings, 1:1 net metering and the 30% federal credit. Serving Miami, Tampa & Orlando. Free quote.',
      keywords: ['florida solar', 'florida solar installation', 'hurricane battery backup', 'tampa solar panels'],
    },
  },
  {
    slug: 'arizona',
    state: 'Arizona',
    stateCode: 'AZ',
    cities: ['Phoenix', 'Tucson', 'Mesa', 'Scottsdale', 'Chandler'],
    headline: 'Arizona Solar — Tame the Desert Sun',
    intro:
      'No state gets more sun than Arizona. With brutal summer cooling bills and some of the best solar resource in the country, Phoenix and Tucson homeowners see exceptional returns from going solar.',
    localContent: [
      'Arizona offers a 25% state solar tax credit (up to $1,000) on top of the federal 30% credit.',
      'Solar equipment is exempt from state sales tax and added property tax in Arizona.',
      'Battery storage shifts your production into expensive late-afternoon peak-rate windows for maximum savings.',
    ],
    avgBill: '$185/mo',
    avgSavings: '$55,000',
    sunHours: '6.5 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'AZ 25% State Tax Credit', 'Sales-Tax Exemption', 'Property-Tax Exemption'],
    faqIds: ['cost', 'tax-credit', 'battery-backup', 'financing'],
    testimonialLocation: 'Phoenix, AZ',
    geo: { latitude: 33.4484, longitude: -112.074 },
    image: '/images/locations/solar-installation-arizona.jpg',
    imageAlt: 'Desert home with rooftop solar under Arizona sun',
    seo: {
      metaTitle: 'Arizona Solar Installation | Phoenix & Tucson Solar | Apex Solar',
      metaDescription:
        'Arizona solar with the best sun in the nation. Stack the 25% state and 30% federal tax credits, beat peak rates with storage. Phoenix, Tucson & Mesa. Free quote.',
      keywords: ['arizona solar', 'phoenix solar installation', 'tucson solar', 'arizona solar tax credit'],
    },
  },
  {
    slug: 'nevada',
    state: 'Nevada',
    stateCode: 'NV',
    cities: ['Las Vegas', 'Henderson', 'Reno', 'Sparks', 'Carson City'],
    headline: 'Nevada Solar for the Silver State',
    intro:
      'Nevada’s desert sun and growing utility rates make solar a smart hedge for Las Vegas and Reno homeowners. Apex Solar designs high-output systems built for extreme heat and maximum savings.',
    localContent: [
      'NV Energy’s Storage Incentive program offers rebates on qualifying battery systems.',
      'Nevada’s net-metering program credits your exported solar against future bills.',
      'High-efficiency panels and proper ventilation keep output strong through 110°F desert summers.',
    ],
    avgBill: '$150/mo',
    avgSavings: '$43,000',
    sunHours: '6.4 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'NV Energy Storage Incentive', 'Net Metering', 'Property-Tax Abatement'],
    faqIds: ['cost', 'battery-cost', 'financing', 'tax-credit'],
    testimonialLocation: 'Las Vegas, NV',
    geo: { latitude: 38.8026, longitude: -116.4194 },
    image: '/images/locations/solar-installation-nevada.jpg',
    imageAlt: 'Las Vegas home with solar panels in the desert',
    seo: {
      metaTitle: 'Nevada Solar Installation | Las Vegas & Reno | Apex Solar',
      metaDescription:
        'Nevada solar built for desert heat. NV Energy storage rebates, net metering and the 30% federal credit. Serving Las Vegas, Henderson & Reno. Free quote.',
      keywords: ['nevada solar', 'las vegas solar', 'reno solar installation', 'nv energy solar'],
    },
  },
  {
    slug: 'colorado',
    state: 'Colorado',
    stateCode: 'CO',
    cities: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Boulder'],
    headline: 'Colorado Solar — 300 Days of Sun',
    intro:
      'Colorado’s 300 sunny days a year and strong utility rebates make the Front Range a solar standout. Apex Solar engineers systems that perform beautifully through snow load and high-altitude sun alike.',
    localContent: [
      'Xcel Energy’s Solar*Rewards program adds rebates and performance payments on top of the federal credit.',
      'Colorado exempts solar from state sales tax and added property tax.',
      'High-altitude sun boosts production, while snow-rated racking protects your array through winter.',
    ],
    avgBill: '$130/mo',
    avgSavings: '$38,000',
    sunHours: '5.5 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'Xcel Solar*Rewards', 'Sales-Tax Exemption', 'Property-Tax Exemption'],
    faqIds: ['cost', 'financing', 'tax-credit', 'roof-types'],
    testimonialLocation: 'Denver, CO',
    geo: { latitude: 39.5501, longitude: -105.7821 },
    image: '/images/locations/solar-installation-colorado.jpg',
    imageAlt: 'Mountain home with snow-rated solar panels in Colorado',
    seo: {
      metaTitle: 'Colorado Solar Installation | Denver & Boulder | Apex Solar',
      metaDescription:
        'Colorado solar built for 300 days of sun and winter snow load. Xcel Solar*Rewards rebates and the 30% federal credit. Denver, Boulder & Fort Collins. Free quote.',
      keywords: ['colorado solar', 'denver solar installation', 'xcel solar rewards', 'boulder solar panels'],
    },
  },
  {
    slug: 'north-carolina',
    state: 'North Carolina',
    stateCode: 'NC',
    cities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Wilmington'],
    headline: 'North Carolina Solar Solutions',
    intro:
      'North Carolina ranks among the top solar states in the nation, with strong sun, supportive policy and Duke Energy rebates. Apex Solar helps Charlotte and Raleigh homeowners and businesses tap into it.',
    localContent: [
      'Duke Energy’s rebate program offers incentives for residential and commercial solar in North Carolina.',
      'North Carolina’s property-tax abatement exempts 80% of solar’s added value for businesses.',
      'A humid, sunny climate makes regular panel cleaning especially valuable for sustained output.',
    ],
    avgBill: '$140/mo',
    avgSavings: '$40,000',
    sunHours: '5.0 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'Duke Energy Rebate', 'Property-Tax Abatement', 'Net Metering'],
    faqIds: ['cost', 'commercial-roi', 'cleaning', 'tax-credit'],
    testimonialLocation: 'Charlotte, NC',
    geo: { latitude: 35.7596, longitude: -79.0193 },
    image: '/images/locations/solar-installation-north-carolina.jpg',
    imageAlt: 'Charlotte home with rooftop solar in North Carolina',
    seo: {
      metaTitle: 'North Carolina Solar Installation | Charlotte & Raleigh | Apex Solar',
      metaDescription:
        'North Carolina solar with Duke Energy rebates and the 30% federal credit. Top-ranked solar state. Serving Charlotte, Raleigh & Greensboro. Free quote.',
      keywords: ['north carolina solar', 'charlotte solar installation', 'raleigh solar', 'duke energy solar rebate'],
    },
  },
  {
    slug: 'georgia',
    state: 'Georgia',
    stateCode: 'GA',
    cities: ['Atlanta', 'Savannah', 'Augusta', 'Columbus', 'Macon'],
    headline: 'Georgia Solar — Power the Peach State',
    intro:
      'Georgia’s warm climate and rising Georgia Power rates make solar an increasingly obvious choice for Atlanta and Savannah. Apex Solar delivers high-performance systems with battery backup for storm season.',
    localContent: [
      'Georgia Power’s net-metering and rooftop solar programs credit your exported energy.',
      'Long, hot cooling seasons mean high summer bills that solar offsets dramatically.',
      'Battery storage adds resilience through Georgia’s severe summer thunderstorms and outages.',
    ],
    avgBill: '$145/mo',
    avgSavings: '$41,000',
    sunHours: '5.2 peak sun hours/day',
    incentives: ['30% Federal Tax Credit', 'Georgia Power Net Metering', '$0-Down Financing', 'Storage Incentives'],
    faqIds: ['cost', 'financing', 'battery-backup', 'tax-credit'],
    testimonialLocation: 'Atlanta, GA',
    geo: { latitude: 32.1656, longitude: -82.9001 },
    image: '/images/locations/solar-installation-georgia.jpg',
    imageAlt: 'Atlanta suburban home with rooftop solar in Georgia',
    seo: {
      metaTitle: 'Georgia Solar Installation | Atlanta & Savannah | Apex Solar',
      metaDescription:
        'Georgia solar with battery backup for storm season. Georgia Power net metering and the 30% federal credit. Serving Atlanta, Savannah & Augusta. Free quote.',
      keywords: ['georgia solar', 'atlanta solar installation', 'savannah solar', 'georgia power solar'],
    },
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
