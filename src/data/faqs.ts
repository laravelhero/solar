// FAQ bank. Entries are referenced by id from services, locations and the
// FAQ page, and feed FAQPage schema markup.
export interface Faq {
  id: string;
  question: string;
  answer: string;
  /** grouping for the /faq page */
  topic: 'general' | 'cost' | 'install' | 'service' | 'storage' | 'incentives';
}

export const faqs: Faq[] = [
  {
    id: 'cost',
    topic: 'cost',
    question: 'How much does a solar system cost?',
    answer:
      'Most residential systems range from $15,000 to $30,000 before incentives, depending on system size and your roof. With the 30% federal tax credit and $0-down financing, the vast majority of homeowners pay less per month than their current electric bill from day one.',
  },
  {
    id: 'financing',
    topic: 'cost',
    question: 'Can I go solar with no money down?',
    answer:
      'Yes. We offer $0-down solar loans with fixed rates starting around 3.99%, as well as leases and power purchase agreements (PPAs). With most plans your monthly payment is lower than the utility bill it replaces, so you save from month one.',
  },
  {
    id: 'tax-credit',
    topic: 'incentives',
    question: 'How does the 30% federal solar tax credit work?',
    answer:
      'The federal Residential Clean Energy Credit lets you claim 30% of your total solar and battery system cost as a credit against your federal income taxes for the year the system is installed. Apex Solar provides all the documentation your tax preparer needs.',
  },
  {
    id: 'timeline',
    topic: 'install',
    question: 'How long does installation take?',
    answer:
      'The physical installation is usually completed in a single day for homes. The full timeline — from contract through design, permitting, installation and utility approval — typically runs 6 to 12 weeks, most of which is permitting and utility interconnection.',
  },
  {
    id: 'roof-types',
    topic: 'install',
    question: 'Will solar work on my roof?',
    answer:
      'We install on virtually every roof type — asphalt shingle, tile, metal and flat membrane — as well as ground mounts and carports. During your free assessment we evaluate orientation, shading and structural condition, and can bundle a roof replacement if needed.',
  },
  {
    id: 'warranty',
    topic: 'service',
    question: 'What warranties come with my system?',
    answer:
      'Your system is protected by a 25-year production warranty, a 25-year product warranty on panels, and a 10–25 year workmanship warranty covering the installation and roof penetrations. We also back our work with a leak-free guarantee.',
  },
  {
    id: 'battery-backup',
    topic: 'storage',
    question: 'Do I need a battery to keep power during an outage?',
    answer:
      'Yes. Standard grid-tied solar shuts off during an outage for safety. Adding battery storage lets your system island and keep your home powered when the grid goes down, while recharging from your panels each day.',
  },
  {
    id: 'battery-cost',
    topic: 'storage',
    question: 'How much does battery storage add?',
    answer:
      'A single whole-home battery typically adds $9,000–$15,000 installed, and capacity is stackable for larger backup needs. Batteries paired with solar are eligible for the same 30% federal tax credit, and many states add their own storage incentives.',
  },
  {
    id: 'commercial-roi',
    topic: 'cost',
    question: 'What kind of ROI can a business expect?',
    answer:
      'Commercial solar typically delivers a 4–7 year payback and a 12–25% internal rate of return once you stack the 30% federal Investment Tax Credit with MACRS accelerated depreciation. We provide a detailed, bankable pro-forma before you commit.',
  },
  {
    id: 'ev-charging',
    topic: 'general',
    question: 'Can I charge my EV with solar?',
    answer:
      'Absolutely. We install Level-2 home chargers integrated with your solar and storage, so you can charge your vehicle on your own clean power. Smart scheduling lets you charge during the cheapest, sunniest hours of the day.',
  },
  {
    id: 'agricultural',
    topic: 'general',
    question: 'Are there grants for farm solar?',
    answer:
      'Yes. The USDA Rural Energy for America Program (REAP) provides grants covering up to 50% of agricultural solar project costs, which can be stacked with the federal tax credit. We handle the REAP application paperwork on your behalf.',
  },
  {
    id: 'community-solar',
    topic: 'general',
    question: 'What is community solar?',
    answer:
      'Community solar lets you subscribe to a share of a local solar farm and receive credits on your utility bill — without installing anything on your roof. It is ideal for renters, condo owners and homes with shaded or unsuitable roofs.',
  },
  {
    id: 'repair',
    topic: 'service',
    question: 'Do you repair systems you didn’t install?',
    answer:
      'Yes. Our service team repairs and tunes up solar systems from any installer and any equipment brand. If your system is offline or underperforming, we diagnose the issue and restore production — even if the original installer is gone.',
  },
  {
    id: 'cleaning',
    topic: 'service',
    question: 'How often should panels be cleaned?',
    answer:
      'Most systems benefit from professional cleaning once or twice a year, more often in dusty, high-pollen or agricultural areas. Dirty panels can lose 15–25% of their output, so regular cleaning quickly pays for itself in recovered production.',
  },
  {
    id: 'maintenance',
    topic: 'service',
    question: 'Does solar require much maintenance?',
    answer:
      'Solar is remarkably low-maintenance — there are no moving parts. We recommend an annual inspection and periodic cleaning, and our monitoring plans watch your production 24/7 so issues are caught early, often before you’d ever notice them.',
  },
];

export const getFaqs = (ids: string[] = []) =>
  ids.map((id) => faqs.find((f) => f.id === id)).filter(Boolean) as Faq[];

export const homeFaqs = getFaqs([
  'cost',
  'financing',
  'tax-credit',
  'timeline',
  'battery-backup',
  'warranty',
]);
