// Master service catalogue. Drives the mega-menu, /services index and the
// dynamic /services/[slug] pages. Everything is data-driven — add a service
// here and its page + menu entry are generated automatically.

export type ServiceCategory =
  | 'residential'
  | 'commercial'
  | 'storage'
  | 'specialty'
  | 'support';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  slug: string;
  title: string;
  /** short label for menus & breadcrumbs */
  menuTitle: string;
  category: ServiceCategory;
  icon: string;
  /** one-liner shown under the menu title */
  tagline: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  intro: string;
  features: ServiceFeature[];
  benefits: string[];
  /** ids referencing entries in faqs.ts */
  faqIds?: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const serviceCategories: Record<
  ServiceCategory,
  { label: string; description: string; icon: string }
> = {
  residential: {
    label: 'Residential Solar',
    description: 'Home solar, backup & financing',
    icon: 'home',
  },
  commercial: {
    label: 'Commercial Solar',
    description: 'Business, warehouse & industrial',
    icon: 'building',
  },
  storage: {
    label: 'Battery & Storage',
    description: 'Whole-home backup & energy storage',
    icon: 'battery',
  },
  specialty: {
    label: 'EV & Specialty',
    description: 'EV charging, agrivoltaics & off-grid',
    icon: 'bolt',
  },
  support: {
    label: 'Support Services',
    description: 'Repairs, cleaning & monitoring',
    icon: 'wrench',
  },
};

export const services: Service[] = [
  // ---- Residential ---------------------------------------------------------
  {
    slug: 'residential-solar',
    title: 'Residential Solar Installation',
    menuTitle: 'Residential Solar Installation',
    category: 'residential',
    icon: 'home',
    tagline: 'Cut your electric bill to near zero',
    excerpt:
      'Custom-engineered rooftop solar that slashes your utility bill and locks in 25 years of clean, predictable power.',
    heroImage: '/images/services/residential-solar-installation.jpg',
    heroAlt: 'Technicians installing solar panels on an American home roof',
    intro:
      'Your home is your biggest asset — power it with the sun. Apex Solar engineers every residential system around your roof, your shading and your utility rate so you generate the maximum return on every panel.',
    features: [
      { title: 'Tier-1 Panels', description: 'High-efficiency monocrystalline modules rated for 25+ years.', icon: 'sun' },
      { title: 'Custom Engineering', description: 'PE-stamped designs tuned to your roof pitch & shading.', icon: 'grid' },
      { title: 'Smart Monitoring', description: 'Track production from your phone, panel by panel.', icon: 'monitor' },
      { title: '25-Year Warranty', description: 'Production, product and workmanship — all covered.', icon: 'shield' },
    ],
    benefits: [
      'Eliminate up to 100% of your electric bill',
      'Federal 30% solar tax credit eligible',
      'Increase home resale value',
      'Lock in energy costs for 25+ years',
    ],
    faqIds: ['cost', 'roof-types', 'timeline', 'warranty'],
    seo: {
      metaTitle: 'Residential Solar Installation | Home Solar Panels | Apex Solar',
      metaDescription:
        'Premium residential solar installation across the USA. Cut your electric bill, claim the 30% tax credit and lock in 25 years of clean power. Free quote today.',
      keywords: ['residential solar installation', 'home solar panels', 'rooftop solar', 'solar installation usa'],
    },
  },
  {
    slug: 'solar-panel-installation',
    title: 'Solar Panel Installation',
    menuTitle: 'Solar Panel Installation',
    category: 'residential',
    icon: 'sun',
    tagline: 'Precision-mounted, code-perfect arrays',
    excerpt:
      'Professional solar panel mounting with weather-sealed racking, clean conduit runs and a flawless inspection record.',
    heroImage: '/images/services/solar-panel-installation.jpg',
    heroAlt: 'Solar panels being precisely mounted on rooftop racking',
    intro:
      'A panel is only as good as the install behind it. Our in-house crews — never subcontractors — mount every array to manufacturer spec with weather-sealed flashing and tidy, inspection-ready wiring.',
    features: [
      { title: 'In-House Crews', description: 'W-2 NABCEP-certified installers, no subcontractors.', icon: 'users' },
      { title: 'Weather-Sealed', description: 'Flashed mounts that protect your roof for decades.', icon: 'roof' },
      { title: 'Clean Wire Management', description: 'Concealed, code-compliant conduit runs.', icon: 'grid' },
      { title: 'Same-Week Scheduling', description: 'Most installs completed in a single day.', icon: 'clock' },
    ],
    benefits: ['Single-day installation', 'Manufacturer-certified mounting', 'No roof leaks guaranteed', 'Passes first inspection'],
    faqIds: ['timeline', 'roof-types', 'warranty'],
    seo: {
      metaTitle: 'Solar Panel Installation Services | Apex Solar',
      metaDescription:
        'Expert solar panel installation by in-house NABCEP-certified crews. Weather-sealed mounting, clean wiring and a flawless inspection record. Get your free quote.',
      keywords: ['solar panel installation', 'solar mounting', 'rooftop solar panels', 'solar racking'],
    },
  },
  {
    slug: 'solar-financing',
    title: 'Solar Financing',
    menuTitle: 'Solar Financing',
    category: 'residential',
    icon: 'dollar',
    tagline: '$0-down ownership plans',
    excerpt:
      'Flexible $0-down loans, leases and PPAs that let you start saving from month one — no upfront cost required.',
    heroImage: '/images/services/solar-financing.jpg',
    heroAlt: 'Homeowner reviewing solar financing options on a tablet',
    intro:
      'Going solar should pay you, not cost you. We partner with the nation’s top solar lenders to offer $0-down plans where your monthly payment is often lower than the utility bill it replaces.',
    features: [
      { title: '$0 Down', description: 'Own a system with no upfront cost.', icon: 'dollar' },
      { title: 'Low Fixed APR', description: 'Rates from 3.99% on qualified credit.', icon: 'trending-up' },
      { title: 'Lease & PPA', description: 'No-ownership options with locked-in rates.', icon: 'check-circle' },
      { title: 'Tax-Credit Bridge', description: 'Re-amortize after your 30% credit lands.', icon: 'award' },
    ],
    benefits: ['No upfront cost', 'Payment often below your utility bill', 'Build equity instead of renting power', 'Pre-qualify without affecting credit'],
    faqIds: ['financing', 'tax-credit', 'cost'],
    seo: {
      metaTitle: 'Solar Financing Options | $0 Down Solar Loans | Apex Solar',
      metaDescription:
        'Explore $0-down solar financing — loans, leases and PPAs with rates from 3.99%. Start saving from month one. Pre-qualify with no credit impact.',
      keywords: ['solar financing', 'solar loans', '$0 down solar', 'solar lease', 'solar ppa'],
    },
  },
  // ---- Commercial ----------------------------------------------------------
  {
    slug: 'commercial-solar',
    title: 'Commercial Solar Systems',
    menuTitle: 'Commercial Solar Systems',
    category: 'commercial',
    icon: 'building',
    tagline: 'Turn rooftops into profit centers',
    excerpt:
      'Scalable commercial solar that protects your business from rising demand charges and delivers fast, bankable ROI.',
    heroImage: '/images/services/commercial-solar-systems.jpg',
    heroAlt: 'Large commercial solar array on a flat business rooftop',
    intro:
      'For businesses, energy is one of the few controllable line items left. Our commercial team delivers bankable solar with detailed ROI modeling, MACRS depreciation analysis and turnkey project management.',
    features: [
      { title: 'Bankable ROI Models', description: 'Detailed pro-formas with IRR & payback.', icon: 'trending-up' },
      { title: 'MACRS + Tax Credit', description: 'Stack 30% ITC with accelerated depreciation.', icon: 'award' },
      { title: 'Demand-Charge Control', description: 'Pair with storage to crush peak charges.', icon: 'bolt' },
      { title: 'Turnkey Delivery', description: 'Single point of contact, on-time & on-budget.', icon: 'check-circle' },
    ],
    benefits: ['Reduce operating expenses', 'Hedge against utility rate hikes', 'Meet ESG & sustainability goals', 'Accelerated depreciation benefits'],
    faqIds: ['commercial-roi', 'financing', 'timeline'],
    seo: {
      metaTitle: 'Commercial Solar Systems for Business | Apex Solar',
      metaDescription:
        'Scalable commercial solar with bankable ROI, MACRS depreciation and demand-charge control. Cut operating costs and hit your ESG targets. Request a feasibility study.',
      keywords: ['commercial solar', 'business solar', 'commercial solar systems', 'solar for business'],
    },
  },
  {
    slug: 'warehouse-solar',
    title: 'Warehouse & Distribution Solar',
    menuTitle: 'Warehouse Solar',
    category: 'commercial',
    icon: 'factory',
    tagline: 'Monetize acres of flat roof',
    excerpt:
      'Large-format rooftop and carport solar engineered for warehouses, logistics hubs and distribution centers.',
    heroImage: '/images/services/warehouse-solar.jpg',
    heroAlt: 'Solar panels covering a large warehouse rooftop',
    intro:
      'Distribution centers sit on some of the most valuable solar real estate in the country. We engineer high-density arrays that turn idle roof space into a decades-long energy asset.',
    features: [
      { title: 'High-Density Arrays', description: 'Maximum kW per square foot of roof.', icon: 'grid' },
      { title: 'Structural Analysis', description: 'PE-stamped load studies for older roofs.', icon: 'shield' },
      { title: 'Cold-Storage Ready', description: 'Offset 24/7 refrigeration loads.', icon: 'battery' },
      { title: 'Fleet EV Integration', description: 'Power electric delivery fleets on-site.', icon: 'car' },
    ],
    benefits: ['Monetize unused roof space', 'Offset heavy refrigeration loads', 'Power on-site EV fleets', 'Multi-site rollout programs'],
    faqIds: ['commercial-roi', 'timeline'],
    seo: {
      metaTitle: 'Warehouse & Distribution Center Solar | Apex Solar',
      metaDescription:
        'High-density warehouse solar that turns acres of flat roof into clean energy and savings. Structural analysis, cold-storage offset and fleet EV integration.',
      keywords: ['warehouse solar', 'distribution center solar', 'logistics solar', 'commercial rooftop solar'],
    },
  },
  {
    slug: 'industrial-solar',
    title: 'Industrial & Manufacturing Solar',
    menuTitle: 'Industrial Solar',
    category: 'commercial',
    icon: 'factory',
    tagline: 'Power heavy loads at utility scale',
    excerpt:
      'Megawatt-scale solar and microgrids for manufacturing plants, processing facilities and industrial campuses.',
    heroImage: '/images/services/industrial-solar.jpg',
    heroAlt: 'Industrial-scale ground-mount solar field beside a manufacturing plant',
    intro:
      'Manufacturing runs on reliable, affordable power. We deliver utility-scale ground-mount, rooftop and microgrid solutions that protect production uptime and decarbonize your operations.',
    features: [
      { title: 'Megawatt Scale', description: 'Ground-mount & rooftop systems sized to load.', icon: 'factory' },
      { title: 'Microgrid Capable', description: 'Islanding & resilience for critical processes.', icon: 'grid' },
      { title: 'Power Factor Tuning', description: 'Smart inverters that improve grid quality.', icon: 'bolt' },
      { title: 'PPA Financing', description: 'Off-balance-sheet options for capex relief.', icon: 'dollar' },
    ],
    benefits: ['Protect production uptime', 'Decarbonize operations', 'Utility-scale cost reductions', 'Microgrid resilience'],
    faqIds: ['commercial-roi', 'financing'],
    seo: {
      metaTitle: 'Industrial & Manufacturing Solar Solutions | Apex Solar',
      metaDescription:
        'Megawatt-scale industrial solar and microgrids for manufacturing and processing facilities. Protect uptime, cut costs and decarbonize at scale.',
      keywords: ['industrial solar', 'manufacturing solar', 'solar microgrid', 'utility scale solar'],
    },
  },
  // ---- Storage -------------------------------------------------------------
  {
    slug: 'solar-battery-storage',
    title: 'Solar Battery Storage',
    menuTitle: 'Battery Installation',
    category: 'storage',
    icon: 'battery',
    tagline: 'Keep the lights on, day or night',
    excerpt:
      'Whole-home and commercial battery storage that banks daytime solar for night, outages and peak-rate avoidance.',
    heroImage: '/images/services/solar-battery-storage.jpg',
    heroAlt: 'Sleek home battery storage units mounted in a garage',
    intro:
      'Solar makes power; storage makes it yours around the clock. Our battery systems bank surplus daytime energy so you stay powered through outages and dodge expensive peak-rate windows.',
    features: [
      { title: 'Whole-Home Backup', description: 'Run your essentials — or your whole house.', icon: 'home' },
      { title: 'Stackable Capacity', description: 'Add modules as your needs grow.', icon: 'battery' },
      { title: 'Time-of-Use Savings', description: 'Auto-shift usage away from peak pricing.', icon: 'clock' },
      { title: 'Storm-Ready', description: 'Seamless switchover in under a second.', icon: 'shield' },
    ],
    benefits: ['Backup power during outages', 'Avoid expensive peak rates', 'Store excess solar production', 'Qualify for storage incentives'],
    faqIds: ['battery-backup', 'battery-cost', 'tax-credit'],
    seo: {
      metaTitle: 'Solar Battery Storage & Whole-Home Backup | Apex Solar',
      metaDescription:
        'Whole-home solar battery storage for backup power and peak-rate avoidance. Stackable capacity, storm-ready switchover and storage tax-credit eligible.',
      keywords: ['solar battery storage', 'home battery backup', 'energy storage', 'whole home backup'],
    },
  },
  {
    slug: 'whole-home-backup',
    title: 'Whole-Home Backup Power',
    menuTitle: 'Whole Home Backup',
    category: 'storage',
    icon: 'shield',
    tagline: 'Never lose power again',
    excerpt:
      'Multi-battery backup systems that power your entire home through extended outages — silently and automatically.',
    heroImage: '/images/services/whole-home-backup.jpg',
    heroAlt: 'Family home lit during a neighborhood power outage',
    intro:
      'When the grid goes down, your home shouldn’t. We design multi-battery backup systems that carry your full load — HVAC, well pump, refrigeration — for days, not hours.',
    features: [
      { title: 'Full-Load Capacity', description: 'Size to run AC, well pumps and more.', icon: 'home' },
      { title: 'Automatic Transfer', description: 'Switchover faster than you can blink.', icon: 'bolt' },
      { title: 'Silent Operation', description: 'No fumes, no noise — unlike a generator.', icon: 'leaf' },
      { title: 'Solar Recharge', description: 'Re-fill batteries from the sun each day.', icon: 'sun' },
    ],
    benefits: ['Days of backup, not hours', 'Silent & emissions-free', 'No fuel to store or refill', 'Recharges from your solar'],
    faqIds: ['battery-backup', 'battery-cost'],
    seo: {
      metaTitle: 'Whole-Home Backup Power Systems | Apex Solar',
      metaDescription:
        'Whole-home battery backup that powers your entire house through extended outages — silent, automatic and recharged by solar. Get a backup assessment.',
      keywords: ['whole home backup', 'home backup power', 'battery backup system', 'solar generator alternative'],
    },
  },
  // ---- Specialty -----------------------------------------------------------
  {
    slug: 'ev-charging',
    title: 'EV Charger Installation',
    menuTitle: 'EV Charger Installation',
    category: 'specialty',
    icon: 'car',
    tagline: 'Charge on sunshine at home',
    excerpt:
      'Level-2 home and commercial EV chargers, solar-integrated so you fuel your vehicle on clean, free energy.',
    heroImage: '/images/services/ev-charger-installation.jpg',
    heroAlt: 'Electric vehicle charging from a home wall charger beside solar panels',
    intro:
      'Pair your EV with solar and your fuel becomes free. We install Level-2 home chargers and commercial charging stations, fully integrated with your solar and storage.',
    features: [
      { title: 'Solar-Integrated', description: 'Charge directly from your own panels.', icon: 'sun' },
      { title: 'Level-2 Speed', description: 'Full charge overnight, every night.', icon: 'bolt' },
      { title: 'Smart Scheduling', description: 'Charge during cheapest, greenest hours.', icon: 'clock' },
      { title: 'Commercial Stations', description: 'Workplace & fleet charging networks.', icon: 'plug' },
    ],
    benefits: ['Fuel your car on sunshine', 'Overnight full charges', 'Smart off-peak scheduling', 'Home & commercial options'],
    faqIds: ['ev-charging', 'cost'],
    seo: {
      metaTitle: 'EV Charger Installation — Home & Commercial | Apex Solar',
      metaDescription:
        'Solar-integrated Level-2 EV charger installation for home and business. Charge your vehicle on free, clean energy with smart off-peak scheduling.',
      keywords: ['ev charger installation', 'home ev charger', 'level 2 charger', 'solar ev charging'],
    },
  },
  {
    slug: 'agricultural-solar',
    title: 'Agricultural & Agrivoltaic Solar',
    menuTitle: 'Agricultural Solar',
    category: 'specialty',
    icon: 'leaf',
    tagline: 'Harvest crops and kilowatts',
    excerpt:
      'Farm-scale solar, agrivoltaics and irrigation power that cut input costs and create new revenue from your land.',
    heroImage: '/images/services/agricultural-solar.jpg',
    heroAlt: 'Solar panels mounted above farmland with crops growing beneath',
    intro:
      'Farms run on energy — for irrigation, processing and cold storage. Our agricultural solar and agrivoltaic systems lower input costs and turn acreage into a dependable second harvest.',
    features: [
      { title: 'Irrigation Power', description: 'Run pumps and pivots on solar.', icon: 'sun' },
      { title: 'Agrivoltaics', description: 'Grow crops & graze beneath the panels.', icon: 'leaf' },
      { title: 'USDA REAP Grants', description: 'We handle the grant paperwork for you.', icon: 'award' },
      { title: 'Ground & Roof Mount', description: 'Barns, pole barns and open fields.', icon: 'grid' },
    ],
    benefits: ['Lower irrigation & cold-storage costs', 'USDA REAP grant assistance', 'Dual-use agrivoltaic land', 'New revenue stream'],
    faqIds: ['agricultural', 'financing'],
    seo: {
      metaTitle: 'Agricultural Solar & Agrivoltaics for Farms | Apex Solar',
      metaDescription:
        'Farm-scale agricultural solar and agrivoltaics that cut irrigation and cold-storage costs. USDA REAP grant assistance and dual-use land design.',
      keywords: ['agricultural solar', 'farm solar', 'agrivoltaics', 'usda reap solar'],
    },
  },
  {
    slug: 'solar-roofing',
    title: 'Solar Roofing',
    menuTitle: 'Solar Roofing',
    category: 'specialty',
    icon: 'roof',
    tagline: 'A roof that pays you back',
    excerpt:
      'Integrated solar roofing and roof-replacement bundles that combine a premium new roof with built-in solar.',
    heroImage: '/images/services/solar-roofing.jpg',
    heroAlt: 'Modern home with integrated solar roof shingles',
    intro:
      'Need a new roof anyway? Bundle it with solar. We install solar shingles and roof-plus-solar packages so you get a beautiful, weather-tight roof that generates power for decades.',
    features: [
      { title: 'Roof + Solar Bundle', description: 'One crew, one warranty, one timeline.', icon: 'roof' },
      { title: 'Integrated Shingles', description: 'Sleek, low-profile solar roofing.', icon: 'sun' },
      { title: 'Single Warranty', description: 'Roof and solar covered together.', icon: 'shield' },
      { title: 'Tax-Credit Eligible', description: 'Qualifying solar roof costs count.', icon: 'award' },
    ],
    benefits: ['New roof + solar in one project', 'Sleek integrated aesthetics', 'One unified warranty', 'Boost curb appeal & value'],
    faqIds: ['roof-types', 'warranty', 'tax-credit'],
    seo: {
      metaTitle: 'Solar Roofing & Roof Replacement Bundles | Apex Solar',
      metaDescription:
        'Integrated solar roofing and roof-plus-solar bundles — a premium new roof with built-in power generation, one crew and one warranty.',
      keywords: ['solar roofing', 'solar shingles', 'solar roof replacement', 'integrated solar roof'],
    },
  },
  {
    slug: 'community-solar',
    title: 'Community Solar',
    menuTitle: 'Community Solar',
    category: 'specialty',
    icon: 'users',
    tagline: 'Go solar without panels on your roof',
    excerpt:
      'Subscribe to a local solar farm and earn utility-bill credits — perfect for renters and shaded roofs.',
    heroImage: '/images/services/community-solar.jpg',
    heroAlt: 'Community solar farm in an open field serving local subscribers',
    intro:
      'Can’t put solar on your own roof? Subscribe to a shared community solar farm instead. You earn credits on your utility bill for your share of the clean power produced — no installation required.',
    features: [
      { title: 'No Installation', description: 'Subscribe without touching your roof.', icon: 'check-circle' },
      { title: 'Bill Credits', description: 'Earn monthly credits from your share.', icon: 'dollar' },
      { title: 'Renter-Friendly', description: 'Ideal for apartments & shaded homes.', icon: 'users' },
      { title: 'Cancel Anytime', description: 'Flexible, no-lien subscriptions.', icon: 'leaf' },
    ],
    benefits: ['No rooftop required', 'Great for renters', 'Monthly utility-bill credits', 'Flexible subscriptions'],
    faqIds: ['community-solar', 'financing'],
    seo: {
      metaTitle: 'Community Solar Subscriptions | Apex Solar',
      metaDescription:
        'Join a local community solar farm and earn utility-bill credits without installing panels. Perfect for renters and shaded roofs. Check availability.',
      keywords: ['community solar', 'shared solar', 'solar subscription', 'community solar farm'],
    },
  },
  {
    slug: 'off-grid-solar',
    title: 'Off-Grid Solar Systems',
    menuTitle: 'Off Grid Solar',
    category: 'specialty',
    icon: 'grid',
    tagline: 'Total energy independence',
    excerpt:
      'Self-sufficient off-grid solar and battery systems for cabins, remote properties and energy independence.',
    heroImage: '/images/services/off-grid-solar.jpg',
    heroAlt: 'Off-grid cabin powered entirely by a solar and battery system',
    intro:
      'For remote cabins, ranches and anyone seeking true independence, we design complete off-grid systems — solar, storage and backup — engineered to carry your full load all year round.',
    features: [
      { title: 'Full Independence', description: 'Generate & store all your own power.', icon: 'sun' },
      { title: 'Oversized Storage', description: 'Days of autonomy through cloudy spells.', icon: 'battery' },
      { title: 'Generator Backup', description: 'Optional auto-start backup integration.', icon: 'bolt' },
      { title: 'Remote Monitoring', description: 'Watch your system from anywhere.', icon: 'monitor' },
    ],
    benefits: ['No utility bill, ever', 'Power remote properties', 'Days of battery autonomy', 'Optional generator backup'],
    faqIds: ['battery-backup', 'cost'],
    seo: {
      metaTitle: 'Off-Grid Solar Systems for Remote Properties | Apex Solar',
      metaDescription:
        'Complete off-grid solar and battery systems for cabins, ranches and remote homes. True energy independence with days of battery autonomy.',
      keywords: ['off grid solar', 'off grid solar system', 'cabin solar', 'remote solar power'],
    },
  },
  // ---- Support -------------------------------------------------------------
  {
    slug: 'solar-repair',
    title: 'Solar Repair Services',
    menuTitle: 'Solar Repairs',
    category: 'support',
    icon: 'wrench',
    tagline: 'Get your system producing again',
    excerpt:
      'Fast diagnostics and repair for underperforming or offline solar systems — any brand, any installer.',
    heroImage: '/images/services/solar-repair.jpg',
    heroAlt: 'Technician diagnosing a rooftop solar inverter',
    intro:
      'A solar system that isn’t producing is costing you money. Our service techs diagnose and repair any brand — even systems we didn’t install — to restore full production fast.',
    features: [
      { title: 'Any Brand', description: 'We service systems from any installer.', icon: 'wrench' },
      { title: 'Inverter Repair', description: 'Replace or repair failing inverters.', icon: 'bolt' },
      { title: 'Production Recovery', description: 'Find & fix what’s dragging output.', icon: 'trending-up' },
      { title: 'Rapid Dispatch', description: 'Priority scheduling for dead systems.', icon: 'clock' },
    ],
    benefits: ['Service for any brand', 'Restore lost production', 'Inverter & wiring repair', 'Priority dispatch'],
    faqIds: ['repair', 'warranty'],
    seo: {
      metaTitle: 'Solar Repair Services — Any Brand | Apex Solar',
      metaDescription:
        'Fast solar repair and diagnostics for underperforming or offline systems — any brand, any installer. Restore lost production. Book a service call.',
      keywords: ['solar repair', 'solar panel repair', 'inverter repair', 'solar system not working'],
    },
  },
  {
    slug: 'solar-inspection',
    title: 'Solar Inspection & Tune-Up',
    menuTitle: 'Solar Inspection',
    category: 'support',
    icon: 'search',
    tagline: 'Verify your system is healthy',
    excerpt:
      'Comprehensive multi-point inspections that catch underperformance, safety issues and warranty problems early.',
    heroImage: '/images/services/solar-inspection.jpg',
    heroAlt: 'Inspector reviewing a solar array with a thermal camera',
    intro:
      'A solar system can quietly underperform for years. Our multi-point inspection — including thermal imaging — verifies every panel, connection and inverter is performing as it should.',
    features: [
      { title: 'Thermal Imaging', description: 'Spot hot spots & failing cells.', icon: 'search' },
      { title: 'Production Audit', description: 'Compare actual vs. expected output.', icon: 'trending-up' },
      { title: 'Safety Check', description: 'Wiring, grounding & connector review.', icon: 'shield' },
      { title: 'Report & Plan', description: 'Clear findings and next steps.', icon: 'check-circle' },
    ],
    benefits: ['Catch problems early', 'Verify warranty compliance', 'Maximize production', 'Detailed inspection report'],
    faqIds: ['repair', 'maintenance'],
    seo: {
      metaTitle: 'Solar Inspection & System Tune-Up | Apex Solar',
      metaDescription:
        'Comprehensive solar inspection with thermal imaging and production audit. Catch underperformance and safety issues early. Schedule an inspection.',
      keywords: ['solar inspection', 'solar tune up', 'solar thermal imaging', 'solar system audit'],
    },
  },
  {
    slug: 'solar-panel-cleaning',
    title: 'Solar Panel Cleaning',
    menuTitle: 'Panel Cleaning',
    category: 'support',
    icon: 'sparkles',
    tagline: 'Recover lost output from dirt',
    excerpt:
      'Professional, scratch-free panel cleaning that recovers the production dust, pollen and bird debris steal away.',
    heroImage: '/images/services/solar-panel-cleaning.jpg',
    heroAlt: 'Technician cleaning rooftop solar panels with purified water',
    intro:
      'Dirty panels can lose 15–25% of their output. Our deionized-water cleaning process safely removes dust, pollen and debris — no scratches, no harsh chemicals — to restore peak production.',
    features: [
      { title: 'Deionized Water', description: 'Spot-free, residue-free cleaning.', icon: 'sparkles' },
      { title: 'No Scratches', description: 'Soft brushes safe for any panel.', icon: 'shield' },
      { title: 'Output Recovery', description: 'Reclaim up to 25% lost production.', icon: 'trending-up' },
      { title: 'Scheduled Plans', description: 'Set-and-forget seasonal cleanings.', icon: 'clock' },
    ],
    benefits: ['Recover up to 25% output', 'Scratch-free, chemical-free', 'Extend panel lifespan', 'Seasonal cleaning plans'],
    faqIds: ['cleaning', 'maintenance'],
    seo: {
      metaTitle: 'Professional Solar Panel Cleaning | Apex Solar',
      metaDescription:
        'Scratch-free professional solar panel cleaning with deionized water. Recover up to 25% of lost production from dust and debris. Book a cleaning.',
      keywords: ['solar panel cleaning', 'solar cleaning service', 'clean solar panels', 'solar maintenance'],
    },
  },
  {
    slug: 'monitoring-maintenance',
    title: 'Monitoring & Maintenance Plans',
    menuTitle: 'Monitoring Services',
    category: 'support',
    icon: 'monitor',
    tagline: 'Hands-off peace of mind',
    excerpt:
      '24/7 production monitoring and proactive maintenance plans that keep your system at peak output for life.',
    heroImage: '/images/services/monitoring-maintenance.jpg',
    heroAlt: 'Solar production monitoring dashboard on a laptop screen',
    intro:
      'The best maintenance is the kind you never have to think about. Our monitoring plans watch your production around the clock and dispatch a tech before a small issue becomes a costly one.',
    features: [
      { title: '24/7 Monitoring', description: 'We watch your output continuously.', icon: 'monitor' },
      { title: 'Proactive Alerts', description: 'We call you before you notice a dip.', icon: 'bolt' },
      { title: 'Annual Service', description: 'Scheduled inspections & cleanings.', icon: 'wrench' },
      { title: 'Priority Support', description: 'Front-of-line repair scheduling.', icon: 'shield' },
    ],
    benefits: ['24/7 production monitoring', 'Proactive issue detection', 'Annual inspection included', 'Priority repair scheduling'],
    faqIds: ['maintenance', 'repair'],
    seo: {
      metaTitle: 'Solar Monitoring & Maintenance Plans | Apex Solar',
      metaDescription:
        '24/7 solar monitoring and proactive maintenance plans that keep your system at peak output. Annual service and priority support included.',
      keywords: ['solar monitoring', 'solar maintenance plan', 'solar maintenance service', 'solar system monitoring'],
    },
  },
];

// Helpers ---------------------------------------------------------------------
export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const servicesByCategory = (cat: ServiceCategory) =>
  services.filter((s) => s.category === cat);

export const featuredServices = services.filter((s) =>
  ['residential-solar', 'commercial-solar', 'solar-battery-storage', 'ev-charging', 'solar-roofing', 'solar-panel-cleaning'].includes(s.slug),
);
